//구조분해할당

//배열
const arr = [1, 2, 3, 4, 5];

const [uno, dos, thres] = arr; //오른쪽 arr을, 'one, two, three' 변수에 할당함, 배열의 구조분해할당이니까 대괄호[]임

console.log(uno, dos, thres); //일반 변수처럼 사용 가능함 : 1 2 3

//객체
const obj = { x: 10, y: 20 };

const { x: a, y: b } = obj; //객체의 구조분해 할당이니까 중괄호{}임, 객체 안의 프로퍼티를 전역변수에 할당

console.log(a, b);

//객체인데 좀 복잡한 구조
const obj2 = {
  one: {
    two: {
      three: 'Bingo',
    },
  },
};

const {
  one: {
    two: { three }, //one안에있는 two안에있는 three를 가져오자, 그럼 구조가 분해돼서 three를 사용할 수 있음
  },
} = obj2;

console.log(three);
