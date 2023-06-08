const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        /*Para ver lo ingresado x consola
        console.log(boton.textContent);
        */
       const botonApretado = boton.textContent;
       
       /* condicional para limpiar la consola */
       if(boton.id === "c"){
        pantalla.textContent = "0";
        return;
       }

       /* condicional para borrar números de la consola*/
       if(boton.id === "borrar"){
        if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
            pantalla.textContent = "0";
        }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
       }

       if (boton.id === "igual"){
        try{
        pantalla.textContent = eval(pantalla.textContent);
        return;
       } catch {
        pantalla.textContent = "Error!";
       }
       return;
    }

       /* condicional para añadir números en la consola*/
       if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
        pantalla.textContent = botonApretado;
       }else {
        pantalla.textContent += botonApretado;
       }
       
    })
})
