function saludo() {
    alert('Este es un evento clic 2...');
}

(function() {
    // function saludo2(nombre) {
    //     alert('Hola ' + nombre);
    // }

    // saludo2('James');

    // function crearPersona(nombre) {
    //     const obj = {};
    //     obj.nombre = nombre;
    //     obj.saludo = function() {
    //         alert('Hola soy ' + obj.nombre);
    //     }

    //     return obj
    // }

    // obj = crearPersona('James Huiza');
    // obj.saludo();

    function crearPersona(nombre, apellido, edad, sexo, gustos) {
        this.nombre = {
            nombre: nombre,
            apellido: apellido
        };
        this.edad = edad;
        this.sexo = sexo;
        this.gustos = gustos;
        this.datos = function() {
            alert(this.nombre.nombre + ' ' + 
                    this.nombre.apellido + ' tiene ' +
                    this.edad + ' anhos. Tiene gustos en: ' +
                    this.gustos[0]
            );
        }
    }

    crearPersona.prototype.saludo = function() {
        alert('Hola a todos soy: ' + this.nombre.nombre);
    }

    let persona1 = new crearPersona('James', 'Huiza', 42, 'M', ['Musica', 'TV']);
    persona1.datos();
    persona1.saludo();

})();