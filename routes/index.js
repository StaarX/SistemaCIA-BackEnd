const express = require('express');
const router = express.Router();
var clase1 = {
    id: "MEA13",
    nombre: "Métodos Ágiles",
    horarioinicio: "11:30:00",
    horariofin:"13:00:00",
    dias: "Lunes,Jueves",
    maestro: "MA1",
    alumnosins:["A1","A2","A3","A4","A14","A13","A12","A11"]
}
var clase2 = {
    id: "AW12",
    nombre: "Aplicaciones Web",
    horarioinicio:"10:00:00",
    horariofin:"11:30:00",
    dias: "Martes,Jueves",
    maestro: "MA3",
    alumnosins:["A1","A2","A3","A4","A14","A13","A12","A11"]
}
var clase3 = {
    id: "PRR11",
    nombre: "Programación 2",
    horarioinicio: "8:30:00",
    horariofin:"11:30:00",
    dias: "Martes,Jueves",
    maestro: "MA2",
    alumnosins: ["A5","A6","A7","A8","A9","A10"]
}
var maestro1 = {
    id: "MA1",
    nombre: "Gilberto Borrego",
    contraseña: "drpatito123",
    clases: "MA13"
}
var maestro2 = {
    id: "MA2",
    nombre: "Eloisa Larrínaga",
    contraseña: "drpatito123",
    clases: "PRR11"
}
var maestro3 = {
    id: "MA3",
    nombre: "Ramsés González",
    contraseña: "drpatito123",
    clases: "MA13"
}
var alumno1 = {
    id: "A1",
    nombre: "Pedro Ortiz",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo",
}
var alumno2 = {
    id: "A2",
    nombre: "Melissa Padilla",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo"
}
var alumno3 = {
    id: "A3",
    nombre: "Lisseth Alanis",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo"
}
var alumno4 = {
    id: "A4",
    nombre: "Luis Valenzuela",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo"
}
var alumno5 = {
    id: "A5",
    nombre: "Juan López",
    clases: "PRR11",
    contraseña: "123tamarindo"
}
var alumno6 = {
    id: "A6",
    nombre: "Alfredo López",
    clases: "PRR11",
    contraseña: "123tamarindo"
}
var alumno7 = {
    id: "A7",
    nombre: "Junnior Hernández",
    clases: "PRR11",
    contraseña: "123tamarindo"
}
var alumno8 = {
    id: "A8",
    nombre: "Aaron Juanes",
    clases: "PRR11",
    contraseña: "123tamarindo"
}
var alumno9 = {
    id: "A9",
    nombre: "Jorge Melendrez",
    clases: "PRR11",
    contraseña: "123tamarindo"
}
var alumno10 = {
    id: "A10",
    nombre: "Annaissa Melendrez",
    clases: "PRR11",
    contraseña: "123tamarindo"
}
var alumno11 = {
    id: "A11",
    nombre: "Héctor Valenzuela",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo"
}
var alumno12 = {
    id: "A12",
    nombre: "Sergio Padilla",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo"
}
var alumno13 = {
    id: "A13",
    nombre: "Edith Pliego",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo"
}
var alumno14 = {
    id: "A14",
    nombre: "Angel Rodríguez",
    clases: "MEA13,AW12",
    contraseña: "123tamarindo"
}
var estudiantes = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8,
    alumno9, alumno10, alumno11, alumno12, alumno13, alumno14];
var clases = [clase1, clase2, clase3];
var maestros = [maestro1, maestro2, maestro3];
//ESTUDIANTES
router.get('/obtenerEstudiantes', async (req, res) => {
    res.status(200).json(estudiantes);
});

router.get('/obtenerEstudiante/:id', async (req, res) => {
    var rs = "NO";
    estudiantes.forEach(element => {
        if (element.id == req.params.id) {
            res.status(200).json(element);
            rs = "SI";
        }
    });
    if (rs == "NO") {
        res.status(404).json();
    }
});
//MAESTROS jeje
router.get('/obtenerMaestros', async (req, res) => {
    res.status(200).json(maestros);
});
router.get('/obtenerMaestro/:id', async (req, res) => {
    var rs = "NO";
    maestros.forEach(element => {
        if (element.id == req.params.id) {
            res.status(200).json(element);
            rs = "SI";
        }
    });
    if (rs == "NO") {
        res.status(404).json({message:'No se encontró al maestro'});
    }
});
//CLASES
router.get('/obtenerClases', async (req, res) => {
res.status(200).json(clases);
});
router.get('/obtenerClasesXMaestro/:id', async (req, res) => {
    var clasese=[]
    var rs = "NO";
    clases.forEach(element => {
        console.log(element.maestro);
        if (element.maestro == req.params.id) {
            clasese.push(element);
            rs = "SI";
        }
    });
    if (rs == "SI") {
        res.status(200).json(clasese);
        
    }else{
        res.status(404).json({message:'No se encontraron las clases del Maestro.'});
    }
    });

    router.get('/obtenerClase/:id', async (req, res) => {
        var rs = "NO";
        clases.forEach(element => {
            if (element.id == req.params.id) {
                res.status(200).json(element);
                rs = "SI";
            }
        });
        if (rs == "NO") {
            res.status(404).json();
        }
    });

router.get('/obtenerClasesXAlumno/:id', async (req, res) => {
    var clasese=[]
    var rs = "NO";
    clases.forEach(element => {
        element.alumnosins.forEach(elemento=>{
            if (elemento == req.params.id) {
                clasese.push(element);
                rs = "SI";
            }
        })
    });
    if (rs == "SI") {
        res.status(200).json(clasese);
        
    }else{
        res.status(404).json({message:'No se encontraron las clases del Alumno.'});
    }
});  
router.post('/obtenerAlumnosXClase', async(req, res)=>{
    var datos= req.body.msg.split(",");
    var devuelta=[];
    var rs=false;
    estudiantes.forEach(element =>{
        datos.forEach(elemento=>{
            if (element.id==elemento) {
             devuelta.push(element);
             rs=true;
            }
        });
       });
    if (rs) {
        res.status(200).json(devuelta);
    }else{
        res.status(404).json({message:'No se encontraron alumnos con esos ids'});
    }
})
module.exports = router;