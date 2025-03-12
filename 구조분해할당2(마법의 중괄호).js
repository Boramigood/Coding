//함수
const obj = {
  x: 10,
  y: 20,
};

function sum({ x: what, y: the }) {
  return what + the; //obj.x + obj.y를 안하려고 중괄호를 써줌(마법의 중괄호)
}

console.log(sum(obj));
