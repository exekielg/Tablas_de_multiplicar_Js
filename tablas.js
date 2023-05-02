//Script para generar las tablas de Multiplicar

function TablaMultiplicar(num) {

    document.write("<h2>Tabla de multiplicar del " + num + "</h2>");
    //Validar si se ingresan numeros correctos y del 1 al 10
    if (!isNaN(num) && num >= 1 && num <= 10) {
      document.write("<ul>");
  
      //Bucle para generar las multiplicaciones del 1 al 10
      for (i = 1; i <= 10; i++) {
        document.write("<li>");
        document.write(num + "x " + i + "= " + num * i);
        document.write("</li>");
      }
      document.write("</ul>");
    } else {
      alert("Ingrese un número válido del 1 al 10.");
    }
  
  }
    
  //llamada a la funcion  
  let botonTabla = document.getElementById("botonTabla");
  
  botonTabla.addEventListener("click", function() {
    let userNum = prompt("Ingrese un número del 1 al 10 y generare su tabla de multiplicar: "); //Solicitud para ingresar datos al usuario 
    TablaMultiplicar(userNum);
  })