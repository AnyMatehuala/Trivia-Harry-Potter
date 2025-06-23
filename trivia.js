console.log("Iniciando trivia Harry Potter")

// Confirmación para iniciar el juego
const jugar = confirm("Listo/lista para comenzar?")
if(!jugar){
    alert("Tal vez en otro momento!");
    console.log("El usuario decidió no jugar");
} else {

    // Preguntas y respuestas del juego, inicializar puntaje
    let puntaje = 0;
    const preguntas = [
        {
            pregunta: "En que casa se queda Harry Potter?",
            opciones : ["Slytherin", "Gryffindor", "Hufflepuf", "Ravenclaw"],
            respuesta: "Gryffindor"
        },
        {
            pregunta: "Como se llaman los mejores amigos de Harry?",
            opciones: ["Draco y Ron", "Hermione y Parvati", "Ron y Hermione", "Dudley y Seamus"],
            respuesta: "Ron y Hermione"
        },
        {
            pregunta: "De que esta hecha la varita de Harry?",
            opciones: ["Arce y corazón de dragón", "Espino y pelo de unicornio", "Pino y veneno de acromántula", "Acebo y pluma de fénix"],
            respuesta: "Acebo y pluma de fénix"
        },
    ];

    // Ciclo for
    for (let i = 0; i < preguntas.length; i++) {
        const p = preguntas [i];
        let opcionesTexto = "";
        for(let j = 0 ; j < p.opciones.length; j++){
            opcionesTexto += `${j+1}. ${p.opciones[j]}\n`;
        }
        
        // Preguntas al usuario
        const respuestaUsuario = prompt(`Pregunta ${i + 1}:\n${p.pregunta}\n\n Introduce el número de la respuesta correcta \n${opcionesTexto}`);
        const seleccion = p.opciones[parseInt(respuestaUsuario) -1];

        // Verificación de respuesta
        if (seleccion === p.respuesta) {
            alert ("Correcto!");
            console.log(`Pregunta ${i + 1}`);
            puntaje++;
        } else {
            alert (`Incorrecto. La respuesta correcta es: ${p.respuesta}`);
            console.log (`Pregunta ${i + 1}`);
        }
    }

    // Puntaje final
    alert (`Tu puntaje final es ${puntaje} de ${preguntas.length}`);
    console.log (`Puntaje final: ${puntaje}/${preguntas.length}`);
    
}