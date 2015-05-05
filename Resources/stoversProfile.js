 /* 
  * Venue Profile Page : Stover's
  */

var win10 = Ti.UI.createWindow({ backgroundColor:'#FFFFFF', title:'Venue Profile' }); 

var venueNameLabel = Ti.UI.createLabel({
	text:'Stover\'s Deli', top:'48%', color:'#525252'});
var timeLabel = Ti.UI.createLabel({
	text:'Monday - Friday  8AM - 3PM', top:'52%', color:'#525252'});
var locationLabel = Ti.UI.createLabel({
	text:'J.A. Albertson Building First Floor', top:'56%', color:'#525252'});

var profileVenueView = Ti.UI.createView({
	top:'40%'
});
var venueTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: false,
	showVerticalScrollIndicator: false,
	width:'100%',
	backgroundColor:'#FFFFFF'
}); 
var oneSection = Ti.UI.createTableViewSection({});

var coffeeImage = Ti.UI.createImageView({
	image:'/images/coffee1.jpg', width:'100%', top:0
});

var aboutRow = Ti.UI.createTableViewRow({
	title:'About Us', hasChild: true, leftImage:'images/vInfo.png'});
var amentRow = Ti.UI.createTableViewRow({
	title:'Announcements', hasChild: true, leftImage:'images/vAment.png'});
var menuRow = Ti.UI.createTableViewRow({
	title:'Our Menu', hasChild: true, leftImage:'images/vMenu.png'});
var feedbackRow = Ti.UI.createTableViewRow({
	title:'Give Us Feedback', hasChild: true, leftImage:'images/vMail.png'});

oneSection.add(aboutRow);
oneSection.add(amentRow);
oneSection.add(menuRow);
oneSection.add(feedbackRow);

win10.add(venueNameLabel);
win10.add(timeLabel);
win10.add(locationLabel);
win10.add(coffeeImage);

win10.add(profileVenueView);
win10.add(venueTableView);
venueTableView.setData([oneSection]);
profileVenueView.add(venueTableView);


/*
 * Venue Profile: About Page
 */

var win11 = Ti.UI.createWindow({
	backgroundColor:'#FFFFFF', title:'About Us'
});


var desLabel = Ti.UI.createLabel({
	text:'Stover\'s offers an enticing pita sandwich made with high quality meats, cheeses, and garden-fresh produce.  To make your meal complete add a fresh cup or bowl of soup. If you are an early riser start your morning with a fresh-brewed cup of Starbucks coffee, breakfast or a delicious pastry.', 
	left:'30', right:'30', color:'#FFFFFF'
});
var aboutImg = Ti.UI.createImageView({
	image:'/images/pitaBgBlur.png', 
	//height:'250', 
	height:'100%', width:'100%'
});

aboutImg.add(desLabel);

//win11.add(desLabel);
win11.add(aboutImg);

/*
 * About Page End
 */

/*
 * Venue Profile: Announcements STARTS
 */

var win12 = Ti.UI.createWindow({ backgroundColor:'#FFF', title:'Announcement' });

var stoverAmentView = Ti.UI.createView({});
var stoverAmentTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: false,
	showVerticalScrollIndicator: false,
	width:'100%', top:'0%',
	backgroundColor:'#FFFFFF'
}); 
var stoverAmentSection = Ti.UI.createTableViewSection({});


var tsoupRow = Ti.UI.createTableViewRow({leftImage:'images/tSoupSquare.jpg', hasChild:true, height:'100'});
var tsoupLabel1 = Ti.UI.createLabel({ text:'Soup of the Day', top:'10%', left:'40%', font:{fontWeight:'bold', fontSize:'18'}});
var tsoupLabel2 = Ti.UI.createLabel({ text:'Classic Tomato Soup', top:'30%', left:'40%', font:{fontSize:'16'}});
var tsoupLabel3 = Ti.UI.createLabel({ text:'$4.09', top:'60%', left:'40%', font:{fontSize:'16'}, color:'#525252'});

tsoupRow.add(tsoupLabel1);
tsoupRow.add(tsoupLabel2);
tsoupRow.add(tsoupLabel3);
stoverAmentSection.add(tsoupRow);

stoverAmentTableView.setData([stoverAmentSection]);
stoverAmentView.add(stoverAmentTableView);

win12.add(stoverAmentTableView);
win12.add(stoverAmentView);

tsoupRow.addEventListener('click', function(){
	tab1.open(winNutInfo);
});




/*
 * Venue Profile: Announements ENDS
 */
/*
 * Venue Profile: Menu STARTS
 */

var win13 = Ti.UI.createWindow({backgroundColor:'#FFF', title:'Our Menu'});

var foodMenuView = Ti.UI.createView({
	height:'100%'
});
var menuTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true,
	showVerticalScrollIndicator: true,
	width:'100%',
	backgroundColor:'#FFFFFF'
}); 


var pitaSection = Ti.UI.createTableViewSection({
	headerTitle:'Pita'
});

var pita1Row = Ti.UI.createTableViewRow({
	title:'  Beef Pita', hasChild: true, height:40});
var pita2Row = Ti.UI.createTableViewRow({
	title:'  Hummus Pita', hasChild: true, height:40});
var pita3Row = Ti.UI.createTableViewRow({
	title:'  Turkey Pita', hasChild: true, height:40});
var pita4Row = Ti.UI.createTableViewRow({
	title:'  Ham Pita', hasChild: true, height:40});
var pita5Row = Ti.UI.createTableViewRow({
	title:'  Bacon Pita', hasChild: true, height:40});
var pita6Row = Ti.UI.createTableViewRow({
	title:'  Chicken Pita', hasChild: true, height:40});
var pita7Row = Ti.UI.createTableViewRow({
	title:'  Veggie Pita', hasChild: true, height:40});
	
var pitaPriceLabel1 = Ti.UI.createLabel({text:'$4.09', left:'85%'});
var pitaPriceLabel2 = Ti.UI.createLabel({text:'$4.09', left:'85%'});
var pitaPriceLabel3 = Ti.UI.createLabel({text:'$4.09', left:'85%'});
var pitaPriceLabel4 = Ti.UI.createLabel({text:'$4.09', left:'85%'});
var pitaPriceLabel5 = Ti.UI.createLabel({text:'$4.09', left:'85%'});
var pitaPriceLabel6 = Ti.UI.createLabel({text:'$4.09', left:'85%'});
var pitaPriceLabel7 = Ti.UI.createLabel({text:'$4.09', left:'85%'});

pita1Row.add(pitaPriceLabel1);
pita2Row.add(pitaPriceLabel2);
pita3Row.add(pitaPriceLabel3);
pita4Row.add(pitaPriceLabel4);
pita5Row.add(pitaPriceLabel5);
pita6Row.add(pitaPriceLabel6);
pita7Row.add(pitaPriceLabel7);

pitaSection.add(pita1Row);
pitaSection.add(pita2Row);
pitaSection.add(pita3Row);
pitaSection.add(pita4Row);
pitaSection.add(pita5Row);
pitaSection.add(pita6Row);
pitaSection.add(pita7Row);

var burritoSection = Ti.UI.createTableViewSection({
	headerTitle:'Breakfast Burrito'
});

var burrito1Row = Ti.UI.createTableViewRow({
	title:'  Bacon Burrito', hasChild: true, height:40});
var burrito2Row = Ti.UI.createTableViewRow({
	title:'  Sausage Burrito', hasChild: true, height:40});
var burrito3Row = Ti.UI.createTableViewRow({
	title:'  Chicken Burrito', hasChild: true, height:40});

var burritoPrice1 = Ti.UI.createLabel({ text:'$2.99', left:'85%' });
var burritoPrice2 = Ti.UI.createLabel({ text:'$2.99', left:'85%' });
var burritoPrice3 = Ti.UI.createLabel({ text:'$2.99', left:'85%' });

burrito1Row.add(burritoPrice1);
burrito2Row.add(burritoPrice2);
burrito3Row.add(burritoPrice3);

burritoSection.add(burrito1Row);
burritoSection.add(burrito2Row);
burritoSection.add(burrito3Row);


var bakeSection = Ti.UI.createTableViewSection({
	headerTitle:'Baked Goods'
});

var bake1Row = Ti.UI.createTableViewRow({
	title:'  Cinnamon Twist', hasChild: true, height:40});
var bake2Row = Ti.UI.createTableViewRow({
	title:'  Scones', hasChild: true, height:40});
var bake3Row = Ti.UI.createTableViewRow({
	title:'  Mixed Berry Coffee Cake', hasChild: true, height:40});
	
bake1Price = Ti.UI.createLabel({
	text:'$1.69', textAlign:'right', left:'85%'
});
bake2Price = Ti.UI.createLabel({
	text:'$1.89', textAlign:'right', left:'85%'
});
bake3Price = Ti.UI.createLabel({
	text:'$2.49', textAlign:'right', left:'85%'
});

bake1Row.add(bake1Price);
bake2Row.add(bake2Price);
bake3Row.add(bake3Price);

bakeSection.add(bake1Row);
bakeSection.add(bake2Row);
bakeSection.add(bake3Row);


win13.add(foodMenuView, menuTableView);
menuTableView.setData([pitaSection, burritoSection, bakeSection]);
foodMenuView.add(menuTableView);


/*
 * Venue Profile: Menu ENDS
 */


