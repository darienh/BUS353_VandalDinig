
var topLabel = Titanium.UI.createLabel({
	text:'Enter your Vandal ID and password\nto sign in to your Vandal Dining Plan.',
	color:'#393939', font:{fontSize:16,fontFamily:'Helvetica Neue'},
	top:'35', textAlign:'center'
});

var uField = Ti.UI.createTextField({
	hintText:'Your Vandal ID Here',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
 	retrunKeyType: Titanium.UI.RETURNKEY_NEXT,
	height:'30', width: '250', top:'110', left: '20%'
});

var pfield = Titanium.UI.createTextField({
	hintText:'Your Password',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType: Ti.UI.KEYBOARD_DEFAULT,
    retrunKeyType: Titanium.UI.RETURNKEY_DONE,
	height:'30', width: '250', top:'150', left: '20%'
});

var userIcon = Ti.UI.createImageView({
	image:'images/userIcon2.png', height:'30', top: '110', left:'10%'
});
var pwordIcon = Ti.UI.createImageView({
	image:'images/pwordIcon.png', height:'30', top: '150', left:'10%'
});

var optionLabel = Titanium.UI.createLabel({
	text:'Keep Me Signed In', color:'#525252',
	font:{fontSize:16,fontFamily:'Calibri'},
	top:'35%', left:'23%', textAlign:'center'
});

var basicSwitch = Ti.UI.createSwitch({
	onTintColor:'F5D76E', value:true, top:'189', left:'64%'
});

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});

var signinBtn = Ti.UI.createButton({
	title:'Sign In', color:'#000',
	backgroundColor:'F5D76E',
	borderRadius:'5', borderColor:'#e9cb60',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	height:'28', width:'35%', top:'45%'
});

signinBtn.addEventListener('click', function() {
	tab3.close(win3);
	tab3.open(winProfile);
});

var forgotLabel = Titanium.UI.createLabel({
	text:'Forgot your Vandal ID or password?',
	color:'#525252', top:'52%',
	font:{fontSize:14,fontFamily:'Helvetica Neue'}
});
var clickLabel = Titanium.UI.createLabel({
	text:'Click here.',
	color:'#0087AA', top:'55%',
	font:{fontSize:14,fontFamily:'Helvetica Neue'}
});

clickLabel.addEventListener('click', function(){
	Titanium.Platform.openURL("http://help.uidaho.edu/security/reset");
});


//Dining Plan Profile Page
var emptyBtn = Ti.UI.createButton({ title:'        ' });
var signoutBtn = Ti.UI.createButton({ title:'Sign Out' });

var name = Ti.UI.createLabel({ text:'Joe Vandal', top: '27%', color:'#FFF', font:{fontSize:22} });

var profilePic = Ti.UI.createImageView({
	image:'/images/jvPicBorder.png', top:'20', height: '120'
});
var profileBgPic = Ti.UI.createImageView({
	image:'/images/profileBgShortBlur1.png', top:'0'
});
profileBgPic.add(profilePic);

var dplanTitleLabel = Ti.UI.createLabel({
	top:'38%', left:'50', font:{fontSize:16}, color:'#525252', text:'Dining Plan Name' });
var dplanNumberLabel = Ti.UI.createLabel({
	top:'41%', left:'50', font:{fontSize:22}, color:'#000005', text:'Vandal Premiere' });
var dplanTitleLabel1 = Ti.UI.createLabel({
	top:'48%', left:'50', font:{fontSize:16}, color:'#525252', text:'Meals at Bob\'s Place' });
var dplanNumberLabel1 = Ti.UI.createLabel({
	top:'51%', left:'50', font:{fontSize:22}, color:'#000005', text:'Unlimited' });
var dplanTitleLabel2 = Ti.UI.createLabel({
	top:'58%', left:'50', font:{fontSize:16}, color:'#525252', text:'Vandal Dollars' });
var dplanNumberLabel2 = Ti.UI.createLabel({
	top:'61%', left:'50', font:{fontSize:22}, color:'#000005', text:'$43.75' });
var dplanTitleLabel3 = Ti.UI.createLabel({
	top:'68%', left:'50', font:{fontSize:16}, color:'#525252', text:'Guest Passes' });
var dplanNumberLabel3 = Ti.UI.createLabel({
	top:'71%', left:'50', font:{fontSize:22}, color:'#000005', text:'6' });

//
//Two Buttons at the bottom
var dngProfView = Ti.UI.createView({});
var dngProfTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: false, showVerticalScrollIndicator: false,
	width:'100%', top:'75%', backgroundColor:'#FFFFFF'
}); 
var bottomSection = Ti.UI.createTableViewSection({});


var payRow = Ti.UI.createTableViewRow({
	title:'Pay With Your Phone', hasChild: true, leftImage:'images/card.png'});
var refillRow = Ti.UI.createTableViewRow({
	title:'Refill Your Vandal Dollars', hasChild: true, leftImage:'images/money.png'});

bottomSection.add(payRow);
bottomSection.add(refillRow);

dngProfTableView.setData([bottomSection]);
dngProfView.add(dngProfTableView);

refillRow.addEventListener('click', function(){
	Titanium.Platform.openURL("http://vandalweb.uidaho.edu");
});

/*
 * Child Page: Pay With Phone
 */

var payWin = Ti.UI.createWindow({ backgroundColor:'#434343' });

var cardImg = Ti.UI.createImageView({ image:'/images/idcardBack.png', top:'15%', width:'85%' });

payWin.add(cardImg);

