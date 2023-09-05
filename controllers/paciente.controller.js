const pacienteCtrl = {}
const mysqlConnection = require('../database.js');


//get todos los pacientes
pacienteCtrl.getPacientes = async (req, res) => {
    mysqlConnection.query('SELECT * FROM pacientes', (err, rows, fields) => {

        if (!err) {
            res.json({ 
                ok: true,
                rows: rows,
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
}


//new paciente
pacienteCtrl.createPaciente = async(req, res) => {
    const {nombre, apellido, dni, especialidadID} = req.body;

    let sql = 'INSERT INTO medicos (nombre, apellido, dni) VALUES (?,?,?)';
    var valores = [nombre, apellido, dni];

    mysqlConnection.query(sql, valores, (err, rows, fields) => {
        if (!err) {
            res.json({ 
                ok: true 
            });
        } else {
            res.json({ 
                ok: false,
                error: err
            });
        }
    });
};

module.exports = pacienteCtrl;
