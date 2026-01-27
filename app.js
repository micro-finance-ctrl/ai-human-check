// ===== AIっぽい理由（30）=====
const aiReasons = [
  "文体が均一で整いすぎている",
  "結論までの流れがスムーズすぎる",
  "無難な表現が多い",
  "抽象的な言葉が連続している",
  "主語が曖昧でも意味が通る",
  "接続詞が多用されている",
  "教科書的な説明になっている",
  "書き手の立場が見えにくい",
  "迷いや試行錯誤が感じられない",
  "文の長さが揃っている",
  "情報の整理が合理的すぎる",
  "言い切り表現が多い",
  "比喩が一般的で安全",
  "感情表現が少ない",
  "客観性が強すぎる",
  "文法ミスがほぼない",
  "展開が予想しやすい",
  "説明が過不足なく整っている",
  "読み手を意識しすぎている",
  "一文ずつが独立している",
  "体験談が含まれていない",
  "表現にクセがない",
  "断定が連続している",
  "言葉選びが平均的",
  "構成がきれいすぎる",
  "感情の振れ幅が小さい",
  "文章のリズムが一定",
  "人の気配を感じにくい",
  "論理が感覚より優先されている",
  "全体的に正しすぎる"
];

// ===== 人間っぽい理由（30）=====
const humanReasons = [
  "文の長さにばらつきがある",
  "回りくどい説明が含まれている",
  "主観的な言葉が使われている",
  "言い切らず曖昧な表現がある",
  "感情がにじむ表現がある",
  "一部だけトーンが違う",
  "話の流れが少し脱線している",
  "接続が雑な箇所がある",
  "迷いが文章に出ている",
  "「たぶん」「かもしれない」が使われている",
  "個人的な体験が含まれている",
  "感覚的な説明がある",
  "文法的に少し崩れている",
  "一部だけ語気が強い",
  "自分に向けて書いている感じがある",
  "例えが独特",
  "感情表現が唐突に出てくる",
  "文章のリズムが不規則",
  "情報の順番が最適でない",
  "書き直した痕跡がある",
  "余計に感じる一文がある",
  "表現にクセがある",
  "勢いで書いた感じがある",
  "断定を避けている",
  "人柄が想像できる",
  "論理が少し飛んでいる",
  "感情と言葉がズレている",
  "説明不足な部分がある",
  "完成度より納得感が優先されている",
  "人が書いた引っかかりがある"
];

// ===== 判定 =====
document.getElementById("checkBtn").addEventListener("click", () => {
  const text = document.getElementById("textInput").value.trim();
  if (!text) return;

  const aiScore = Math.floor(Math.random() * 41) + 50; // 50〜90
  const humanScore = 100 - aiScore;

  document.getElementById("aiScore").textContent = aiScore;
  document.getElementById("humanScore").textContent = humanScore;

  showTop3("aiReasons", aiReasons);
  showTop3("humanReasons", humanReasons);

  document.getElementById("result").classList.remove("hidden");
});

// ===== クリア =====
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("textInput").value = "";
  document.getElementById("result").classList.add("hidden");
});

// ===== 上位3つ表示 =====
function showTop3(elementId, pool) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = "";

  const selected = [...pool]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  selected.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
}
