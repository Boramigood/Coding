// let hi = '전정민';
// hi = '즌증믄'; //변수는 바꾸기 가능
// console.log(hi);

// const hello = '안녕하세요'; //변수와 다르게 선언과 동시에 초기화(값 할당)를 해줘야 한다
// //hello = '하나도 안반가워요'; //라고는 안됨, 상수라서 변할 수 없음
// console.log(hello);

// var abc = 123;
// var abc = 456; //var은 const,let 없던 시절의 변수든상수든 유일한 선언방법
// console.log(abc); //let은 변수중복선언시 에러발생인데 여긴 안그럼(==단점)

//원시 데이터는 메모리에 저장, 참조 데이터는 힙(Heap)이라는 공간에 주소값만 저장

//객체에는 점표기법, 대괄호표기법 두개가 있다
//배열에는 객체도, 배열도 들어갈 수 있다
//프로퍼티 '값'에는 객체도, 배열도 들어갈 수 있다

// //널리쉬 연산자 = 값이 확정된 변수를 찾음
// const a = undefined;
// const b = null;
// const c = '전정민';
// console.log(a ?? b ?? c);

//전개연산자 = 배열을 펼쳐서 보여줌줌
// const number = [1, 2, 3];
// console.log(...number);

// const number2 = [4, 5, 6];
// console.log(...number, ...number2);

//if elseif elseif elseif else

//switch문에는 case-break쌍을 이루어야 한다는 것을 아나요
//참인 case를 만나면, (다음 case가 뭐든) 다음 break까지 모두 실행

//for 문에서도 break를 쓸 수 있음(아예 빠져나옴)
//            continue도 가능(그 부분만 빠져나옴)

//매개변수(파라미터) sum(a,b)
//인자(아규먼트) a,b에 실제로 들어가는 얘들 => 아규먼트는 초과 인자를 받아도 배열처럼 저장은 해놓음=에러 안나는 이유유

//함수 안에서 선언한 변수는 그 중괄호{}안에서만 사용가능(지역변수 < > 전역변수), 지역,전역에서 같은 이름의 변수 선언해도 정상
//NaN은 NotaNumber
//default 파라미터는 소괄호()안에 =기호로 할당하기

// function print(a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// }
// print(1, 2, 3, 4, 5, 6, 7, 8, 9); //아규먼트가 1,2를 받고 3부터는 저장한 걸 console.log(rest)에 다 집어넣음

//화살표 함수에서 중괄호 생략시 return을 따로 써줘야함
