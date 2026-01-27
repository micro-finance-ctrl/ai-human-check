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
    "文章構造が論理的に整いすぎている",
    "抽象的な概念が多く使われている",
    "感情表現が少ない",
    "文の長さが均一に近い",
    "接続詞が多用されている",
    "客観的で教科書的な書き方になっている",
    "言い切り表現が多い",
    "情報の取捨選択が合理的すぎる",
    "主語が省略されても意味が通る",
    "結論までの流れが滑らかすぎる",
    "比喩が一般的で安全",
    "説明が過不足なくまとまっている",
    "読み手を強く意識した構成",
    "迷いや試行錯誤が見えにくい",
    "語彙のトーンが一定",
    "論点が整理されすぎている",
    "文法的な揺れが少ない",
    "否定や弱音が少ない",
    "表現にクセが出にくい",
    "全体として正しすぎる印象"
  ];

  const HUMAN_REASONS = [
    "文の長さにばらつきがある",
    "主観的な表現が含まれている",
    "感情がにじむ言葉がある",
    "曖昧な言い回しが使われている",
    "口語的な表現が混ざっている",
    "論理が少し飛んでいる部分がある",
    "一部だけ語気が強い",
    "回りくどい説明が含まれている",
    "具体的な体験が挟まっている",
    "言い切らずに終わる文がある",
    "接続が雑な箇所がある",
    "文法的に少し崩れている",
    "書き直した痕跡を感じる",
    "勢いで書いた印象がある",
    "表現に個人のクセがある",
    "説明不足な部分がある",
    "余計に感じる一文がある",
    "感情と言葉が完全に一致していない",
    "情報の順番が最適ではない",
    "人柄を想像できる引っかかりがある"
  ];

  checkBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (!text) return;

    const { ai, human } = analyze(text);

    let aiScore = 50 + ai - human;
    aiScore = Math.max(5, Math.min(95, aiScore));
    const humanScore = 100 - aiScore;

    aiScoreEl.textContent = aiScore;
    humanScoreEl.textContent = humanScore;

    aiReasonsEl.innerHTML = "";
    humanReasonsEl.innerHTML = "";

    if (aiScore >= humanScore) {
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
    let ai = 0;
    let human = 0;

    const jpCharCount = (text.match(/[ぁ-ん一-龥]/g) || []).length;
    if (jpCharCount < 5) {
      human += 20;
      return { ai, human };
    }

    if (text.length < 80) {
      human += 15;
    } else if (text.length < 200) {
      human += 5;
    }

    const sentences = text.split("。").filter(Boolean);
    const lengths = sentences.map(s => s.length);
    const avg = lengths.reduce((a, b) => a + b, 0) / Math.max(1, lengths.length);
    const variance =
      lengths.reduce((sum, l) => sum + Math.pow(l - avg, 2), 0) /
      Math.max(1, lengths.length);

    if (avg > 40) ai += 8;
    if (variance > 300) human += 10;
    else ai += 4;

    ["しかし", "また", "一方で", "つまり"].forEach(w => {
      if (text.includes(w)) ai += 4;
    });

    ["私は", "思う", "感じる"].forEach(w => {
      if (text.includes(w)) human += 8;
    });

    ["たぶん", "かもしれない"].forEach(w => {
      if (text.includes(w)) human += 6;
    });

    ["ちょっと", "なんか"].forEach(w => {
      if (text.includes(w)) human += 6;
    });

    return { ai, human };
  }

  function pick3(targetUl, pool) {
    const selected = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
    selected.forEach(r => {
      const li = document.createElement("li");
      li.textContent = r;
      targetUl.appendChild(li);
    });
  }
});
