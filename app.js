// =====================
// 理由プール（表示用）
// =====================
const AI_REASONS = [
  "文章構造が論理的に整いすぎている",
  "抽象的な概念が多く使われている",
  "感情表現が少ない",
  "文の長さが均一に近い",
  "接続詞が多用されている",
  "客観的で教科書的な書き方になっている",
  "言い切り表現が多い",
  "読み手を意識しすぎている"
];

const HUMAN_REASONS = [
  "文の長さにばらつきがある",
  "主観的な表現が含まれている",
  "感情がにじむ言葉がある",
  "曖昧な言い回しが使われている",
  "口語的な表現が混ざっている",
  "論理が少し飛んでいる部分がある",
  "一部だけ語気が強い"
];

// =====================
// 判定メイン
// =====================
document.getElementById("checkBtn").addEventListener("click", () => {
  const text = document.getElementById("textInput").value.trim();
  if (!text) return;

  const analysis = analyzeText(text);

  let aiScore = 50;
  let humanScore = 50;

  aiScore += analysis.ai;
  humanScore += analysis.human;

  // 正規化
  aiScore = Math.max(5, Math.min(95, aiScore));
  humanScore = 100 - aiScore;

  document.getElementById("aiScore").textContent = aiScore;
  document.getElementById("humanScore").textContent = humanScore;

  const aiList = document.getElementById("aiReasons");
  const humanList = document.getElementById("humanReasons");
  aiList.innerHTML = "";
  humanList.innerHTML = "";

  if (aiScore >= humanScore) {
    showTopReasons(aiList, AI_REASONS);
    document.querySelector(".ai-title").style.display = "block";
    document.querySelector(".human-title").style.display = "none";
  } else {
    showTopReasons(humanList, HUMAN_REASONS);
    document.querySelector(".ai-title").style.display = "none";
    document.querySelector(".human-title").style.display = "block";
  }

  document.getElementById("result").classList.remove("hidden");
});

// =====================
// 文章解析
// =====================
function analyzeText(text) {
  const sentences = text.split("。").filter(Boolean);
  const sentenceLengths = sentences.map(s => s.length);
  const avgLen = sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;

  const variance =
    sentenceLengths.reduce((sum, len) => sum + Math.pow(len - avgLen, 2), 0) /
    sentenceLengths.length;

  const connectors = ["しかし", "また", "一方で", "つまり"];
  const subjective = ["私は", "思う", "感じる"];
  const vague = ["たぶん", "かもしれない"];
  const casual = ["ちょっと", "なんか"];

  let ai = 0;
  let human = 0;

  // 文長
  if (avgLen > 40) ai += 8;
  if (variance > 300) human += 10;
  else ai += 5;

  // 接続詞
  connectors.forEach(w => {
    if (text.includes(w)) ai += 5;
  });

  // 主観・曖昧・口語
  subjective.forEach(w => {
    if (text.includes(w)) human += 8;
  });
  vague.forEach(w => {
    if (text.includes(w)) human += 6;
  });
  casual.forEach(w => {
    if (text.includes(w)) human += 6;
  });

  return { ai, human };
}

// =====================
// 理由表示
// =====================
function showTopReasons(target, pool) {
  const selected = [...pool]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  selected.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    target.appendChild(li);
  });
}

// =====================
// クリア
// =====================
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("textInput").value = "";
  document.getElementById("result").classList.add("hidden");
});
