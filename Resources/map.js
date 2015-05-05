var searchBar = Ti.UI.createSearchBar({
	barColor:'#F5D76E', showCancel:true,
    height:43, top:0, hintText:'Enter Venue Name Here'
});

var refreshBtn1 = Ti.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
});

/*
 * Created by Everett Boker
 */

var WinView = Ti.UI.createView({ top:0, width: '100%', height: '100%', backgroundColor: '#1C1C1C' });

var Map = require('ti.map');
var mapview = Map.createView({mapType:Map.NORMAL_TYPE});

var moscowView = Map.createAnnotation({
    latitude:46.725761, longitude:-117.011401,
    title:"Stover\'s Deli", subtitle:'J.A. Albertson Building 1st Floor',
    pincolor:Map.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});

var einsteinView = Map.createAnnotation({
    latitude:46.727247, longitude:-117.012625,
    title:"Einstein Bros Bagels", subtitle:'Idaho Commons 2nd Floor',
    pincolor:Map.ANNOTATION_RED, myid:2 
});

var bobsView = Map.createAnnotation({
    latitude:46.730579, longitude:-117.016532,
    title:"Bob\s Place", subtitle:'Wallace Complex',
    pincolor:Map.ANNOTATION_RED, myid:3
});

var sisters1View = Map.createAnnotation({
    latitude:46.729003, longitude:-117.012710,
    title:"Sisters\' Brew", subtitle:'Jenson Engineering Building (JEB)',
    pincolor:Map.ANNOTATION_RED, myid:4
});
var sisters2View = Map.createAnnotation({
    latitude:46.725771, longitude:-117.010886,
    title:"Sisters\' Brew", subtitle:'Administration Building',
    pincolor:Map.ANNOTATION_RED, myid:5
});

var dennyView = Map.createAnnotation({
    latitude:46.729936, longitude:-117.012664,
    title:"Denny\'s AllNighter", subtitle:'6th Street Market at the LLC',
    pincolor:Map.ANNOTATION_RED, myid:6
});
var gridView = Map.createAnnotation({
    latitude:46.729901, longitude:-117.012669,
    title:"The Grid Community Store", subtitle:'6th Street Market at the LLC',
    pincolor:Map.ANNOTATION_RED, myid:7
});

var bogeyView = Map.createAnnotation({
    latitude:46.723387, longitude:-117.016692,
    title:"Bogey\'s Grill", subtitle:'University Golf Course',
    pincolor:Map.ANNOTATION_RED, myid:8
});

var meinView = Map.createAnnotation({
    latitude:46.727606, longitude:-117.012466,
    title:"Mein Bowl", subtitle:'Idaho Commons 1st Floor',
    pincolor:Map.ANNOTATION_RED, myid:9
});
var ppizzaView = Map.createAnnotation({
    latitude:46.727592, longitude:-117.012381,
    title:"Paradise Creek Pizza and Grill", subtitle:'Idaho Commons 1st Floor',
    pincolor:Map.ANNOTATION_RED, myid:10
});
var cobrizoView = Map.createAnnotation({
    latitude:46.727567, longitude:-117.012382,
    title:"Cobrizo Mexican Grill", subtitle:'Idaho Commons 1st Floor',
    pincolor:Map.ANNOTATION_RED, myid:11
});
var subcView = Map.createAnnotation({
    latitude:46.727440, longitude:-117.012378,
    title:"Subconnections", subtitle:'Idaho Commons 1st Floor',
    pincolor:Map.ANNOTATION_RED, myid:12
});
var jambaView = Map.createAnnotation({
    latitude:46.727469, longitude:-117.012382,
    title:"Jamba Juice", subtitle:'Idaho Commons 1st Floor',
    pincolor:Map.ANNOTATION_RED, myid:13
});
var iView = Map.createAnnotation({
    latitude:46.727574, longitude:-117.012335,
    title:"I of the Commons", subtitle:'Idaho Commons 2nd Floor',
    pincolor:Map.ANNOTATION_RED, myid:14
});


var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: {latitude:46.7261, longitude:-117.0111,
            latitudeDelta:0.008, longitudeDelta:0.008},
    animate:true, regionFit:true, userLocation:true,
    annotations:[moscowView, einsteinView, bobsView, sisters1View, sisters2View, dennyView, gridView, bogeyView, meinView, ppizzaView, cobrizoView, subcView, jambaView, iView]
});

// Handle click events on any annotations on this map.
mapview.addEventListener('click', function(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
});
