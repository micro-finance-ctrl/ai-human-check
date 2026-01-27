(function () {
  // =========================
  // 広告データ（※一切削除していません）
  // =========================
  const ADS = [
    { id: "ad01", size: "300x250", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+4RJ5U+3732+60H7L" rel="nofollow" target="_blank"><img width="300" height="250" src="https://www24.a8.net/svt/bgt?aid=260127649008&wid=003&eno=01&mid=s00000014915001010000&mc=1"></a><img width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVFS1+4RJ5U+3732+60H7L">` },
    { id: "ad02", size: "300x250", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+5CYRM+516I+HVNAP" rel="nofollow" target="_blank"><img width="300" height="250" src="https://www20.a8.net/svt/bgt?aid=260127649009&wid=003&eno=01&mid=s00000023481003003000&mc=1"></a><img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVFS1+5CYRM+516I+HVNAP">` },
    { id: "ad03", size: "120x60", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+2BM+2JXG+25FF81" rel="nofollow" target="_blank"><img width="120" height="60" src="https://www20.a8.net/svt/bgt?aid=260127649000&wid=003&eno=01&mid=s00000011914013005000&mc=1"></a><img width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVFS1+2BM+2JXG+25FF81">` },
    { id: "ad04", size: "300x250", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS0+GI6O1U+572Q+5ZMCH" rel="nofollow" target="_blank"><img width="300" height="250" src="https://www20.a8.net/svt/bgt?aid=260127648998&wid=003&eno=01&mid=s00000024245001006000&mc=1"></a><img width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVFS0+GI6O1U+572Q+5ZMCH">` },
    { id: "ad05", size: "300x250", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS0+FRE5TU+3M28+67C4H" rel="nofollow" target="_blank"><img width="300" height="250" src="https://www22.a8.net/svt/bgt?aid=260127648953&wid=003&eno=01&mid=s00000016856001042000&mc=1"></a><img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVFS0+FRE5TU+3M28+67C4H">` },
    { id: "ad06", size: "250x250", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS0+FQSQ82+3TOY+67JU9" rel="nofollow" target="_blank"><img width="250" height="250" src="https://www27.a8.net/svt/bgt?aid=260127648952&wid=003&eno=01&mid=s00000017845001043000&mc=1"></a><img width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4AVFS0+FQSQ82+3TOY+67JU9">` },
    { id: "ad07", size: "468x60",  weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS0+G5OKCI+4EKW+5ZMCH" rel="nofollow" target="_blank"><img width="468" height="60" src="https://www28.a8.net/svt/bgt?aid=260127648977&wid=003&eno=01&mid=s00000020552001006000&mc=1"></a><img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVFS0+G5OKCI+4EKW+5ZMCH">` },
    { id: "ad08", size: "468x60",  weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS0+FUYRGI+4JGG+BXIYP" rel="nofollow" target="_blank"><img width="468" height="60" src="https://www26.a8.net/svt/bgt?aid=260127648959&wid=003&eno=01&mid=s00000021184002004000&mc=1"></a><img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVFS0+FUYRGI+4JGG+BXIYP">` },
    { id: "ad10", size: "468x60", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+ZQ2MA+2GRA+C164X" rel="nofollow" target="_blank"><img width="468" height="60" src="https://www22.a8.net/svt/bgt?aid=260127649060&wid=003&eno=01&mid=s00000011503002021000&mc=1"></a><img width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVFS1+ZQ2MA+2GRA+C164X">` },
    { id: "ad11", size: "300x250", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+11IDFM+3OQ2+5ZMCH" rel="nofollow" target="_blank"><img width="300" height="250" src="https://www29.a8.net/svt/bgt?aid=260127649063&wid=003&eno=01&mid=s00000017201001006000&mc=1"></a><img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVFS1+11IDFM+3OQ2+5ZMCH">` },
    { id: "ad12", size: "300x250", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+10WXTU+551Y+609HT" rel="nofollow" target="_blank"><img width="300" height="250" src="https://www26.a8.net/svt/bgt?aid=260127649062&wid=003&eno=01&mid=s00000023983001009000&mc=1"></a><img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVFS1+10WXTU+551Y+609HT">` },
    { id: "ad13", size: "350x240", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+RZFR6+80W+ZRALD" rel="nofollow" target="_blank"><img width="350" height="240" src="https://www27.a8.net/svt/bgt?aid=260127649047&wid=003&eno=01&mid=s00000001040006006000&mc=1"></a><img width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVFS1+RZFR6+80W+ZRALD">` },
    { id: "ad14", size: "640x100", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+YJ7EQ+2J9U+TX15D" rel="nofollow" target="_blank"><img width="640" height="100" src="https://www20.a8.net/svt/bgt?aid=260127649058&wid=003&eno=01&mid=s00000011829005025000&mc=1"></a><img width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVFS1+YJ7EQ+2J9U+TX15D">` },
    { id: "ad15", size: "468x120", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+W5GZM+2PEO+6O1Z5" rel="nofollow" target="_blank"><img width="468" height="120" src="https://www22.a8.net/svt/bgt?aid=260127649054&wid=003&eno=01&mid=s00000012624001120000&mc=1"></a><img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVFS1+W5GZM+2PEO+6O1Z5">` },
    { id: "ad16", size: "200x200", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+M13PE+2Z0I+NUU7L" rel="nofollow" target="_blank"><img width="200" height="200" src="https://www24.a8.net/svt/bgt?aid=260127649037&wid=003&eno=01&mid=s00000013869004007000&mc=1"></a><img width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVFS1+M13PE+2Z0I+NUU7L">` },
    { id: "ad17", size: "320x50",  weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+PLPC2+3WGO+HWPVL" rel="nofollow" target="_blank"><img width="320" height="50" src="https://www21.a8.net/svt/bgt?aid=260127649043&wid=003&eno=01&mid=s00000018204003008000&mc=1"></a><img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVFS1+PLPC2+3WGO+HWPVL">` },
    { id: "ad18", size: "120x60",  weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+KU8HU+4K7E+C03K1" rel="nofollow" target="_blank"><img width="120" height="60" src="https://www28.a8.net/svt/bgt?aid=260127649035&wid=003&eno=01&mid=s00000021281002016000&mc=1"></a><img width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVFS1+KU8HU+4K7E+C03K1">` },
    { id: "ad19", size: "336x280", weight: 1, html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVFS1+H9MV6+2KSK+67C4H" rel="nofollow" target="_blank"><img width="336" height="280" src="https://www25.a8.net/svt/bgt?aid=260127649029&wid=003&eno=01&mid=s00000012026001042000&mc=1"></a><img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVFS1+H9MV6+2KSK+67C4H">` }
  ];

  // =========================
  // 共通処理
  // =========================
  function isMobile() {
    return /iPhone|Android.+Mobile/.test(navigator.userAgent);
  }

  function weightedPick(list) {
    const bag = [];
    list.forEach(a => {
      const w = a.weight || 1;
      for (let i = 0; i < w; i++) bag.push(a);
    });
    return bag[Math.floor(Math.random() * bag.length)];
  }

  function renderAll() {
    const sideTop = document.getElementById("ad-side-top");
    const sideBottom = document.getElementById("ad-side-bottom");
    const bottom = document.getElementById("ad-bottom");

    if (isMobile()) {
      const mobilePool = ADS.filter(a => a.size === "300x250");
      const pick = weightedPick(mobilePool.length ? mobilePool : ADS);

      if (bottom) bottom.innerHTML = pick.html;
      if (sideTop) sideTop.innerHTML = "";
      if (sideBottom) sideBottom.innerHTML = "";

    } else {
      const pcPool = ADS.filter(a => a.size === "468x60");
      const pickSide1 = weightedPick(pcPool.length ? pcPool : ADS);
      const pickSide2 = weightedPick(pcPool.length ? pcPool : ADS);
      const pickBottom = weightedPick(ADS);

      if (sideTop) sideTop.innerHTML = pickSide1.html;
      if (sideBottom) sideBottom.innerHTML = pickSide2.html;
      if (bottom) bottom.innerHTML = pickBottom.html;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAll);
  } else {
    renderAll();
  }
})();
