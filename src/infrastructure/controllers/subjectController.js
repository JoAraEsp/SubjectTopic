const express = require('express');
const router = express.Router();
const materia_service = require('../services/subjectService');

router.post('/materia', (req, res) => {
    const data = req.body;
    const nombre = data.nombre;
    const carrera = data.carrera;

try {
    const nueva_materia = materia_service.crear_materia(nombre, carrera);
    res.json({"uuid": nueva_materia.uuid.toString(), "nombre": nueva_materia.nombre, "carrera": nueva_materia.carrera, "estatus": nueva_materia.estatus});
} catch (error) {
    res.status(400).json({ error: error.toString() });
}

});

module.exports = router;