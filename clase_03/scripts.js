// DOM traversing
//HIJOS
    // childNodes
    // children
    // firstChild
    // firstElementChild
    // lastChild
    // lastElementChild
    // hasChildNodes()

// const parent= document.getElementById('parent')
// const grandson= document.getElementById('grandson-2')


// childNodes
// children = devuleve hijos y nietos

// console.log(parent.children)
// console.log(parent.querySelectorAll('div'))

// firstChild = devuleve texto
// console.log(parent.firstChild)

// firstElementChild = devuleve el 1mer elemento
// console.log(parent.firstElementChild)

// lastChild= devuelve el utimo elemento
// lastElementChild= devuelve el ultimo elemento
// hasChildNodes()=devuelve true o false

//HERMANOS
    // nextSibling
    // console.log(grandson.nextSibling)

    // nextElementSibling
    // console.log(grandson.nextElementSibling)

    // previousSibling

    // console.log(grandson.previousSibling)

    // previousElementSibling
    // console.log(grandson.previousElementSibling)


// PADRE
    // parentNode
    // console.log(grandson.parentNode)

    // parentElement
    // console.log(grandson.parentElement)


// INSERTAR ELEMENTOS
    // appendChild()                    = inserta un nuevo elemento
    // insertBefore(new, nextNode)      = insertar el medio de dos articulos
    // insertAdjacent                   = inserta un elemento antes y despues de un hijo
        // - insertAdjacentElement(position,el)
        // - insertAdjacentHTML(position,html)
        // - insertAdjacenttext(position,text)
    // replaceChild(newChild, oldChild) = remplaza al hijo antiguo y lo pone uni nuevo

// const newElememt= document.createElement('h2')
// newElememt.textContent='soy un nuevo elemento'
// parent.appendChild(newElememt)


// parent.insertBefore(nuevo, hijo3)


// const post = document.getElementById('post')
// const ad=document.createElement('div')
// ad.id='publicidad'
// ad.textContent='Publicidad'

// const getMiddlechild= e =>{
//     const childs= e.children,
//             l=childs.length,
//             i=Math.floor( l/2)
//     return childs[i]
// }
// // console.log(getMiddlechild(post))
// const middlechild=getMiddlechild(post)
// post.insertBefore(ad,middlechild)


const otro= document.getElementById('otro')
const ad =document.createElement('div')
ad.className='dos'
ad.id = 'EDteam'
ad.textContent ='Publicidad por que no funciona'    

otro.insertAdjacentElement('beforebegin',ad)
// otro.insertAdjacentElement('beforeend',ad)
// otro.insertAdjacentElement('arterend',ad)
// otro.insertAdjacentElement('afterbegin',ad)

// otro.insertAdjacentHTML('beforebegin',`<h1>soy el titulo</h1>`)



// otro.replaceChild(ad, otro.children[0])

