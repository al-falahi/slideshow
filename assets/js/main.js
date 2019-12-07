console.log("main.js is connected");

const slideShowNumber = document.getElementById("slideshow-number");

const slideShowImages = Array.from(
  document.querySelectorAll(".slideshow-container img")
);

const slideShowCount = slideShowImages.length;

let current = 1;

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const paginationUl = document.createElement("ul");
paginationUl.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slideShowCount; i++) {
  const paginationLi = document.createElement("li");
  paginationLi.setAttribute("index", i);
  paginationLi.appendChild(document.createTextNode(i));
  paginationUl.appendChild(paginationLi);
}

document.getElementById("indicators").appendChild(paginationUl);

const paginationUlId = document.getElementById("pagination-ul");
const slideShowItems = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < slideShowItems.length; i++) {
  slideShowItems[i].onclick = function() {
    current = parseInt(this.getAttribute("index"));
    theChecker();
  };
}

theChecker();
function theChecker() {
  slideShowNumber.textContent = current + "/" + slideShowCount;
  removeAllActive();
  slideShowImages[current - 1].classList.add("active");
  paginationUlId.children[current - 1].classList.add("active");
}

function removeAllActive() {
  slideShowImages.forEach(function(img) {
    img.classList.remove("active");
  });

  slideShowItems.forEach(function(li) {
    li.classList.remove("active");
  });

  if (current == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (current == slideShowCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

prevBtn.addEventListener("click", function() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    current--;
    theChecker();
  }
});

nextBtn.addEventListener("click", function() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    current++;
    theChecker();
  }
});
