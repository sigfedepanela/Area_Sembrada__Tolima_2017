var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_reaSembradaHaTolima2017_1 = new ol.format.GeoJSON();
var features_reaSembradaHaTolima2017_1 = format_reaSembradaHaTolima2017_1.readFeatures(json_reaSembradaHaTolima2017_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaSembradaHaTolima2017_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reaSembradaHaTolima2017_1.addFeatures(features_reaSembradaHaTolima2017_1);var lyr_reaSembradaHaTolima2017_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaSembradaHaTolima2017_1, 
                style: style_reaSembradaHaTolima2017_1,
    title: 'Área Sembrada (Ha) - Tolima- 2017<br />\
    <img src="styles/legend/reaSembradaHaTolima2017_1_0.png" />  10 - 150 <br />\
    <img src="styles/legend/reaSembradaHaTolima2017_1_1.png" />  150 - 380 <br />\
    <img src="styles/legend/reaSembradaHaTolima2017_1_2.png" />  380 - 720 <br />\
    <img src="styles/legend/reaSembradaHaTolima2017_1_3.png" />  720 - 1280 <br />\
    <img src="styles/legend/reaSembradaHaTolima2017_1_4.png" />  1280 - 2350 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_reaSembradaHaTolima2017_1.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_reaSembradaHaTolima2017_1];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_reaSembradaHaTolima2017_1.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_reaSembradaHaTolima2017_1.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_reaSembradaHaTolima2017_1.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_reaSembradaHaTolima2017_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});