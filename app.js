let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter task!");
  } else {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = input.value;
    input.value = "";

    let del = document.createElement("span");
    del.innerHTML = "\u00d7";
    li.appendChild(del);
    // li.insertAdjacentElement("afterend",del);
  }
});

let ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.stopPropagation();
    e.target.parentElement.remove();
  }
});
