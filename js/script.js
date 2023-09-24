// const ideoSec = document.querySelectorAll(".ideoCarrosel .container section");

// const btnLeft = document.querySelector(".btnArrow.left");
// const btnRight = document.querySelector(".btnArrow.right");

// btnRight.addEventListener("click", nextIdeo);
// btnLeft.addEventListener("click", prevIdeo);

// let ideoIndex = 1;

// function nextIdeo() {
//   ideoSec.forEach((e) => e.classList.remove("ativo"));
//   ideoIndex++;
//   if (ideoIndex > ideoSec.length - 1) {
//     ideoIndex = 0;
//   }
//   ideoSec[ideoIndex].classList.add("ativo");
//   console.log(ideoIndex);
// }

// function prevIdeo() {
//   ideoSec.forEach((e) => e.classList.remove("ativo"));
//   ideoIndex = ideoIndex - 1;
//   if (ideoIndex < 0) {
//     ideoIndex = ideoSec.length - 1;
//   }
//   ideoSec[ideoIndex].classList.add("ativo");
//   console.log(ideoIndex);
// }

// const compNav = document.querySelectorAll(".compNav li");
// const comp = document.querySelectorAll(".competencias article div");
// const compImgs = document.querySelectorAll(".competencias figure img");

// compNav.forEach((e, i) => {
//   e.addEventListener("click", () => {
//     comp.forEach((e) => e.classList.remove("ativo"));
//     compImgs.forEach((e) => e.classList.remove("ativo"));
//     comp[i].classList.add("ativo");
//     compImgs[i].classList.add("ativo");
//   });
// });

const menuMobile = document.querySelector(".mobileMenuButton");
const nav = document.querySelector(".navegacao");

menuMobile.addEventListener("click", () => {
  nav.classList.toggle("ativo");
  menuMobile.classList.toggle("ativo");
});

const navBtns = document.querySelectorAll(".drop button");

navBtns.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("ativo");
  });
});

// const introSec = document.querySelectorAll(".introducao section");
// const introNav = document.querySelectorAll(".introNav button");

// let time = 1;

// introNav.forEach((e, i) => {
//   e.addEventListener("click", () => {
//     introSec.forEach((e) => e.classList.remove("ativo"));
//     introNav.forEach((e) => e.classList.remove("ativo"));
//     introSec[i].classList.add("ativo");
//     introNav[i].classList.add("ativo");
//     time = i;
//   });
// });

// setInterval(() => {
//   introSec.forEach((e) => e.classList.remove("ativo"));
//   introNav.forEach((e) => e.classList.remove("ativo"));
//   introSec[time].classList.add("ativo");
//   introNav[time].classList.add("ativo");
//   time++;
//   if (time > introSec.length - 1) {
//     time = 0;
//   }
// }, 5000);

const vagasButton = document.querySelectorAll(".navVagas button");
const vagasType = document.querySelectorAll(".vagaType section");

vagasButton.forEach((e, i) => {
  e.addEventListener("click", () => {
    vagasType.forEach((e) => e.classList.remove("ativo"));
    console.log(vagasType[i]);
    vagasType[i].classList.add("ativo");
  });
});
