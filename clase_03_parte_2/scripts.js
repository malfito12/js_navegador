
const otro= document.getElementById('otro')
const ad =document.createElement('div')
ad.className='dos'
ad.id = 'EDteam'
ad.textContent ='Publicidad por que no funciona'    

otro.after(ad)

//CLONAR Y ELIMINAR

    // cloneNode()
    // remove()


//TEMPLATE
//<template>


const template = document.getElementById('template')

const myNewtemplate = template.content.cloneNode(true)
myNewtemplate.querySelector('h2').textContent = 'EDteam'
myNewtemplate.querySelector('p').textContent = 'tu futuro te esta esperando'

document.getElementById('content').appendChild(myNewtemplate)


//CSSOM

    // style
    // matchMedia()
    // getComputedStyle()
    // getBoundingClientrect()


const title = document.querySelector('h1')
const description = document.querySelector('p')
title.style.color='red'


const mediumBp=matchMedia('(min-width: 640px) and (orientation: portrait)')
console.log(mediumBp.matches)




