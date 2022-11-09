// global variables
let map;

// path to csv data
//let path = "data/dunitz.csv";
//let path = "data/Nico_Beer.csv";

let markers = L.featureGroup();

// initialize
$( document ).ready(function() {

	// map作成
    createMap();

	// csv読み込み
	readCSV(path);
});

// create the map
function createMap(){
	map = L.map('map').setView([0,0],3);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}