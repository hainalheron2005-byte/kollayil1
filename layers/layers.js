ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([77.056753, 8.326997, 77.175977, 8.437939]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_wards_2 = new ol.format.GeoJSON();
var features_wards_2 = format_wards_2.readFeatures(json_wards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_wards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wards_2.addFeatures(features_wards_2);
var lyr_wards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wards_2, 
                style: style_wards_2,
                popuplayertitle: 'wards',
                interactive: false,
                title: '<img src="styles/legend/wards_2.png" /> wards'
            });
var format_geology_3 = new ol.format.GeoJSON();
var features_geology_3 = format_geology_3.readFeatures(json_geology_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_geology_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geology_3.addFeatures(features_geology_3);
var lyr_geology_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geology_3, 
                style: style_geology_3,
                popuplayertitle: 'geology',
                interactive: false,
                title: '<img src="styles/legend/geology_3.png" /> geology'
            });
var format_geomorphology_4 = new ol.format.GeoJSON();
var features_geomorphology_4 = format_geomorphology_4.readFeatures(json_geomorphology_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_geomorphology_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphology_4.addFeatures(features_geomorphology_4);
var lyr_geomorphology_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphology_4, 
                style: style_geomorphology_4,
                popuplayertitle: ' geomorphology',
                interactive: false,
                title: '<img src="styles/legend/geomorphology_4.png" />  geomorphology'
            });
var format_drainage_5 = new ol.format.GeoJSON();
var features_drainage_5 = format_drainage_5.readFeatures(json_drainage_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_drainage_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainage_5.addFeatures(features_drainage_5);
var lyr_drainage_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainage_5, 
                style: style_drainage_5,
                popuplayertitle: 'drainage',
                interactive: false,
                title: '<img src="styles/legend/drainage_5.png" /> drainage'
            });
var format_gba_buildings_6 = new ol.format.GeoJSON();
var features_gba_buildings_6 = format_gba_buildings_6.readFeatures(json_gba_buildings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_gba_buildings_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gba_buildings_6.addFeatures(features_gba_buildings_6);
var lyr_gba_buildings_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gba_buildings_6, 
                style: style_gba_buildings_6,
                popuplayertitle: 'gba_buildings',
                interactive: false,
                title: '<img src="styles/legend/gba_buildings_6.png" /> gba_buildings'
            });
var format_buliding_7 = new ol.format.GeoJSON();
var features_buliding_7 = format_buliding_7.readFeatures(json_buliding_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_buliding_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buliding_7.addFeatures(features_buliding_7);
var lyr_buliding_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buliding_7, 
                style: style_buliding_7,
                popuplayertitle: 'buliding',
                interactive: false,
                title: '<img src="styles/legend/buliding_7.png" /> buliding'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_wards_2.setVisible(true);lyr_geology_3.setVisible(true);lyr_geomorphology_4.setVisible(true);lyr_drainage_5.setVisible(true);lyr_gba_buildings_6.setVisible(true);lyr_buliding_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_wards_2,lyr_geology_3,lyr_geomorphology_4,lyr_drainage_5,lyr_gba_buildings_6,lyr_buliding_7];
lyr_wards_2.set('fieldAliases', {'FID': 'FID', });
lyr_geology_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_geomorphology_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_drainage_5.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_gba_buildings_6.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_buliding_7.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_wards_2.set('fieldImages', {'FID': '', });
lyr_geology_3.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_geomorphology_4.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_drainage_5.set('fieldImages', {'ORDER1': '', });
lyr_gba_buildings_6.set('fieldImages', {'source': '', 'height': '', });
lyr_buliding_7.set('fieldImages', {'source': '', 'height': '', });
lyr_wards_2.set('fieldLabels', {'FID': 'no label', });
lyr_geology_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_geomorphology_4.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_drainage_5.set('fieldLabels', {'ORDER1': 'no label', });
lyr_gba_buildings_6.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_buliding_7.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_buliding_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});