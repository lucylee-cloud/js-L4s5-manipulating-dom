// console.log("test");
// let mainTitle = document.querySelector("h1");
// console.log(mainTitle.outerHTML);
// mainTitle.innerText = "Yay, JavaScript!";

// let body = document.querySelector("body");
// console.log(body);
// body.style.backgroundColor = "#fef2f1";

// L4s5 Manipulating the DOM
// Pt 1 Transform a List Element & Change Font Size of more-reasons hdg
let firstListItem = document.querySelector("li");
console.log(firstListItem.outerHTML);
firstListItem.style.textTransform = "uppercase";

let moreReasons = document.querySelector(".more-reasons");
console.log(moreReasons.outerHTML);
moreReasons.style.fontSize = "2.5em";

// Pt 2 Highlight an H2 Element, style the highlighted word
let whyJS = document.querySelector("h2");
console.log(whyJS);
whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';
console.log(whyJS.innerHTML);

let highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

// Pt 3 Switch Out an Image
let mainImage = document.querySelector("img");
console.log(mainImage);
mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
