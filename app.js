// =====================
// 表示用理由プール
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
// 判定処理
// =====================
document.getElementById("checkBtn").addEventListener("click", () => {
  const text = document.getElementById("textInput").value.trim();
  if (!text) return;

  const { ai, human } = analyzeText(text);

  let aiScore = 50 + ai - human;
  aiScore = Math.max(5, Math.min(95, aiScore));
  const humanScore = 100 - aiScore;

  document.getElementById("aiScore").textContent = aiScore;
  document.getElementById("humanScore").textContent = humanScore;

  const aiBlock = document.getElementById("aiBlock");
  const humanBlock = document.getElementById("humanBlock");

  document.getElementById("aiReasons").innerHTML = "";
  document.getElementById("humanReasons").innerHTML = "";

  if (aiScore >= humanScore) {
    aiBlock.style.display = "block";
    humanBlock.style.display = "none";
    showTop3("aiReasons", AI_REASONS);
  } else {
    aiBlock.style.display = "none";
    humanBlock.style.display = "block";
    showTop3("humanReasons", HUMAN_REASONS);
  }

  document.getElementById("result").classList.remove("hidden");
});

// =====================
// 文章解析（安全版）
// =====================
function analyzeText(text) {
  const sentences = text.split("。").filter(Boolean);
  const lengths = sentences.map(s => s.length);
  const avg =
    lengths.reduce((a, b) => a + b, 0) / Math.max(lengths.length, 1);

  const variance =
    lengths.reduce((sum, l) => sum + Math.pow(l - avg, 2), 0) /
    Math.max(lengths.length, 1);

  const connectors = ["しかし", "また", "一方で", "つまり"];
  const subjective = ["私は", "思う", "感じる"];
  const vague = ["たぶん", "かもしれない"];
  const casual = ["ちょっと", "なんか"];

  let ai = 0;
  let human = 0;

  // 文長とばらつき
  if (avg > 40) ai += 8;
  if (variance > 300) human += 10;
  else ai += 4;

  // 接続詞
  connectors.forEach(w => {
    if (text.includes(w)) ai += 4;
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
function showTop3(targetId, pool) {
  const ul = document.getElementById(targetId);
  const selected = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
  selected.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });
}

// =====================
// クリア
// =====================
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("textInput").value = "";
  document.getElementById("result").classList.add("hidden");
  document.getElementById("aiBlock").style.display = "none";
  document.getElementById("humanBlock").style.display = "none";
});
