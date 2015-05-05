Ti.include('feedback.js', 'about.js', 'menuItem.js', 'login.js', 'map.js', 'venueList.js', 'stoversProfile.js', 'bobsPlace.js');


Titanium.UI.setBackgroundColor('#FFFFFF');


/*
 * Tutorial TEST
 */

var tutWin = Ti.UI.createWindow({backgroundColor:'red'});
var tutOpenImg = Ti.UI.createImageView({image:'/images/tutOpening.jpg', width:'100%', height:'100%'});
tutWin.add(tutOpenImg);

tutOpenImg.addEventListener('click', function(){
	tutOpenImg = null;
	tutWin.add(tutDotsImg);
});

var tutDotsImg = Ti.UI.createImageView({image:'images/tutDots.jpg', width:'100%', height:'100%'});
var tutNav1Img = Ti.UI.createImageView({image:'images/tutNav1.jpg', width:'100%', height:'100%'});
var tutNav2Img = Ti.UI.createImageView({image:'images/tutNav2.jpg', width:'100%', height:'100%'});
var tutNav3Img = Ti.UI.createImageView({image:'images/tutNav3.jpg', width:'100%', height:'100%'});
var tutNav4Img = Ti.UI.createImageView({image:'images/tutNav4.jpg', width:'100%', height:'100%'});
var tutRefreshImg = Ti.UI.createImageView({image:'images/tutRefresh.jpg', width:'100%', height:'100%'});
var tutLastImg = Ti.UI.createImageView({image:'images/tutLast.jpg', width:'100%', height:'100%'});

tutDotsImg.addEventListener('click', function(){
	tutDotsImg = null;
	tutWin.add(tutNav1Img); });

tutNav1Img.addEventListener('click', function(){
	tutNav1Img = null;
	tutWin.add(tutNav2Img); });
tutNav2Img.addEventListener('click', function(){
	tutNav2Img = null;
	tutWin.add(tutNav3Img); });
tutNav3Img.addEventListener('click', function(){
	tutNav3Img = null;
	tutWin.add(tutNav4Img); });	
tutNav4Img.addEventListener('click', function(){
	tutNav4Img = null;
	tutWin.add(tutRefreshImg); });
tutRefreshImg.addEventListener('click', function(){
	tutRefreshImg = null;
	tutWin.add(tutLastImg); });		
tutLastImg.addEventListener('click', function(){
	tutLastImg = null;
	tabGroup.open();  });	

tutWin.open();
/*
 * Tutorial Test end
 */
/*
 * 
 */
settingsRow2.addEventListener('click', function(){
	tutWin.open();
});
/*
 * 
 */
// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	barColor:'#F5D76E', tabsBackgroundColor: '#000005', activeTabIconTint:'#ffffff' });


var win1 = Titanium.UI.createWindow({  
    title:'List of Venues', backgroundColor:'#ffffff', rightNavButton:refreshBtn }); 
var tab1 = Titanium.UI.createTab({  
    icon:'listMenu.png', title:'List of Venues', window:win1 });

var win2 = Titanium.UI.createWindow({
	title:'Map View', backgroundColor:'#FFFFFF', rightNavButton:refreshBtn1 });
var tab2 = Titanium.UI.createTab({  
    icon:'location.png', title:'Map', window:win2 });

var win3 = Ti.UI.createWindow({
	title:'My Dining Plan', backgroundColor:'#FFFFFF'});
var tab3 = Titanium.UI.createTab({
	icon:'userRound.png', title:'Dining Plan', window: win3 });

var win4 = Ti.UI.createWindow({
	title:'Settings', backgroundColor:'#FFFFFF'});
var tab4 = Titanium.UI.createTab({
	icon:'settings.png', title:'About', window: win4 });

win1.add(venueListView);
win1.add(searchVenueBar);


/* 
 * Adding Stovers navigation
 */
stoversRow.addEventListener('click', function(){  tab1.open(win10);  });
aboutRow.addEventListener('click', function(){  tab1.open(win11); });
amentRow.addEventListener('click', function(){  tab1.open(win12);  });
menuRow.addEventListener('click', function(){  tab1.open(win13);  });

feedbackRow.addEventListener('click', function() {  tab1.open(winFeedback); });
/*
 * Adding Bobs navigation
 */
bobsRow.addEventListener('click', function(){  tab1.open(winBobProfile);  });
bobaboutRow.addEventListener('click', function() {  tab1.open(winBobAbout);  });
bobamentRow.addEventListener('click', function() {  tab1.open(winBobAment);  });
bobmenuRow.addEventListener('click', function() {  tab1.open(winbobMenu);  });
bobfeedbackRow.addEventListener('click', function() {  tab1.open(winFeedback); });

meal3Row.addEventListener('click', function(){  tab1.open(winBobsDinner);  });
pizza5Row.addEventListener('click', function() { tab1.open(winPizzaNutInfo);  });

ament2Row.addEventListener('click', function(){
	tab1.open(craveLoaclWin);
});


/*
 * Tab 2: Map
 */
win2.add(moscowView);
win2.add(mapview);
win2.add(searchBar);

mapview.addEventListener('longpress', function(){  tab2.open(win10);  });
bobsView.addEventListener('longpress', function(){ tab2.open(winBobProfile); });
//Submit Button for Feedback Page
var winFeedback = Ti.UI.createWindow({
	backgroundColor:'#FFFFFF', title:'Feedback',
	rightNavButton: submitBtn  });

winFeedback.add(feedbackMsg, emailField, commentArea);

submitBtn.addEventListener('click', function() {
		var dialog = Ti.UI.createAlertDialog({
			message:'Thank you! We have recieved your feedback.',
			ok: 'Return to Venue Profile', 
			title: 'Feedback Recieved'
		});
		dialog.show();
		dialog.addEventListener('click', function(){
   			tab1.close(winFeedback);
  		});
});

/*
 * Tab 3: Dining Plan Profile Sign In
 */

win3.add(topLabel, optionLabel, forgotLabel, uField, pfield);
win3.add(signinBtn, basicSwitch, userIcon, pwordIcon, clickLabel);

var winProfile = Titanium.UI.createWindow({
	title:'Profile', backgroundColor:'#FFFFFF',
	rightNavButton: signoutBtn, leftNavButton: emptyBtn });
	
winProfile.add(profileBgPic, name);
winProfile.add(dplanTitleLabel, dplanNumberLabel);
winProfile.add(dplanTitleLabel1, dplanNumberLabel1);
winProfile.add(dplanTitleLabel2, dplanNumberLabel2);
winProfile.add(dplanTitleLabel3, dplanNumberLabel3);
winProfile.add(dngProfView);
winProfile.add(dngProfTableView);

emptyBtn.addEventListener('click', function() {});

signoutBtn.addEventListener('click', function() {
		tab3.close(winProfile);
		tab3.open(win3);
});

payRow.addEventListener('click', function(){
	tab3.open(payWin);
});

/*
 * Tab 4: Settings/About
 */
win4.add(aboutAppView);
win4.add(aboutAppTableView);

aboutAppRow1.addEventListener('click', function(){ tab4.open(aboutAppWin); });
aboutAppRow2.addEventListener('click', function(){ tab4.open(termsWin); });
aboutAppRow3.addEventListener('click', function(){ tab4.open(ppolicyWin); });

aboutSdxRow1.addEventListener('click', function(){ tab4.open(sdxInfoWin); });

/*
 * Add Tabs
 */
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);

//tabGroup.open();

 