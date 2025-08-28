export function configurarEscenario(nombre, vus, iteraciones, maxDuration) {
  return {
    [nombre]: {
      executor: 'shared-iterations',
      vus: vus,
      iterations: iteraciones,
      maxDuration: maxDuration,
    },
  };
}