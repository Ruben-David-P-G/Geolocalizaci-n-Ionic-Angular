import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Swal from 'sweetalert2'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  mi_ubicacion(){

    var onSuccess = function(position) {
      var element = document.getElementById('geolocation');
      element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitud: ' + position.coords.longitude     + '<br />' +
                            'Marca de tiempo: : ' + position.timestamp     + '<br />' +
                            '<hr />'      + element.innerHTML;

      Swal.fire('Latitude: '          + position.coords.latitude          + '<br>' +
            'Longitud: '         + position.coords.longitude         + '<br>' +
            'Altitud: '          + position.coords.altitude          + '<br>' +
            'Precisión: '          + position.coords.accuracy          + '<br>' +
            'Precisión de altitud: ' + position.coords.altitudeAccuracy  + '<br>' +
            'Encabezado: '           + position.coords.heading           + '<br>' +
            'Velocidad: '             + position.coords.speed             + '<br>' +
            'Marca de tiempo: '         + position.timestamp                + '<br>','','info');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

  }
}

