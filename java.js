let names=document.getElementById('name')

names.addEventListener('keyup', (e)=>{
    let user = e.target.value
})

let form=document.querySelector('form')
form.addEventListener('submit',(a)=>{
    a.preventDefault()
    let user = names.value.trim()
    if (user) {
        alert(`Welcome ${user}`)
    } 
})
let input=document.querySelector('input')
input.addEventListener('click', ()=>{input.style.borderColor='purple'})