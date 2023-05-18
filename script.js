let btn = document.getElementById('btn')

const btnClicked = ()=>{
    let clr = '0123456789ABCDEF'
    let cons = '#'
    for (let i = 0; i < 6; i++) {
        cons = cons + clr[Math.floor(Math.random() * 16)];
    }
    return cons;
}

console.log(btnClicked())

function colorChanger(){
    document.body.style.backgroundColor = btnClicked()
}

document.getElementById('btn').addEventListener('click',colorChanger)