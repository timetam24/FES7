// 중요도 높습니다!
// push - 배열의 뒤에 값을 추가한다
// 반환값: undefined
// pop - 뒤에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// unshift - 배열의 앞에 값을 추가한다
// 반환값: 배열의 길이
// shift - 앞에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// 1. splice------------------------------------------------------------------
// arr.splice(start, deleteCount, item1, item2, ...)
const array = [10, 20, 30];
array.splice(1, 0, 100); // 1번째에, 0개를 지우고, 100을 넣어라
console.log(array);

const array2 = [10, 20, 30];
array2.splice(1, 1, 100, 200); // 1번째에, 1개를 지우고, 100과 200을 넣어라
console.log(array2);

const array3 = [10, 20, 30];
array3.splice(1, 1, [100, 200]); // 1번째에, 1개를 지우고, [100, 200]을 넣어라
console.log(array3);

const array4 = [10, 20, 30, 40];
const z = [1, 2, 3];
//만들고 싶은 값: [10,1,2,3,20,30,40,1,2,3,100]
array4.splice(1, 0, ...z);
array4.push(...z);
array4.push(100);
console.log(array4);

// 2. slice------------------------------------------------------------------
// arr.slice(start, end)
// 주의! 원본은 수정되지 않습니다!
// 비교! splice는 원본을 수정합니다!
const arr5 = [10, 20, 30, 40];
arr5.slice(1, 3); // 1번째부터 3번째 전까지(2번째까지) 자른다.
arr5.slice(1, 10000); // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.
arr5.slice(100, 10000); // index에 없는 값도 오류가 생기지 않습니다! splice도 마찬가지입니다.

// 3. sort------------------------------------------------------------------
const array6 = [1, 11, 2, 22];
// array6.sort()
// 사전식 정렬이어서 위와 같은 값은 정렬이 되지 않는다.

// 실무용 DB 코드
array6.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
console.log(array6);

//에러가 발생하지 않는 코드
// jsonData.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));

// 4. forEach(콜백함수)--------------------------------------------------------
const array7 = [10, 20, 30, 40, 50];
array7.forEach((value, indx, array) => {
  console.log(value, indx, array);
});

// 문제1. forEach를 사용하여 배열의 모든 요소를 더하는 코드를 작성하세요.
const array8 = [10, 20, 30, 40, 50];
let sum8 = 0;
array8.forEach((v) => (sum8 += v));
console.log(sum8);

// 문제2. forEach를 사용하여 짝수 인덱스의 값을 모두 더하세요.
const array9 = [10, 20, 30, 40, 50];
let sum9 = 0;
array9.forEach((v, i) => {
  if (i % 2 === 0) {
    sum9 += v;
  }
  //  i % 2 === 0 ? sum9 += v : null;
});
console.log(sum9);

// 문제3. 1부터 100까지의 숫자 중 3의 배수만 더해주세요.
let sum10 = 0;
Array(101)
  .fill(0)
  .forEach((v, i) => {
    if (i % 3 === 0) {
      sum10 += i;
    }
  });
console.log(sum10);

// 문제4. 아래와 같이 출력되게 해주세요.
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']

const array10 = ["hojun", "dongjun", "dongwook", "donggeun"];
let output10 = [];
array10.forEach((v) => {
  output10.push(`${v} is good`);
});
console.log(output10);

/////////////////////////////////////////////////////

// 주의사항
// forEach는 return을 사용할 수 없습니다.
[1, 2, 3].forEach((v) => {
  console.log(v);
  return; // 리턴했는데 멈추지 않는다!
});

//   [
//   [(1, 2, 3)].forEach((v) => {
//     return; // 뒤에 코드를 무시하는 코드로는 사용할 수는 있다!
//     // console.log(v);
//   })

// forEach는 break, continue를 사용할 수 없습니다.
//     (1, 2, 3)
//   ].forEach((v) => {
//     console.log(v);
//     // break // break은 error입니다.(반복문에서 배웁니다.)
//   })

//     (1, 2, 3)
//   ].forEach((v) => {
//     console.log(v);
//     // continue // continue는 error입니다.(반복문에서 배웁니다.)
//   });

// ElemetnNodeList는 forEach는 익스플로러를 지원하지 않습니다.
// 기억해야 할 문구 : forEach라고 다 같은 forEach가 아니다!
// html파일
// <div>1</div>
// <div>2</div>
// <div>3</div>
// nodelist와 array는 다릅니다!
let div = document.querySelectorAll("div");
// 아래 코드는 익스플로러에서 작동하지 않습니다.
div.forEach((v) => console.log(v));
div.forEach((v) => (v.innerText = "hi"));
// 대안: 아래처럼 배열로 바꿔 사용할 수 있습니다!
div = [...div];

// 5. map------------------------------------------------------------------
// 면접 질문에서도 많이 나옵니다!
// 교과서에서 보는 map의 용도와
// 실무에서 사용하는 map의 용도가 조금 다릅니다.

// map의 형태
[1, 2, 3].map((value, index, arr) => {
  console.log(value, index, arr);
  return value;
});

//   [
//     // 교재에는 주로 아래와 같이 써있습니다.
//     (1, 2, 3)
//   ].map((v) => {
//     return v ** 2;
//   })

//   [(1, 2, 3, 4)].map((v) => {
//     return v * 3;
//   });

// forEach와 차이점
// 1. forEach는 return이 없습니다.
// 2. map은 원본을 수정하여 새로운 배열을 만들고, forEach는 원본 배열을 변경하지 않습니다.

// forEach의 경우 1부터 100까지 더하는 코드
let sum1 = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    sum1 += i + 1;
  });
console.log(sum1);

// map을 사용해서 1부터 100까지 더하는 코드
let sum2 = 0;
Array(100)
  .fill(0)
  .map((v, i) => i);

//   [(1, 2, 3, 4)].map((v) => "hello world")
//   [
//     // 1. v는 1, 2, 3, 4입니다. index, arr는 들어가지 않았습니다.
//     // 2. return은 'hello world'
//     // ['hello world', 'hello world', 'hello world', 'hello world']

//     (1, 2, 3, 4)
//   ].map((v) => "hello world")
//   [
//     // ['hello1', 'hello2', 'hello3', 'hello4']

//     (1, 2, 3, 4)
//   ].map((v) => "hello" + v);
// // ['hello1', 'hello2', 'hello3', 'hello4']

// let data = [1, 2, 3, 4];
// data.map((v) => "hello" + v);
// console.log(data); // 원본은 수정되지 않습니다!

// 같은 코드 1
// [1, 2, 3, 4].map(v => 'hello' + v)

// // 같은 코드 2
// function 함수(v) {
//     return 'hello' + v
// }
// [1, 2, 3, 4].map(함수)

// // 같은 코드 3
// [1, 2, 3, 4].map(function (v) {
//     return 'hello' + v
// })

// // 같은 코드 4
// [1, 2, 3, 4].map((v) => {
//     return 'hello' + v
// })

// 6. filter------------------------------------------------------------------
const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result12 = array12.filter((item) => item % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const array13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = array13.filter((v) => {
  return true;
});
console.log(result);

// filter는 메서드 체이닝으로도 많이 사용합니다. 다음에 continue..

// 7. reduce------------------------------------------------------------------
const array14 = [10, 20, 30, 40, 50];
array14.reduce((a, c) => {
  console.log(a, c);
  return a + c;
});

// 8. includes------------------------------------------------------------------
const array15 = ["hello", "uijin"];
console.log(array15.includes("uijin"));

//9. join------------------------------------------------------------------
const array16 = ["hello", "world", "uijin"];
console.log(array16.join(`\n`));

const array17 = ["hello", "world", "uijin"];
console.log(array17.join("<br>")); //innerHTML로 하면 <br>이 개행됩니다.

const array18 = ["010", "1234", "5678"];
console.log(array18.join("-"));

//10. reverse------------------------------------------------------------------
[10, 20, 30].reverse(); ///[30, 20, 10]

// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 문제1 : 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => {
      return a + c;
    }, 0);
}
console.log(solution(10));

// 문제2
// 1부터 100까지의 숫자 중 3의 배수만 더한 값을 출력해주세요.
// 앞에서는 forEach사용했는데, 이번에는 map과 filter, reduce를 사용해주세요.
Array(100)
  .fill(0)
  .map((_, i) => i + 1)
  .filter((v) => v % 3 === 0)
  .reduce((a, c) => a + c, 0);

// 문제3
// 1부터 100까지의 숫자 중 1이라는 숫자가 들어간 숫자는 모두 더해주세요.
// 더하는 숫자 : 1. 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21
// 더하지 않는 숫자 : 2, 3, 4, 5, 6, 7, 8, 9, 20
Array(100)
  .fill(0)
  .map((_, i) => i + 1)
  .filter((v) => v.toString().includes("1"))
  .reduce((a, c) => a + c, 0);
