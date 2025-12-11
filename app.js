const form = document.getElementById("calcForm");
const errorBox = document.getElementById("error");
const resultBox = document.getElementById("result");
const historyList = document.getElementById("history");
let history = [];
form.addEventListener("submit", function(e){
    e.preventDefault();
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let op = document.getElementById("op").value;
    errorBox.textContent="";
    resultBox.textContent="";

    if (a==="" || b===""){
        errorBox.textContent = "Veuillez remplir tous les champs.";
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    if (op==="/" && b===0){
        errorBox.textContent = "Division par zéro interdite.";
        return;
    }
    let res = 0;
    switch (op) {
        case "+": res=a+b; break;
        case "-": res=a-b; break;
        case "*": res=a*b; break;
        case "/": res=a/b; break;
    }
    resultBox.textContent = `Résultat : ${res}`;
    let item = `${a} ${op} ${b}=${res}`;
    history.push(item);
    updateHistory();
});
function updateHistory(){
    historyList.innerHTML = "";
    history.forEach(op => {
        let li = document.createElement("li");
        li.textContent = op;
        historyList.appendChild(li);
    });
}
