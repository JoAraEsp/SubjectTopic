const { Materia, Tema } = require('../models/subject');
const db = require('../infrastructure/db/database');

class subjectService {
    async crear_materia(nombre, carrera) {
        if (!nombre || !carrera) {
            throw new Error("Nombre y carrera son obligatorios para crear una materia.");
        }

    const materiaExistente = await Materia.findOne({ where: { nombre, carrera } });
    if (materiaExistente) {
        throw new Error("Ya existe una materia con el mismo nombre en la misma carrera.");
    }

    const nuevaMateria = await Materia.create({ nombre, carrera });
    return nuevaMateria;
}

}