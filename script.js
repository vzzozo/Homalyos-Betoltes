const szazalek = document.querySelector('.szazalek')
const bg = document.querySelector('.bg')

let betoltes = 0
let int = setInterval(effekt,30)

function effekt(){
    betoltes++
    
    if(betoltes > 99) {
        clearInterval(int)
    }

    szazalek.innerHTML = `${betoltes}%`
    szazalek.style.opacity = scale(betoltes, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(betoltes, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return(num - in_min)* (out_max - out_min) / (in_max - in_min) + out_min;
}