
let heroText = document.querySelector(".hero1t");

setInterval(function(){
    

    if(heroText.textContent == 'Think Positive'){
        heroText.textContent = 'We love you'
    }else{
        heroText.textContent = 'Think Positive'
    }
}, 3000)



//"inspiresec" -- "inspireset" -- "inspirecard"   ------//

const container1 = document.querySelector(".inspiresec");
const container2 = document.querySelector(".inspireset");
const cards1 = document.querySelector(".inspirecard");

let isPressedDown = false;
let cursorXspace

container1.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXspace = e.offsetX - container2.offsetLeft;
    console.log(e.offsetX);
    console.log(container2.offsetLeft);
    console.log(cursorXspace);

})


window.addEventListener("mouseup", (e) => {
        isPressedDown = false;
    
})


container1.addEventListener("mousemove", (e) => {
    if(!isPressedDown) return;
    e.preventDefault();
    console.log(e.offsetX);
    console.log(`${e.offsetX - cursorXspace}`);
    container2.style.left = `${e.offsetX - cursorXspace}px`;
     boundCards();
})



function boundCards(){
    const container1_rect = container1.getBoundingClientRect();
    const container2_rect = container2.getBoundingClientRect();
    
    console.log(window.innerWidth);
    console.log(container1_rect);
    console.log(container2.style.left);
    let theWidth = parseInt(window.innerWidth);
    

    if(parseInt(container2.style.left) < -theWidth){
        container2.style.left = `-${theWidth}px`;
        
    }
   
    if(parseInt(container2.style.left) > 0){
        container2.style.left = '0px';
        
    }

   
}

