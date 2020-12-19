const title= document.getElementById('title')

// title.addEventListener('eventName', eventHandler)

const holaMundo = e =>alert(e.target.textContent)

// CLICK

// title.addEventListener('click', e =>{
//     // holaMundo('Los eventos')
//     holaMundo(e)
    
// })

// document.querySelector('button').addEventListener('click', e =>{
//     holaMundo(e)
// });

// CONTEXT MENU

// const createMenu= e =>{
//     const menu = document.createElement('div')
//     menu.id ='context-menu'
//     const prevMenu=document.getElementById('context-menu')
//     menu.textContent ='soy un menu contextual'

//     if(prevMenu)
//         document.body.removeChild(prevMenu)

//     document.body.appendChild(menu)

//     menu.style.padding = '1em'
//     menu.style.background='#eee'
//     menu.style.position='fixed'
//     menu.style.top =`${e.pageY}px`
//     menu.style.left =`${e.pageX}px`

// }

// document.addEventListener('contextmenu', e =>{
//     createMenu(e)
//     e.preventDefault()
// })



// EVENTOS DE TECLADO

//keydown
//keyup
//keypress

const input= document.getElementById('input')


// input.addEventListener('keyup', e=>{
//     console.log(e.key)
//     console.log(e.ctrlKey)
//     console.log(e.altKey)
// })



// addEventListener('keydown', e=>{
    

//     if(e.key ==='a'&& e.ctrlKey ===true){
//         e.preventDefault()
//         alert('CONTROL A')
//     }
// })



// EVENTOS DE FORMULARIOS
    // submit
    // change
    // focus
    // blur
    // reset


const  form= document.getElementById('form')

form.addEventListener('submit', ()=>{
    console.log('ha enviado el formulario')
})


const rememberPassword= document.getElementById('rememberPassword')

rememberPassword.addEventListener('change', e=>{
    if(e.target.checked){
        console.log('el usu quieres recordar')
    }else{
        console.log(' no quieres recordar')
    }
})


// EVENTOS DEL DOM
    // DOMContentloaded =sirve para problemas de cargado de pagina 

// addEventListener('DOMContentLoaded' , ()=>{
//     const  form= document.getElementById('form')

//     form.addEventListener('submit', ()=>{
//         console.log('ha enviado el formulario')
//     })
    
    
//     const rememberPassword= document.getElementById('rememberPassword')
    
//     rememberPassword.addEventListener('change', e=>{
//         if(e.target.checked){
//             console.log('el usu quieres recordar')
//         }else{
//             console.log(' no quieres recordar')
//         }
//     })
// })


// PROPAGACION

document.querySelectorAll('div').forEach(el =>{
    el.addEventListener('click', e =>{
        console.log(`hiciste click en el  ${e.target.id}`)
    })
    // e.stopPropagation()
})