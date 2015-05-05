var winNutInfo = Ti.UI.createWindow({
	backgroundColor:'#FFFFFF',
	title:'Nutrition Info'
});

var nameLabel = Ti.UI.createLabel({
	text:'Classic Tomato Soup',
	font:{fontSize:16, fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top:'27%'
}); 

var infoLabel = Ti.UI.createLabel({
	color:'#525252',
	text:'Serving Size\n Total Calories\n    Calories from Fat\n    % Calories from Fat \nTotal Fat\n    Saturated Fat\n    Trans Fat\nCholesterol\nSodium\nTotal Carbs\n    Sugars\n    Fiber\nProtein',
	font:{fontSize:16, fontFamily:'Helvetica Neue'},
	textAlign:'left',
	top:'30%',
	left:'20%', height:'50%'
}); 

var numberLabel = Ti.UI.createLabel({
	color:'#525252',
	text:'1/2 Cup\n90\n0\n0%\n0g\n0g\n0g\n0mg\n710mg\n20g\n12g\n1g\n2g',
	font:{fontSize:16, fontFamily:'Helvetica Neue'},
	textAlign:'right',
	top:'30%',
	left:'67%', height:'50%'
});

var ingLabel = Ti.UI.createLabel({
	text:'Ingredients Include:', top:'80%'
});


var soupImg = Ti.UI.createImageView({
	image:'/images/tSoupRound.png', 
	height:'120', top:'20'
});

var ing1Label = Ti.UI.createLabel({
	text:'Gluten', top:'85%', left:'45%'
});
var ingImg = Ti.UI.createImageView({
	image:'/images/gluten.png',
	top:'85%', left:'30%'
});

winNutInfo.add(nameLabel, infoLabel, numberLabel, ingLabel, ing1Label,soupImg, ingImg);

