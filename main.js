const output = document.querySelector(".output");
const allCode = document.querySelector(".code");

const htmlCode = document.querySelector(".html-code");
const cssCode = document.querySelector(".css-code");
const jsCode = document.querySelector(".js-code");

const htmlBtn = document.querySelector(".html-btn");
const cssBtn = document.querySelector(".css-btn");
const jsBtn = document.querySelector(".js-btn");

function run() {
  let htmlCode = document.querySelector(".html-code");
  let cssCode = document.querySelector(".css-code");
  let jsCode = document.querySelector(".js-code");

  let mixedCode = htmlCode.value + "<style>" + cssCode.value + "</style>" + "<script>" + jsCode.value + "</script>";

  output.contentDocument.body.innerHTML = mixedCode;
  output.contentWindow.eval(jsCode.value);
}

allCode.addEventListener("keyup", run());
allCode.addEventListener("keydown", run());

function htmlEdit() {
  cssCode.style.display = "none";
  jsCode.style.display = "none";
  htmlCode.style.display = "block";
  console.clear();
  console.log("html");
  htmlBtn.style.background = "lightgreen";
  cssBtn.style.background = "rgb(113, 255, 212)";
  jsBtn.style.background = "rgb(113, 255, 212)";
}

function cssEdit() {
  htmlCode.style.display = "none";
  jsCode.style.display = "none";
  cssCode.style.display = "block";
  console.clear();
  console.log("css");
  cssBtn.style.background = "lightgreen";
  htmlBtn.style.background = "rgb(113, 255, 212)";
  jsBtn.style.background = "rgb(113, 255, 212)";
}

function jsEdit() {
  htmlCode.style.display = "none";
  cssCode.style.display = "none";
  jsCode.style.display = "block";
  console.clear();
  console.log("js");
  jsBtn.style.background = "lightgreen";
  cssBtn.style.background = "rgb(113, 255, 212)";
  htmlBtn.style.background = "rgb(113, 255, 212)";
}

// this code is kinda bad
