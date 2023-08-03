// isNaN() 함수는 어떤 값이 NaN인지 판별합니다.

// /* https://en.wikipedia.org/wiki/IEEE_754 Because 'Not a Number' is not a number, and is not equal to anything, including Not a Number. */

//isNaN
isNaN(NaN); //true
isNaN(10); //false
isNaN("10"); //false
isNaN("a"); //true
isNaN("10px"); //true
isNaN([]); //true
isNaN({}); //true

//Number.isNaN 사용을 권고해드립니다.
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN("10"); //false
Number.isNaN("10px"); //false
Number.isNaN([]); //false
Number.isNaN({}); //false

// isNaN은 내부적으로 Number() 함수를 사용합니다.
// Number() 함수는 인수를 숫자로 변환할 수 없으면 NaN을 반환합니다.
// 활용법
// https://school.programmers.co.kr/learn/courses/30/lessons/120850
// "p2o4i8gj2"
// 암기: isNaN은 Number로 숫자변환이 가능한 값을 false로 준다!
// !isNaN(value[0]) 숫자를 걸러내는 방법
let value1 = "p2o4i8gj2";

isNaN(value1[0]); // p, true
isNaN(value1[1]); // 2, false
isNaN(value1[2]); // o, true
// ...생략...

// 문제는 다 더하는 것으로 고치겠습니다. 정렬을 우리가 안배웠기 때문입니다.
let value2 = "p2o4";
let sum = 0;
if (!isNaN(value2[0])) {
  sum += parseInt(value2[0]);
}
if (!isNaN(value2[1])) {
  sum += parseInt(value2[1]);
}
if (!isNaN(value2[2])) {
  sum += parseInt(value2[2]);
}
if (!isNaN(value2[3])) {
  sum += parseInt(value2[3]);
}
console.log(sum); // 6

// 안배운 것을 써보자면
"p2o4i8gj2".split("").filter((v) => !isNaN(v));

////////////////////위 지식만 아셔도 충분합니다!//////////////////////

// console.log(NaN === NaN); // false
// 표현해드리자면 '숫자가 아님'은 '숫자가 아님'과 동일한가?

// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성합니다. 이러한 비교는 다음과 같이 수행됩니다.

/* 
Type(x)가 NaN이면 false를 반환합니다. y가 NaN이면 false를 반환합니다. 이것은 알고리즘이 먼저 피연산자 중하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false어쨌든 반환할 것임을 의미합니다.
*/

console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log("hello world" - 100); // NaN
console.log("hello world" / 100); // NaN
console.log("hello world" * 100); // NaN
console.log("2" * 10); // 20
console.log("---");

// 암기
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// ES6에서 추가 도입(암기)(*)
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x                Number(x)    isNaN(x)
undefined        NaN            true
{}                NaN            true
'foo'            NaN            true
new Date('')    NaN            true
new Number(0/0)    NaN            true


x               typeof x === 'number'   Number.isNaN(x)
undefined        false                    false
{}                false                    false
'foo'            false                    false
new Date('')    false                    false
new Number(0/0)    false                    false
*/

// -----------------------------------------------------------------------------
// 별표 ****
// boolean
// 1. 비교 연산을 했을 때
let d = 3;
let e = 5;
console.log(d > e);

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// (ture나 false가 아닌 경우 단락회로평가가 일어남)
let f = true;
let g = false;
console.log(f && g);

// 3. true나 false로 평가되는 것들
// if(value) {
//    // value가 true일 때 실행
//    // 그렇다면 어떤 value가 true일까?
// }

if (Boolean("hello")) {
  console.log("실행되었음!"); // 실행되었음이 출력되는가?
}

if ("hello") {
  console.log("실행되었음!"); // 실행되었음이 출력되는가?
}

Boolean("hello"); // true
Boolean(""); // false
Boolean(" "); // true
Boolean(0); // false
Boolean(1); // true
Boolean(-1); // true
Boolean(100); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
// !!null // 실무에서 true, false를 구분할 때 사용
// !!null, !!'hello'

// 4. javascript에서 나를 힘들게하는 true, false
// x = [1, 2, 3];
// x.pop();
// x.pop();
// x.pop(); // js: x가 가리키고 있는 값은 변한적이 없는데 true, false로 바뀌는 것은 옳지 않다. (제 생각이 아닙니다.)

Boolean([1, 2, 3]); // true
Boolean([]); // true
Boolean({ one: 1 }); // true
Boolean({}); // true

null == undefined; // true
null > undefined; // false, 다른 비교도 false
undefined < 100; // 숫자와 비교는 다 false

// -----------------------------------------------------------------------------
// null
let value3; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value4 = null;
console.log(value4); //null

// 참고삼아서만 알아주세요.
// null * 100이나 null + 100 이런 것도 한 번 해보세요!
// let 반점수 = [10, 20, 30, null, 40, 50]
// let 반평균 = 0
// for (const i of 반점수) {
//     console.log(i)
//     반평균 += i
// }

// 반평균

// let 반점수 = [10, 20, 30, undefined, 40, 50]
// let 반평균 = 0
// for (const i of 반점수) {
//     console.log(i)
//     반평균 += i
// }

// 반평균 // NaN

// -----------------------------------------------------------------------------
// BigInt
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 3년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비를 하셔야 합니다.
// 아래처럼 정상 작동이 되지 않는 경우들이 있습니다.
// 2**53 - 1
// 9007199254740991

9007199254740991 + 1;
// 9007199254740992

9007199254740991 + 2;
// 9007199254740992

9007199254740991 + 3;
// 9007199254740994

9007199254740991 + 4;
// 9007199254740996

// 제대로 나오게 하려면 n을 붙이세요!
9007199254740991n + 1n;
// 9007199254740992n

9007199254740991n + 2n;
// 9007199254740993n

9007199254740991n + 3n;
// 9007199254740994n

9007199254740991n + 4n;
// 9007199254740995n

BigInt(9007199254740991) + BigInt(1);
// 9007199254740992n

BigInt(9007199254740991) + BigInt(2);
// 9007199254740993n

BigInt(9007199254740991) + BigInt(3);
// 9007199254740994n

BigInt(9007199254740991) + BigInt(4);
// 9007199254740995n

// 참고삼아 기억해주세요.
// BigInt(5) + 5n
// BigInt(5) + 5 // error
// BigInt(5) / 2n // 2n (소수 표현 안됨)
// BigInt("10") + BigInt("10") // 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함

// 공식문서 설명

// 9007199254740991 이 숫자는 Number.MAX_SAFE_INTEGER와 동일 수 입니다. 말 그대로 안전한 숫자입니다. 만약 BigInt 안의 숫자를 이 숫자보다 큰 숫자로 하였을 경우, 정확한 연산이 안됩니다. MDN 문서를 보시죠.

// const x = Number.MAX_SAFE_INTEGER + 1;
// const y = Number.MAX_SAFE_INTEGER + 2;

// console.log(x === y);

// 분명히 다른 숫자를 더했는데 true가 나옵니다.

// 이 '안전하지 않은 숫자'를 BigInt 안에 넣어보겠습니다.

// BigInt(9007199254740993) // 9007199254740992n
// BigInt(9007199254740995) // 9007199254740996n

// 보시는 것처럼 제대로 표현하지 못하고 있어요.

// 하지만 BigInt 안에 이 숫자를 문자로 넣어주면
// BigInt("9007199254740993") // 9007199254740993n
// BigInt("9007199254740995") // 9007199254740995n

// 위와 같이 제대로 표현합니다.

// 그래서 BigInt로 큰 숫자를 표현하더라도, 그 안에 들어가는 값은 Number.MAX_SAFE_INTEGER 이하일 때만 안전하고 그 이상의 숫자를 넣으면 정확하게 결과값을 내어주지 않습니다. 따라서 BigInt()를 사용하여 더 큰 숫자를 표현하고 싶을 때에는 문자로 넣어주세요

// ---------------------------------------------------------------------
// function
// 함수 설명
// 건물올리기를 할 예정입니다.

// 땅다지기()
// 말뚝세우기()
// 기초콘크리트()
// 철근바인딩()
// 기둥세우기()
// 외벽내벽올리기()
// 지붕올리기()

// 1번째 장점
// 이 코드를 보고 건물올리기를 한다는 것을 알 수 있습니다.(아키텍처를 파악하기 용이합니다.)

// 2번째 장점
// 유지보수할 때 예를 들어 기둥에 문제가 생기면 기둥세우기() 함수로 가면 됩니다.

// 3번째 장점
// 재사용성이 높습니다. 새로운 건물 새울 때 똑같은 함수를 다시 사용하면 됩니다.

// 이렇게 선언하면 인부들이 투입된 상태는 아닌겁니다! 실제로 이대로 일을 해라!하는 것은 '호출'을 하셔야 합니다. 이 부분은 '정의'부분이에요.
function 땅다지기(삽, 인원) {
  // 기능
  console.log(`${삽}개의 삽을 가지고 ${인원}명이 땅을 다진다!`);
  return "다져진 땅";
}

function 말뚝세우기() {}

function 기초콘크리트() {}

function 철근바인딩() {}

function 기둥세우기() {}

function 외벽내벽올리기() {}

function 지붕올리기() {}

땅다지기(10, 30);
말뚝세우기();
기초콘크리트();
철근바인딩();
기둥세우기();
외벽내벽올리기();
지붕올리기();

// ------------------------------------------------------------------------
// function 연습 문제
// 문제 1: 더하기, 빼기, 나누기, 곱하기를 하는 함수를 만들어 주세요.
function add(p, o) {
  return p + o;
}
function subtract(p, o) {
  return p - o;
}
function multiply(p, o) {
  return p * o;
}
function divide(p, o) {
  return p / o;
}

//   문제 2: '10,000,000,000' 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어 주세요.
function convertToNum(string) {
  // return parseInt(string.split(",").join("")); 내 풀이
  return parseInt(string.replaceAll(",", "")); //강사님 풀이
}
console.log(convertToNum("10,000,000,000"));

//   문제 3: 입력된 문자열을 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
//   입력: world
//   출력: ['w', 'o', 'r', 'l', 'd']
function printAndSplit(str) {
  return str.split("");
}
console.log(printAndSplit("world"));

//   문제 4: 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어주세요.
// 입력: 1,2
// 출력: (1+2)*(1+2)=9
function addAndMultiply(num1, num2) {
  // 메모리 효율을 위해 함수를 내부에서 만들어 사용
  function add(x, y) {
    return x + y;
  }
  return add(num1, num2) * add(num1, num2);
}
console.log(addAndMultiply(1, 2));

//   문제 5: x** + 4x -12를 구해주는 함수를 만들어주세요.
//  입력: 3
// 출력: 9 + 12 - 12 = 9
function quadraticEquation(num) {
  return num ** 2 + 4 * num - 12;
}
console.log(quadraticEquation(3));

// --------------------------------------------------------function 함수의 특징
///////////////

function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  // 이렇게 애러가 나는 코드가 있어도 javascript엔진이 보지 않는 공간에서는 애러를 출력하지 않습니다.
  console.logi("hello");
  console.loghojun("hello");
  console.logjun("hello");
}

///////////////

// 잊으셔도 됩니다!
// 어려운데 심지어 중요하지도 않습니다.
// 단락 평가에서도 마찬가지입니다!
function errorCode() {
  console.loghojun("hello");
}
let value = true;
// errorCode 실행시키지 않았다
let result = true || errorCode();

///////////////

// return(반환보다는 종료에 느낌으로 쓰는 코드)
function test() {
  if (true) {
    if (false) {
      console.log("1");
      return;
    }
  }
  console.log("2");
  // 여러 코드...
  return;
}

///////////////

// 함수의 이름은 결국 변수이다!
console.log("hello"); // 'hello'는 아규먼트
let leehojun = console.log;
leehojun("hello");

function test() {
  console.log("hello");
}
test();
let hojun = test;
hojun();

///////////////

// 함수의 이름은 결국 변수이기 때문에 아규먼트로도 전달할 수 있을까요?
// 또는 리턴값으로도 전달할 수 있을까요?
// 답은 '네'입니다!

function add(a, b) {
  return a + b;
}

let x = 10;
let y = 20;
console.log(add(x, y));

// 1. 함수를 아규먼트로 전달
// 아래와 같이 아규먼트 전달된 함수를 '콜백함수'라고 부릅니다.
// function add(x, y) {
//   return x + y;
// }

// function addAndMultiply(x, y, z) {
//   let sum = z(x, y) * z(x, y);
//   return sum;
// }

// addAndMultiply(1, 2, add);

// 2. 함수를 리턴값으로 전달(스코프와 클로저를 배우고 나서 다시 다룰 예정입니다.)
// 지금 이해하려 하지 마세요.
function one(x) {
  function two(y) {
    return x + y;
  }
  return two;
}

let results = one(10);
results(100);

// ------------------------------------------------------------------신입사원주의코드
function test() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

function test() {
  console.log("hello");
}

test();
// --------------------------------------------------------------------
// function_parameter
function test(a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}

// 이 2개는 다른 언어에서는 error가 납니다.
test(10, 20); // 모자라면 undefined로 채워짐
test(10, 20, 30, 40); // 넘기면 제대로 작동합니다.

function test(a = 10, b = 20, c = 30) {
  console.log(a, b, c);
  return a + b + c;
}

test(100, 200);
test();

// 혼란의 도가니
// 기억을 해주세요.
test((a = 100), (b = 200)); // 330
test((b = 100), (c = 200)); // 왜 330인가요?
// test(100, ,200) // error
// javascript는 값을 순서대로 넣습니다.

// 이것을 해결하기 위해 RORO로 기법이 등장합니다.
// RORO: 객체로 받고 객체로 반환한다(Receive an object, return an object)

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
  // scene: 스토리신, 플레이신, 엔딩신
  // x, y: 몹의 위치
  // texture: 몹의 이름
  // animKey: 몹의 애니메이션
  // initHp: 몹의 체력
  // dropRate: 몹이 아이템을 떨어뜨리는 확률
  return;
}

// 위 문제와 아래 문제를 해결하기 위해 RORO을 사용할 수 있습니다.
// mob('플레이신', 100, 200, '슬라임', '슬라임_애니', 100, 0.1)
// mob('플레이신', ...뭐가 들어가야하지?)

function player({ scene, x, y, texture, animKey, initHp, dropRate }) {
  console.log(scene, x, y, texture, animKey, initHp, dropRate);
  return;
}

// 아래와 같이 작성되기 때문에 2번째 문제 해결, 순서도 상관없습니다.
player({
  scene: "플레이신",
  y: 200,
  x: 100,
  texture: "슬라임",
  animKey: "슬라임_애니",
  initHp: 100,
  dropRate: 0.1,
});

// 아래와 같이 작성되기 때문에 1번째 문제 해결
player({
  scene: "플레이신",
  y: 200,
  initHp: 100,
});

// 기본값 설정하는 방법
function player({
  scene = "플레이신",
  x = 0,
  y = 0,
  texture,
  animKey,
  initHp,
  dropRate = 0.1,
}) {
  console.log(scene, x, y, initHp);
}

player({
  initHp: 100,
});

// -----------------------------------------------------------------------function 종류
// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics
// 1. 함수 선언문
// function sum(x, y) {
//   return x + y;
// }

// // 2. 함수 표현식
// let sumXY = function (x, y) {
//   return x + y;
// };
// console.log(sum(10, 20));
// console.log(sumXY(10, 20));

// // 3. 화살표 함수
// // 3.1 return문만 있는 경우
// function sum(x, y) {
//   return x + y;
// }

// let sum = (x, y) => x + y;

// // 3.2 함수의 기능 + return이 있는 경우
// function sum(x, y) {
//   let z = x + y;
//   console.log(z);
//   return z;
// }

// let sum = (x, y) => {
//   let z = x + y;
//   console.log(z);
//   return z;
// };

// // 3.3 인자가 하나인경우
// function pow(x) {
//   return x * x;
// }

// let pow = (x) => x * x;
// let pow = (x) => x * x;

// // 4. 즉시 실행 함수
// (function () {
//   console.log("즉시 실행!");
// })();
// // 즉시 실행함수는 대부분 main함수로 만들어서 사용하는 경우가 많습니다.

// function main() {
//   // 10만줄
// }
// main();

// // 즉시 실행함수를 사용하면 main을 다시 사용할 수 없게 할 수 있습니다. 또한 전역변수 등을 사용하지 않게 할 수 있어요.

// // 5. 재귀함수(중급자 될때까지 권하지 않습니다.)
// // 반복문으로 만들 수 있으면 재귀로 표현이 가능하고
// // 재귀로 표현이 가능하면 반복문으로 표현이 가능합니다.
// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// factorial(5);
// // 5! == 5 * 4 * 3 * 2 * 1

// (factorial(5) == 5 * factorial(4)) == 5 * 24;
// (factorial(4) == 4 * factorial(3)) == 4 * 6;
// (factorial(3) == 3 * factorial(2)) == 3 * 2;
// (factorial(2) == 2 * factorial(1)) == 2 * 1;
// factorial(1) == 1;

// // 6. 지역변수 전역변수
// let b = 10; // 전역변수
// function test() {
//   console.log(b);
// }
// test();

// let s = 10;
// function one() {
//   let s = 100; // 지역변수
//   function two() {
//     function three() {
//       console.log(s);
//     }
//     three();
//   }
//   two();
// }
// one();

// // 자신의 공간에 해당 변수가 없으면 상위 공간에서 찾습니다.
// // 못찾으면 error입니다.

// // 지역변수 끼리는 서로 간섭을 못합니다.
// function one() {
//   // 메모장
//   let x = 10; // x는 라인 수
// }

// function two() {
//   // 카메라
//   let x = 100; // x는 조리개값
//   console.log(x);
// }
// one();
// two();

// // 다시 알아보고 답변 드리겠습니다.
// // 찾으면 읽을 수 있습니다!
// // 수정할 수 있진 않습니다!(다음 시간에 알려드리겠습니다.)

// let a = 10; // 전역변수
// function test() {
//   let b = a + 100; // 단순히 읽어왔기 때문에 됩니다!
//   return b;
// }
// test();

// -------------------------------------------------------------------array
let arr1 = [];

let arr2 = [1, 2, 3];

let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arr3[0]; // [1, 2, 3]
arr3[1]; // [4, 5, 6]
arr3[2]; // [7, 8, 9]
arr3[1][2]; // 6

let arr4 = ["leehojun", 10, 180]; // 이렇게 여러개의 타입이 혼합되어 쓰시는 것을 권하진 않습니다.
arr4[0]; // 'leehojun'
arr4[0][3]; // 'h'

// 2. array에 길이 출력
let arr5 = [1, 2, 3];
arr5.length; // 3
arr5.length = 100;
arr5; // [1, 2, 3, empty × 97]
arr5[10] = null;
arr5; // [1, 2, 3, empty × 7, null, empty × 89]

let arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arr6.length; // 3
arr6.flat().length;

let arr7 = [
  [[10, 20], [10, [10, 20]], 3],
  [[10, 20], [10, [10, 20]], 6],
  [[10, 20], [10, [10, 20]], 9],
];
arr7.flat();
arr7.flat().flat().flat();
arr7.flat(3);
arr7.flat(Infinity);

// --------------------------------------------------------------------------push.html
// let html = [];
// html.push("<h1>안녕!</h1>");
// html.push("<p>안녕하세요! 이호준입니다.</p>");
// html.push("<p>저는 위니브 회사 대표입니다!</p>");
// document.write(html.join(""));
