// <h2 id="title" class="title_class">Hello</h2>

const id = document.getElementById('title');
console.log(id); //id는 유일하기 때문에 정상적으로 출력

const clas = document.getElementsByClassName('title_class'); //class는 중복이 가능하기 때문에 element's' , 그래서 단일요소가 아닌 배열처럼 나옴
console.log(clas);

const tag = document.getElementsByTagName('h2'); //마찬가지로 중복가능
console.log(tag);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const legend = document.querySelector('h2'); //형식에 맞게만 넣어주면 위의 3개를 모두 아우름, h2(태그명), #title(타이틀명), .titleclass(.클래스명)
console.log(title);

const all = document.querySelectorAll('.title_class'); //이 class를 사용하는 모든 요소들을 배열로 반환
console.log(title);
