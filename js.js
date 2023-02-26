function fullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
    }
}

let grade = 0;

function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
    
    document.querySelector('.reloj').style.webkitFilter = 'hue-rotate('+ grade +'deg)';
    grade += 15;
    
    let year = date.getFullYear();
    let month = "enero";

    switch(date.getMonth() + 1) {
      case 1:
        month = "enero";
        break;
      case 2:
        month = "febrero";
        break;
      case 3:
        month = "marzo";
        break;
      case 4:
        month = "abril";
        break;
      case 5:
        month = "mayo";
        break;
      case 6:
        month = "junio";
        break;
      case 7:
        month = "julio";
        break;
      case 8:
        month = "agosto";
        break;
      case 9:
        month = "septiembre";
        break;
      case 10:
        month = "octubre";
        break;
      case 11:
        month = "noviembre";
        break;
      case 12:
        month = "diciembre";
        break;
      
      default:
        month = "error :c";
    }
    let day = date.getDate();
    let fecha = day + " de " + month + " de " + year;
    let weekDay = "Lunes";
    
    switch(date.getDay() + 1) {
      case 1:
        weekDay = "Domingo";
        break;
      case 2:
        weekDay = "Lunes";
        break;
      case 3:
        weekDay = "Martes";
        break;
      case 4:
        weekDay = "Miércoles";
        break;
      case 5:
        weekDay = "Jueves";
        break;
      case 6:
        weekDay = "Viernes";
        break;
      case 7:
        weekDay = "Sábado";
        break;

      default:
        weekDay = "error :c";
    }
    
    document.querySelector('#fecha').textContent = fecha;
    document.querySelector('#dia').textContent = weekDay;
}

showTime();