let s = "paullab CEO 이호준";
let ss = "CTO 김창영";
let sss = "paullab CEO 이호준 CTO 김창영 CTO 홍길동";

// replace
console.log(s.replace("CEO", "CFO"));
console.log(sss.replace(/C[ET]O/g, "잡부"));
// replace 고급 문법 //
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`;

let result1 = string.replace(/(\w+), (\w+)/gm, "$1 $2");
console.log(result1);

let result2 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result2);

let result3 = string.replace(
  /(\w+), (\w+)/gm,
  "제 이름은 $2 제 성은 $1 입니다."
);
console.log(result3);

// replaceAll
// 사용에 주의해주세요. 구 브라우저에서 작동하지 않을 확률이 매우 높습니다. caniuse 확인해주세요.
// 21년도에 추가된 기능입니다.
console.log(sss.replaceAll("CTO", "잡부"));

// let s = 'paullab CEO 이호준';
// let ss = 'CTO 김창영';
// let sss = 'paullab CEO 이호준 CTO 김창영 CTO 홍길동';

// includes
ss.includes("CTO"); // true
ss.includes("CEO"); // false

// 메서드 채이닝
// 메서드 채이닝은 길어지면 가독성이 떨어집니다. 가독성을 위해 개행을 해주시면 좋습니다.
sss.replace("CEO", "CFO").includes("CEO").toString().toUpperCase();
sss.replace("CEO", "CFO").includes("CEO").toString().toUpperCase();

// split
s.split(" "); // ['paullab', 'CEO', '이호준']
"010-5044-2903".split("-"); // ['010', '5044', '2903']
"010-5044-2903".split(" "); // 띄어쓰기가 없습니다!
"010-5044-2903".split(""); // ['0', '1', '0', '-', '5', '0', '4', '4', '-', '2', '9', '0', '3']

// 문제: text1 ~ text4를 split을 사용해서 아래 배열로 만들어주세요.
let text1 = "aa bb cc dd";
let text2 = "aa-bb-cc-dd";
let text3 = "aa,bb,cc,dd";
let text4 = "aa,bb-cc-dd"; // 중급자 분들만 하세요.
// ['aa', 'bb', 'cc', 'dd']
// 해답코드
// 1.
text1.split(" ");
// 2.
text2.split("-");
// 3.
text3.split(",");
// 4.
text4.replace(",", "-").split("-"); // text4에 원본에 반영되는 것은 아닙니다.
text4.split(/[,-]/);

let text5 = text4.replace(",", "-");
text5.split("-");

// trim
let text6 = "    aa bb cc dd    ";
text6.trim(); // 'aa bb cc dd'
text6.replaceAll(" ", ""); // 'aabbccdd'

// padStart
let text7 = "123";
text7.padStart(5, "0"); // '00123'
// 카카오 입사문제 일부(padStart, replace만 사용)
// 우리의 목표: 00101 -> '  # #'
let text8 = "101";
text8.padStart(5, "0").replaceAll("0", " ").replaceAll("1", "#");

// concat
console.log(text1.concat(text2));

// --------------------------------------------------------------------------------
// Number
// 모든 프로그래밍 언어의 공통사항
// 부동소숫점 연산은 정확하지 않습니다.
// 2진수로 바꾸었을 때 무한대수가 발생하기 때문입니다.
console.log(0.1 + 0.2);
let x = 0.1;

// 산술연산(**와 %도 많이 사용하는 연산자 입니다!)
console.log(`10 + 3 = ${10 + 3}`);
console.log(`10 - 3 = ${10 - 3}`);
console.log(`10 / 3 = ${10 / 3}`);
console.log(`10 * 3 = ${10 * 3}`);
console.log(`10 ** 3 = ${10 ** 3}`); // 10의 3승
//console.log(`4 ** 0.5 = ${4 ** 0.5}`) // 4의 제곱근
console.log(`10 % 3 = ${10 % 3}`); // 나머지

// 단항연산
console.log(-2);
console.log(-(-2));
// console.log(--2) // error
console.log(+4);
console.log(+"4");
// 소숫점 제거
// 비트연산자에서 한 번 더 해드리겠습니다.
console.log(~~3.14);

// 증감연산자
let num = 3; // 증감연산자는 할당연산자를 통해 할당된 값에만 사용 가능합니다.
console.log("증감연산 : ", ++num); // 4
console.log("증감연산 : ", num++); // 5 (출력하고 나서 연산을 합니다!)
console.log("증감연산 : ", --num); // 4
console.log("증감연산 : ", num--); // 3 (출력하고 나서 연산을 합니다!)
// why? 출력해보니 다 4로 출력이 될까요? 답은 증감연산자에 위치에 있습니다. 그러나 여러분들이 이 증감연산자에 위치를 고려하실 필요는 실무에서 거의 발생하지 않습니다.
// 아래 둘 다 0 ~ 9까지 출력합니다.
for (let i = 0; i < 10; ++i) {
  console.log(i);
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 비교연산자(값은 boolean으로 반환됩니다.)
console.log("비교연산 : ", 2 > 3);
console.log("비교연산 : ", 2 >= 3);
console.log("비교연산 : ", 2 < 3);
console.log("비교연산 : ", 2 <= 3);
console.log("비교연산 : ", 2 == 3);
console.log("비교연산 : ", 2 != 3);
console.log("비교연산 : ", 2 === 3);
console.log("비교연산 : ", 2 !== 3);
// 등호 2개를 권하지 않습니다. 실무에서는 등호 3개를 사용하시길 권해드립니다.
console.log("비교연산 : ", 2 == "2"); // 다른 언어에서는 false, js에서는 true
console.log("비교연산 : ", 2 === "2"); // 다른 언어에서 이런 문법이 없고, js에서는 false

// 전에는 css, js 애러가 안나고 SW가 실행되는데 중점을 두었다면
// 현재는 SW 실행이 안되어도 애러를 정확하게 파악할 수 있도록 애러를 출력해주는 것에 중점을 많이 둡니다.

// Infinity
// -Infinity
// Infinity > 10
// Infinity : 무한대를 의미하는 숫자로 아주 큰 수를 표현하거나 불가능한 연산(0으로 나누기)이 발생했을 때 그 결과 값을 Infinity로 취급합니다.
console.log("무한대 : ", 1 / 0);

// 숫자형 데이터에 알파벳e를 붙이면 0을 손쉽게 추가할 수 있습니다.
console.log(3e10);

let nums = 9999e10000;
console.log(nums === Infinity);

// NaN : Not a Number 의 약자로 산술연산이 불가능한 데이터 타입과 연산을 진행하려고 할 때 반환됩니다.
console.log("숫자가 아님" / 2);
console.log("aa" * 2);

// parseInt, parseFloat
parseInt("123"); // 123
parseInt("123.123"); // 123
parseInt("123px"); // 123
parseInt("px123"); // NaN
parseInt("     10"); // 10
parseFloat("123.123"); // 123.123
parseFloat("123.123px"); // 123.123
parseFloat("px123.123"); // NaN
parseInt("11", 2); // 3
parseInt("11", 10); // 11

// isNaN
isNaN(NaN);
isNaN(10);
isNaN("10");
isNaN("10px");
isNaN([]);
isNaN({});

// Number.isNaN사용을 권고해드립니다.
Number.isNaN(NaN);
Number.isNaN(10);
Number.isNaN("10");
Number.isNaN("10px");
Number.isNaN([]);
Number.isNaN({});

// math
Math.PI; // 3.141592653589793
Math.round(10.49); // 10
Math.round(10.77); // 11
Math.abs(-10); // 10
Math.pow(2, 3); // 8, 2**3
Math.pow(4, 0.5); // 2
Math.sqrt(16); // 4, 16**0.5
Math.random(); // 0 ~ 1 사이의 랜덤한 숫자
Math.ceil(10.1); // 11
Math.floor(10.9); // 10
Math.max(1, 2, 3, 4, 5); // 5
Math.min(1, 2, 3, 4, 5); // 1

let test = [1, 2, 3];
Math.max(...test); // 3, 전개구문은 뒤에 있습니다.
Math.min(...test); // 1

// true(참, 1), false(거짓, 0)
// &&(and, 논리곱), ||(or, 논리합), !(not, 부정)
// &(and, 비트논리곱), |(or, 비트논리합), ~(not, 비트부정)

// and나 or도 뒤를 볼 필요가 없으면 보지 않습니다!

Boolean("가");
!!"가";
!!"";

// and(논리곱)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// 어려운 내용입니다.
console.log("가" && "나");
console.log("" && "나");

// or(논리합)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// 어려운 내용입니다.
// let username = "leehojun";
// console.log(username || "이름없음");

// let username = "";
// console.log(username || "이름없음");

// not(부정)
console.log(!true);
console.log(!false);

// 안배운 문법을 사용할 것입니다! 그렇기 때문에 and, or에만 집중해주세요.
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}

// 매우 중요하지 않습니다. 실무에서는 거의 사용하지 않습니다. 알고리즘 문제에서는 간혹 등장합니다.
console.log(3 & 5);

// 0011
// 0101
//-----
// 0001

console
  .log(3 | 5)(
    // 0011
    // 0101
    //-----
    // 0111

    // https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
    // https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
    9 | 30
  )
  .toString(2)
  .replaceAll("0", " ")
  .replaceAll(
    "1",
    "#"
  )(20 | 1)
  .toString(2)
  .replaceAll("0", " ")
  .replaceAll("1", "#");

// 안배운 문법을 사용할 것입니다! 그렇기 때문에 and, or에만 집중해주세요.
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    // and는 둘 다 만족하면? 실행해라!
    console.log(i);
  }
}

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    // or 둘 중에 하나만 만족하면? 실행해라!
    console.log(i);
  }
}

// if의 중첩은 논리연산자로 대체할 수 있습니다.
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}

// 1번 연습문제
console.log(true && false); // false
console.log(false && true); // false
console.log(false || true); // true
console.log(true || true); // true

// 2번 연습문제
console.log(!!"가"); // true
console.log(!""); // true

// 3번 연습문제(단록 회로 평가)
console.log("가" && "나"); // '나' 출력, '나'는 true로 평가
console.log(0 && -1); // 0
console.log(0 && 1); // 0
console.log(1 && 1); // 1
console.log(1 && "안녕"); // '안녕'
console.log(1 && true); // true
console.log(0 || true); // true
console.log(1 && "안녕"); // '안녕'

// 단락회로평가(***)
// true : 1
// false : 0
// and(&&) : 곱
// or(||) : 합
// not(!) : 부정

console.log(!"false"); // false
console.log(!"hello"); // false
console.log(!"0"); // false

console.log(!false); // true
console.log(!0); // true

console.log("abc" / 2); // NaN

console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!null); // false

// 단락회로 평가는 값이 비어있는지 아닌지를 체크하는 용도로 많이 사용하며, 특히나 or 연산자를 많이 사용합니다!
// let username = "";
// username = username || "Guest";

// let username = "leehojun";
// username = username || "Guest";

// // 아래 코드는 리엑트 가셔야 이해가 가능하실겁니다.
// let logintemplate = "";
// if (username) {
//   logintemplate = "<li>로그아웃</li>";
// }

// logintemplate = logintemplate || "<li>로그인</li>";

// 연습문제 1번째 풀이: https://school.programmers.co.kr/learn/courses/30/lessons/120906
// inputValue의 각 자리 수를 더하여 10 출력하라.
let inputValue = 1234;
let answer = 0;

for (let i = 0; i < inputValue.toString().length; i++) {
  answer += parseInt(inputValue.toString()[i]);
}
console.log(answer);

// reduce를 이용한 강사님 풀이
console.log(
  inputValue
    .toString()
    .split("")
    .reduce((a, c) => a + parseInt(c), 0)
);

// 3항 연산자(***)
// (조건식) ? (참일 경우 실행되는 표현식) : (거짓일 경우 실행되는 표현식)
// 휴대폰 연식
// 2019년 이하: '바꿀 때가 되었습니다.'
// 2019년 이상이면서 2022년 이하이다: '좀 더 쓰셔도 됩니다!'
// 2022년 초과: '욕심이에요.'

const 휴대폰연식 = 2023;
const result =
  휴대폰연식 <= 2019
    ? "바꿀 때가 되었습니다."
    : 휴대폰연식 <= 2022
    ? "좀 더 쓰셔도 됩니다!"
    : "욕심이에요.";
console.log(result);

// 잊어주세요. 중급자 이상만 확인해주세요.
// 드모르간 법칙을 이용해서 무조건 true가 되는 곳이나 무조건 false 가 되는 구간을 발견할 수 있습니다. 또는 조건을 단순화 할 수 있습니다.
const d = 0;
const y = 1;
console.log(!(d || y) === (!d && !y));
console.log(!(d && y) === (!d || !y));

if (!d && !y) {
  console.log("hello");
}

// 어? 이 코드가 무조건 false가 되네? => 코드 전체 삭제
if (!(d || y)) {
  console.log("hello");
}

// 어? 이 코드가 무조건 true가 되네? => if문을 제거
if (!(d || y)) {
  console.log("hello");
}
// 변경후
console.log("hello");

// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

// let firstName = null;
// let lastName = null;
// let nickName = "licat";

// console.log(firstName ?? nickName);
// console.log(firstName ?? lastName ?? nickName);

// let firstName = null;
// let lastName = "hojun";
// let nickName = "licat";

// console.log(firstName ?? nickName);
// console.log(firstName ?? lastName ?? nickName);
// console.log(firstName || nickName);

let a = null;
let b = 10;
let c = null;
console.log(a ?? b ?? c);

let height = 0;
console.log(height ?? 100); // 0이 null인가요? 아니니까 0을 출력합니다. nullish 입장에서는 0도 value입니다.
console.log(height || 100); // 0을 만났을 때 뒤를 봐야 하나요?

// let height;
console.log(height ?? 100);
console.log(height || 100);

let height3 = "";
console.log(height3 ?? "world"); // ''이 null인가요? 아니니까 ''을 출력합니다. nullish 입장에서는 ''도 value입니다.
console.log(height3 || "hello"); // ''을 만났을 때 뒤를 봐야 하나요?

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined, false, NaN, '', etc...
// ?? : null, undefined

// falsy하다 : 0, null, undefined, false, NaN, '', etc...
// nullish하다 : null, undefined

// nullish 문제
// 1번
// let username;
// let nickname;
// console.log(username || nickname || "guest");

// // 2번
// let username = "";
// let nickname = "";
// console.log(username || nickname || "guest");

// // 3번
// let username = "";
// let nickname = "";
// console.log(username ?? nickname ?? "guest");

// // 4번
// let username;
// let nickname;
// console.log(username ?? nickname ?? "guest");

// https://school.programmers.co.kr/learn/courses/30/lessons/120819
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// 문제대로라면 문자열로 들어오는 것인데 실제로는 숫자가 들어옵니다. 아래 풀이 방식이 맞습니다.
let money = "15,000";

let 아메리카노 = parseInt(parseInt(money.replaceAll(",", "")) / 5500);
let 남은돈 = parseInt(money.replaceAll(",", "")) % 5500;

// 정답
function solution(money) {
  return [~~(money / 5500), money % 5500];
}
