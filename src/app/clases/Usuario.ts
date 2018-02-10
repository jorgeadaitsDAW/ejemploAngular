export class Usuario{
    id;
    nombre;
    email;
    password;
    tipo;
    sexo;

    constructor(nombre,email,password,tipo,sexo) {
        this.nombre = nombre;
        this.email = email;
        this.password = password
        this.tipo = tipo;
        this.sexo = sexo;
    }
}