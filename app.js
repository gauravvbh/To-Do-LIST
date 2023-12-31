let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter task!");
  } else {
    let li = document.createElement("li");
    ul.appendChild(li);
    let p = document.createElement("p");
    li.appendChild(p);
    p.innerText = input.value;

    let del = document.createElement("span");
    del.innerHTML = "\u00d7";
    li.appendChild(del);
    input.value = "";
    getData();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI" || e.target.tagName === "P") {
    const targetElement = e.target.tagName === "P" ? e.target.parentElement : e.target;
    targetElement.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }

    // if (e.target.tagName === "LI" || e.target.tagName === "P") {
    //   e.target.classList.toggle("checked");
    // } else if (e.target.tagName === "SPAN") {
    //   e.target.parentElement.remove();
    // }
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


//dark-mode and light-mode
let icon=document.querySelector("i");
let body=document.querySelector("body");

icon.addEventListener("click",()=>{
 icon.classList.toggle("fa-moon")
 icon.classList.toggle("fa-sun")
 if(icon.classList.contains('fa-moon')){
    body.style.background="linear-gradient(90deg,rgba(56, 114, 250, 0.815) 70%,white)";
    body.style.color="black";
    body.style.transition='1s';
 }else{
    body.style.background="linear-gradient(90deg,rgb(82, 80, 80),black 60%)";
    body.style.color="white";
    body.style.transition='1s';
 }
})