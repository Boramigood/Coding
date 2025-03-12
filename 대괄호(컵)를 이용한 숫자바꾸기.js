let a = 123;
let b = 456;

let temp = a; //컵엔 a가 들어있음
a = b;
temp = b; //이제 서로 바뀜

[a, b] = [b, a]; //또 바뀜(구조분해할당을 활용)
