const mysql = require('mysql2')

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "patodonal26",
    database: "sublime"
});

conexion.connect((err) => {
    if(err){
        console.log("ERROR EN CONCEXION");
        console.log(err)
       
   }else{
         console.log("CONEXION EXITOSA");
     }
 });

