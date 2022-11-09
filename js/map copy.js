
    // Map初期化
    var map = L.map('map').setView([36.104776, 140.1019339], 12);

    // osm Layer
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    osm.addTo(map)

    //Thunder forest
    var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    });

    CartoDB_DarkMatter.addTo(map)

    //動いた
    var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
    OpenTopoMap.addTo(map)

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

// メニューバー
    // Slide Menu Content Html
    var header  = '<h1 class="cstm-slidmenu-header">Slide Menu</h1>';
    var contents = '<ul class="cstm-slidmenu-content">';
    contents += '<li>コンテンツ</li>';
    contents += '<li><i class="fab fa-github"></i> <a href="https://github.com/unbam/Leaflet.SlideMenu" target="_blank">GitHub</a></li>';
    contents += '</ul>';

    // SlideMenu
    var options = {
        width: '40%',
        height: '95%'
    }
    L.control.slideMenu(header + contents, options).addTo(map);    