let heroText = document.querySelector(".hero1t");

setInterval(function(){
    

    if(heroText.textContent == 'Think Positive'){
        heroText.textContent = 'We love you'
    }else{
        heroText.textContent = 'Think Positive'
    }
}, 3000)



