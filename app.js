const count = document.querySelector(".counter")
const title = document.querySelector(".title")

let offset = 0

function inc(){
    offset = offset + 1
    count.innerHTML = offset
    if(offset < 33){
        title.innerHTML = "سبحان اللّه"
    }else if(offset < 66){
        title.innerHTML = "الحهدللّه"
    }else if(offset < 99){
        title.innerHTML = "اللّه اكبر"
    }else{
        offset = 0
    }
}

function reset(){
    offset = 0
    count.innerHTML = offset
}