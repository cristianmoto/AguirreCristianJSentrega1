

function calcularCosto() {
    let tipoVehiculo;
    let tipoVehiculoValido = false;

    
    while (!tipoVehiculoValido) {
      tipoVehiculo = parseInt(prompt('Ingrese el tipo de vehículo (1 para auto, 2 para camioneta, 3 para moto, 4 para salir):'));

      switch (tipoVehiculo) {
        case 1:
        case 2:
        case 3:
          tipoVehiculoValido = true;
          break;
        default:
          alert('Gracias por su visita');
          break;
      }
    }

    const horas = parseInt(prompt('Ingrese la cantidad de horas estacionado:'));

    let tarifaBase = 0;
    let tarifaPorHora = 0;

    switch (tipoVehiculo) {
      case 1:
        tarifaBase = 500;
        tarifaPorHora = 200;
        break;
      case 2:
        tarifaBase = 700;
        tarifaPorHora = 300;
        break;
      case 3:
        tarifaBase = 300;
        tarifaPorHora = 100;
        break;
      default:
        alert('Tipo de vehículo no reconocido');
        return;
    }

    
    const costoTotal = tarifaBase + (tarifaPorHora * horas);

    alert(`El costo total es: $${costoTotal}`);
    alert('Gracias por su visita');
  }

  
 calcularCosto();



