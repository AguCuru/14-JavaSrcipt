function inicio() {
  do {
    var opcion = prompt("Eligir ejercicio");
    switch (opcion) {
      case "0":
        alert("Nos vemos");
        break;
      case "1":
        ej1();
        break;
      case "2":
        ej2();
        break;
      case "3":
        ej3();
        break;
      case "4":
        ej4();
        break;
      case "5":
        ej5();
        break;
      default:
        alert("No existe el ejercicio");
        var opcion = prompt("Eligir ejercicio");
        break;
    }
  } while (opcion != 0);
}

/*
Ejercicio 1
Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está .., completando el mensaje con el dato que ingresó el usuario.
*/

function ej1() {
  var dia = prompt(`¿cómo está el día de hoy? soleado, nublado o lloviendo?`);
  alert("el dia de hoy esta " + dia);
}

/*
Ejercicio 2
Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio
*/

function ej2() {
  const PI = 3.141592653589793;
  var radio = prompt("Ingrese el valor del radio de la circunferencia");
  let area = alert("El area es : " + PI * (radio * radio));
  let perimetro = alert("El perimetros es: " + 2 * PI * radio);
}

/*
Ejercicio 3
Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo.
*/

function ej3() {
  var edad = prompt("Cual es su edad? ");
  if (edad > 17) {
    alert("Usted es mayor de edad.");
  } else {
    alert("Usted es menor de edad.");
  }
}

/*
Ejercicio 4
Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
*/

function ej4() {
  var letra = prompt("Ingrese la s o la n");
  letra.toLocaleLowerCase();
  if (
    letra.toLocaleLowerCase().includes("s") ||
    letra.toLocaleLowerCase().includes("n")
  ) {
    alert("Correcto");
  } else {
    alert("Incorrecto");
  }
}

/*
Ejericio 5
Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.
*/

function ej5() {
  do {
    var operacion = prompt(`Ingrese la operacion que desea realizar
    suma(s), resta(r), division(d) , multiplicacion(m) 
    o escribir salir para volver a los ejercicios`);
    switch (operacion.toLocaleLowerCase()) {
      case "s":
        var num1 = prompt("Ingrese el primer numero");
        var num2 = prompt("Ingrese el segundo numero");
        let suma = alert(
          "El resultado es " + (parseInt(num1) + parseInt(num2))
        );

        break;
      case "r":
        var num1 = prompt("Ingrese el primer numero");
        var num2 = prompt("Ingrese el segundo numero");
        let resta = alert(
          "El resultado es " + (parseInt(num1) - parseInt(num2))
        );
        break;
      case "m":
        var num1 = prompt("Ingrese el primer numero");
        var num2 = prompt("Ingrese el segundo numero");
        let multiplicacion = alert(
          "El resultado es " + parseInt(num1) * parseInt(num2)
        );
        break;
      case "d":
        var num1 = prompt("Ingrese el primer numero");
        var num2 = prompt("Ingrese el segundo numero");
        let division = alert(
          "El resultado es " + parseInt(num1) / parseInt(num2)
        );
        break;
      case "salir":
        break;
      default:
        alert("Operacion incorrecta");
        var operacion = prompt(`Ingrese la operacion que desea realizar
    suma(s), resta(r), division(d) , multiplicacion(m) 
    o escribir salir para volver a los ejercicios`);
        break;
    }
  } while (operacion != "salir");
}
