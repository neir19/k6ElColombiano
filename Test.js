import http from 'k6/http';
import { sleep } from 'k6';
import { configurarEscenario } from './Funcion.js';
import {validarRespuesta } from './Validacion.js';

export const options = {
  scenarios: Object.assign(
      configurarEscenario('escenario1', 30, 30, '30s'),
      configurarEscenario('escenario2', 30, 30, '60s'),
      configurarEscenario('escenario3', 50, 50, '30s'),
      configurarEscenario('escenario4', 50, 50, '60s')
  ),
thresholds: {
  http_req_duration: ['p(95)<5000'], 
  checks: ['rate>0.95'],
},

};
export default function () {
  console.log("Iniciando prueba de navegador...");
  let res = http.get('https://www.elcolombiano.com/');
  
  validarRespuesta(res)

  sleep(1); 
}
