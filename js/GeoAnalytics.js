/*
  GeoANalytics.js

*/

// Global変数
let map;
let Position_Current = [0,0];
let baseMaps;



// path to csv data
let path = "data/Udon.csv";

let markers = L.featureGroup();
console.log(0)

// initialize jquery 利用
$(document).ready(function() {

  // 	// map作成
  console.log(10)
    createMap();

	// csv読み込み
	readCSV(path);
});

// Mapの基本設定
function createMap(){
  map = L.map('mapid',{
    center: [36.0704404, 140.1205564],
    zoom: 15,
    // minZoom: 13,
    // maxZoom: 16
  });

  var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
  })
  osm.addTo(map);

  // //Thunder forest
  // var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  //       subdomains: 'abcd',
  //       maxZoom: 20
  // });
  // CartoDB_DarkMatter.addTo(map);

  // //OpenTopMap
  // var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 17,
  //     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  // });
  // OpenTopoMap.addTo(map);

  //GoogleMap
  var GoogleMap = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
  });
  GoogleMap.addTo(map);

  //basemapLayerControll
  baseMaps = {
     "OpenStreetMap": osm,
    //  "OpenToolMap": OpenTopoMap,
    //  "DarkMap": CartoDB_DarkMatter,
     "GoogleMap": GoogleMap
  };


  //マップ種類コントロールをマップに追加
  // L.control.layers(baseMaps).addTo(map);

  // ズームコントローラーの位置を右下に変更
  map.zoomControl.setPosition('bottomright');

  // サイドメニューをマップに追加
  var sidebar = L.control.sidebar('sidebar').addTo(map);

  // //現在地コントロール
  //  L.control.locate({ position: 'bottomleft' }).addTo(map);
  //L.control.zoom({ position: 'bottomleft' }).addTo(map);

  if(!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!")
  } else {
      setInterval(() => {
          navigator.geolocation.getCurrentPosition(getPosition)
      }, 5000);
    
  }

  var marker, circle;
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
     現在地取得
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
  function getPosition(position){
      // console.log(position)
      var lat = position.coords.latitude
      var long = position.coords.longitude
//      var accuracy = position.coords.accuracy

      if(marker) {
          map.removeLayer(marker)
      }

      // if(circle) {
      //     map.removeLayer(circle)
      // }

      marker = L.marker([lat, long])
//      circle = L.circle([lat, long], {radius: accuracy})

      var featureGroup = L.featureGroup([marker]).addTo(map)

      // map.fitBounds(featureGroup.getBounds())

      console.log("Your coordinate is: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
  }



}

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
     CSV読み込み
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
// function to read csv data
function readCSV(){
  console.log("readCSV START")
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}

	});
  console.log("readCSV END")
}

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
     CSVデータのマッピング
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
function mapCSV(data){
	
	// loop through each entry
	data.data.forEach(function(item,index){
		// create marker
		let marker = L.marker([item.latitude,item.longitude])

		// add marker to featuregroup
		markers.addLayer(marker)
	})

	// add featuregroup to map
	markers.addTo(map)

  // featuregroupのコントローる表示
  var overlayer2 = {
    "Markers" : markers
  };
  // L.control.layers(baseMaps).addTo(map);
  L.control.layers(baseMaps,overlayer2).addTo(map)



	// fit markers to map
	map.fitBounds(markers.getBounds())
}

function GetCurrentPosition(){
  console.log("現在位置取得スタート")

  console.log("現在位置取得エンド")
}