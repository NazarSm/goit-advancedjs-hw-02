import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const u=document.querySelector(".form"),c=t=>{t.preventDefault();const e=t.target;let o=Number(e.elements.delay.value);const s=Number(e.elements.step.value),r=Number(e.elements.amount.value);for(let n=0;n<r;n++)i(n,o).then(({position:m,delay:l})=>{console.log(`✅ Fulfilled promise ${m} in ${l}ms`)}).catch(({position:m,delay:l})=>{console.log(`❌ Rejected promise ${m} in ${l}ms`)}),o+=s};u.addEventListener("submit",c);function i(t,e){return new Promise((o,s)=>{setTimeout(()=>{Math.random()>.3?o({position:t,delay:e}):s({position:t,delay:e})},e)})}
//# sourceMappingURL=commonHelpers3.js.map
