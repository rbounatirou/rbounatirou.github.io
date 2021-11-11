window.onload = main;

function main(){
    /*alert("bienvenue sur mon cv");*/
}

function showCompetences(){
    let el = document.getElementById("competences-pro");
    
    
    let els = document.getElementsByTagName("article");
    let i;
    for (i = 0; i < els.length; i++){
        els[i].className="";
    }
    el.className = "activeart";
}

function showFormation(){
    let el = document.getElementById("diplomes-formation");
    
    
    let els = document.getElementsByTagName("article");
    let i;
    for (i = 0; i < els.length; i++){
        els[i].className="";
    }
    el.className = "activeart";
}

function showInterest(){
    let el = document.getElementById("centre-interet");
    
    
    let els = document.getElementsByTagName("article");
    let i;
    for (i = 0; i < els.length; i++){
        els[i].className="";
    }
    el.className = "activeart";
}

function showOther(){
    let el = document.getElementById("info-diverses");
    
    
    let els = document.getElementsByTagName("article");
    let i;
    for (i = 0; i < els.length; i++){
        els[i].className="";
    }
    el.className = "activeart";
}