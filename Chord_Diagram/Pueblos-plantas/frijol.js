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
{"from":"  ","to":"  ","value":150,"color":"#FFFFFF"},
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
{"from":" ","to":" ","value":150,"color":"#FFFFFF"},
{"from":"Frijol","to":"Frijol","value":4,"color":"#FFFFFF"},
{"from":"Phaseolus vulgaris","to":"Phaseolus vulgaris","value":0,"color":"#528c56"},
{"from":"Phaseolus vulgaris var. vulgaris","to":"Phaseolus vulgaris var. vulgaris","value":0,"color":"#528c56"},
{"from":"Phaseolus lunatus","to":"Phaseolus lunatus","value":0,"color":"#528c56"},
{"from":"Phaseolus coccineus","to":"Phaseolus coccineus","value":0,"color":"#528c56"},
{"from":"Phaseolus acutifolius","to":"Phaseolus acutifolius","value":0,"color":"#528c56"},
{"from":"Phaseolus coccineus  coccineus","to":"Phaseolus coccineus  coccineus","value":0,"color":"#528c56"},
{"from":"Phaseolus vulgaris var. mexicanus","to":"Phaseolus vulgaris var. mexicanus","value":0,"color":"#528c56"},
{"from":"Phaseolus dumosus","to":"Phaseolus dumosus","value":0,"color":"#528c56"},
{"from":"Phaseolus lunatus var. lunatus","to":"Phaseolus lunatus var. lunatus","value":0,"color":"#528c56"},
{"from":"Phaseolus acutifolius var. acutifolius","to":"Phaseolus acutifolius var. acutifolius","value":0,"color":"#528c56"},
{"from":"Phaseolus acutifolius var. latifolius","to":"Phaseolus acutifolius var. latifolius","value":0,"color":"#528c56"},
{"from":"Phaseolus acutifolius var. tenuifolius","to":"Phaseolus acutifolius var. tenuifolius","value":0,"color":"#528c56"},
{"from":"Phaseolus coccineus  striatus","to":"Phaseolus coccineus  striatus","value":0,"color":"#528c56"},
{"from":"Amuzgo","to":"Phaseolus acutifolius","value":1},
{"from":"Ayapaneco","to":"Phaseolus acutifolius","value":1},
{"from":"Chatino","to":"Phaseolus acutifolius","value":1},
{"from":"Chichimeca","to":"Phaseolus acutifolius","value":1},
{"from":"Chinanteco","to":"Phaseolus acutifolius","value":1},
{"from":"Chocholteco","to":"Phaseolus acutifolius","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus acutifolius","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus acutifolius","value":1},
{"from":"Cochimí","to":"Phaseolus acutifolius","value":1},
{"from":"Cora","to":"Phaseolus acutifolius","value":1},
{"from":"Cucapá","to":"Phaseolus acutifolius","value":1},
{"from":"Cuicateco","to":"Phaseolus acutifolius","value":1},
{"from":"Guarijío","to":"Phaseolus acutifolius","value":1},
{"from":"Huasteco","to":"Phaseolus acutifolius","value":1},
{"from":"Huave","to":"Phaseolus acutifolius","value":1},
{"from":"Huichol","to":"Phaseolus acutifolius","value":1},
{"from":"Ixcateco","to":"Phaseolus acutifolius","value":1},
{"from":"Kiliwa","to":"Phaseolus acutifolius","value":1},
{"from":"Ku'ahl","to":"Phaseolus acutifolius","value":1},
{"from":"Kumiai","to":"Phaseolus acutifolius","value":1},
{"from":"Mame","to":"Phaseolus acutifolius","value":1},
{"from":"Matlatzinca","to":"Phaseolus acutifolius","value":1},
{"from":"Mayo","to":"Phaseolus acutifolius","value":1},
{"from":"Mazahua","to":"Phaseolus acutifolius","value":1},
{"from":"Mazateco","to":"Phaseolus acutifolius","value":1},
{"from":"Mixe","to":"Phaseolus acutifolius","value":1},
{"from":"Mixteco","to":"Phaseolus acutifolius","value":1},
{"from":"Nahua","to":"Phaseolus acutifolius","value":1},
{"from":"Oluteco","to":"Phaseolus acutifolius","value":1},
{"from":"Otomí","to":"Phaseolus acutifolius","value":1},
{"from":"Pa Ipai","to":"Phaseolus acutifolius","value":1},
{"from":"Pame","to":"Phaseolus acutifolius","value":1},
{"from":"Pápago","to":"Phaseolus acutifolius","value":1},
{"from":"Pima","to":"Phaseolus acutifolius","value":1},
{"from":"Popoloca","to":"Phaseolus acutifolius","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus acutifolius","value":1},
{"from":"Purhépecha","to":"Phaseolus acutifolius","value":1},
{"from":"Sayulteco","to":"Phaseolus acutifolius","value":1},
{"from":"Seri","to":"Phaseolus acutifolius","value":1},
{"from":"Tarahumara","to":"Phaseolus acutifolius","value":1},
{"from":"Tecuate","to":"Phaseolus acutifolius","value":1},
{"from":"Tepehua","to":"Phaseolus acutifolius","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus acutifolius","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus acutifolius","value":1},
{"from":"Texistepequeño","to":"Phaseolus acutifolius","value":1},
{"from":"Tlahuica","to":"Phaseolus acutifolius","value":1},
{"from":"Tlapaneco","to":"Phaseolus acutifolius","value":1},
{"from":"Totonaco","to":"Phaseolus acutifolius","value":1},
{"from":"Triqui","to":"Phaseolus acutifolius","value":1},
{"from":"Tseltal","to":"Phaseolus acutifolius","value":1},
{"from":"Tzotzil","to":"Phaseolus acutifolius","value":1},
{"from":"Yaqui","to":"Phaseolus acutifolius","value":1},
{"from":"Zapoteco","to":"Phaseolus acutifolius","value":1},
{"from":"Zoque","to":"Phaseolus acutifolius","value":1},
{"from":"Amuzgo","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Chatino","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Cochimí","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Cora","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Cucapá","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Guarijío","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Huichol","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Kiliwa","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Ku'ahl","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Kumiai","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Mame","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Maya","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Mayo","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Mixteco","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Nahua","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Pa Ipai","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Pápago","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Pima","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Purhépecha","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Seri","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Tarahumara","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Tecuate","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Tlapaneco","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Triqui","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Yaqui","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Zapoteco","to":"Phaseolus acutifolius var. acutifolius","value":1},
{"from":"Chichimeca","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Cora","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Guarijío","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Huasteco","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Huichol","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Mame","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Matlatzinca","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Maya","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Mayo","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Mazahua","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Nahua","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Otomí","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Pame","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Pápago","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Pima","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Purhépecha","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Seri","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Tarahumara","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Tepehua","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Tlahuica","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Totonaco","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Yaqui","to":"Phaseolus acutifolius var. latifolius","value":1},
{"from":"Cora","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Guarijío","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Huichol","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Kumiai","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Mayo","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Nahua","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Pima","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Seri","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Tarahumara","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Yaqui","to":"Phaseolus acutifolius var. tenuifolius","value":1},
{"from":"Akateko","to":"Phaseolus coccineus","value":1},
{"from":"Amuzgo","to":"Phaseolus coccineus","value":1},
{"from":"Awakateko","to":"Phaseolus coccineus","value":1},
{"from":"Ayapaneco","to":"Phaseolus coccineus","value":1},
{"from":"Chatino","to":"Phaseolus coccineus","value":1},
{"from":"Chichimeca","to":"Phaseolus coccineus","value":1},
{"from":"Chinanteco","to":"Phaseolus coccineus","value":1},
{"from":"Chocholteco","to":"Phaseolus coccineus","value":1},
{"from":"Ch'ol","to":"Phaseolus coccineus","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus coccineus","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus coccineus","value":1},
{"from":"Chuj","to":"Phaseolus coccineus","value":1},
{"from":"Cora","to":"Phaseolus coccineus","value":1},
{"from":"Cuicateco","to":"Phaseolus coccineus","value":1},
{"from":"Guarijío","to":"Phaseolus coccineus","value":1},
{"from":"Huasteco","to":"Phaseolus coccineus","value":1},
{"from":"Huave","to":"Phaseolus coccineus","value":1},
{"from":"Huichol","to":"Phaseolus coccineus","value":1},
{"from":"Ixcateco","to":"Phaseolus coccineus","value":1},
{"from":"Jakalteko","to":"Phaseolus coccineus","value":1},
{"from":"K'iche'","to":"Phaseolus coccineus","value":1},
{"from":"Lacandón","to":"Phaseolus coccineus","value":1},
{"from":"Mame","to":"Phaseolus coccineus","value":1},
{"from":"Matlatzinca","to":"Phaseolus coccineus","value":1},
{"from":"Maya","to":"Phaseolus coccineus","value":1},
{"from":"Mayo","to":"Phaseolus coccineus","value":1},
{"from":"Mazahua","to":"Phaseolus coccineus","value":1},
{"from":"Mazateco","to":"Phaseolus coccineus","value":1},
{"from":"Mixe","to":"Phaseolus coccineus","value":1},
{"from":"Mixteco","to":"Phaseolus coccineus","value":1},
{"from":"Nahua","to":"Phaseolus coccineus","value":1},
{"from":"Oluteco","to":"Phaseolus coccineus","value":1},
{"from":"Otomí","to":"Phaseolus coccineus","value":1},
{"from":"Pame","to":"Phaseolus coccineus","value":1},
{"from":"Pima","to":"Phaseolus coccineus","value":1},
{"from":"Popoloca","to":"Phaseolus coccineus","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus coccineus","value":1},
{"from":"Purhépecha","to":"Phaseolus coccineus","value":1},
{"from":"Q'Anjob'Al","to":"Phaseolus coccineus","value":1},
{"from":"Sayulteco","to":"Phaseolus coccineus","value":1},
{"from":"Tarahumara","to":"Phaseolus coccineus","value":1},
{"from":"Tecuate","to":"Phaseolus coccineus","value":1},
{"from":"Teko","to":"Phaseolus coccineus","value":1},
{"from":"Tepehua","to":"Phaseolus coccineus","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus coccineus","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus coccineus","value":1},
{"from":"Texistepequeño","to":"Phaseolus coccineus","value":1},
{"from":"Tlahuica","to":"Phaseolus coccineus","value":1},
{"from":"Tlapaneco","to":"Phaseolus coccineus","value":1},
{"from":"Tojolabal","to":"Phaseolus coccineus","value":1},
{"from":"Totonaco","to":"Phaseolus coccineus","value":1},
{"from":"Triqui","to":"Phaseolus coccineus","value":1},
{"from":"Tseltal","to":"Phaseolus coccineus","value":1},
{"from":"Tzotzil","to":"Phaseolus coccineus","value":1},
{"from":"Yaqui","to":"Phaseolus coccineus","value":1},
{"from":"Zapoteco","to":"Phaseolus coccineus","value":1},
{"from":"Zoque","to":"Phaseolus coccineus","value":1},
{"from":"Akateko","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Amuzgo","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Awakateko","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Chatino","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Chichimeca","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Chinanteco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Chocholteco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Ch'ol","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Chuj","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Cora","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Cuicateco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Guarijío","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Huasteco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Huave","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Huichol","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Ixcateco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Jakalteko","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Kikapú","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Lacandón","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Mame","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Matlatzinca","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Mayo","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Mazahua","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Mazateco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Mixe","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Mixteco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Nahua","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Oluteco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Otomí","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Pame","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Pima","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Popoloca","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Purhépecha","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Q'Anjob'Al","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Sayulteco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tarahumara","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tecuate","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Teko","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tepehua","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Texistepequeño","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tlahuica","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tlapaneco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tojolabal","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Totonaco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Triqui","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tseltal","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Tzotzil","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Zapoteco","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Zoque","to":"Phaseolus coccineus  coccineus","value":1},
{"from":"Mixteco","to":"Phaseolus coccineus  striatus","value":1},
{"from":"Nahua","to":"Phaseolus coccineus  striatus","value":1},
{"from":"Popoloca","to":"Phaseolus coccineus  striatus","value":1},
{"from":"Akateko","to":"Phaseolus dumosus","value":1},
{"from":"Amuzgo","to":"Phaseolus dumosus","value":1},
{"from":"Awakateko","to":"Phaseolus dumosus","value":1},
{"from":"Ayapaneco","to":"Phaseolus dumosus","value":1},
{"from":"Chatino","to":"Phaseolus dumosus","value":1},
{"from":"Chinanteco","to":"Phaseolus dumosus","value":1},
{"from":"Chocholteco","to":"Phaseolus dumosus","value":1},
{"from":"Ch'ol","to":"Phaseolus dumosus","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus dumosus","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus dumosus","value":1},
{"from":"Chuj","to":"Phaseolus dumosus","value":1},
{"from":"Cuicateco","to":"Phaseolus dumosus","value":1},
{"from":"Huave","to":"Phaseolus dumosus","value":1},
{"from":"Ixcateco","to":"Phaseolus dumosus","value":1},
{"from":"Jakalteko","to":"Phaseolus dumosus","value":1},
{"from":"Lacandón","to":"Phaseolus dumosus","value":1},
{"from":"Mame","to":"Phaseolus dumosus","value":1},
{"from":"Matlatzinca","to":"Phaseolus dumosus","value":1},
{"from":"Mazahua","to":"Phaseolus dumosus","value":1},
{"from":"Mazateco","to":"Phaseolus dumosus","value":1},
{"from":"Mixe","to":"Phaseolus dumosus","value":1},
{"from":"Mixteco","to":"Phaseolus dumosus","value":1},
{"from":"Nahua","to":"Phaseolus dumosus","value":1},
{"from":"Oluteco","to":"Phaseolus dumosus","value":1},
{"from":"Otomí","to":"Phaseolus dumosus","value":1},
{"from":"Popoloca","to":"Phaseolus dumosus","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus dumosus","value":1},
{"from":"Q'Anjob'Al","to":"Phaseolus dumosus","value":1},
{"from":"Sayulteco","to":"Phaseolus dumosus","value":1},
{"from":"Tecuate","to":"Phaseolus dumosus","value":1},
{"from":"Teko","to":"Phaseolus dumosus","value":1},
{"from":"Tepehua","to":"Phaseolus dumosus","value":1},
{"from":"Texistepequeño","to":"Phaseolus dumosus","value":1},
{"from":"Tlahuica","to":"Phaseolus dumosus","value":1},
{"from":"Tlapaneco","to":"Phaseolus dumosus","value":1},
{"from":"Tojolabal","to":"Phaseolus dumosus","value":1},
{"from":"Totonaco","to":"Phaseolus dumosus","value":1},
{"from":"Triqui","to":"Phaseolus dumosus","value":1},
{"from":"Tseltal","to":"Phaseolus dumosus","value":1},
{"from":"Tzotzil","to":"Phaseolus dumosus","value":1},
{"from":"Zapoteco","to":"Phaseolus dumosus","value":1},
{"from":"Zoque","to":"Phaseolus dumosus","value":1},
{"from":"Akateko","to":"Phaseolus lunatus","value":1},
{"from":"Amuzgo","to":"Phaseolus lunatus","value":1},
{"from":"Awakateko","to":"Phaseolus lunatus","value":1},
{"from":"Ayapaneco","to":"Phaseolus lunatus","value":1},
{"from":"Chatino","to":"Phaseolus lunatus","value":1},
{"from":"Chichimeca","to":"Phaseolus lunatus","value":1},
{"from":"Chinanteco","to":"Phaseolus lunatus","value":1},
{"from":"Chocholteco","to":"Phaseolus lunatus","value":1},
{"from":"Ch'ol","to":"Phaseolus lunatus","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus lunatus","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus lunatus","value":1},
{"from":"Chuj","to":"Phaseolus lunatus","value":1},
{"from":"Cora","to":"Phaseolus lunatus","value":1},
{"from":"Cuicateco","to":"Phaseolus lunatus","value":1},
{"from":"Guarijío","to":"Phaseolus lunatus","value":1},
{"from":"Huasteco","to":"Phaseolus lunatus","value":1},
{"from":"Huave","to":"Phaseolus lunatus","value":1},
{"from":"Huichol","to":"Phaseolus lunatus","value":1},
{"from":"Ixcateco","to":"Phaseolus lunatus","value":1},
{"from":"Ixil","to":"Phaseolus lunatus","value":1},
{"from":"Jakalteko","to":"Phaseolus lunatus","value":1},
{"from":"Kaqchikel","to":"Phaseolus lunatus","value":1},
{"from":"K'iche'","to":"Phaseolus lunatus","value":1},
{"from":"Lacandón","to":"Phaseolus lunatus","value":1},
{"from":"Mame","to":"Phaseolus lunatus","value":1},
{"from":"Matlatzinca","to":"Phaseolus lunatus","value":1},
{"from":"Maya","to":"Phaseolus lunatus","value":1},
{"from":"Mayo","to":"Phaseolus lunatus","value":1},
{"from":"Mazahua","to":"Phaseolus lunatus","value":1},
{"from":"Mazateco","to":"Phaseolus lunatus","value":1},
{"from":"Mixe","to":"Phaseolus lunatus","value":1},
{"from":"Mixteco","to":"Phaseolus lunatus","value":1},
{"from":"Nahua","to":"Phaseolus lunatus","value":1},
{"from":"Oluteco","to":"Phaseolus lunatus","value":1},
{"from":"Otomí","to":"Phaseolus lunatus","value":1},
{"from":"Pame","to":"Phaseolus lunatus","value":1},
{"from":"Popoloca","to":"Phaseolus lunatus","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus lunatus","value":1},
{"from":"Purhépecha","to":"Phaseolus lunatus","value":1},
{"from":"Q'Anjob'Al","to":"Phaseolus lunatus","value":1},
{"from":"Q'Eqchi'","to":"Phaseolus lunatus","value":1},
{"from":"Sayulteco","to":"Phaseolus lunatus","value":1},
{"from":"Tarahumara","to":"Phaseolus lunatus","value":1},
{"from":"Tecuate","to":"Phaseolus lunatus","value":1},
{"from":"Teko","to":"Phaseolus lunatus","value":1},
{"from":"Tepehua","to":"Phaseolus lunatus","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus lunatus","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus lunatus","value":1},
{"from":"Texistepequeño","to":"Phaseolus lunatus","value":1},
{"from":"Tlahuica","to":"Phaseolus lunatus","value":1},
{"from":"Tlapaneco","to":"Phaseolus lunatus","value":1},
{"from":"Tojolabal","to":"Phaseolus lunatus","value":1},
{"from":"Totonaco","to":"Phaseolus lunatus","value":1},
{"from":"Triqui","to":"Phaseolus lunatus","value":1},
{"from":"Tseltal","to":"Phaseolus lunatus","value":1},
{"from":"Tzotzil","to":"Phaseolus lunatus","value":1},
{"from":"Yaqui","to":"Phaseolus lunatus","value":1},
{"from":"Zapoteco","to":"Phaseolus lunatus","value":1},
{"from":"Zoque","to":"Phaseolus lunatus","value":1},
{"from":"Akateko","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Amuzgo","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Awakateko","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Ayapaneco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Chatino","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Chinanteco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Ch'ol","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Chuj","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Huasteco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Huave","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Ixil","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Jakalteko","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Kaqchikel","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"K'iche'","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Lacandón","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Mame","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Maya","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Mixe","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Mixteco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Nahua","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Oluteco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Otomí","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Pame","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Q'Anjob'Al","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Q'Eqchi'","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Sayulteco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Tecuate","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Tepehua","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Texistepequeño","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Tlapaneco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Tojolabal","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Totonaco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Triqui","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Tseltal","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Tzotzil","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Zapoteco","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Zoque","to":"Phaseolus lunatus var. lunatus","value":1},
{"from":"Akateko","to":"Phaseolus vulgaris","value":1},
{"from":"Amuzgo","to":"Phaseolus vulgaris","value":1},
{"from":"Awakateko","to":"Phaseolus vulgaris","value":1},
{"from":"Ayapaneco","to":"Phaseolus vulgaris","value":1},
{"from":"Chatino","to":"Phaseolus vulgaris","value":1},
{"from":"Chichimeca","to":"Phaseolus vulgaris","value":1},
{"from":"Chinanteco","to":"Phaseolus vulgaris","value":1},
{"from":"Chocholteco","to":"Phaseolus vulgaris","value":1},
{"from":"Ch'ol","to":"Phaseolus vulgaris","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus vulgaris","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus vulgaris","value":1},
{"from":"Chuj","to":"Phaseolus vulgaris","value":1},
{"from":"Cochimí","to":"Phaseolus vulgaris","value":1},
{"from":"Cora","to":"Phaseolus vulgaris","value":1},
{"from":"Cucapá","to":"Phaseolus vulgaris","value":1},
{"from":"Cuicateco","to":"Phaseolus vulgaris","value":1},
{"from":"Guarijío","to":"Phaseolus vulgaris","value":1},
{"from":"Huasteco","to":"Phaseolus vulgaris","value":1},
{"from":"Huave","to":"Phaseolus vulgaris","value":1},
{"from":"Huichol","to":"Phaseolus vulgaris","value":1},
{"from":"Ixcateco","to":"Phaseolus vulgaris","value":1},
{"from":"Ixil","to":"Phaseolus vulgaris","value":1},
{"from":"Jakalteko","to":"Phaseolus vulgaris","value":1},
{"from":"Kaqchikel","to":"Phaseolus vulgaris","value":1},
{"from":"K'iche'","to":"Phaseolus vulgaris","value":1},
{"from":"Kikapú","to":"Phaseolus vulgaris","value":1},
{"from":"Kiliwa","to":"Phaseolus vulgaris","value":1},
{"from":"Ku'ahl","to":"Phaseolus vulgaris","value":1},
{"from":"Kumiai","to":"Phaseolus vulgaris","value":1},
{"from":"Lacandón","to":"Phaseolus vulgaris","value":1},
{"from":"Mame","to":"Phaseolus vulgaris","value":1},
{"from":"Matlatzinca","to":"Phaseolus vulgaris","value":1},
{"from":"Maya","to":"Phaseolus vulgaris","value":1},
{"from":"Mayo","to":"Phaseolus vulgaris","value":1},
{"from":"Mazahua","to":"Phaseolus vulgaris","value":1},
{"from":"Mazateco","to":"Phaseolus vulgaris","value":1},
{"from":"Mixe","to":"Phaseolus vulgaris","value":1},
{"from":"Mixteco","to":"Phaseolus vulgaris","value":1},
{"from":"Nahua","to":"Phaseolus vulgaris","value":1},
{"from":"Oluteco","to":"Phaseolus vulgaris","value":1},
{"from":"Otomí","to":"Phaseolus vulgaris","value":1},
{"from":"Pa Ipai","to":"Phaseolus vulgaris","value":1},
{"from":"Pame","to":"Phaseolus vulgaris","value":1},
{"from":"Pápago","to":"Phaseolus vulgaris","value":1},
{"from":"Pima","to":"Phaseolus vulgaris","value":1},
{"from":"Popoloca","to":"Phaseolus vulgaris","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus vulgaris","value":1},
{"from":"Purhépecha","to":"Phaseolus vulgaris","value":1},
{"from":"Q'Anjob'Al","to":"Phaseolus vulgaris","value":1},
{"from":"Q'Eqchi'","to":"Phaseolus vulgaris","value":1},
{"from":"Sayulteco","to":"Phaseolus vulgaris","value":1},
{"from":"Seri","to":"Phaseolus vulgaris","value":1},
{"from":"Tarahumara","to":"Phaseolus vulgaris","value":1},
{"from":"Tecuate","to":"Phaseolus vulgaris","value":1},
{"from":"Teko","to":"Phaseolus vulgaris","value":1},
{"from":"Tepehua","to":"Phaseolus vulgaris","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus vulgaris","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus vulgaris","value":1},
{"from":"Texistepequeño","to":"Phaseolus vulgaris","value":1},
{"from":"Tlahuica","to":"Phaseolus vulgaris","value":1},
{"from":"Tlapaneco","to":"Phaseolus vulgaris","value":1},
{"from":"Tojolabal","to":"Phaseolus vulgaris","value":1},
{"from":"Totonaco","to":"Phaseolus vulgaris","value":1},
{"from":"Triqui","to":"Phaseolus vulgaris","value":1},
{"from":"Tseltal","to":"Phaseolus vulgaris","value":1},
{"from":"Tzotzil","to":"Phaseolus vulgaris","value":1},
{"from":"Yaqui","to":"Phaseolus vulgaris","value":1},
{"from":"Zapoteco","to":"Phaseolus vulgaris","value":1},
{"from":"Zoque","to":"Phaseolus vulgaris","value":1},
{"from":"Amuzgo","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Ayapaneco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Chatino","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Chichimeca","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Chinanteco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Chocholteco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Ch'ol","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Cora","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Cuicateco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Guarijío","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Huasteco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Huave","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Huichol","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Ixcateco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Matlatzinca","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Mayo","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Mazahua","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Mazateco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Mixe","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Mixteco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Nahua","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Oluteco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Otomí","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Pame","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Pima","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Popoloca","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Purhépecha","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Sayulteco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tarahumara","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tecuate","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tepehua","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Texistepequeño","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tlahuica","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tlapaneco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Totonaco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Triqui","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tseltal","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Tzotzil","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Zapoteco","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Zoque","to":"Phaseolus vulgaris var. mexicanus","value":1},
{"from":"Akateko","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Amuzgo","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Awakateko","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Ayapaneco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Chatino","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Chichimeca","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Chinanteco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Chocholteco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Ch'ol","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Chontal de Oaxaca","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Chontal de Tabasco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Chuj","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Cochimí","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Cora","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Cucapá","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Cuicateco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Guarijío","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Huasteco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Huave","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Huichol","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Ixcateco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Ixil","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Jakalteko","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Kaqchikel","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"K'iche'","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Kikapú","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Kiliwa","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Ku'ahl","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Kumiai","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Lacandón","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Mame","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Matlatzinca","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Maya","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Mayo","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Mazahua","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Mazateco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Mixe","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Mixteco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Nahua","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Oluteco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Otomí","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Pa Ipai","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Pame","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Pápago","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Pima","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Popoloca","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Popoluca de la Sierra","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Purhépecha","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Q'Anjob'Al","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Q'Eqchi'","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Sayulteco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Seri","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tarahumara","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tecuate","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Teko","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tepehua","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tepehuano del norte","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tepehuano del sur","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Texistepequeño","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tlahuica","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tlapaneco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tojolabal","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Totonaco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Triqui","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tseltal","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Tzotzil","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Yaqui","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Zapoteco","to":"Phaseolus vulgaris var. vulgaris","value":1},
{"from":"Zoque","to":"Phaseolus vulgaris var. vulgaris","value":1}


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
            