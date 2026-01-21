
const observer = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        animateElement(entry.target)
    }
});

document.querySelectorAll('.animation').forEach(element => observer.observe(element));

function animateElement(element){
    element.animate([
        { transform: 'translateX(-100px)', opacity: 0},
        { transform: 'translateX(0)', opacity: 1}
    ], {duration :700});
}