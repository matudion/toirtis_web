// VARIABLES GLOBALES
var datoCulturaIrlandesa = document.getElementById('datoCulturaIrlandesa');
var titulo = document.getElementById('titulo');
var parrafo = document.getElementById('parrafo');
var numeroAleatorio = Math.floor(Math.random()*10)+1;

//CODIGO
function datoRandom(){

    var numeroAleatorio = Math.floor(Math.random()*10)+1;

    if(numeroAleatorio <= 5){

        var numeroAleatorio = Math.floor(Math.random()*10)+1;

        if(numeroAleatorio == 1){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "La Música Tradicional Irlandesa es una de las pocas de raíz Celta. A pesar de sus antiguos orígenes, ésta se mantiene muy viva y en constante adaptación.";
        }else if(numeroAleatorio == 2){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "Las Sesiones Irlandesas son reuniones de músicos cuyo objetivo es su propio disfrute. Ésto resulta en un ambiente relajado en que canturreos, charlas y aplausos, son moneda corriente durante la tocada.";
        }else if(numeroAleatorio == 3){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "La música tradicional irlandesa tuvo una influencia significativa en otros géneros musicales, como el country y el bluegrass. Muchos artistas internacionales también han incorporado elementos de la música tradicional irlandesa en sus canciones.";
        }else if(numeroAleatorio == 4){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "Históricamente, la música tradicional irlandesa se ha transmitido de forma oral de generación en generación. Aunque ahora también se utilizan partituras y métodos de enseñanza escritos, la cultura de la transmisión oral de sus melodías se mantiene viva en las sesiones irlandesas.";
        }else if(numeroAleatorio == 5){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "Si bien se utilizan diversos instrumentos en la Música Tradicional Irlandesa, todos ellos imitan a la gaita, desde el estilo de toque a la ornamentación.";
        }else if(numeroAleatorio == 6){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "Si bien la Música Tradicional Irlandesa es conocida por sus ritmos rápidos y bailables, también cuenta con melodías lentas, éstas son llamadas “Airs”, es decir: Aires.";
        }else if(numeroAleatorio == 7){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "En la época de opresión, los Ingleses castigaban severamente la expresión cultural Irlandesa. Se cuenta que por ese motivo la Danza Tradicional Irlandesa se baila con los brazos bajos, para que, vistos desde fuera, no parezca que están bailando.";
        }else if(numeroAleatorio == 8){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "La ornamentación es una característica distintiva de la Música Tradicional Irlandesa. Los músicos suelen añadir adornos y variaciones improvisadas a las melodías, lo que les da un estilo único y distintivo.";
        }else if(numeroAleatorio == 9){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "En Irlanda se celebran numerosos festivales de música tradicional a lo largo del año. Algunos de los más conocidos son el Fleadh Cheoil (Festival de la Música Irlandesa) y el Willie Clancy Summer School, donde músicos y bailarines se reúnen para compartir su pasión por la música tradicional.";
        }else{
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "La música tradicional irlandesa se ha extendido por todo el mundo debido a la diáspora irlandesa. En casi todos los países existen comunidades de músicos que preservan y promueven la Música Tradicional Irlandesa fuera de Irlanda.";
        }
    }else{

        var numeroAleatorio = Math.floor(Math.random()*10)+1;

        if(numeroAleatorio == 1){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "El formato “Sesión Escuela” es propio de Toirtís y único en Argentina.";
        }else if(numeroAleatorio == 2){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "¡Podés Patrocinar a Toirtís! Contactate con nosotros.";
        }else if(numeroAleatorio == 3){
            titulo.innerHTML = "&#x1F340; ¿Sabias que?";
            parrafo.innerHTML = "El logo de Toirtís es una tortuga representando la velocidad en que tocamos las melodías… ¡¿Que ya te habías dado cuenta?! Bueno, entonces te ganaste una invitación a formar parte de nuestra escuela ¡Escribinos!";
        }else if(numeroAleatorio == 4){
            titulo.innerHTML = "&#x1F340; Proverbio Irlandes.";
            parrafo.innerHTML = "An rud a nithear gu math, chithear a bhuil.<br> Traducción: Lo que está bien hecho lo mostrará en sus resultados.";
        }else if(numeroAleatorio == 5){
            titulo.innerHTML = "&#x1F340; Proverbio Irlandes.";
            parrafo.innerHTML = "Eiridh tonn air uisge balbh.<br> Traducción: Las olas se crean en aguas tranquilas.";
        }else if(numeroAleatorio == 6){
            titulo.innerHTML = "&#x1F340; Proverbio Irlandes.";
            parrafo.innerHTML = "Brisidh an teanga bhog an cneath.<br> Traducción: Una lengua suave apaga la rabia.";
        }else if(numeroAleatorio == 7){
            titulo.innerHTML = "&#x1F340; Proverbio Irlandes.";
            parrafo.innerHTML = "An rud a nithear gu math, chithear a bhuil.<br> Traducción: Lo que está bien hecho lo mostrará en sus resultados.";
        }else if(numeroAleatorio == 8){
            titulo.innerHTML = "&#x1F340; Proverbio Irlandes.";
            parrafo.innerHTML = "An neach nach cìnn na chadal, Cha chìnn e na dhuisg.<br> Traducción: Aquel que no prospera en sus sueños, no prosperará despierto.";
        }else if(numeroAleatorio == 9){
            titulo.innerHTML = "&#x1F340; Proverbio Irlandes.";
            parrafo.innerHTML = "Que seas pobre en desgracias, rico en bendiciones, lento para hacer enemigos y rápido para las amistades.";
        }else{
            titulo.innerHTML = "&#x1F340; Proverbio Irlandes.";
            parrafo.innerHTML = "Que el camino se abra a tu paso, que el viento sople siempre a tus espaldas, que el sol brille sobre tu rostro, y que la lluvia caiga suave sobre tus campos. Que el camino se abra a tu paso, que el viento sople siempre a tus espaldas, que el sol brille sobre tu rostro, y que la lluvia caiga suave sobre tus campos.";
        }
    }
}


var ventanaCreditos = document.getElementById('ventanaCreditos');

function mostrar(){
    ventanaCreditos.classList.add('visible');
}

function esconder(){
    ventanaCreditos.classList.remove('visible');
}

datoRandom();