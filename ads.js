(function () {
  // =========================
  // 広告データ（※一切削除していません）
  // =========================
  const ADS = [
  {
    id: "ad01",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657384&wid=003&eno=01&mid=s00000013554002134000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" alt="">`
  },
  {
    id: "ad02",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5NMB7M+2U8+O1WU9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657342&wid=003&eno=01&mid=s00000000368004040000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVGK1+5NMB7M+2U8+O1WU9" alt="">`
  },
  {
    id: "ad03",
    size: "234x60",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5L8KSI+S7A+5YZ75" rel="nofollow">
<img border="0" width="234" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657338&wid=003&eno=01&mid=s00000003655001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVGK1+5L8KSI+S7A+5YZ75" alt="">`
  },
  {
    id: "ad04",
    size: "234x60",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5IUUDE+S7A+HXD0X" rel="nofollow">
<img border="0" width="234" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657334&wid=003&eno=01&mid=s00000003655003011000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+5IUUDE+S7A+HXD0X" alt="">`
  },
  {
    id: "ad05",
    size: "100x100",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5O7QTE+1LP8+C7LM9" rel="nofollow">
<img border="0" width="100" height="100" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657343&wid=003&eno=01&mid=s00000007478002051000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+5O7QTE+1LP8+C7LM9" alt="">`
  },
  {
    id: "ad06",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5LU0EA+1TOG+62MDD" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657339&wid=003&eno=01&mid=s00000008512001020000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVGK1+5LU0EA+1TOG+62MDD" alt="">`
  },
  {
    id: "ad07",
    size: "125x125",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5LU0EA+1TOG+614CX" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657339&wid=003&eno=01&mid=s00000008512001013000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4AVGK1+5LU0EA+1TOG+614CX" alt="">`
  },
  {
    id: "ad08",
    size: "250x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5KN56Q+3NEK+62U35" rel="nofollow">
<img border="0" width="250" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657337&wid=003&eno=01&mid=s00000017030001021000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+5KN56Q+3NEK+62U35" alt="">`
  },
  {
    id: "ad09",
    size: "125x125",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5MFG02+3ZZC+60H7L" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657340&wid=003&eno=01&mid=s00000018660001010000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AVGK1+5MFG02+3ZZC+60H7L" alt="">`
  },
  {
    id: "ad10",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5HNZ5U+5JWO+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657332&wid=003&eno=01&mid=s00000025908001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVGK1+5HNZ5U+5JWO+5YZ75" alt="">`
  },
  {
    id: "ad11",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5FA8QQ+389A+6H729" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657328&wid=003&eno=01&mid=s00000015067001088000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4AVGK1+5FA8QQ+389A+6H729" alt="">`
  },
  {
    id: "ad12",
    size: "728x90",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5DHXXE+3NOK+5Z6WX" rel="nofollow">
<img border="0" width="728" height="90" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657325&wid=003&eno=01&mid=s00000017066001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+5DHXXE+3NOK+5Z6WX" alt="">`
  },
  {
    id: "ad13",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+5EOT4Y+5PFK+5ZU29" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=260128657327&wid=003&eno=01&mid=s00000026624001007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4AVGK1+5EOT4Y+5PFK+5ZU29" alt="">`
  },
  {
    id: "ad14",
    size: "125x125",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7CCIWY+2L6G+HW2Q9" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www26.a8.net/svt/bgt?aid=260128657444&wid=003&eno=01&mid=s00000012076003005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7CCIWY+2L6G+HW2Q9" alt="">`
  },
  {
    id: "ad15",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7E4TQA+2UOE+1HNDBL" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260128657447&wid=003&eno=01&mid=s00000013307009011000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7E4TQA+2UOE+1HNDBL" alt="">`
  },
  {
    id: "ad16",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7EQ9C2+3PL6+60H7L" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657448&wid=003&eno=01&mid=s00000017313001010000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+7EQ9C2+3PL6+60H7L" alt="">`
  },
  {
    id: "ad17",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7B5NPE+4NL2+5ZMCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657442&wid=003&eno=01&mid=s00000021719001006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+7B5NPE+4NL2+5ZMCH" alt="">`
  },
  {
    id: "ad18",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7DJE4I+5CYY+TSJ41" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657446&wid=003&eno=01&mid=s00000025009005004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7DJE4I+5CYY+TSJ41" alt="">`
  },
  {
    id: "ad19",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+5YZ75" alt="">`
  },
  {
    id: "ad20",
    size: "1080x608",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+609HT" rel="nofollow">
<img border="0" width="1080" height="608" alt="" src="https://www26.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001009000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+609HT" alt="">`
  },
  {
    id: "ad21",
    size: "1080x608",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+60WN5" rel="nofollow">
<img border="0" width="1080" height="608" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001012000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+60WN5" alt="">`
  },
  {
    id: "ad22",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7BR3B6+5ML2+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657443&wid=003&eno=01&mid=s00000026255001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVGK1+7BR3B6+5ML2+5Z6WX" alt="">`
  },
  {
    id: "ad23",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+7CXYIQ+5TSI+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657445&wid=003&eno=01&mid=s00000027189001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+7CXYIQ+5TSI+5YZ75" alt="">`
  },
  {
    id: "ad24",
    size: "680x200",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+757BNM+7ZS+2NCKJ5" rel="nofollow">
<img border="0" width="680" height="200" alt="" src="https://www28.a8.net/svt/bgt?aid=260128657432&wid=003&eno=01&mid=s00000001036016015000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+757BNM+7ZS+2NCKJ5" alt="">`
  },
  {
    id: "ad25",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+757BNM+7ZS+2NAUSX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657432&wid=003&eno=01&mid=s00000001036016007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AVGK1+757BNM+7ZS+2NAUSX" alt="">`
  },
  {
    id: "ad26",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+76E6V6+2NSW+C28PT" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657434&wid=003&eno=01&mid=s00000012416002026000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+76E6V6+2NSW+C28PT" alt="">`
  },
  {
    id: "ad27",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+79DCW2+39SK+NU729" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657439&wid=003&eno=01&mid=s00000015266004004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+79DCW2+39SK+NU729" alt="">`
  },
  {
    id: "ad28",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+75SR9E+3GKQ+NUU7L" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260128657433&wid=003&eno=01&mid=s00000016145004007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AVGK1+75SR9E+3GKQ+NUU7L" alt="">`
  },
  {
    id: "ad29",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+76ZMGY+5GZ4+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260128657435&wid=003&eno=01&mid=s00000025528001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+76ZMGY+5GZ4+5YZ75" alt="">`
  },
  {
    id: "ad30",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+74LW1U+5KAA+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657431&wid=003&eno=01&mid=s00000025957001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVGK1+74LW1U+5KAA+5YZ75" alt="">`
  },
  {
    id: "ad31",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+79YSHU+5PO6+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657440&wid=003&eno=01&mid=s00000026655001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+79YSHU+5PO6+5Z6WX" alt="">`
  },
  {
    id: "ad32",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+73F0UA+3PVQ+ZUAM9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657429&wid=003&eno=01&mid=s00000017351006020000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+73F0UA+3PVQ+ZUAM9" alt="">`
  },
  {
    id: "ad33",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6TANK2+22QA+NUES1" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260128657412&wid=003&eno=01&mid=s00000009685004005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+6TANK2+22QA+NUES1" alt="">`
  },
  {
    id: "ad34",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6TANK2+22QA+NUMHT" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657412&wid=003&eno=01&mid=s00000009685004006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AVGK1+6TANK2+22QA+NUMHT" alt="">`
  },
  {
    id: "ad35",
    size: "320x50",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6QWX4Y+4HMW+609HT" rel="nofollow">
<img border="0" width="320" height="50" alt="" src="https://www25.a8.net/svt/bgt?aid=260128657408&wid=003&eno=01&mid=s00000020948001009000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+6QWX4Y+4HMW+609HT" alt="">`
  },
  {
    id: "ad36",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6QWX4Y+4HMW+5ZU29" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260128657408&wid=003&eno=01&mid=s00000020948001007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+6QWX4Y+4HMW+5ZU29" alt="">`
  },
  {
    id: "ad37",
    size: "120x60",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6RICQQ+4MM2+601S1" rel="nofollow">
<img border="0" width="120" height="60" alt="" src="https://www22.a8.net/svt/bgt?aid=260128657409&wid=003&eno=01&mid=s00000021593001008000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AVGK1+6RICQQ+4MM2+601S1" alt="">`
  },
  {
    id: "ad38",
    size: "468x60",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6S3SCI+515E+5Z6WX" rel="nofollow">
<img border="0" width="468" height="60" alt="" src="https://www27.a8.net/svt/bgt?aid=260128657410&wid=003&eno=01&mid=s00000023477001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4AVGK1+6S3SCI+515E+5Z6WX" alt="">`
  },
  {
    id: "ad39",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6S3SCI+515E+5ZMCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260128657410&wid=003&eno=01&mid=s00000023477001006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4AVGK1+6S3SCI+515E+5ZMCH" alt="">`
  },
  {
    id: "ad40",
    size: "300x250",
    weight: 1,
    html: `<a href="https://px.a8.net/svt/ejp?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=260128657384&wid=003&eno=01&mid=s00000013554002134000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AVGK1+6CMIMA+2WL0+CPE1T" alt="">`
  }
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
