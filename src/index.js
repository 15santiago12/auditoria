const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path= require('path');
const bodyParser = require('body-parser');


//inicio 
const app = express();

//configuraciones
app.set('port',process.env.PORT || 4000);

//variables globales 
app.use((req, res, next)=>{
    next();
});

//peticiones 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

//const 
const UsuarioRuta = require('./rutas/usuarios');
const MascotasRuta = require('./rutas/mascotas');
const MedicamentosRuta = require('./rutas/medicamentos');
const AccesoriosRuta = require('./rutas/accesorios');
const ExamanesRuta = require('./rutas/examenes');
const ServiciosRuta = require('./rutas/servicios');
const VacunasRuta = require('./rutas/vacunas');
const GuaerderiaRuta = require('./rutas/guarderia');
const HospitalRuta = require('./rutas/hospitalizacion');
const EmpeladoRuta = require('./rutas/empleados');

//rutas 

app.use("/usuarios",UsuarioRuta);
app.use("/mascotas",MascotasRuta);
app.use("/medicamentos",MedicamentosRuta);
app.use("/accesorios",AccesoriosRuta);
app.use("/examenes",ExamanesRuta);
app.use("/servicios",ServiciosRuta);
app.use("/vacunas",VacunasRuta);
app.use("/guarderia",GuaerderiaRuta);
app.use("/hospitalizacion", HospitalRuta);
app.use("/empleados",EmpeladoRuta);


//public 
app.unsubscribe(express.static(path.join(__dirname,'public')));
//iniciar el servidor 
app.listen(app.get('port'),()=>{
    console.log('servidor conectado en puerto:',app.get('port'));
});