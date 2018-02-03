export class Alumno{
    id;
    nombre;

    constructor(id,nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}


export const ALUMNOS = [
    {id:1,nombre: 'PEPITO'},
    {id:2,nombre: 'JAIMITO'},
    {id:3,nombre: 'JUANITO'}
];