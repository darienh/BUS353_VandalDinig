 /* 
  * Venue Profile Page: Stover's
  */

var winBobProfile = Ti.UI.createWindow({
	backgroundColor:'#FFFFFF', title:'Venue Profile' }); 

var bobvenueNameLabel = Ti.UI.createLabel({
	text:'Bob\'s Place', top:'48%', color:'#525252' });
var bobtimeLabel = Ti.UI.createLabel({
	text:'Monday - Friday  7AM - 7:30PM\n', top:'52%', color:'#525252' });
var boblocationLabel = Ti.UI.createLabel({
	text:'Wallace Complex', top:'56%', color:'#525252' });

var bobprofileVenueView = Ti.UI.createView({ top:'40%' });
var bobvenueTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: false, showVerticalScrollIndicator: false,
	width:'100%', backgroundColor:'#FFFFFF'
}); 
var boboneSection = Ti.UI.createTableViewSection({});

var bobcoffeeImage = Ti.UI.createImageView({
	image:'/images/bobProfile.jpg', width:'100%', top:0
});

var bobaboutRow = Ti.UI.createTableViewRow({
	title:'About Us', hasChild: true, leftImage:'images/vInfo.png'});
var bobamentRow = Ti.UI.createTableViewRow({
	title:'Announcements', hasChild: true, leftImage:'images/vAment.png'});
var bobmenuRow = Ti.UI.createTableViewRow({
	title:'Our Menu', hasChild: true, leftImage:'images/vMenu.png'});
var bobfeedbackRow = Ti.UI.createTableViewRow({
	title:'Give Us Feedback', hasChild: true, leftImage:'images/vMail.png'});

boboneSection.add(bobaboutRow);
boboneSection.add(bobamentRow);
boboneSection.add(bobmenuRow);
boboneSection.add(bobfeedbackRow);

winBobProfile.add(bobvenueNameLabel);
winBobProfile.add(bobtimeLabel);
winBobProfile.add(boblocationLabel);
winBobProfile.add(bobcoffeeImage);

winBobProfile.add(bobprofileVenueView);
winBobProfile.add(bobvenueTableView);
bobvenueTableView.setData([boboneSection]);
bobprofileVenueView.add(bobvenueTableView);


/*
 * Child Page: About
 */

var winBobAbout = Ti.UI.createWindow({ backgroundColor:'#FFFFFF', title:'About Us' });


var bobdesLabel = Ti.UI.createLabel({
	text:'Bob\'s Place is the main dining hall on the University of Idaho Campus. Bob\'s Place offers meals from morning until night, with an all-you-care-to-eat format. We serve Aspretto coffee and offer a wide range of options, from classic comfort foods to freshly sauteed international offerings. All ages are welcome and you do not need to be a student to eat at Bob\'s Place. ', 
	left:'30', right:'30', top:'20%', color:'#FFFFFF' });
var bobPriceLabel = Ti.UI.createLabel({
	text:'Meal Period\nBreakfast\nLunch\nDinner', 
	left:'60', color:'#FFFFFF', textAlign:'left', top:'65%' });
var bobPriceLabel2 = Ti.UI.createLabel({
	text:'Cash Price at Door\n$7.50\n$9.00\n$10.00', 
	right:'60', color:'#FFFFFF', textAlign:'right', top:'65%' });
var bobaboutImg = Ti.UI.createImageView({
	image:'/images/bobAbout.jpg', height:'100%', width:'100%' });

bobaboutImg.add(bobdesLabel);
bobaboutImg.add(bobPriceLabel);
bobaboutImg.add(bobPriceLabel2);

winBobAbout.add(bobaboutImg);


/*
 * Child Page: Announcements 
 */

var winBobAment = Ti.UI.createWindow({ backgroundColor:'#FFFFFF', title:'Announcement' });

var bobAmentView = Ti.UI.createView({});
var bobAmentTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true, showVerticalScrollIndicator: false,
	width:'100%', top:'0', backgroundColor:'#FFFFFF'
}); 
var amentSection = Ti.UI.createTableViewSection({});

var ament1Row = Ti.UI.createTableViewRow({leftImage:'images/amentBbq.png', hasChild: true, height:'100'});
var ament1Label1 = Ti.UI.createLabel({ text:'BBQ Blues', top:'10%', left:'40%', font:{fontWeight:'bold', fontSize:'18'}});
var ament1Label2 = Ti.UI.createLabel({ text:'BBQ that sings to your soul!', top:'30%', left:'40%', font:{fontSize:'16'}});
var ament1Label3 = Ti.UI.createLabel({ text:'Coming May 6th', top:'60%', left:'40%', font:{fontSize:'16'}, color:'#525252'});

ament1Row.add(ament1Label1);
ament1Row.add(ament1Label2);
ament1Row.add(ament1Label3);

amentSection.add(ament1Row);
//
var ament2Row = Ti.UI.createTableViewRow({leftImage:'images/amentLocal.png', hasChild: true, height:'100'});
var ament2Label1 = Ti.UI.createLabel({ text:'Crave Local', top:'10%', left:'40%', font:{fontWeight:'bold', fontSize:'18'}});
var ament2Label2 = Ti.UI.createLabel({ text:'Celebrate your local food with delicious local dinner!', top:'30%', left:'40%', font:{fontSize:'16'}});
var ament2Label3 = Ti.UI.createLabel({ text:'Coming May 8th', top:'70%', left:'40%', font:{fontSize:'16'}, color:'#525252'});

ament2Row.add(ament2Label1);
ament2Row.add(ament2Label2);
ament2Row.add(ament2Label3);

amentSection.add(ament2Row);


//
var ament3Row = Ti.UI.createTableViewRow({leftImage:'images/amentPizza.jpg', hasChild: true, height:'100'});
var ament3Label1 = Ti.UI.createLabel({ text:'Pizza Pandenonium', top:'10%', left:'40%', font:{fontWeight:'bold', fontSize:'18'}});
var ament3Label2 = Ti.UI.createLabel({ text:'For the love of pizza!', top:'30%', left:'40%', font:{fontSize:'16'}});
var ament3Label3 = Ti.UI.createLabel({ text:'Coming May 10th', top:'70%', left:'40%', font:{fontSize:'16'}, color:'#525252'});

ament3Row.add(ament3Label1);
ament3Row.add(ament3Label2);
ament3Row.add(ament3Label3);

amentSection.add(ament3Row);
//
var ament4Row = Ti.UI.createTableViewRow({leftImage:'images/amentSteak.jpg', hasChild: true, height:'100'});
var ament4Label1 = Ti.UI.createLabel({ text:'Stone Steakhouse', top:'10%', left:'40%', font:{fontWeight:'bold', fontSize:'18'}});
var ament4Label2 = Ti.UI.createLabel({ text:'Prime Time Sizzle', top:'30%', left:'40%', font:{fontSize:'16'}});
var ament4Label3 = Ti.UI.createLabel({ text:'Coming soon!', top:'70%', left:'40%', font:{fontSize:'16'}, color:'#525252'});

ament4Row.add(ament4Label1);
ament4Row.add(ament4Label2);
ament4Row.add(ament4Label3);

amentSection.add(ament4Row);
//
bobAmentTableView.setData([amentSection]);
bobAmentView.add(bobAmentTableView);

winBobAment.add(bobAmentTableView);
winBobAment.add(bobAmentView);
/*
 * 
 */
var craveLocalWin = Ti.UI.createWindow({backgroundColor:'#FFF'});

var craveLocalLabel1 = Ti.UI.createLabel({
	font:{fontWeight:'bold', fontSize:'20'},  top:'50%',
	text:'Red, white, and new food to soothe the soul!'
});
var craveLocalLabel2 = Ti.UI.createLabel({
	top:'65%',
	text:'Celebrate your local farmers with a delicious local dinner!\nJoin Vandal Dining for a full service, exclusive dinner in the quiet room. Choose from three entrees, four sides, and two delectable desserts.\nOnly a swipe plus $10\nCan be paid in casah, flex, vandal dollars, or credit card.'
});
var craveLocalLabel3 = Ti.UI.createLabel({
	top:'85%',
	text:'Date: May 8th 2015\nTime: 5:00PM - 7:00PM\nLocation: Bob\'s Place Quite Room'
});

var craveLocalImg = Ti.UI.createImageView({ top:'0%', width:'100%', image:'images/cravelocal.png'});
craveLocalWin.add(craveLocalLabel1, craveLocalLabel2, craveLocalLabel3, craveLocalImg);



/*
 * Venue Profile: Meal View STARTS
 */

var winbobMenu = Ti.UI.createWindow({backgroundColor:'#FFF', title:'Our Menu'});

var bobfoodMenuView = Ti.UI.createView({ height:'100%' });

var bobmenuTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true, showVerticalScrollIndicator: true,
	width:'100%', backgroundColor:'#FFFFFF'
}); 

//Meal TableView - Today
var mealTodaySection = Ti.UI.createTableViewSection({headerTitle:'Today'});

var meal1Row = Ti.UI.createTableViewRow({
	title:'Breakfast', hasChild: true, height:40});
var meal2Row = Ti.UI.createTableViewRow({
	title:'Lunch', hasChild: true, height:40});
var meal3Row = Ti.UI.createTableViewRow({
	title:'Dinner', hasChild: true, height:40});

mealTodaySection.add(meal1Row);
mealTodaySection.add(meal2Row);
mealTodaySection.add(meal3Row);

var mealTime1Label = Ti.UI.createLabel({  text:' 7:00 am - 10:45 am', textAlign:'right', right:'0'  });
var mealTime2Label = Ti.UI.createLabel({  text:'11:00 am -  4:59 pm', textAlign:'right', right:'0'  });
var mealTime3Label = Ti.UI.createLabel({  text:' 5:00 pm -  7:30 pm', textAlign:'right', right:'0'  });
meal1Row.add(mealTime1Label);
meal2Row.add(mealTime2Label);
meal3Row.add(mealTime3Label);


//Meal TableView - Tomorrow
var mealTmrSection = Ti.UI.createTableViewSection({headerTitle:'Tomorrow'});

var mealTmr1Row = Ti.UI.createTableViewRow({ title:'Continental Breakfast', hasChild: true, height:40});
var mealTmr2Row = Ti.UI.createTableViewRow({ title:'Brunch', hasChild: true, height:40});
var mealTmr3Row = Ti.UI.createTableViewRow({ title:'Dinner', hasChild: true, height:40});

mealTmrSection.add(mealTmr1Row);
mealTmrSection.add(mealTmr2Row);
mealTmrSection.add(mealTmr3Row);

var mealTime1Label2 = Ti.UI.createLabel({  text:' 8:00 am - 10:45 am', right:'0'  });
var mealTime2Label2 = Ti.UI.createLabel({  text:'10:00 am -  1:30 pm', right:'0'  });
var mealTime3Label2 = Ti.UI.createLabel({  text:' 4:30 pm -  7:30 pm', right:'0'  });
mealTmr1Row.add(mealTime1Label2);
mealTmr2Row.add(mealTime2Label2);
mealTmr3Row.add(mealTime3Label2);

//Meal TableView - Future
var mealFtrSection = Ti.UI.createTableViewSection({headerTitle:'Upcoming Future'});

var mealFtr1Row = Ti.UI.createTableViewRow({ title:'Week of 4/20 - 4/27', hasChild: true, height:40});
var mealFtr2Row = Ti.UI.createTableViewRow({ title:'Week of 4/28 - 5/03', hasChild: true, height:40});
mealFtrSection.add(mealFtr1Row);
mealFtrSection.add(mealFtr2Row);

var menuClaimLabel = Ti.UI.createLabel({
	bottom:'20',
	text:'Bob\'s offers a variety of freshly prepared food selection and serves hot lunch and dinner. Menu is subject to change. Please contact Vandal Dining with any questions.'
});
winbobMenu.add(menuClaimLabel);

winbobMenu.add(bobfoodMenuView, bobmenuTableView);
bobmenuTableView.setData([mealTodaySection, mealTmrSection, mealFtrSection]);
bobfoodMenuView.add(bobmenuTableView);

/*
 * Venue Profile: Menu STARTS
 */

var winBobsDinner = Ti.UI.createWindow({backgroundColor:'#FFF', title:'Dinner 5/1'});

var foodMenuView = Ti.UI.createView({  height:'100%'  });
var menuTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true, showVerticalScrollIndicator: true,
	width:'100%', backgroundColor:'#FFFFFF'  });
	
//Section 1: Deli	 
var deliSection = Ti.UI.createTableViewSection({ headerTitle:'Deli' });
var deli1Row = Ti.UI.createTableViewRow({ title:'  Made to Order Deli Bar', hasChild: true, height:40 });

deliSection.add(deli1Row);
//Section 2: Entrée 
var entreeSection = Ti.UI.createTableViewSection({ headerTitle:'Entrée' });
var ent1Row = Ti.UI.createTableViewRow({ title:'  Sticky Rice', hasChild: true, height:40 });
var ent2Row = Ti.UI.createTableViewRow({ title:'  Fresh Broccoli (Steamed)', hasChild: true, height:40 });
var ent3Row = Ti.UI.createTableViewRow({ title:'  Kung Pao Pork', hasChild: true, height:40 });
entreeSection.add(ent1Row);
entreeSection.add(ent2Row);
entreeSection.add(ent3Row);
//Section 3: Grill
var grillSection = Ti.UI.createTableViewSection({ headerTitle:'Grill' });
var grill1Row = Ti.UI.createTableViewRow({ title:'  Classic Cheeseburger on a Toasted Bun', hasChild: true, height:40 });
var grill2Row = Ti.UI.createTableViewRow({ title:'  Cheese Quesadilla', hasChild: true, height:40 });
var grill3Row = Ti.UI.createTableViewRow({ title:'  French Fries', hasChild: true, height:40 });
grillSection.add(grill1Row);
grillSection.add(grill2Row);
grillSection.add(grill3Row);
//Section 4: Pizza
var pizzaSection = Ti.UI.createTableViewSection({ headerTitle:'Pizza'});
var pizza1Row = Ti.UI.createTableViewRow({ title:'  Black Bean Tostada Pizza Slice', hasChild: true, height:40 });
var pizza2Row = Ti.UI.createTableViewRow({ title:'  Herb Seasoned Breadsticks', hasChild: true, height:40 });
var pizza3Row = Ti.UI.createTableViewRow({ title:'  Spaghetti Sauce with Tomato Bits', hasChild: true, height:40 });
var pizza4Row = Ti.UI.createTableViewRow({ title:'  Pepperoni Showshoe Pizza', hasChild: true, height:40 });
var pizza5Row = Ti.UI.createTableViewRow({ title:'  Snowshoe Cheese Pizza', hasChild: true, height:40 });
pizzaSection.add(pizza1Row);
pizzaSection.add(pizza2Row);
pizzaSection.add(pizza3Row);
pizzaSection.add(pizza4Row);
pizzaSection.add(pizza5Row);
//Section 5: Soup
var soupBobSection = Ti.UI.createTableViewSection({ headerTitle:'Soup' });
var soupb1Row = Ti.UI.createTableViewRow({ title:'  Tomato Soup Florentine', hasChild: true, height:40 });
var soupb2Row = Ti.UI.createTableViewRow({ title:'  Chicken Noodle Soup with Fresh Dill', hasChild: true, height:40 });
var soupb3Row = Ti.UI.createTableViewRow({ title:'  Herb Seasoned Breadsticks', hasChild: true, height:40 });
soupBobSection.add(soupb1Row);
soupBobSection.add(soupb2Row);
soupBobSection.add(soupb3Row);
//Section 6: Theme Cuisine
var themeSection = Ti.UI.createTableViewSection({ headerTitle:'Soup' });
var theme1Row = Ti.UI.createTableViewRow({ title:'  Red Curry Chicken over Jasmine Rice', hasChild: true, height:40 });
themeSection.add(theme1Row);
//Section 7: Vegitarian/Vegan
var veganSection = Ti.UI.createTableViewSection({ headerTitle:'Vegetarian/Vegan' });
var vegan1Row = Ti.UI.createTableViewRow({ title:'  Eggplant Caponata Griddle Sandwich', hasChild: true, height:40 });
veganSection.add(vegan1Row);
//Section 8: Simple Serving
var ssSection = Ti.UI.createTableViewSection({ headerTitle:'Simple Serving' });
var ss1Row = Ti.UI.createTableViewRow({ title:'  Brown Rice', hasChild: true, height:40 });
var ss2Row = Ti.UI.createTableViewRow({ title:'  Broiled Rainbow Trout', hasChild: true, height:40 });
ssSection.add(ss1Row);
ssSection.add(ss2Row);
//Section 9: Dessert
var dessertSection = Ti.UI.createTableViewSection({ headerTitle:'Dessert' });
var dessert1Row = Ti.UI.createTableViewRow({ title:'  Cheesecake Slice', hasChild: true, height:40 });
var dessert2Row = Ti.UI.createTableViewRow({ title:'  Banana Cream Pie with Caramel Topping', hasChild: true, height:40 });
var dessert3Row = Ti.UI.createTableViewRow({ title:'  Chocolate Chip Bread Pudding', hasChild: true, height:40 });
var dessert4Row = Ti.UI.createTableViewRow({ title:'  Orange Jell-O Parfait', hasChild: true, height:40 });
dessertSection.add(dessert1Row);
dessertSection.add(dessert2Row);
dessertSection.add(dessert3Row);
dessertSection.add(dessert4Row);

winBobsDinner.add(foodMenuView, menuTableView);
menuTableView.setData([deliSection, entreeSection, grillSection, pizzaSection, soupBobSection, themeSection, veganSection, ssSection, dessertSection]);
foodMenuView.add(menuTableView);

/* 
 * Bob's Menu: Cheese Pizza
 */
var winPizzaNutInfo = Ti.UI.createWindow({ backgroundColor:'#FFFFFF', title:'Nutrition Info' });

var pizzanameLabel = Ti.UI.createLabel({
	text:'Snowshoe Cheese Pizza', textAlign:'center', top:'27%',
	font:{fontSize:16, fontFamily:'Helvetica Neue'}
}); 

var pizzainfoLabel = Ti.UI.createLabel({
	color:'#525252', top:'30%', left:'20%', height:'50%',
	text:'Serving Size\nTotal Calories\n    Calories from Fat\nTotal Fat\n    Saturated Fat\n    Trans Fat\nCholesterol\nSodium\nTotal Carbs\n    Sugars\n    Fiber\nProtein',
	font:{fontSize:16, fontFamily:'Helvetica Neue'}
}); 

var pizzanumberLabel = Ti.UI.createLabel({
	color:'#525252', top:'30%', left:'20%', height:'50%',
	text:'1 Slice\n120\n25\n3g\n1.5g\n0g\n10mg\n280mg\n16g\n1g\n<1g\n7g',
	font:{fontSize:16, fontFamily:'Helvetica Neue'},
	top:'30%', left:'67%', height:'50%'
});

var pizzaingLabel = Ti.UI.createLabel({ text:'Dietary Info:', top:'80%' });

var pizzasoupImg = Ti.UI.createImageView({
	image:'/images/pizza.png', height:'120', top:'20' });

var pizzaing1Label = Ti.UI.createLabel({
	text:'Gluten', top:'85%', left:'45%' });
var pizzaingImg = Ti.UI.createImageView({
	image:'/images/gluten.png', top:'85%', left:'30%' });

winPizzaNutInfo.add(pizzanameLabel, pizzainfoLabel, pizzanumberLabel, pizzaingLabel, pizzaing1Label, pizzasoupImg, pizzaingImg);

