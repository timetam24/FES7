window.alert("안녕하세요");

// 자주 사용하는 console 종류
console.clear(); // 콘솔창 청소해줌
console.dir(); // 가지고 있는 요소(점으로 찍어서 접근할 수 있는 요소)를 보여줌
console.log(); // 콘솔창에 출력

let data = { a: 1, b: 2, c: 3 };
console.table(data);

function leehojun() {
  x = 10;
  y = 20;
  return x + y;
}
console.table(leehojun);

// console.group("one");
// console.log("호준/팀원");
// console.log("길동/팀원");
// console.log("춘향/팀원");
// console.group("two");
// console.log("철수/팀원");
// console.log("영희/팀원");
// console.groupEnd();
// console.log("갑돌이/팀장");
// console.groupEnd();
// console.log("End");

// console.group("one");
// console.log("1");
// console.log("2");
// console.log("3");
// console.groupEnd();
// console.group("two");
// console.log("1");
// console.log("2");
// console.log("3");
// console.groupEnd();

// console.group("one");
// console.log("1");
// console.log("2");
// console.log("3");
// console.group("three");
// console.log("3.1");
// console.log("3.2");
// console.groupEnd();
// console.groupEnd();
// console.group("two");
// console.log("1");
// console.log("2");
// console.log("3");
// console.groupEnd();

// 디버깅 : 버그를 잡는 것
console.group("one");
for (let i = 0; i < 3; i++) {
  console.log(i);
  console.group("two");
  for (let j = 0; j < 10; j++) {
    console.log(j);
  }
  console.groupEnd();
}
console.groupEnd();

// 잊으셔도 괜찮습니다.
console.log("%chello world", "color:red;font-size:32px");
console.log(
  "%chello world%chello",
  "color:red;font-size:32px",
  "color:blue;font-size:16px"
);
// https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20

console.log(typeof 10);
console.log(typeof [1, 2, 3]);
////////////////////////////////////////
console.log(typeof null); // javascript의 버그 // object로 나옴 // 자바스크립트가 어려운 이유
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof /a/g);
console.log(typeof true);
console.log(typeof NaN);
console.log(typeof undefined);
// typeof가 정확하게 나오긴 하지만 우리가 원하는 값이 아닐 수도 있습니다.

function typeCheck(value) {
  const return_value = Object.prototype.toString.call(value);
  const type = return_value.substring(
    return_value.indexOf(" ") + 1,
    return_value.indexOf("]")
  );
  return type.toLowerCase();
}

console.log(typeCheck(10));
console.log(typeCheck([1, 2, 3]));
////////////////////////////////////////
console.log(typeCheck(null)); // javascript의 버그 // object로 나옴 // 자바스크립트가 어려운 이유
console.log(typeCheck([]));
console.log(typeCheck({}));
console.log(typeCheck(function () {}));
console.log(typeCheck(/a/g));
console.log(typeCheck(true));
console.log(typeCheck(NaN));
console.log(typeCheck(undefined));
////////////////////////////////////////

// 문자열은 작은따옴표(')나 큰따옴표("), 빽틱(`)로 둘러싼 일련의 문자를 가르킵니다.

// 줄바꿈(2개 모두 가능합니다.)
let line = "hello\nworld";
// let line = `hello
//         world`
console.log(line);

let age = 10;
console.log(`홍길동의 나이는 ${age}살 입니다.`);
console.log(`홍길동의 나이는 ${2 * age}살 입니다.`);
console.log("홍길동의 나이는 " + age + "살 입니다.");

// 순서 출력
let name = "홍길동";
console.log(name[0]);
console.log(name[100]); // 자바스크립트에서는 문자열의 순서를 넘어갔을 때 에러가 발생하지 않고 undefined를 출력합니다.
console.log(name[-1]); // undefined // 다른언어 마지막 문자를 출력합니다.

// 문자열의 사칙연산
console.log("1" + 2 + 3); // 다른언어 error
console.log(2 + 3 + "1"); // 다른언어 error
console.log(2 + 3 + +"1"); // 다른언어 error
console.log("b" + "a" + +"a"); // +'a'이 NaN
console.log("lee" + "hojun");
console.log("hojun" * 3); // 다른언어는 'hojunhojunhojun'

// 형변환
console.log("1" + "1"); // 11이 아니라 2가 출력되게 할 수 있을까요?
console.log(+"1" + +"1"); // 권하지 않습니다.
console.log(Number("1") + Number("1")); // 권하지 않습니다.
console.log(parseInt("1") + parseInt("1")); // 권합니다!
// parseFloat('10.5')
console.log(parseInt(undefined));
console.log(1 + 1); // 2가 아니라 11이 출력되게 할 수 있을까요?
console.log(String(1) + String(1)); // 권하지 않습니다.
// console.log(1.toString() + 1.toString()) // 가능한 코드가 아닙니다.
console.log((1).toString() + (1).toString()); // 가능한 코드입니다.
let x = 10;
console.log(x.toString() + x.toString());

let s = "abcdefghij";
let ss = "paullab CEO 이호준 CTO 김창영";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());

// 존재하는 값을 찾았을 때
console.log(s.indexOf("c"));
console.log(s.search("c"));

// 존재하지 않는 값을 찾았을 때
console.log(s.indexOf("z"));
console.log(s.search("z"));

// 정규표현식을 넣었을 때(indexof 같은 경우에는 정규표현식을 허용하지 않습니다.)
// console.log(s.indexOf(/cd/g))
console.log(s.search(/cd/g));
console.log(ss.search(/C/g));
console.log(ss.search(/CTO/g));

// 버전
// indexOF ECMAScript 5
// 검색 위치 지정 가능
// search ECMAScript 1
// 정규표현식 가능
// 검색 위치 지정 가능 기능

console.log(ss.indexOf("C", 11)); // CTO만 찾고 싶어요!

let str = "Hello World";

// slice(시작인덱스, 종료인덱스)
// 시작인덱스부터 종료 인덱스 바로 직전(-1)까지 잘라냅니다.
console.log(str.slice(0, 5)); // 실무에서 많이 사용합니다!
console.log(str.slice(0, 7));
console.log(str.slice(7, 3)); // 작동은 하지만 빈문자열이 나옵니다.
console.log(str.slice(2)); // 실무에서 많이 사용합니다!

console.log(str.slice(-6, 0)); // 작동은 하지만 빈문자열이 나옵니다.
console.log(str.slice(-6));

// substring(시작인덱스, 종료인덱스)
// 시작인덱스부터 종료 인덱스 바로 직전(-1)까지 잘라냅니다.
console.log(str.substring(0, 5));
console.log(str.substring(0, 7));
console.log(str.substring(-6, 0)); // 작동은 하지만 빈문자열이 나옵니다.
console.log(str.substring(-6));

// substring과 slice의 차이점
// 1. 음수 취급
// slice는 음수를 취급하지만 substring은 양수로 취급합니다.
let test = "hello world";
console.log(test.slice(-5, 9));
console.log(test.slice(6, 9));
console.log(test.substring(-5, 9));
console.log(test.substring(-1, 9));
// 2. 시작인덱스가 종료인덱스보다 클 경우: substring의 경우 두 값을 바꿔 실행합니다.
console.log(test.slice(7, 3));
console.log(test.substring(7, 3));
console.log(test.substring(3, 7));

// 문제: 홍길동이 반역을 일으켜 이호준이 회사에 CEO 자리에서 물러나고, CTO가 되었습니다. 아래 문구를 출력 문자열로 변경해주세요. indexOf, search, slice, substring 4개를 사용하여 출력문자열을 출력해주세요.(indexOf, search 2개 중 하나 사용 필수이며, slice, substring 2개 중 하나 사용 필수)
let 문제예문 = "paullab CEO 이호준 CTO 홍길동";

// 출력 문자열
// 1. CEO 홍길동
// 2. CTO 이호준
let CEO의위치 = 문제예문.indexOf("CEO");
let CTO의위치 = 문제예문.indexOf("CTO");

let CEO = 문제예문.slice(CEO의위치 + 4, CTO의위치 - 1);
let CTO = 문제예문.slice(CTO의위치 + 4);

console.log(`1. CEO ${CTO}`);
console.log(`2. CTO ${CEO}`);

// substr(시작위치, 길이) : 시작인덱스부터 길이만큼 반환합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr
// 명세에서 사라질 수도 있음
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr
//substr 대신 substring 이나 slice를 사용 권장
console.log(txt2.substr(8, 3));
console.log(txt2.substr(txt2.indexOf("C"), 3));
