

document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // DOM取得
  // ===============================
  const textInput = document.getElementById("textInput");
  const checkBtn = document.getElementById("checkBtn");
  const clearBtn = document.getElementById("clearBtn");

  const resultEl = document.getElementById("result");
  const aiScoreEl = document.getElementById("aiScore");
  const humanScoreEl = document.getElementById("humanScore");

  const aiBlock = document.getElementById("aiBlock");
  const humanBlock = document.getElementById("humanBlock");

  const aiReasonsEl = document.getElementById("aiReasons");
  const humanReasonsEl = document.getElementById("humanReasons");

  if (!textInput || !checkBtn || !clearBtn) {
    console.error("必須DOMが取得できていません");
    return;
  }

  // ===============================
  // 理由プール（削除なし）
  // ===============================
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
    "全体が俯瞰的",
    "言い切りが多い",
    "冗長な表現が少ない",
    "段落構造が綺麗",
    "論点がブレない",
    "客観的視点が強い",
    "比喩が無難",
    "否定が少ない",
    "結論が早い",
    "情報密度が高い",
    "文章の安全性が高い"
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
    "人間的な迷いが見える",
    "語順が不安定",
    "話し言葉に近い",
    "感情語が多い",
    "一文が長すぎる",
    "余計な一文がある",
    "テンポが不均一",
    "勢い任せ",
    "脱線がある",
    "言葉選びに偏りがある",
    "完成度が一定でない"
  ];

  function pick3(target, pool) {
    target.innerHTML = "";
    pool
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        target.appendChild(li);
      });
  }

  // ===============================
  // 判定ロジック（統合・最終）
  // ===============================
  function analyze(text) {
    const len = text.length;
    let score = 50;

    const jpChars = (text.match(/[ぁ-ん一-龥]/g) || []).length;
    const jpRate = jpChars / Math.max(1, len);
    const particles = (text.match(/は|が|を|に|で|と|も|の/g) || []).length;

    // 判定不能ゾーン
    if (len < 40 || jpRate < 0.25 || jpChars < 12 || particles === 0) {
      const ai = Math.round(5 + Math.random() * 10);
      return { ai, human: 100 - ai };
    }

    // --- 基本ロジック ---
    score += Math.min(12, (len - 80) * 0.04);
    score += (jpRate - 0.45) * 22;

    const sentences = text.split(/[。！？]/).filter(Boolean);
    score += Math.min(14, sentences.length * 2);

    if (sentences.length > 1) {
      const lengths = sentences.map(s => s.length);
      const avg = lengths.reduce((a,b)=>a+b,0) / lengths.length;
      const variance = lengths.reduce((s,l)=>s+(l-avg)**2,0) / lengths.length;
      score += variance < 180 ? 6 : -6;
    }

    ["しかし","つまり","一方で","また","そのため","なお"].forEach(w=>{
      if (text.includes(w)) score += 2;
    });

    ["思う","感じる","正直","たぶん","かもしれない"].forEach(w=>{
      if (text.includes(w)) score -= 3;
    });

    if (/[！!？?]{2,}/.test(text)) score -= 5;
    if (/[wｗ]{2,}/.test(text)) score -= 4;

    const uniqueRate = new Set(text).size / len;
    score += (0.38 - uniqueRate) * 25;

    if (/\d/.test(text)) score += 3;

    const endings = (text.match(/だ。|です。/g) || []).length;
    score += endings * 1.2;

    // --- 人間補正（強化） ---
    if (len < 150) score -= 15;
    if (len < 80) score -= 25;

    if (/思います|感じました|よかった|と思う/.test(text)) score -= 12;
    if (/さん/.test(text)) score -= 18;

    const subjectiveCount =
      (text.match(/思(った|う)|感じ(た|る)|驚|すごい/g) || []).length;
    if (subjectiveCount >= 2) score -= 20;

    if (/映画|作品|感想|見てみたい/.test(text)) score -= 15;

    const selfCount = (text.match(/自分|私は|僕は/g) || []).length;
    if (selfCount >= 2) score -= 10;

    if (/と思った|感じた/.test(text) && !/結論|まとめ|つまり/.test(text)) {
      score -= 15;
    }

    // 微ランダム
    score += (Math.random() - 0.5) * 3;

    score = Math.round(Math.max(0, Math.min(100, score)));
    return { ai: score, human: 100 - score };
  }

  // ===============================
  // イベント
  // ===============================
  checkBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (!text) return;

    const result = analyze(text);
    aiScoreEl.textContent = result.ai;
    humanScoreEl.textContent = result.human;

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
});
