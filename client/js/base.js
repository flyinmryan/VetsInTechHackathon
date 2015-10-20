$(function() {
  console.log("JS LOADED");
  var map,
      mapDiv = document.getElementById('map-canvas'),
      markersArray = [];
      // infowindow = new google.maps.InfoWindow(); // Global declaration of the infowindow  


// ===============================================
// LOAD MAP, GET ISSUE DATA, BUILD INFO WINDOWS ==
// ===============================================
//initializes map, makes an ajax call to server to get issue locations and data
  function initialize() {
  
    var mapOptions = {
      zoom: 4,
      center: {lat: 39.50, lng: -98.35},
      // mapTypeId: google.maps.MapTypeId.TERRAIN //Terrain style map, but it doesn't show street names
     
    };

    map = new google.maps.Map(mapDiv,mapOptions); //builds map in #map-canvas DIV, with the above options. Current view set to show all of US.

         


    locateMe();
    twilioSend();
  }

  initialize();


    function twilioSend () {
    var client = require('twilio')('AC5b532f070424194b2ccbf5d3d457edf4', '40ade4f8b031e6ecf0b386d60a602c7f');
  ​
    client.sendMessage({
        to:'+16503050025', // the number for the phone in your pocket
        from:'+14153002528', // your Twilio number
        body:'Your service request has been received.' + 
        'We will have someone come and take care of your vehicle.' // The body of the text message
    }, function(error, message) {
        // This callback is executed when the request completes
        if (error) {
            console.error('Dagnabit.  We couldn\'t send the message');
        } else {
            console.log('Message sent! Message id: '+message.sid);
        }
    });
  }



// ==========================================
// GEOLOCATING USER AND MARKING LOCATION ====
// ==========================================

//geo-locate function on button click
  function locateMe (){
      new google.maps.Marker({
              map: map,
              position: {lat: 37.461255, lng: -122.139101},
              animation: google.maps.Animation.DROP,
              title: 'Charging Station',
              icon: '/img/chargpin.png'
      });

      new google.maps.Marker({
              map: map,
              position: {lat: 37.454937, lng: -122.149103},
              animation: google.maps.Animation.DROP,
              title: 'Driver',
              icon: '/img/driverpin.png'
      });
     $('#loader-container').show(); 
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);

          //place a moveable pin on users location
          var myLocation = new google.maps.Marker({
            map: map,
            position: pos,
            animation: google.maps.Animation.DROP,
            title: 'My Location',
            icon: '/img/mepin.png'
          });     
        //zoom to users location
          map.setCenter(pos);
          map.setZoom(13);
          $('#loader-container').hide();
        }, function() {
          handleNoGeolocation(true);
        });
      } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
      }
  };

//error handling if geolocation doesn't work or is denied
  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }
    //if geo-locate doesn't work, go back to start view and display error message in a call-out window
    var options = {
      map: map,
      position: new google.maps.LatLng(39.50, -98.35),
      zoom: 8,
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }

});