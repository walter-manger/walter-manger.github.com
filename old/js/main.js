
var app = {};

app.init = (function() {

    // Whacky simple by flimsy obfuscation  
    var e, p, li, eSpan, pSpan, ul;
    
    ul = document.getElementById("social-list");
    e = "wxxaxxlxxtxxexxr.mxxaxxnxxgxxexxr@gxxmxxaxxixxl.cxxoxxm";
    p = "7xx2xx7.xx5xx1xx2.xx1xx6xx6xx8";
    li = document.createElement("li");
    eSpan = document.createElement("span");
    pSpan = document.createElement("span");

    eSpan.className = "oeml";
    pSpan.className = "pphn";    

    eSpan.innerHTML = e.replace(/xx/gi, "");
    pSpan.innerHTML = p.replace(/xx/gi, "");

    li.appendChild(pSpan);
    li.appendChild(eSpan);
    
    ul.appendChild(li);

})();
