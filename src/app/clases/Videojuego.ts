import { PersonajeVideojuego } from './PersonajeVideojuego';

export class Videojuego{
    id;
    nombre;
    personajes;

    constructor(id,nombre,personajes) {
        this.id = id;
        this.nombre = nombre;
        this.personajes = personajes;
    }
}
export const VIDEOJUEGOS = [
    {id:1,nombre: 'OVERWATCH', personajes:[new PersonajeVideojuego("TRACER"),new PersonajeVideojuego("REAPER"),new PersonajeVideojuego("MERCY")]},
    {id:2,nombre: 'BATMAN', personajes: [new PersonajeVideojuego("BATMAN"),new PersonajeVideojuego("JOKER"),new PersonajeVideojuego("GORDON")]},
    {id:3,nombre: 'MARIO' , personajes: [new PersonajeVideojuego("MARIO"),new PersonajeVideojuego("LUIGI"),new PersonajeVideojuego("BOWSER")]}
];