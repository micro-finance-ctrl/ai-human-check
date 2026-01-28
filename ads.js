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
 <a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657384&wid=003&eno=01&mid=s00000013554002134000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5NMB7M+2U8+O1WU9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657342&wid=003&eno=01&mid=s00000000368004040000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVGK1+5NMB7M+2U8+O1WU9" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5L8KSI+S7A+5YZ75" rel="nofollow">
<img border="0" width="234" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657338&wid=003&eno=01&mid=s00000003655001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVGK1+5L8KSI+S7A+5YZ75" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5IUUDE+S7A+HXD0X" rel="nofollow">
<img border="0" width="234" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657334&wid=003&eno=01&mid=s00000003655003011000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+5IUUDE+S7A+HXD0X" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5O7QTE+1LP8+C7LM9" rel="nofollow">
<img border="0" width="100" height="100" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657343&wid=003&eno=01&mid=s00000007478002051000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+5O7QTE+1LP8+C7LM9" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5LU0EA+1TOG+62MDD" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657339&wid=003&eno=01&mid=s00000008512001020000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVGK1+5LU0EA+1TOG+62MDD" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5LU0EA+1TOG+614CX" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657339&wid=003&eno=01&mid=s00000008512001013000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4AVGK1+5LU0EA+1TOG+614CX" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5KN56Q+3NEK+62U35" rel="nofollow">
<img border="0" width="250" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657337&wid=003&eno=01&mid=s00000017030001021000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+5KN56Q+3NEK+62U35" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5MFG02+3ZZC+60H7L" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657340&wid=003&eno=01&mid=s00000018660001010000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AVGK1+5MFG02+3ZZC+60H7L" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5HNZ5U+5JWO+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657332&wid=003&eno=01&mid=s00000025908001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVGK1+5HNZ5U+5JWO+5YZ75" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5FA8QQ+389A+6H729" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657328&wid=003&eno=01&mid=s00000015067001088000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVGK1+5FA8QQ+389A+6H729" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5DHXXE+3NOK+5Z6WX" rel="nofollow">
<img border="0" width="728" height="90" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657325&wid=003&eno=01&mid=s00000017066001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+5DHXXE+3NOK+5Z6WX" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5EOT4Y+5PFK+5ZU29" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=260128657327&wid=003&eno=01&mid=s00000026624001007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4AVGK1+5EOT4Y+5PFK+5ZU29" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7CCIWY+2L6G+HW2Q9" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www26.a8.net/svt/bgt?aid=260128657444&wid=003&eno=01&mid=s00000012076003005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7CCIWY+2L6G+HW2Q9" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7E4TQA+2UOE+1HNDBL" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260128657447&wid=003&eno=01&mid=s00000013307009011000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7E4TQA+2UOE+1HNDBL" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7EQ9C2+3PL6+60H7L" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657448&wid=003&eno=01&mid=s00000017313001010000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+7EQ9C2+3PL6+60H7L" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7B5NPE+4NL2+5ZMCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657442&wid=003&eno=01&mid=s00000021719001006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+7B5NPE+4NL2+5ZMCH" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7DJE4I+5CYY+TSJ41" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657446&wid=003&eno=01&mid=s00000025009005004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7DJE4I+5CYY+TSJ41" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+5YZ75" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+609HT" rel="nofollow">
<img border="0" width="1080" height="608" alt="" src="https://www26.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001009000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+609HT" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+60WN5" rel="nofollow">
<img border="0" width="1080" height="608" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001012000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+60WN5" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+5Z6WX" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7CXYIQ+5TSI+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657445&wid=003&eno=01&mid=s00000027189001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7CXYIQ+5TSI+5YZ75" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+757BNM+7ZS+2NCKJ5" rel="nofollow">
<img border="0" width="680" height="200" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657432&wid=003&eno=01&mid=s00000001036016015000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+757BNM+7ZS+2NCKJ5" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+757BNM+7ZS+2NAUSX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657432&wid=003&eno=01&mid=s00000001036016007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+757BNM+7ZS+2NAUSX" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+76E6V6+2NSW+C28PT" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657434&wid=003&eno=01&mid=s00000012416002026000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+76E6V6+2NSW+C28PT" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+79DCW2+39SK+NU729" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657439&wid=003&eno=01&mid=s00000015266004004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+79DCW2+39SK+NU729" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+75SR9E+3GKQ+NUU7L" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657433&wid=003&eno=01&mid=s00000016145004007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVGK1+75SR9E+3GKQ+NUU7L" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+76ZMGY+5GZ4+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260128657435&wid=003&eno=01&mid=s00000025528001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+76ZMGY+5GZ4+5YZ75" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+74LW1U+5KAA+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657431&wid=003&eno=01&mid=s00000025957001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVGK1+74LW1U+5KAA+5YZ75" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+79YSHU+5PO6+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657440&wid=003&eno=01&mid=s00000026655001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+79YSHU+5PO6+5Z6WX" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+73F0UA+3PVQ+ZUAM9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657429&wid=003&eno=01&mid=s00000017351006020000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+73F0UA+3PVQ+ZUAM9" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6TANK2+22QA+NUES1" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260128657412&wid=003&eno=01&mid=s00000009685004005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+6TANK2+22QA+NUES1" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6TANK2+22QA+NUMHT" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657412&wid=003&eno=01&mid=s00000009685004006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AVGK1+6TANK2+22QA+NUMHT" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6QWX4Y+4HMW+609HT" rel="nofollow">
<img border="0" width="320" height="50" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657408&wid=003&eno=01&mid=s00000020948001009000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+6QWX4Y+4HMW+609HT" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6QWX4Y+4HMW+5ZU29" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657408&wid=003&eno=01&mid=s00000020948001007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+6QWX4Y+4HMW+5ZU29" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6RICQQ+4MM2+601S1" rel="nofollow">
<img border="0" width="120" height="60" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657409&wid=003&eno=01&mid=s00000021593001008000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+6RICQQ+4MM2+601S1" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6S3SCI+515E+5Z6WX" rel="nofollow">
<img border="0" width="468" height="60" alt="" src="https://www27.a8.net/svt/bgt?aid=260128657410&wid=003&eno=01&mid=s00000023477001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+6S3SCI+515E+5Z6WX" alt="">

<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6S3SCI+515E+5ZMCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260128657410&wid=003&eno=01&mid=s00000023477001006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+6S3SCI+515E+5ZMCH" alt="">
<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657384&wid=003&eno=01&mid=s00000013554002134000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" alt="">

 

];

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
