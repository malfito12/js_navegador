// console.log(document.getElementById('title'));

//SELECTORES

//querySelector = selecciona elementos mediante css
//querySelectorAll= Seleccional todos los elementos mediante css
//getElementById= selecciona solo un elemento mediando su id

// COLECCIONES

// const nodelist= Array.from(document.querySelectorAll('li'));

// nodelist.map(el => {
//     if(el.textContent.trim().toLocaleUpperCase()==='OBJETO'){
//         el.remove();
//     }
// })

//ATRIBUTOS

const title=document.querySelector('h1')

// title.setAttribute('id', 'title')

// title.id ='title'
// console.log(title)

// title.classList.add('main.title', 'title-from-page')
// title.classList.remove('main.title', 'title-from-page')
// title.classList.toggle('main.title', 'title-from-page')

// CONTENIDO

// console.log(title.textContent)//te devuelve el texto
// console.log(title.innerHTML)//te devuelve todo el texto hasta abajo y puedes meter html 
// console.log(title.outerHTML)//devuelve todo el html incluyendo el mismo elemento


//CREAR ELEMENTOS

const profesor= document.createElement('h2')
profesor.textContent='alexis'
profesor.classList.add('teacher')
profesor.id='teacher'

document.body.appendChild(profesor)