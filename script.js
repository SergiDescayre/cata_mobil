function obtenerHoraFormato() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let seconds = ahora.getSeconds()
  
    // Agregamos un cero al inicio si es necesario para horas y minutos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    seconds = seconds < 10 ? "0" + seconds : seconds
  
    document.querySelector(".hour").textContent=horas + ':' + minutos + ':' + seconds
  }
  
  setInterval(obtenerHoraFormato,1000)

  
  