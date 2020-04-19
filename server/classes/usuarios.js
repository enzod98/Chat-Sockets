class Usuarios {
    constructor() {
        this.personas = [];
    }

    /* Vamos a agregar una persona al arreglo de personas con un id y un nombre que nos va pasar el socket.io */
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    /* Obtener información de una persona a través de su ID */
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0]; //el filter devuelve un array en donde se encuentran todos los elementos del array original que cumplan la condición que especificamos en la función, con [0] nos aseguramos de que sólo se devuelva una persona por id, en caso de no encontrar nada la función devuelve un undefined

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        //...
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;

    }

}


module.exports = {
    Usuarios
}