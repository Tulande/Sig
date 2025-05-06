var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Pereira_1 = new ol.format.GeoJSON();
var features_Pereira_1 = format_Pereira_1.readFeatures(json_Pereira_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pereira_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pereira_1.addFeatures(features_Pereira_1);
var lyr_Pereira_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pereira_1, 
                style: style_Pereira_1,
                popuplayertitle: 'Pereira',
                interactive: false,
                title: '<img src="styles/legend/Pereira_1.png" /> Pereira'
            });
var format_Municipio_De_Pereira_2 = new ol.format.GeoJSON();
var features_Municipio_De_Pereira_2 = format_Municipio_De_Pereira_2.readFeatures(json_Municipio_De_Pereira_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipio_De_Pereira_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipio_De_Pereira_2.addFeatures(features_Municipio_De_Pereira_2);
var lyr_Municipio_De_Pereira_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipio_De_Pereira_2, 
                style: style_Municipio_De_Pereira_2,
                popuplayertitle: 'Municipio_De_Pereira',
                interactive: true,
    title: 'Municipio_De_Pereira<br />\
    <img src="styles/legend/Municipio_De_Pereira_2_0.png" /> 0 % - 20%<br />\
    <img src="styles/legend/Municipio_De_Pereira_2_1.png" /> 20 % - 40 %<br />\
    <img src="styles/legend/Municipio_De_Pereira_2_2.png" /> 40 % - 60 %<br />\
    <img src="styles/legend/Municipio_De_Pereira_2_3.png" /> 60 % - 80 %<br />\
    <img src="styles/legend/Municipio_De_Pereira_2_4.png" /> 80 % - 100 %<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_Pereira_1.setVisible(true);lyr_Municipio_De_Pereira_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Pereira_1,lyr_Municipio_De_Pereira_2];
lyr_Pereira_1.set('fieldAliases', {'fid': 'fid', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Municipio_De_Pereira_2.set('fieldAliases', {'fid': 'fid', 'COD_DANE_A': 'COD_DANE_A', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CDPMP': 'MPIO_CDPMP', 'SETR_CCDGO': 'SETR_CCDGO', 'SETR_CCNCT': 'SETR_CCNCT', 'SECR_CCDGO': 'SECR_CCDGO', 'SETU_CCDGO': 'SETU_CCDGO', 'SETU_CCNCT': 'SETU_CCNCT', 'SECU_CCDGO': 'SECU_CCDGO', 'SECU_CCNCT': 'SECU_CCNCT', 'MANZ_CCDGO': 'MANZ_CCDGO', 'DATO_ANM': 'DATO_ANM', 'AREA': 'AREA', 'NUM_VIVIENDA': 'NUM_VIVIENDA', 'NUM_VIV_SI_GAS': 'NUM_VIV_SI_GAS', 'NUM_VIV_NO_GAS': 'NUM_VIV_NO_GAS', 'NUM_SIN_INFO': 'NUM_SIN_INFO', 'CD_COMUNA': 'CD_COMUNA', 'COMUNA': 'COMUNA', 'TP_LC_CM': 'TP_LC_CM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Gas1': 'Gas1', 'Porcentaje_Viviendas_Con_Gas': 'Porcentaje_Viviendas_Con_Gas', });
lyr_Pereira_1.set('fieldImages', {'fid': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_NANO': 'Range', 'DPTO_CNMBR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Municipio_De_Pereira_2.set('fieldImages', {'fid': 'TextEdit', 'COD_DANE_A': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CDPMP': 'TextEdit', 'SETR_CCDGO': 'TextEdit', 'SETR_CCNCT': 'TextEdit', 'SECR_CCDGO': 'TextEdit', 'SETU_CCDGO': 'TextEdit', 'SETU_CCNCT': 'TextEdit', 'SECU_CCDGO': 'TextEdit', 'SECU_CCNCT': 'TextEdit', 'MANZ_CCDGO': 'TextEdit', 'DATO_ANM': 'TextEdit', 'AREA': 'TextEdit', 'NUM_VIVIENDA': 'TextEdit', 'NUM_VIV_SI_GAS': 'TextEdit', 'NUM_VIV_NO_GAS': 'TextEdit', 'NUM_SIN_INFO': '', 'CD_COMUNA': 'TextEdit', 'COMUNA': 'TextEdit', 'TP_LC_CM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Gas1': 'TextEdit', 'Porcentaje_Viviendas_Con_Gas': 'TextEdit', });
lyr_Pereira_1.set('fieldLabels', {'fid': 'no label', 'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_NANO': 'no label', 'DPTO_CNMBR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Municipio_De_Pereira_2.set('fieldLabels', {'fid': 'hidden field', 'COD_DANE_A': 'inline label - always visible', 'DPTO_CCDGO': 'hidden field', 'MPIO_CCDGO': 'inline label - always visible', 'MPIO_CDPMP': 'hidden field', 'SETR_CCDGO': 'hidden field', 'SETR_CCNCT': 'hidden field', 'SECR_CCDGO': 'hidden field', 'SETU_CCDGO': 'hidden field', 'SETU_CCNCT': 'inline label - always visible', 'SECU_CCDGO': 'hidden field', 'SECU_CCNCT': 'inline label - always visible', 'MANZ_CCDGO': 'inline label - always visible', 'DATO_ANM': 'hidden field', 'AREA': 'no label', 'NUM_VIVIENDA': 'inline label - always visible', 'NUM_VIV_SI_GAS': 'inline label - always visible', 'NUM_VIV_NO_GAS': 'inline label - always visible', 'NUM_SIN_INFO': 'inline label - always visible', 'CD_COMUNA': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'TP_LC_CM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Gas1': 'hidden field', 'Porcentaje_Viviendas_Con_Gas': 'inline label - always visible', });
lyr_Municipio_De_Pereira_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});