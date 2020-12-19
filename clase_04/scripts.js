//EL NAVEGADOR

// alert()
// confirm()
// prompt()

// open()
// close()

            //RESPONSIVE TESTER DE PAGINAS

// const form= document.getElementById('form')

// if(form){
//     form.addEventListener('submit', ()=>{
//         let width= form.querySelector('#width'),
//             height= form.querySelector('#height'),
//             url = form.querySelector('#url')
        
//         if(width && height && url){
//             width=width.value
//             height=height.value
//             url=url.value
//         }

//         window.open(url,url,`innerWidth=${width},innerHeight=${height}`)
//     })
// }

            //OBJETO LOCATION

// location.href
// location.host = se puede averiguar si un link es internno o externo
// location.hostname = devuleve solo el dominio
// location.protocol
// location.hash
// location.port
// location.pathname= en que pagina te encuentras


            //OBJETO HISTORY

// history.length=cantidad de elementos, incluye la pagina actual
// back()
// forward()
// go(position)

            //OBJETO NAVIGATOR

            //TIMERS
// setTimeout(callback,ms)= ejecuta la ventana despes de un tiempo
// setInterval(callback,ms)=ejecuta una funcion varias veces con untervalo indicado en el segundo parametro


setInterval(()=>{
    const clock=document.getElementById('clock')
    if(clock)
        clock.textContent=new Date().toLocaleTimeString()
},1000)


            //OBJETO DATE

// new Date()
    // METODOS
// getFullYear()
// getMinutes()
// getSeconds()

