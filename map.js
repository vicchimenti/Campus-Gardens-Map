/***
 *  @file map.js
 *      Media Library ID: 4181392
 * 
 *  @see SU Grounds Map
 *  Google Map JS API
 * 
 */



 // *** Floating InfoWindow  ***  //
 function modifyTextBox(type, header, text) {
    $("#POITextBox").show();
    $("#POITextBox h5").html(header);
    $("#POITextBox p").html(text);
    $("#POITextBox").css("padding","5px 25px 15px 25px");
  
  	// Gardens/Blue
     if(type == 0){
     $("#POITextBox").css("border-left", "5px solid #47C3D3");
     $("#POITextBox h5").css("color", "#003282");
    }
	// Trees/Green
     if(type == 1){
     $("#POITextBox").css("border-left", "5px solid #6CCB3F");
     $("#POITextBox h5").css("color", "#333333");
     }
    // Athletic Fields/Yellow
    if(type == 2){
     $("#POITextBox").css("border-left", "5px solid #FDB913");
     $("#POITextBox h5").css("color", "#333333");
    }
    // Text Box Margins
    var margin = ($("#POITextBox").height() * -1) - 30;
    $("#POITextBox").css("margin", (margin + "px auto 10px auto"));
  }
  // *** End of Floating InfoWindow  ***  //
  
  
  // *** Floating InfoPopup  ***  //
  function modifyPinLabel(type, header, text) {
    $("#PinLabel").show();
    $("#PinLabel h5").html(header);
    $("#PinLabel p").html(text);
    $("#PinLabel").css("padding","5px 15px 15px 15px");
     
	 // Gardens/Blue
     if(type == 0){
     $("#PinLabel").css("border-left", "5px solid #47C3D3");
     $("#PinLabel h5").css("color", "#003282");
    }
	// Trees/Green
     if(type == 1){
     $("#PinLabel").css("border-left", "5px solid #6CCB3F");
     $("#PinLabel h5").css("color", "#333333");
     }
    // Athletic Fields/Yellow
    if(type == 2){
      $("#PinLabel").css("border-left", "5px solid #FDB913");
      $("#PinLabel h5").css("color", "#333333");
    }
    // Pin Label Margins
    var margin = ($("#PinLabel").height() * -1) - 30;
    $("#PinLabel").css("margin", (margin + "px auto 10px auto"));
  }
  
  // Close other key menus when point is clicked
  const categories = ['One', 'Two', 'Three'];
  function closeMenuExcept (key) {
    for (let cat of categories) {
      const category = `category${cat}`;
      if (!(category === key)) {
        if (isOpen(category)) {
          document.querySelector(`#${category} > div > button`).click();
        }
      }
    }
  }
  
  // Helper function to determine whether a menu is open.
  function isOpen (key) {
    return document.querySelector(`[aria-labelledby="${key}"]`).ariaExpanded === 'true'
  }
  
  // Toggles menu key category
  function openKey (key) {
    const val = () => {
      switch (key) {
        case 1: return categories[0]
        case 2: return categories[1]
        case 3: return categories[2]
      }
    }
    const category = `category${val()}`;
    closeMenuExcept(category);
    if (!isOpen(category)) {
      document.querySelector(`#${category} > div > button`).click();
    }
  } 
  
  //  *** Implementation of initialize function ***  //
  function initialize() {

    //  ***  Campus Primary Location  ***  //
    var seattleu = {
        lat: 47.610399,
        lng: -122.318070
    }

    //  ***  Campus Map Control Settings  ***  //
    var map = new google.maps.Map(document.getElementById('SeattlePOIMap'), {
        center: seattleu,
        streetViewControl: false,
        scaleControl: true,
        zoomControl: true,
        mapTypeControl: true,
        fullscreenControl: false,
        mapTypeId: 'roadmap',
        zoom: 11,
        //  *** Map style from Snazzy Maps (Blue Water) start ***  //
        styles: [{
        // Land
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }],
        }, {
        // Points of Interest
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }],
        }, {
        // Businesses
        "featureType": "poi.business",
        "stylers": [{
            "visibility": "off"
        }], 
        }, {
        // Roads
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }],
        }, {
        // Local Roads
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }],
        }, {
        // Transit
        "featureType": "transit",
        "stylers": [{
            "visibility": "off"
        }],
        }, {
        // Water
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#04A9C5"
        }, {
            "visibility": "on"
        }],
        }],
    });

    // Click Listener for Text Box
    map.addListener('click', function() {
        $("#POITextBox").hide();
    });
    // Click Listener for Text Box
    map.addListener('click', function() {
        $("#PinLabel").hide();
    });
    //  *** Map style end ***  //


    //  *** Map markers start ***  //

    //  *** Map marker url list start ***  //
    var icons = {
        // SU Icon
        seattleUIcon: {
        icon: 'https://www.seattleu.edu/media/graduate-admissions/images/graduate-viewbook/sulogo.png'
        },
        // Significant Gardens Icon
        significantGardensIcon: {
        icon: 'https://www.seattleu.edu/media/student-development/Marker_Blue.png'
        },
        // Notable Trees Icon
        notableTreesIcon: {
        icon: 'https://www.seattleu.edu/media/student-development/Marker_Green.png'
        },
        // Athletic Fields Icon
        athleticFieldsIcon: {
        icon: 'https://www.seattleu.edu/media/student-development/Marker_Yellow.png'
        },
    };
    //  *** Map marker url list end ***  //


    //  ***  click listeners for map icons ***  //

    //  *** Seattle University Main Campus Marker ***  //
    var seattleuMarker = new google.maps.Marker({
        position: seattleu,
        icon: icons['seattleUIcon'].icon,
        map: map,
        optimized: false,
        zIndex: 100,
    });
    seattleuMarker.addListener('click', function() {
        map.setZoom(19);
        map.setCenter(seattleuMarker.getPosition());
        modifyTextBox(2, "Seattle University", "Seattle University, founded in 1891, is a Jesuit Catholic university located on 50 acres in Seattle's Capitol Hill neighborhood.");
    });
    // create mouseover listener for marker label
    seattleuMarker.addListener('mouseover', function() {
        modifyTextBox(2, "Seattle University", "Seattle University, founded in 1891, is a Jesuit Catholic university located on 50 acres in Seattle's Capitol Hill neighborhood.");
    });
    // Click Listener for Pin Labels
    seattleuMarker.addListener('mouseout', function() {
        $("#POITextBox").hide();
    });

    //  *** Significan Gardens/yellow Markers start ***  //

    //  ***  Kubota Gardens  ***  //
    var kubotaLegacyMarker = new google.maps.Marker({
        position: {
        lat: 47.512419,
        lng: -122.265348
        },
        icon: icons['significantGardensIcon'].icon,
        map: map,
    });
    // create variable to store b-coloumn link ID
    var kubotaLegacyLink = document.getElementById('kubotaLegacy');
    // create object to store Info Box attributes
    var kubotaLegacyObj = {linkId: kubotaLegacyLink, linkName: 'Kubota Legacy Garden', linkDesc: "Description goes here"};
    // create dom listener for b-coloumn anchor link
    google.maps.event.addDomListener(kubotaLegacyLink, 'click', function() {
        map.setZoom(14);
        map.setCenter(kubotaLegacyMarker.getPosition());
        modifyTextBox(0, kubotaLegacyObj.linkName, kubotaLegacyObj.linkDesc);
    });
    // create click listener for marker
    kubotaLegacyMarker.addListener('click', function() {
        map.setZoom(14);
        map.setCenter(kubotaLegacyMarker.getPosition());
        modifyTextBox(0, kubotaLegacyObj.linkName, kubotaLegacyObj.linkDesc);
        $("#PinLabel").hide();
        openKey(1);
    });
    // create mouseover listener for marker label
    kubotaLegacyMarker.addListener('mouseover', function() {
        modifyPinLabel(0, "Significant Gardens", kubotaLegacyObj.linkName);
        $("#POITextBox").hide();
    });
    // Click Listener for Pin Labels
    kubotaLegacyMarker.addListener('mouseout', function() {
        $("#PinLabel").hide();
    });



    //  *** Notable Trees Markers end ***  //


    //  *** Athletic Fields/red Markers start ***  //

    //  ***  Championship Field Varsity Soccer  ***  //
    var championshipFieldMarker = new google.maps.Marker({
        position: {
        lat: 47.606935,
        lng: -122.314815
        },
        icon: icons['athleticFieldsIcon'].icon,
        map: map,
    });
    // create variable to store b-coloumn link ID
    var championshipFieldLink = document.getElementById('championshipField');
    // create object to store Info Box attributes
    var championshipFieldObj = {linkId: championshipFieldLink, linkName: 'Championship Field Varsity Soccer', linkDesc: "Description goes here"};
    // create dom listener for b-coloumn anchor link
    google.maps.event.addDomListener(championshipFieldLink, 'click', function() {
        map.setZoom(19);
        map.setCenter(championshipFieldMarker.getPosition());
        modifyTextBox(2, championshipFieldObj.linkName, championshipFieldObj.linkDesc);
    });
    // create click listener for marker
    championshipFieldtMarker.addListener('click', function() {
        map.setZoom(19);
        map.setCenter(championshipFieldMarker.getPosition());
        modifyTextBox(2, championshipFieldObj.linkName, championshipFieldObj.linkDesc);
        $("#PinLabel").hide();
        openKey(3);
    });
    // create mouseover listener for marker label
    championshipFieldMarker.addListener('mouseover', function() {
        modifyPinLabel(2, "Athletic Fields", championshipFieldObj.linkName);
        $("#POITextBox").hide();
    });
    // Click Listener for Pin Labels
    championshipFieldMarker.addListener('mouseout', function() {
        $("#PinLabel").hide();
    });


    

    //  *** End of Google Map JavaScript ***  //
 



}

  initialize();
  
  

/***
 *  Media Library ID: 4181392
 *  map.js
 * 
 */
