(()=>{"use strict";const n=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ',e={"/":()=>'\n  <div class="Test">\n  <article class="Test-item">\n    <a href="#/1/">\n      <img src="https://cdn-icons-png.flaticon.com/512/825/825590.png" alt="Anxiety Icon">\n      <h2>Hamilton Anxiety Rating Scale, HARS</h2>\n    </a>\n\n    \x3c!--<a href="#/2/">\n    \x3c!--  <img src="https://detexcoco.com/assets/icons/psicologia/ansiedad.png" alt="nameImg">\n    \x3c!--  <h2>Test 2</h2>\n    \x3c!--</a>\n  </article>\n</div>\n  ',"/:id":()=>'\n  <div class="">\n    <header>Hamilton Anxiety Rating Scale , HARS</header>\n    <article>\n      <h4>Instrucciones:</h4>\n      <p>Por favor, lee cada una de las siguientes oraciones y selecciona la frecuencia con lo que sientes, piensas o vives e las últimas semanas incluído el día de hoy, esto referente a la oración.</p>\n    </article>\n    <article>\n      <p>Humor ansioso(inquietud, espera de lo peor, aprensión [anticipación temerosa], irritabilidad)</p>\n    </article>\n  </div>\n  ',"/contact":"Contact"},a=async()=>{const a=document.getElementById("header"),i=document.getElementById("content");a.innerHTML=await'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/">Psychology Project</a>\n        </h1>\n      </div>\n\n      <nav class="Header-nav">\n        <a href="#/about/">About</a>\n      </nav>\n    </div>\n  ';let t=location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",s=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(t),c=e[s]?e[s]:n;i.innerHTML=await c()};window.addEventListener("load",a),window.addEventListener("hashchange",a)})();