let motorSicakligi = 95;
let sensorZamanlayici;
let gecenzaman = 0;
let alarmsesi = new Audio('alarm.mp3');


function sistemiBaslat()  {
  
    document.getElementById('bilgiEkrani').style.color = 'lime';
    

    clearInterval(sensorZamanlayici);

    sensorZamanlayici = setInterval(function() { 
        document.getElementById('sicaklikCubugu').style.height = (motorSicakligi * 2) + 'px';
        document.getElementById('zamanEkrani').innerHTML = 'Gecen Süre:' + gecenzaman + 'saniye';
    
     

    motorSicakligi++;
    gecenzaman++;   

    
    
    if (motorSicakligi>105) { 
        alarmsesi.play();
        document.getElementById('bilgiEkrani').innerHTML = 'Sistem Asiri IsIndI. Motor Sicakligi: ' + motorSicakligi + ' °C';
        document.getElementById('bilgiEkrani').style.color ='red';
         document.getElementById('sicaklikCubugu').style.backgroundColor = 'red';
        
       
        
    } else {

        document.getElementById('bilgiEkrani').innerHTML = 'Sistem aktif. Motor Sicakligi: ' + motorSicakligi + ' °C';
        document.getElementById('bilgiEkrani').style.color = 'lime';
        document.getElementById('sicaklikCubugu').style.backgroundColor = 'lime';
        
    }
    

}, 1000);

}

function sistemiDurdur()  {

    clearInterval(sensorZamanlayici);

     document.getElementById('bilgiEkrani').innerHTML = 'Sistem durduruldu. Baglanti kesildi.';

     document.getElementById('bilgiEkrani').style.color ='red';
     

     motorSicakligi = 95;
     gecenzaman = 0;
}


function MotoruSogut() { 

    document.getElementById('bilgiEkrani').innerHTML = 'Motor Sogutuluyor .'; 

    document.getElementById('bilgiEkrani').style.color ='blue '; 

    document.getElementById('sicaklikCubugu').style.backgroundColor = 'blue';
    
    motorSicakligi = 85;

} 