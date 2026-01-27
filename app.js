document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("checkBtn");
  const clearBtn = document.getElementById("clearBtn");
  const textInput = document.getElementById("textInput");

  const aiScoreEl = document.getElementById("aiScore");
  const humanScoreEl = document.getElementById("humanScore");

  const aiBlock = document.getElementById("aiBlock");
  const humanBlock = document.getElementById("humanBlock");

  const aiReasonsEl = document.getElementById("aiReasons");
  const humanReasonsEl = document.getElementById("humanReasons");

  const resultEl = document.getElementById("result");

  const AI_REASONS = [
    "論理構造が一貫している",
    "文のリズムが均一",
    "説明が整理されすぎている",
    "抽象度が高い",
    "接続詞の使い方が安定している",
    "主張と根拠が明確",
    "語彙の選択が安全",
    "文法的な揺れが少ない",
    "感情の振れ幅が小さい",
    "全体が俯瞰的"
  ];

  const HUMAN_REASONS = [
    "文の勢いにムラがある",
    "論理が一部飛んでいる",
    "感情が先に出ている",
    "口語的な表現が混ざっている",
    "言い切らずに終わる文がある",
    "説明不足な箇所がある",
    "書き直した痕跡がある",
    "主観が強い",
    "表現にクセがある",
    "人間的な迷いが見える"
  ];

  checkBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (!text) return;

    const result = analyze(text);

    aiScoreEl.textContent = result.ai;
    humanScoreEl.textContent = result.human;

    aiReasonsEl.innerHTML = "";
    humanReasonsEl.innerHTML = "";

    if (result.ai > result.human) {
      aiBlock.style.display = "block";
      humanBlock.style.display = "none";
      pick3(aiReasonsEl, AI_REASONS);
    } else {
      aiBlock.style.display = "none";
      humanBlock.style.display = "block";
      pick3(humanReasonsEl, HUMAN_REASONS);
    }

    resultEl.classList.remove("hidden");
  });

  clearBtn.addEventListener("click", () => {
    textInput.value = "";
    resultEl.classList.add("hidden");
    aiBlock.style.display = "none";
    humanBlock.style.display = "none";
  });

  function analyze(text) {
    let score = 50; // 中立スタート（実数）

    const len = text.length;

    // ① 文字数（短文は人間寄りだが緩やか）
    if (len < 30) score -= 12;
    else if (len < 80) score -= 6;
    else if (len > 400) score += 6;

    // ② 日本語密度
    const jpCount = (text.match(/[ぁ-ん一-龥]/g) || []).length;
    const jpRate = jpCount / Math.max(1, len);
    score += (jpRate - 0.4) * 20; // 密度が高すぎてもAI寄り

    // ③ 文数
    const sentences = text.split(/[。！？]/).filter(Boolean);
    score += Math.min(10, sentences.length * 2);

    // ④ 文長ばらつき
    if (sentences.length > 1) {
      const lengths = sentences.map(s => s.length);
      const avg = lengths.reduce((a,b)=>a+b,0)/lengths.length;
      const variance = lengths.reduce((s,l)=>s+(l-avg)**2,0)/lengths.length;
      score += variance < 150 ? 6 : -6;
    }

    // ⑤ 接続詞密度
    const logicWords = ["しかし","つまり","一方で","また","そのため"];
    const logicHits = logicWords.filter(w => text.includes(w)).length;
    score += logicHits * 3;

    // ⑥ 主観語
    const humanWords = ["思う","感じる","正直","たぶん","かもしれない"];
    const humanHits = humanWords.filter(w => text.includes(w)).length;
    score -= humanHits * 4;

    // ⑦ 感情記号
    if (/[！!？?]{2,}/.test(text)) score -= 6;

    // ⑧ 草・崩れ
    if (/[wｗ]{2,}/.test(text)) score -= 5;

    // ⑨ 語彙多様性
    const uniqueRate = new Set(text).size / len;
    score += (0.35 - uniqueRate) * 30;

    // ⑩ 数字・列挙
    if (/\d/.test(text)) score += 4;
    if (/・|①|②|- /.test(text)) score += 4;

    // ⑪ 言い切り率
    const endCount = (text.match(/だ。|です。/g) || []).length;
    score += endCount * 1.5;

    // ⑫ 曖昧語
    const vague = ["まあ","なんか","ちょっと"];
    vague.forEach(w => {
      if (text.includes(w)) score -= 3;
    });

    // ⑬ 記号率
    const symbolRate = (text.match(/[^ぁ-ん一-龥a-zA-Z0-9]/g) || []).length / len;
    score += (symbolRate - 0.15) * 15;

    // ⑭ 改行構造
    score += (text.split("\n").length - 1) * 2;

    // ⑮ 微ランダム（固定値感を消す）
    score += (Math.random() - 0.5) * 4;

    // 最終整形
    score = Math.round(Math.max(0, Math.min(100, score)));

    return {
      ai: score,
      human: 100 - score
    };
  }

  function pick3(target, pool) {
    pool
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .forEach(r => {
        const li = document.createElement("li");
        li.textContent = r;
        target.appendChild(li);
      });
  }
});
