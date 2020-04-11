/**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release.
 * 
 * V4 is the latest installement in amCharts data viz
 * library family, to be released in the first half of
 * 2018.
 *
 * For more information and documentation visit:
 * https://www.amcharts.com/docs/v4/
 * --------------------------------------------------------
 */


am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.ChordDiagram);


// colors of main characters
chart.colors.saturation = 0.45;
chart.colors.step = 3;
var colors ={}

// data was provided by: https://www.reddit.com/user/notrudedude

chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here

// real data
{"from":"  ","to":"  ","value":100,"color":"#FFFFFF"},
{"from":"Sin Pueblos","to":"Sin Pueblos","value":0,"color":"#52718c"},
{"from":"Cochimí","to":"Cochimí","value":0,"color":"#52718c"},
{"from":"Cucapá","to":"Cucapá","value":0,"color":"#52718c"},
{"from":"Kiliwa","to":"Kiliwa","value":0,"color":"#52718c"},
{"from":"Ku'ahl","to":"Ku'ahl","value":0,"color":"#52718c"},
{"from":"Pa Ipai","to":"Pa Ipai","value":0,"color":"#52718c"},
{"from":"Kumiai","to":"Kumiai","value":0,"color":"#52718c"},
{"from":"Pápago","to":"Pápago","value":0,"color":"#52718c"},
{"from":"Kikapú","to":"Kikapú","value":0,"color":"#52718c"},
{"from":"Seri","to":"Seri","value":0,"color":"#52718c"},
{"from":"Ixil","to":"Ixil","value":0,"color":"#52718c"},
{"from":"Kaqchikel","to":"Kaqchikel","value":0,"color":"#52718c"},
{"from":"Q'Eqchi'","to":"Q'Eqchi'","value":0,"color":"#52718c"},
{"from":"Mixteco","to":"Mixteco","value":0,"color":"#52718c"},
{"from":"Yaqui","to":"Yaqui","value":0,"color":"#52718c"},
{"from":"Maya","to":"Maya","value":0,"color":"#52718c"},
{"from":"Ayapaneco","to":"Ayapaneco","value":0,"color":"#52718c"},
{"from":"K'iche'","to":"K'iche'","value":0,"color":"#52718c"},
{"from":"Chontal de Tabasco","to":"Chontal de Tabasco","value":0,"color":"#52718c"},
{"from":"Lacandón","to":"Lacandón","value":0,"color":"#52718c"},
{"from":"Chuj","to":"Chuj","value":0,"color":"#52718c"},
{"from":"Oluteco","to":"Oluteco","value":0,"color":"#52718c"},
{"from":"Popoluca de la Sierra","to":"Popoluca de la Sierra","value":0,"color":"#52718c"},
{"from":"Sayulteco","to":"Sayulteco","value":0,"color":"#52718c"},
{"from":"Texistepequeño","to":"Texistepequeño","value":0,"color":"#52718c"},
{"from":"Akateko","to":"Akateko","value":0,"color":"#52718c"},
{"from":"Teko","to":"Teko","value":0,"color":"#52718c"},
{"from":"Awakateko","to":"Awakateko","value":0,"color":"#52718c"},
{"from":"Huave","to":"Huave","value":0,"color":"#52718c"},
{"from":"Jakalteko","to":"Jakalteko","value":0,"color":"#52718c"},
{"from":"Q'Anjob'Al","to":"Q'Anjob'Al","value":0,"color":"#52718c"},
{"from":"Tojolabal","to":"Tojolabal","value":0,"color":"#52718c"},
{"from":"Chichimeca","to":"Chichimeca","value":0,"color":"#52718c"},
{"from":"Ch'ol","to":"Ch'ol","value":0,"color":"#52718c"},
{"from":"Chontal de Oaxaca","to":"Chontal de Oaxaca","value":0,"color":"#52718c"},
{"from":"Mayo","to":"Mayo","value":0,"color":"#52718c"},
{"from":"Pame","to":"Pame","value":0,"color":"#52718c"},
{"from":"Zoque","to":"Zoque","value":0,"color":"#52718c"},
{"from":"Guarijío","to":"Guarijío","value":0,"color":"#52718c"},
{"from":"Mame","to":"Mame","value":0,"color":"#52718c"},
{"from":"Pima","to":"Pima","value":0,"color":"#52718c"},
{"from":"Huasteco","to":"Huasteco","value":0,"color":"#52718c"},
{"from":"Matlatzinca","to":"Matlatzinca","value":0,"color":"#52718c"},
{"from":"Tlahuica","to":"Tlahuica","value":0,"color":"#52718c"},
{"from":"Ixcateco","to":"Ixcateco","value":0,"color":"#52718c"},
{"from":"Mazahua","to":"Mazahua","value":0,"color":"#52718c"},
{"from":"Mixe","to":"Mixe","value":0,"color":"#52718c"},
{"from":"Chocholteco","to":"Chocholteco","value":0,"color":"#52718c"},
{"from":"Cuicateco","to":"Cuicateco","value":0,"color":"#52718c"},
{"from":"Tepehua","to":"Tepehua","value":0,"color":"#52718c"},
{"from":"Tepehuano del norte","to":"Tepehuano del norte","value":0,"color":"#52718c"},
{"from":"Tseltal","to":"Tseltal","value":0,"color":"#52718c"},
{"from":"Tzotzil","to":"Tzotzil","value":0,"color":"#52718c"},
{"from":"Tarahumara","to":"Tarahumara","value":0,"color":"#52718c"},
{"from":"Tecuate","to":"Tecuate","value":0,"color":"#52718c"},
{"from":"Chatino","to":"Chatino","value":0,"color":"#52718c"},
{"from":"Popoloca","to":"Popoloca","value":0,"color":"#52718c"},
{"from":"Amuzgo","to":"Amuzgo","value":0,"color":"#52718c"},
{"from":"Mazateco","to":"Mazateco","value":0,"color":"#52718c"},
{"from":"Tepehuano del sur","to":"Tepehuano del sur","value":0,"color":"#52718c"},
{"from":"Tlapaneco","to":"Tlapaneco","value":0,"color":"#52718c"},
{"from":"Totonaco","to":"Totonaco","value":0,"color":"#52718c"},
{"from":"Triqui","to":"Triqui","value":0,"color":"#52718c"},
{"from":"Chinanteco","to":"Chinanteco","value":0,"color":"#52718c"},
{"from":"Cora","to":"Cora","value":0,"color":"#52718c"},
{"from":"Zapoteco","to":"Zapoteco","value":0,"color":"#52718c"},
{"from":"Huichol","to":"Huichol","value":0,"color":"#52718c"},
{"from":"Purhépecha","to":"Purhépecha","value":0,"color":"#52718c"},
{"from":"Otomí","to":"Otomí","value":0,"color":"#52718c"},
{"from":"Nahua","to":"Nahua","value":0,"color":"#52718c"},
{"from":" ","to":" ","value":100,"color":"#FFFFFF"},
{"from":"Calabaza","to":"Calabaza","value":4,"color":"#FFFFFF"},
{"from":"Cucurbita argyrosperma argyrosperma","to":"Cucurbita argyrosperma argyrosperma","value":0,"color":"#fa9332"},
{"from":"Cucurbita moschata","to":"Cucurbita moschata","value":0,"color":"#fa9332"},
{"from":"Cucurbita pepo","to":"Cucurbita pepo","value":0,"color":"#fa9332"},
{"from":"Cucurbita pepo pepo","to":"Cucurbita pepo pepo","value":0,"color":"#fa9332"},
{"from":"Cucurbita argyrosperma","to":"Cucurbita argyrosperma","value":0,"color":"#fa9332"},
{"from":"Cucurbita ficifolia","to":"Cucurbita ficifolia","value":0,"color":"#fa9332"},
{"from":"Akateko","to":"Cucurbita argyrosperma","value":1},
{"from":"Amuzgo","to":"Cucurbita argyrosperma","value":1},
{"from":"Awakateko","to":"Cucurbita argyrosperma","value":1},
{"from":"Ayapaneco","to":"Cucurbita argyrosperma","value":1},
{"from":"Chatino","to":"Cucurbita argyrosperma","value":1},
{"from":"Chinanteco","to":"Cucurbita argyrosperma","value":1},
{"from":"Chocholteco","to":"Cucurbita argyrosperma","value":1},
{"from":"Ch'ol","to":"Cucurbita argyrosperma","value":1},
{"from":"Chontal de Oaxaca","to":"Cucurbita argyrosperma","value":1},
{"from":"Chontal de Tabasco","to":"Cucurbita argyrosperma","value":1},
{"from":"Chuj","to":"Cucurbita argyrosperma","value":1},
{"from":"Cora","to":"Cucurbita argyrosperma","value":1},
{"from":"Cuicateco","to":"Cucurbita argyrosperma","value":1},
{"from":"Guarijío","to":"Cucurbita argyrosperma","value":1},
{"from":"Huasteco","to":"Cucurbita argyrosperma","value":1},
{"from":"Huave","to":"Cucurbita argyrosperma","value":1},
{"from":"Huichol","to":"Cucurbita argyrosperma","value":1},
{"from":"Ixcateco","to":"Cucurbita argyrosperma","value":1},
{"from":"Jakalteko","to":"Cucurbita argyrosperma","value":1},
{"from":"Lacandón","to":"Cucurbita argyrosperma","value":1},
{"from":"Mame","to":"Cucurbita argyrosperma","value":1},
{"from":"Matlatzinca","to":"Cucurbita argyrosperma","value":1},
{"from":"Mayo","to":"Cucurbita argyrosperma","value":1},
{"from":"Mazahua","to":"Cucurbita argyrosperma","value":1},
{"from":"Mazateco","to":"Cucurbita argyrosperma","value":1},
{"from":"Mixe","to":"Cucurbita argyrosperma","value":1},
{"from":"Mixteco","to":"Cucurbita argyrosperma","value":1},
{"from":"Nahua","to":"Cucurbita argyrosperma","value":1},
{"from":"Oluteco","to":"Cucurbita argyrosperma","value":1},
{"from":"Otomí","to":"Cucurbita argyrosperma","value":1},
{"from":"Pame","to":"Cucurbita argyrosperma","value":1},
{"from":"Pima","to":"Cucurbita argyrosperma","value":1},
{"from":"Popoloca","to":"Cucurbita argyrosperma","value":1},
{"from":"Popoluca de la Sierra","to":"Cucurbita argyrosperma","value":1},
{"from":"Purhépecha","to":"Cucurbita argyrosperma","value":1},
{"from":"Q'Anjob'Al","to":"Cucurbita argyrosperma","value":1},
{"from":"Sayulteco","to":"Cucurbita argyrosperma","value":1},
{"from":"Tarahumara","to":"Cucurbita argyrosperma","value":1},
{"from":"Tecuate","to":"Cucurbita argyrosperma","value":1},
{"from":"Teko","to":"Cucurbita argyrosperma","value":1},
{"from":"Tepehua","to":"Cucurbita argyrosperma","value":1},
{"from":"Tepehuano del norte","to":"Cucurbita argyrosperma","value":1},
{"from":"Tepehuano del sur","to":"Cucurbita argyrosperma","value":1},
{"from":"Texistepequeño","to":"Cucurbita argyrosperma","value":1},
{"from":"Tlahuica","to":"Cucurbita argyrosperma","value":1},
{"from":"Tlapaneco","to":"Cucurbita argyrosperma","value":1},
{"from":"Tojolabal","to":"Cucurbita argyrosperma","value":1},
{"from":"Totonaco","to":"Cucurbita argyrosperma","value":1},
{"from":"Triqui","to":"Cucurbita argyrosperma","value":1},
{"from":"Tseltal","to":"Cucurbita argyrosperma","value":1},
{"from":"Tzotzil","to":"Cucurbita argyrosperma","value":1},
{"from":"Yaqui","to":"Cucurbita argyrosperma","value":1},
{"from":"Zapoteco","to":"Cucurbita argyrosperma","value":1},
{"from":"Zoque","to":"Cucurbita argyrosperma","value":1},
{"from":"Akateko","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Amuzgo","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Awakateko","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Ayapaneco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Chatino","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Chichimeca","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Chinanteco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Chocholteco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Ch'ol","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Chontal de Oaxaca","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Chontal de Tabasco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Chuj","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Cora","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Cuicateco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Guarijío","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Huasteco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Huave","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Huichol","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Ixcateco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Ixil","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Jakalteko","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Kaqchikel","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"K'iche'","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Lacandón","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Mame","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Matlatzinca","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Maya","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Mayo","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Mazahua","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Mazateco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Mixe","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Mixteco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Nahua","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Oluteco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Otomí","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Pame","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Pápago","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Pima","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Popoloca","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Popoluca de la Sierra","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Purhépecha","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Q'Anjob'Al","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Q'Eqchi'","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Sayulteco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Seri","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tarahumara","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tecuate","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Teko","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tepehua","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tepehuano del norte","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tepehuano del sur","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Texistepequeño","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tlahuica","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tlapaneco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tojolabal","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Totonaco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Triqui","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tseltal","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Tzotzil","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Yaqui","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Zapoteco","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Zoque","to":"Cucurbita argyrosperma argyrosperma","value":1},
{"from":"Amuzgo","to":"Cucurbita ficifolia","value":1},
{"from":"Awakateko","to":"Cucurbita ficifolia","value":1},
{"from":"Chatino","to":"Cucurbita ficifolia","value":1},
{"from":"Chichimeca","to":"Cucurbita ficifolia","value":1},
{"from":"Chinanteco","to":"Cucurbita ficifolia","value":1},
{"from":"Chocholteco","to":"Cucurbita ficifolia","value":1},
{"from":"Ch'ol","to":"Cucurbita ficifolia","value":1},
{"from":"Chontal de Oaxaca","to":"Cucurbita ficifolia","value":1},
{"from":"Chontal de Tabasco","to":"Cucurbita ficifolia","value":1},
{"from":"Cuicateco","to":"Cucurbita ficifolia","value":1},
{"from":"Huasteco","to":"Cucurbita ficifolia","value":1},
{"from":"Huave","to":"Cucurbita ficifolia","value":1},
{"from":"Ixcateco","to":"Cucurbita ficifolia","value":1},
{"from":"Jakalteko","to":"Cucurbita ficifolia","value":1},
{"from":"Mame","to":"Cucurbita ficifolia","value":1},
{"from":"Matlatzinca","to":"Cucurbita ficifolia","value":1},
{"from":"Mazahua","to":"Cucurbita ficifolia","value":1},
{"from":"Mazateco","to":"Cucurbita ficifolia","value":1},
{"from":"Mixe","to":"Cucurbita ficifolia","value":1},
{"from":"Mixteco","to":"Cucurbita ficifolia","value":1},
{"from":"Nahua","to":"Cucurbita ficifolia","value":1},
{"from":"Oluteco","to":"Cucurbita ficifolia","value":1},
{"from":"Otomí","to":"Cucurbita ficifolia","value":1},
{"from":"Pame","to":"Cucurbita ficifolia","value":1},
{"from":"Popoloca","to":"Cucurbita ficifolia","value":1},
{"from":"Popoluca de la Sierra","to":"Cucurbita ficifolia","value":1},
{"from":"Purhépecha","to":"Cucurbita ficifolia","value":1},
{"from":"Q'Anjob'Al","to":"Cucurbita ficifolia","value":1},
{"from":"Sayulteco","to":"Cucurbita ficifolia","value":1},
{"from":"Tecuate","to":"Cucurbita ficifolia","value":1},
{"from":"Teko","to":"Cucurbita ficifolia","value":1},
{"from":"Tepehua","to":"Cucurbita ficifolia","value":1},
{"from":"Texistepequeño","to":"Cucurbita ficifolia","value":1},
{"from":"Tlahuica","to":"Cucurbita ficifolia","value":1},
{"from":"Tlapaneco","to":"Cucurbita ficifolia","value":1},
{"from":"Tojolabal","to":"Cucurbita ficifolia","value":1},
{"from":"Totonaco","to":"Cucurbita ficifolia","value":1},
{"from":"Triqui","to":"Cucurbita ficifolia","value":1},
{"from":"Tseltal","to":"Cucurbita ficifolia","value":1},
{"from":"Tzotzil","to":"Cucurbita ficifolia","value":1},
{"from":"Zapoteco","to":"Cucurbita ficifolia","value":1},
{"from":"Zoque","to":"Cucurbita ficifolia","value":1},
{"from":"Akateko","to":"Cucurbita moschata","value":1},
{"from":"Amuzgo","to":"Cucurbita moschata","value":1},
{"from":"Awakateko","to":"Cucurbita moschata","value":1},
{"from":"Ayapaneco","to":"Cucurbita moschata","value":1},
{"from":"Chatino","to":"Cucurbita moschata","value":1},
{"from":"Chichimeca","to":"Cucurbita moschata","value":1},
{"from":"Chinanteco","to":"Cucurbita moschata","value":1},
{"from":"Chocholteco","to":"Cucurbita moschata","value":1},
{"from":"Ch'ol","to":"Cucurbita moschata","value":1},
{"from":"Chontal de Oaxaca","to":"Cucurbita moschata","value":1},
{"from":"Chontal de Tabasco","to":"Cucurbita moschata","value":1},
{"from":"Chuj","to":"Cucurbita moschata","value":1},
{"from":"Cora","to":"Cucurbita moschata","value":1},
{"from":"Cuicateco","to":"Cucurbita moschata","value":1},
{"from":"Guarijío","to":"Cucurbita moschata","value":1},
{"from":"Huasteco","to":"Cucurbita moschata","value":1},
{"from":"Huave","to":"Cucurbita moschata","value":1},
{"from":"Huichol","to":"Cucurbita moschata","value":1},
{"from":"Ixcateco","to":"Cucurbita moschata","value":1},
{"from":"Ixil","to":"Cucurbita moschata","value":1},
{"from":"Jakalteko","to":"Cucurbita moschata","value":1},
{"from":"Kaqchikel","to":"Cucurbita moschata","value":1},
{"from":"K'iche'","to":"Cucurbita moschata","value":1},
{"from":"Lacandón","to":"Cucurbita moschata","value":1},
{"from":"Mame","to":"Cucurbita moschata","value":1},
{"from":"Matlatzinca","to":"Cucurbita moschata","value":1},
{"from":"Maya","to":"Cucurbita moschata","value":1},
{"from":"Mayo","to":"Cucurbita moschata","value":1},
{"from":"Mazahua","to":"Cucurbita moschata","value":1},
{"from":"Mazateco","to":"Cucurbita moschata","value":1},
{"from":"Mixe","to":"Cucurbita moschata","value":1},
{"from":"Mixteco","to":"Cucurbita moschata","value":1},
{"from":"Nahua","to":"Cucurbita moschata","value":1},
{"from":"Oluteco","to":"Cucurbita moschata","value":1},
{"from":"Otomí","to":"Cucurbita moschata","value":1},
{"from":"Pame","to":"Cucurbita moschata","value":1},
{"from":"Pima","to":"Cucurbita moschata","value":1},
{"from":"Popoloca","to":"Cucurbita moschata","value":1},
{"from":"Popoluca de la Sierra","to":"Cucurbita moschata","value":1},
{"from":"Purhépecha","to":"Cucurbita moschata","value":1},
{"from":"Q'Anjob'Al","to":"Cucurbita moschata","value":1},
{"from":"Q'Eqchi'","to":"Cucurbita moschata","value":1},
{"from":"Sayulteco","to":"Cucurbita moschata","value":1},
{"from":"Seri","to":"Cucurbita moschata","value":1},
{"from":"Tarahumara","to":"Cucurbita moschata","value":1},
{"from":"Tecuate","to":"Cucurbita moschata","value":1},
{"from":"Teko","to":"Cucurbita moschata","value":1},
{"from":"Tepehua","to":"Cucurbita moschata","value":1},
{"from":"Tepehuano del norte","to":"Cucurbita moschata","value":1},
{"from":"Tepehuano del sur","to":"Cucurbita moschata","value":1},
{"from":"Texistepequeño","to":"Cucurbita moschata","value":1},
{"from":"Tlahuica","to":"Cucurbita moschata","value":1},
{"from":"Tlapaneco","to":"Cucurbita moschata","value":1},
{"from":"Tojolabal","to":"Cucurbita moschata","value":1},
{"from":"Totonaco","to":"Cucurbita moschata","value":1},
{"from":"Triqui","to":"Cucurbita moschata","value":1},
{"from":"Tseltal","to":"Cucurbita moschata","value":1},
{"from":"Tzotzil","to":"Cucurbita moschata","value":1},
{"from":"Yaqui","to":"Cucurbita moschata","value":1},
{"from":"Zapoteco","to":"Cucurbita moschata","value":1},
{"from":"Zoque","to":"Cucurbita moschata","value":1},
{"from":"Akateko","to":"Cucurbita pepo","value":1},
{"from":"Amuzgo","to":"Cucurbita pepo","value":1},
{"from":"Awakateko","to":"Cucurbita pepo","value":1},
{"from":"Ayapaneco","to":"Cucurbita pepo","value":1},
{"from":"Chatino","to":"Cucurbita pepo","value":1},
{"from":"Chichimeca","to":"Cucurbita pepo","value":1},
{"from":"Chinanteco","to":"Cucurbita pepo","value":1},
{"from":"Chocholteco","to":"Cucurbita pepo","value":1},
{"from":"Ch'ol","to":"Cucurbita pepo","value":1},
{"from":"Chontal de Oaxaca","to":"Cucurbita pepo","value":1},
{"from":"Chontal de Tabasco","to":"Cucurbita pepo","value":1},
{"from":"Chuj","to":"Cucurbita pepo","value":1},
{"from":"Cora","to":"Cucurbita pepo","value":1},
{"from":"Cuicateco","to":"Cucurbita pepo","value":1},
{"from":"Guarijío","to":"Cucurbita pepo","value":1},
{"from":"Huasteco","to":"Cucurbita pepo","value":1},
{"from":"Huave","to":"Cucurbita pepo","value":1},
{"from":"Huichol","to":"Cucurbita pepo","value":1},
{"from":"Ixcateco","to":"Cucurbita pepo","value":1},
{"from":"Ixil","to":"Cucurbita pepo","value":1},
{"from":"Jakalteko","to":"Cucurbita pepo","value":1},
{"from":"Kaqchikel","to":"Cucurbita pepo","value":1},
{"from":"K'iche'","to":"Cucurbita pepo","value":1},
{"from":"Lacandón","to":"Cucurbita pepo","value":1},
{"from":"Mame","to":"Cucurbita pepo","value":1},
{"from":"Matlatzinca","to":"Cucurbita pepo","value":1},
{"from":"Maya","to":"Cucurbita pepo","value":1},
{"from":"Mazahua","to":"Cucurbita pepo","value":1},
{"from":"Mazateco","to":"Cucurbita pepo","value":1},
{"from":"Mixe","to":"Cucurbita pepo","value":1},
{"from":"Mixteco","to":"Cucurbita pepo","value":1},
{"from":"Nahua","to":"Cucurbita pepo","value":1},
{"from":"Oluteco","to":"Cucurbita pepo","value":1},
{"from":"Otomí","to":"Cucurbita pepo","value":1},
{"from":"Pame","to":"Cucurbita pepo","value":1},
{"from":"Pima","to":"Cucurbita pepo","value":1},
{"from":"Popoloca","to":"Cucurbita pepo","value":1},
{"from":"Popoluca de la Sierra","to":"Cucurbita pepo","value":1},
{"from":"Purhépecha","to":"Cucurbita pepo","value":1},
{"from":"Q'Anjob'Al","to":"Cucurbita pepo","value":1},
{"from":"Q'Eqchi'","to":"Cucurbita pepo","value":1},
{"from":"Sayulteco","to":"Cucurbita pepo","value":1},
{"from":"Tarahumara","to":"Cucurbita pepo","value":1},
{"from":"Tecuate","to":"Cucurbita pepo","value":1},
{"from":"Teko","to":"Cucurbita pepo","value":1},
{"from":"Tepehua","to":"Cucurbita pepo","value":1},
{"from":"Tepehuano del norte","to":"Cucurbita pepo","value":1},
{"from":"Tepehuano del sur","to":"Cucurbita pepo","value":1},
{"from":"Texistepequeño","to":"Cucurbita pepo","value":1},
{"from":"Tlahuica","to":"Cucurbita pepo","value":1},
{"from":"Tlapaneco","to":"Cucurbita pepo","value":1},
{"from":"Tojolabal","to":"Cucurbita pepo","value":1},
{"from":"Totonaco","to":"Cucurbita pepo","value":1},
{"from":"Triqui","to":"Cucurbita pepo","value":1},
{"from":"Tseltal","to":"Cucurbita pepo","value":1},
{"from":"Tzotzil","to":"Cucurbita pepo","value":1},
{"from":"Zapoteco","to":"Cucurbita pepo","value":1},
{"from":"Zoque","to":"Cucurbita pepo","value":1},
{"from":"Akateko","to":"Cucurbita pepo pepo","value":1},
{"from":"Amuzgo","to":"Cucurbita pepo pepo","value":1},
{"from":"Awakateko","to":"Cucurbita pepo pepo","value":1},
{"from":"Ayapaneco","to":"Cucurbita pepo pepo","value":1},
{"from":"Chatino","to":"Cucurbita pepo pepo","value":1},
{"from":"Chichimeca","to":"Cucurbita pepo pepo","value":1},
{"from":"Chinanteco","to":"Cucurbita pepo pepo","value":1},
{"from":"Chocholteco","to":"Cucurbita pepo pepo","value":1},
{"from":"Ch'ol","to":"Cucurbita pepo pepo","value":1},
{"from":"Chontal de Oaxaca","to":"Cucurbita pepo pepo","value":1},
{"from":"Chontal de Tabasco","to":"Cucurbita pepo pepo","value":1},
{"from":"Chuj","to":"Cucurbita pepo pepo","value":1},
{"from":"Cuicateco","to":"Cucurbita pepo pepo","value":1},
{"from":"Guarijío","to":"Cucurbita pepo pepo","value":1},
{"from":"Huasteco","to":"Cucurbita pepo pepo","value":1},
{"from":"Huave","to":"Cucurbita pepo pepo","value":1},
{"from":"Ixcateco","to":"Cucurbita pepo pepo","value":1},
{"from":"Ixil","to":"Cucurbita pepo pepo","value":1},
{"from":"Jakalteko","to":"Cucurbita pepo pepo","value":1},
{"from":"Kaqchikel","to":"Cucurbita pepo pepo","value":1},
{"from":"K'iche'","to":"Cucurbita pepo pepo","value":1},
{"from":"Lacandón","to":"Cucurbita pepo pepo","value":1},
{"from":"Mame","to":"Cucurbita pepo pepo","value":1},
{"from":"Matlatzinca","to":"Cucurbita pepo pepo","value":1},
{"from":"Maya","to":"Cucurbita pepo pepo","value":1},
{"from":"Mayo","to":"Cucurbita pepo pepo","value":1},
{"from":"Mazahua","to":"Cucurbita pepo pepo","value":1},
{"from":"Mazateco","to":"Cucurbita pepo pepo","value":1},
{"from":"Mixe","to":"Cucurbita pepo pepo","value":1},
{"from":"Mixteco","to":"Cucurbita pepo pepo","value":1},
{"from":"Nahua","to":"Cucurbita pepo pepo","value":1},
{"from":"Oluteco","to":"Cucurbita pepo pepo","value":1},
{"from":"Otomí","to":"Cucurbita pepo pepo","value":1},
{"from":"Pame","to":"Cucurbita pepo pepo","value":1},
{"from":"Pima","to":"Cucurbita pepo pepo","value":1},
{"from":"Popoloca","to":"Cucurbita pepo pepo","value":1},
{"from":"Popoluca de la Sierra","to":"Cucurbita pepo pepo","value":1},
{"from":"Purhépecha","to":"Cucurbita pepo pepo","value":1},
{"from":"Q'Anjob'Al","to":"Cucurbita pepo pepo","value":1},
{"from":"Q'Eqchi'","to":"Cucurbita pepo pepo","value":1},
{"from":"Sayulteco","to":"Cucurbita pepo pepo","value":1},
{"from":"Tarahumara","to":"Cucurbita pepo pepo","value":1},
{"from":"Tecuate","to":"Cucurbita pepo pepo","value":1},
{"from":"Teko","to":"Cucurbita pepo pepo","value":1},
{"from":"Tepehua","to":"Cucurbita pepo pepo","value":1},
{"from":"Tepehuano del norte","to":"Cucurbita pepo pepo","value":1},
{"from":"Texistepequeño","to":"Cucurbita pepo pepo","value":1},
{"from":"Tlahuica","to":"Cucurbita pepo pepo","value":1},
{"from":"Tlapaneco","to":"Cucurbita pepo pepo","value":1},
{"from":"Tojolabal","to":"Cucurbita pepo pepo","value":1},
{"from":"Totonaco","to":"Cucurbita pepo pepo","value":1},
{"from":"Triqui","to":"Cucurbita pepo pepo","value":1},
{"from":"Tseltal","to":"Cucurbita pepo pepo","value":1},
{"from":"Tzotzil","to":"Cucurbita pepo pepo","value":1},
{"from":"Zapoteco","to":"Cucurbita pepo pepo","value":1},
{"from":"Zoque","to":"Cucurbita pepo pepo","value":1},
{"from":"Zoque","to":"Cucurbita pepo pepo","value":1}



]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 1;
chart.minNodeSize = 0.001;
chart.startAngle = 40;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "";


var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}"+" interactua con "+"{total}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function (event) {    
    var node = event.target;
    node.outgoingDataItems.each(function (dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function (dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;

let slice = chart.nodes.template.slice;
slice.stroke = am4core.color("#000");
slice.strokeOpacity = 0.5;
slice.strokeWidth = 1;
slice.cornerRadius = 8;
slice.innerCornerRadius = .01;  
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function (event) {
    var node = event.target;
    node.outgoingDataItems.each(function (dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function (dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

label.fillOpacity = 0.35;
var labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
/*nodeTemplate.adapter.add("fill", function (fill, target) {
    var node = target;
    var counters = {};
    var mainChar = false;
    node.incomingDataItems.each(function (dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    var count = 0;
    var color;
    var biggest = 0;
    var biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})*/

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.1;

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

// data credit label
/*var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "Data source: notrudedude";
creditLabel.url = "https://www.reddit.com/user/notrudedude";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";*/



            chart.exporting.menu = new am4core.ExportMenu();
            chart.exporting.menu.items = [{
                "label": "...",
                "menu": [
                    {
                        "label": "Imagen",
                        "menu": [
                            { "type": "png", "label": "PNG" },
                            { "type": "jpg", "label": "JPG" },
                            { "type": "gif", "label": "GIF" },
                            { "type": "pdf", "label": "PDF" }
                        ]
                    }, 
                    {
                        "label": "Imprimir", "type": "print"
                    }
                ]
            }];
            