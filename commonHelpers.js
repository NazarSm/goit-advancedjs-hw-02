import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e;const t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");t.addEventListener("click",()=>{e=setInterval(r,1e3),t.setAttribute("disabled","")});o.addEventListener("click",()=>{clearInterval(e),t.removeAttribute("disabled")});function r(){document.body.style.backgroundColor=n()}function n(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map
