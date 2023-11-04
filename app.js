let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter task!");
  } else {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = input.value;

    let del = document.createElement("span");
    del.innerHTML = "\u00d7";
    li.appendChild(del);
    input.value = "";
    getData();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  getData();
});


const getData=()=>{
  let inputData= ul.innerHTML;
  localStorage.setItem('data',inputData);
};

window.addEventListener('load',()=>{
  let inputData= localStorage.getItem('data');
  ul.innerHTML=inputData;
});


let icon=document.querySelector("i");
let body=document.querySelector("body");

icon.addEventListener("click",()=>{
 icon.classList.toggle("fa-sun")
 icon.classList.toggle("fa-moon")
 if(icon.classList.contains('fa-moon')){
    body.style.background="black";
    body.style.color="grey";
    body.style.transition='1s'
 }else{
    body.style.background="white";
    body.style.color="black";
    body.style.transition='1s'
 }
})