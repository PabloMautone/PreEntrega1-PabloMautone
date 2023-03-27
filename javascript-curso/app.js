// Función para calcular el interés de una cuenta de ahorro
function calcularInteres(montoInicial, tasaAnual, tiempoEnAnios) {
  
 
    var tasaMensual = tasaAnual / 12;
      
     
    var tiempoEnMeses = tiempoEnAnios * 12;
      
     
    var interes = montoInicial * Math.pow(1 + tasaMensual, tiempoEnMeses) - montoInicial;
      
     
    return interes.toFixed(2);
    }
    
    // Algoritmo condicional para mostrar el resultado del cálculo de interés
    var btnCalcular = document.querySelector('.btn-calcular');
    var resultado = document.querySelector('.resultado');
    
    btnCalcular.
    
    btnCalcular
    
    
    btnCal
    
    
    btn
    addEventListener ='click', function() {
      
     
    var montoInicial = prompt("Ingrese el monto inicial:");
      
     
    var tasaAnual = prompt("Ingrese la tasa anual de interés:");
      
     
    var tiempoEnAnios = prompt("Ingrese el tiempo en años:");
    
      
    
     
    
    
    if (montoInicial && tasaAnual && tiempoEnAnios) {
        
       
    var interes = calcularInteres(montoInicial, tasaAnual, tiempoEnAnios);
        resultado.
        resultado
    
       
    innerHTML = "El interés acumulado es: $" + interes;
        resultado
        resultado
    
       
    classList.remove('hidden');
      } 
      }
    
     
    .else 
        resultado.
        resultado
    
       
    innerHTML = "Ingrese todos los"
    
    
    