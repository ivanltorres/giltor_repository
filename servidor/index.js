const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inquilinos_ab'
});

app.post("/create", (req, res)=>{
    const t_ident = req.body.t_ident;
    const n_ident = req.body.n_ident;
    const nombre = req.body.nombre;
    const celular = req.body.celular;
    const email = req.body.email;
    const alcoba = req.body.alcoba;
    const precio = req.body.precio;
    const fecha = req.body.fecha;


    db.query('INSERT INTO inquilino(t_ident, n_ident, nombre, celular, email, alcoba, precio) VALUES(?,?,?,?,?,?,?)', [t_ident, n_ident, nombre, celular, email, alcoba, precio],
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result); 
            }
        }
    );
});
app.get("/inquilino", (req, res)=>{
    db.query('SELECT * FROM inquilino',
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result); 
            }
        }
    );
});
app.put("/update_inq", (req, res)=>{
    const id_inquilino = req.body.id_inquilino;
    const t_ident = req.body.t_ident;
    const n_ident = req.body.n_ident;
    const nombre = req.body.nombre;
    const celular = req.body.celular;
    const email = req.body.email;
    const alcoba = req.body.alcoba;
    const precio = req.body.precio;
    

    db.query('UPDATE inquilino SET t_ident=?, n_ident=?, nombre=?, celular=?, email=?, alcoba=?, precio=? WHERE id_inquilino=?', [t_ident, n_ident, nombre, celular, email, alcoba, precio, id_inquilino],
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result); 
            }
        }
    );
    });
    app.delete("/eliminar_inq/:id_inquilino", (req, res)=>{
        const id_inquilino = req.params.id_inquilino;    
        db.query('DELETE FROM inquilino WHERE id_inquilino=?', [id_inquilino],
            (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.send(result); 
                }
            }
        );
    });

   

app.listen(3001, ()=>{
    console.log('Corriendo en el puerto 3001');
});

