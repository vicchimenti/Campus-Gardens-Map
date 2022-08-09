//  ***  Cisco Morris   ***  //
var ciscoMorrisMarker = new google.maps.Marker({
    position: {
    lat: 47.609861,
    lng: -122.319890
    },
    icon: icons['significantGardensIcon'].icon,
    map: map,
});
// create variable to store b-coloumn link ID
var ciscoMorrisLink = document.getElementById('ciscoMorris');
// create object to store Info Box attributes
var ciscoMorrisObj = {linkId: ciscoMorrisLink, linkName: 'Cisco Morris Biodiversity', linkDesc: "Description goes here"};
// create dom listener for b-coloumn anchor link
google.maps.event.addDomListener(ciscoMorrisLink, 'click', function() {
    map.setZoom(19);
    map.setCenter(ciscoMorrisMarker.getPosition());
    modifyTextBox(0, ciscoMorrisObj.linkName, ciscoMorrisObj.linkDesc);
});
// create click listener for marker
ciscoMorrisMarker.addListener('click', function() {
    map.setZoom(19);
    map.setCenter(ciscoMorrisMarker.getPosition());
    modifyTextBox(0, ciscoMorrisObj.linkName, ciscoMorrisObj.linkDesc);
    $("#PinLabel").hide();
    openKey(1);
});
// create mouseover listener for marker label
ciscoMorrisMarker.addListener('mouseover', function() {
    modifyPinLabel(0, "Significant Gardens", ciscoMorrisObj.linkName);
    $("#POITextBox").hide();
});
// Click Listener for Pin Labels
ciscoMorrisMarker.addListener('mouseout', function() {
    $("#PinLabel").hide();
});

//  *** Lee Miley Rain Garden  ***  //
var rainGardenMarker = new google.maps.Marker({
    position: {
    lat: 47.611839,
    lng: -122.317916
    },
    icon: icons['significantGardensIcon'].icon,
    map: map,
});
// create variable to store b-coloumn link ID
var rainGardenLink = document.getElementById('rainGarden');
// create object to store Info Box attributes
var rainGardenObj = {linkId: rainGardenLink, linkName: 'Lee Miley Rain Garden', linkDesc: "Description goes here"};
// create dom listener for b-coloumn anchor link
google.maps.event.addDomListener(rainGardenLink, 'click', function() {
    map.setZoom(19);
    map.setCenter(rainGardenMarker.getPosition());
    modifyTextBox(0, rainGardenObj.linkName, rainGardenObj.linkDesc);
});
// create click listener for marker
rainGardenMarker.addListener('click', function() {
    map.setZoom(19);
    map.setCenter(rainGardenMarker.getPosition());
    modifyTextBox(0, rainGardenObj.linkName, rainGardenObj.linkDesc);
    $("#PinLabel").hide();
    openKey(1);
});
// create mouseover listener for marker label
rainGardenMarker.addListener('mouseover', function() {
    modifyPinLabel(0, "Significant Gardens", rainGardenObj.linkName);
    $("#POITextBox").hide();
});
// Click Listener for Pin Labels
rainGardenMarker.addListener('mouseout', function() {
    $("#PinLabel").hide();
});


//  ***  VHILB Ethnobotanical  ***  //
var VHILBMarker = new google.maps.Marker({
    position: {
    lat: 47.608208,
    lng: -122.319225
    },
    icon: icons['significantGardensIcon'].icon,
    map: map,
});
// create variable to store b-coloumn link ID
var VHILBLink = document.getElementById('VHILB');
// create object to store Info Box attributes
var VHILBObj = {linkId: VHILBLink, linkName: 'Vi Hilbert Ethnobotanical Garden', linkDesc: "Description goes here"};
// create dom listener for b-coloumn anchor link
google.maps.event.addDomListener(VHILBLink, 'click', function() {
    map.setZoom(19);
    map.setCenter(VHILBMarker.getPosition());
    modifyTextBox(0, VHILBObj.linkName, VHILBObj.linkDesc);
});
// create click listener for marker
VHILBMarker.addListener('click', function() {
    map.setZoom(19);
    map.setCenter(VHILBMarker.getPosition());
    modifyTextBox(0, VHILBObj.linkName, VHILBObj.linkDesc);
    $("#PinLabel").hide();
    openKey(1);
});
// create mouseover listener for marker label
VHILBMarker.addListener('mouseover', function() {
    modifyPinLabel(0, "Significant Gardens", VHILBObj.linkName);
    $("#POITextBox").hide();
});
// Click Listener for Pin Labels
VHILBMarker.addListener('mouseout', function() {
    $("#PinLabel").hide();
});


//  ***  Edible Campus  ***  //
var edibleCampusMarker = new google.maps.Marker({
    position: {
    lat: 47.606957,
    lng: -122.318012
    },
    icon: icons['significantGardensIcon'].icon,
    map: map,
});
// create variable to store b-coloumn link ID
var edibleCampusLink = document.getElementById('edibleCampus');
// create object to store Info Box attributes
var edibleCampusObj = {linkId: edibleCampusLink, linkName: 'Edible Campus', linkDesc: "Description goes here"};
// create dom listener for b-coloumn anchor link
google.maps.event.addDomListener(edibleCampusLink, 'click', function() {
    map.setZoom(19);
    map.setCenter(edibleCampusMarker.getPosition());
    modifyTextBox(0, edibleCampusObj.linkName, edibleCampusObj.linkDesc);
});
// create click listener for marker
edibleCampusMarker.addListener('click', function() {
    map.setZoom(19);
    map.setCenter(edibleCampusMarker.getPosition());
    modifyTextBox(0, edibleCampusObj.linkName, edibleCampusObj.linkDesc);
    $("#PinLabel").hide();
    openKey(1);
});
// create mouseover listener for marker label
edibleCampusMarker.addListener('mouseover', function() {
    modifyPinLabel(0, "Significant Gardens", edibleCampusObj.linkName);
    $("#POITextBox").hide();
});
// Click Listener for Pin Labels
edibleCampusMarker.addListener('mouseout', function() {
    $("#PinLabel").hide();
});
//  *** Significant Gardens markers end ***  //



//  *** Notable Trees/Green Markers start ***  //

//  ***  Kubota Trees  ***  //
var kubotaTreesMarker = new google.maps.Marker({
    position: {
    lat: 47.610204,
    lng: -122.317730
    },
    icon: icons['notableTreesIcon'].icon,
    map: map,
});
// create variable to store b-coloumn link ID
var kubotaTreesLink = document.getElementById('kubotaTrees');
// create object to store Info Box attributes
var kubotaTreesObj = {linkId: kubotaTreesLink, linkName: 'Kubota Trees', linkDesc: "Description goes here."};
// create dom listener for b-coloumn anchor link
google.maps.event.addDomListener(kubotaTreesLink, 'click', function() {
    map.setZoom(19);
    map.setCenter(kubotaTreesMarker.getPosition());
    modifyTextBox(1, kubotaTreesObj.linkName, kubotaTreesObj.linkDesc);
});
// create click listener for marker
kubotaTreesMarker.addListener('click', function() {
    map.setZoom(19);
    map.setCenter(kubotaTreesMarker.getPosition());
    modifyTextBox(1, kubotaTreesObj.linkName, kubotaTreesObj.linkDesc);
    $("#PinLabel").hide();
    openKey(2);
});
// create mouseover listener for marker label
kubotaTreesMarker.addListener('mouseover', function() {
    modifyPinLabel(1, "Notable Trees", kubotaTreesObj.linkName);
    $("#POITextBox").hide();
});
// Click Listener for Pin Labels
kubotaTreesMarker.addListener('mouseout', function() {
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

//  ***  Seattle University Park  ***  //
var universityParkMarker = new google.maps.Marker({
    position: {
    lat: 47.607333,
    lng: -122.317648
    },
    icon: icons['athleticFieldsIcon'].icon,
    map: map,
});
// create variable to store b-coloumn link ID
var universityParkLink = document.getElementById('universityPark');
// create object to store Info Box attributes
var universityParkObj = {linkId: universityParkLink, linkName: 'University Park', linkDesc: "Description goes here"};
// create dom listener for b-coloumn anchor link
google.maps.event.addDomListener(universityParkLink, 'click', function() {
    map.setZoom(19);
    map.setCenter(universityParkMarker.getPosition());
    modifyTextBox(2, universityParkObj.linkName, universityParkObj.linkDesc);
});
// create click listener for marker
universityParkMarker.addListener('click', function() {
    map.setZoom(19);
    map.setCenter(universityParkMarker.getPosition());
    modifyTextBox(2, universityParkObj.linkName, universityParkObj.linkDesc);
    $("#PinLabel").hide();
    openKey(3);
});
// create mouseover listener for marker label
universityParkMarker.addListener('mouseover', function() {
    modifyPinLabel(2, "Athletic Fields", universityParkObj.linkName);
    $("#POITextBox").hide();
});
// Click Listener for Pin Labels
universityParkMarker.addListener('mouseout', function() {
    $("#PinLabel").hide();
});

//  ***  Logan Field Varsity Softball  ***  //
var loganFieldMarker = new google.maps.Marker({
    position: {
    lat: 47.606881,
    lng: -122.317391
    },
    icon: icons['athleticFieldsIcon'].icon,
    map: map,
});


// create variable to store b-coloumn link ID
var loganFieldLink = document.getElementById('loganField');
// create object to store Info Box attributes
var loganFieldObj = {linkId: loganFieldLink, linkName: 'Logan Field Varsity Softball', linkDesc: "Description goes here"};
// create dom listener for b-coloumn anchor link

google.maps.event.addDomListener(loganFieldLink, 'click', function() {
    map.setZoom(19);
    map.setCenter(loganFieldMarker.getPosition());
    modifyTextBox(2, loganFieldObj.linkName, loganFieldObj.linkDesc);
});

// create click listener for marker
loganFieldMarker.addListener('click', function() {
    map.setZoom(19);
    map.setCenter(loganFieldMarker.getPosition());
    modifyTextBox(2, loganFieldObj.linkName, loganFieldObj.linkDesc);
    $("#PinLabel").hide();
    openKey(3);
});

// create mouseover listener for marker label
loganFieldMarker.addListener('mouseover', function() {
    modifyPinLabel(2, "Athletic Fields", loganFieldObj.linkName);
    $("#POITextBox").hide();
});

// Click Listener for Pin Labels
loganFieldMarker.addListener('mouseout', function() {
    $("#PinLabel").hide();
});


//  *** Athletic Fields Markers end ***  //