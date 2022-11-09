let map;
let Position_Current = [0,0];

// path to csv data
//let path = "data/dunitz.csv";
let path = "data/Nico_Beer.csv";

let markers = L.featureGroup();
console.log(0)

// initialize jquery 利用
$(document).ready(function() {

// 	// map作成
console.log(10)
    createMap();

// 	// csv読み込み
// //	readCSV(path);
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

  //Thunder forest
  var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
  });
  CartoDB_DarkMatter.addTo(map);

  //OpenTopMap
  var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  OpenTopoMap.addTo(map);

  //GoogleMap
  var GoogleMap = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
  });
  GoogleMap.addTo(map);

  //LayerControll
  var baseMaps = {
     "OpenStreetMap": osm,
     "OpenToolMap": OpenTopoMap,
     "DarkMap": CartoDB_DarkMatter,
     "GoogleMap": GoogleMap
  };

  L.control.layers(baseMaps).addTo(map);

  // ズームコントローラーの位置を右下に変更
  map.zoomControl.setPosition('bottomright');

  // サイドメニューをマップに追加
  var sidebar = L.control.sidebar('sidebar').addTo(map);

  //現在地コントロール
   L.control.locate({ position: 'bottomleft' }).addTo(map);
  //L.control.zoom({ position: 'bottomleft' }).addTo(map);

  function onLocationFound(e) {
    L.marker(e.latlng).addTo(map).bindPopup("現在地").openPopup();
}

}


          //メッセージボックス
        //   // Messagebox
        //   console.log(110)
        // var message = '<p>messagebox</p>';
        // message += '<p><a href="https://github.com/tinuzz/leaflet-messagebox">GitHub Leaflet.Messagebox</a></p>';
        // console.log(120)
        // map.messagebox.setPosition('topright');
        // console.log(130)
        // map.messagebox.options.timeout = 10000; 
        // map.messagebox.show(message);
 // Martini->Jinriki
//  const Jinriki = $("Jinriki");
//  Jinriki.clickfunction (){
//     console.log(30)
//  }
function JinrikiClick(){
  console.log("人力スタート")
  // onLocationFound(e) {
    // Position_Current[0] = e.latlng.Latitude
    // Position_Current[1] = e.latlong.longitude
  // }
  console.log("人力エンド ")
}

function GetCurrentPosition(){
  console.log("現在位置取得スタート")
  console.log("現在位置取得エンド")
}