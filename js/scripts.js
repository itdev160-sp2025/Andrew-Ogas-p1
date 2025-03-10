//setting keg temperature display
var kegTemp = 32;
var kegTempDisplay = "Temp: " + kegTemp + "&deg;F";

var setKegTemp = document.getElementById("sysTemp");
setKegTemp.innerHTML = kegTempDisplay;

//set keg1 values
var keg1Contents = "Imperial IPA, 12% ABV";
var keg1Pressure = 10;
var keg1Volume = 75;

var keg1VolumeDisplayValue = keg1Volume / 100;
var keg1ContentsDisplay = "Contents: " + keg1Contents;
var keg1PressureDisplay = "Pressure: " + keg1Pressure + "psi";
var keg1VolumeDisplay = keg1Volume + "%";

var setKeg1Contents = document.getElementById("keg1Contents");
var setKeg1Pressure = document.getElementById("keg1Pressure");
var setKeg1Volume = document.getElementById("keg1Volume");
document.documentElement.style.setProperty('--keg1VolumeBar', keg1VolumeDisplayValue);

setKeg1Contents.textContent = keg1ContentsDisplay;
setKeg1Pressure.textContent = keg1PressureDisplay;
setKeg1Volume.textContent = keg1VolumeDisplay;


// set keg2 values
var keg2Contents = "Hard Cider, 6% ABV";
var keg2Pressure = 10;
var keg2Volume = 50;

var keg2VolumeDisplayValue = keg2Volume / 100;
var keg2ContentsDisplay = "Contents: " + keg2Contents;
var keg2PressureDisplay = "Pressure: " + keg2Pressure + "psi";
var keg2VolumeDisplay = keg2Volume + "%";

var setKeg2Contents = document.getElementById("keg2Contents");
var setKeg2Pressure = document.getElementById("keg2Pressure");
var setKeg2Volume = document.getElementById("keg2Volume");
document.documentElement.style.setProperty('--keg2VolumeBar', keg2VolumeDisplayValue);

setKeg2Contents.textContent = keg2ContentsDisplay;
setKeg2Pressure.textContent = keg2PressureDisplay;
setKeg2Volume.textContent = keg2VolumeDisplay;

// set product quantities
var bev1Quantity = 5;
var bev2Quantity = 6;
var bev3Quantity = 2;
var bev4Quantity = 4;

var setBev1Quantity = document.getElementById("bevQ1");
var setBev2Quantity = document.getElementById("bevQ2");
var setBev3Quantity = document.getElementById("bevQ3");
var setBev4Quantity = document.getElementById("bevQ4");

setBev1Quantity.textContent = bev1Quantity;
setBev2Quantity.textContent = bev2Quantity;
setBev3Quantity.textContent = bev3Quantity;
setBev4Quantity.textContent = bev4Quantity;

// set system access display
var accessLevel = "General";
var accessColor = "green";
var setAccessLevel = document.getElementById("currentAccessLevel");

setAccessLevel.textContent = accessLevel;
document.documentElement.style.setProperty('--accessColor', accessColor);