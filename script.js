const burger = document.querySelector(".burgerbar");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// add  &  delete


const inputElement = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const ulElement = document.getElementById("ul-element");

addBtn.addEventListener("click", function () {
  let Inputvalue = inputElement.value;
  if (Inputvalue === "  ") {
    return;
  }


  let liElement = document.createElement("li");
  liElement.textContent = Inputvalue;
  liElement.style = "color: blue ";

  let deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fa-solid");
  deleteBtn.classList.add("fa-trash");
  deleteBtn.style = "color: #B197FC";
  deleteBtn.addEventListener("click", () => {
    liElement.remove();
  });

  liElement.appendChild(deleteBtn);
  ulElement.appendChild(liElement);

  
  inputElement.value = " ";
});