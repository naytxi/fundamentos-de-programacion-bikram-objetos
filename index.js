const Coche = {
    marca: "Volvo",
    modelo: "TX3",
    matricula: "BI4567CDM",
};

const Casa = {
    codPostal: 48970,
    calle: "Inventada",
    portal: 8,
    piso: 12,
};



const FullStackDeveloper = {
    lenguajes:["Java", "C", "HTML", "CSS"],
    proyectos: ["Portfolio", "Web responsive", "Vue"],
};

const Perro = {
    nombre: "Lur",
    raza: "Pastor",
    color: "Arena",
    edad: "8",
    ladrar:function(){
        console.log("Zaunk");
    },
    popo:function(){
        return Math.random() * 3;
    }
};

const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil["marca"];
const grupos= Concierto.grupos;
const RGB = [Led.rojo, Led.verde, Led.azul];
Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date(26/3/2025);
Impresora.imprimiendo = {
    nombreArchivo: "",
    copias:"",
    numPaginas:"",
}

const Noticia = {
    titular: "",
    cuerpo: "",
}

const Persona = {
    nombre: "",
    apellidos: "",
    edad:"",
}

const Avion = {
    numPasajeros:"",
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando");
    },
}

const Paquete = {
    contenido: [],
}

const Pais = {
    numHabitantes:"",
    continente:"",
    gentilicio:"",
}

const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil["especificaciones"];
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = false;
Movil.temperatura = "20º";
