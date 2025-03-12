const [a, b] = [10]; //우측 배열을, 좌측 변수에 구조분해할당
console.log(a, b); //이러면 10,undifined 출력

const [c = 10, d = 10] = [10]; //구조분해할당시 기본값 설정방법
console.log(c, d);
