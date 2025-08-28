import { check } from 'k6';

export function validarRespuesta(res) {
  return check(res, {
    'status es 200 : (r) => r.status === 200 ,
    'tiempo de respuesta < 5s': (r) => r.timings.duration < 5000,
  });
  
}
