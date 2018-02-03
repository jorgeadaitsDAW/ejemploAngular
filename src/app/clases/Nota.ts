export class Nota{
    id;
    asignatura;
    valor;

    constructor(id,asignatura,valor) {
        this.id = id;
        this.asignatura = asignatura;
        this.valor = valor;
    }
}


export const NOTAS = [
    {id:1,asignatura:'MATES',valor: 5},
    {id:1,asignatura:'LENGUA',valor: 9},
    {id:1,asignatura:'FRANCES',valor: 3},
    {id:1,asignatura:'INGLES',valor: 2},
    {id:1,asignatura:'FISICA',valor: 10},
    {id:1,asignatura:'QUIMICA',valor: 1}
];