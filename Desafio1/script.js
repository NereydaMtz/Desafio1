/*const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");*/


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function mialerta() {

    // const textArea = document.querySelector(".text_area");
    //const mensaje = document.querySelector(".mensaje_encriptado");
    var textArea = document.getElementById("text_area").value;
    var mensaje = document.getElementById("mensaje_desencriptado").value;



    var textoEncriptado = encriptar(textArea)
    //mensaje.value = textoEncriptado

    //alert(textoEncriptado);

    document.getElementById('mensaje_desencriptado').value = textoEncriptado;

}



function encriptar(stringEncriptada, string ){
    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (var i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }



    return stringEncriptada
}



function mialerta2() {
    // const textArea = document.querySelector(".text_area");
               //const mensaje = document.querySelector(".mensaje_encriptado");
               var textArea = document.getElementById("text_area").value;
               var mensaje = document.getElementById("mensaje_desencriptado").value;
   
   
   
              var textoEncriptado = desencriptar(textArea)
               //mensaje.value = textoEncriptado
   
               //alert('nere');
   
               document.getElementById('mensaje_desencriptado').value = textoEncriptado;
   
           }

           function desencriptar(stringDesencriptada, string) {
            const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] //array

            stringDesencriptada = stringDesencriptada.toLowerCase(); //mayuscula

            for (var i = 0; i < matrizCodigo.length; i++) {  //5  0-0...e | 0-1...enter | 1-0...i | 1-1... imes ..........................
                if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                    stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

                }
            }

 
            return stringDesencriptada

        }


        function CopyOutputToInput() {
            var mensaje = document.getElementById("mensaje_desencriptado").value;       
            document.getElementById('text_area').value = mensaje;
            document.getElementById('mensaje_desencriptado').value = "";
        
        }