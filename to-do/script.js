const inputbox = document.getElementById("input-box");
const listcointainer = document.getElementById("list-cointainer");

function addTask(){
    if(inputbox.value===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcointainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcointainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcointainer.innerHTML);
}

function showTask(){
    listcointainer.innerHTML=localStorage.getItem("data");
}

showTask();