let box1El = document.getElementById('box1')
let box2El = document.getElementById('box2')
let box3El = document.getElementById('box3')
let box4El = document.getElementById('box4')
let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')']

let  password = '..............'
function generator(){
    box1El.textContent = ''
    box2El.textContent = ''
    box3El.textContent = ''
    box4El.textContent = ''
    for (let i = 0; i < password.length; i++){
        val = i
        val = Math.floor(Math.random() * 45)
        box1El.textContent  += characters[val] 
        box1El.style.color = '#55F991'
    }
    for (let i = 0; i < password.length; i++){
        val = i
        val = Math.floor(Math.random() * 45)
        box2El.textContent  += characters[val] 
        box2El.style.color = '#55F991'
    }
    for (let i = 0; i < password.length; i++){
        val = i
        val = Math.floor(Math.random() * 45)
        box3El.textContent  += characters[val] 
        box3El.style.color = '#55F991'
    }
    for (let i = 0; i < password.length; i++){
        val = i
        val = Math.floor(Math.random() * 45)
        box4El.textContent  += characters[val] 
        box4El.style.color = '#55F991'
    }

    // return box1El.textContent
}
