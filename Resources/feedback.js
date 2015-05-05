

var feedbackMsg = Ti.UI.createLabel({
	color:'#000005',
	text:'We would like to hear from you! Let us know how we are doing.',
	font:{fontSize:16, fontFamily:'Helvetica Neue'},
	textAlign:'center', width:'auto',
	top:'5%', left:'10%', right:'10%'
}); 


var emailField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  keyboardType: Ti.UI.KEYBOARD_EMAIL,
  retrunKeyType: Titanium.UI.RETURNKEY_NEXT,
  hintText: 'Type your e-mail here',
  top: '15%', width: '80%', height: '7%',
  borderWidth: 1, borderColor:'#9f9d9d', borderRadius: 5
});

var commentArea = Ti.UI.createTextArea({
  borderWidth: 1, borderColor: '#9f9d9d', borderRadius: 5, 
  color:'525252',
  font: {fontSize:16, fontFamily:'Helvetica Neue'},
  keyboardType: Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType: Titanium.UI.RETURNKEY_DONE,
  value:'Type your comment here. Date and time of service, quality of service, food quality, etc...',
  top: '25%', width: '80%', height: '70%',
  textAlign:'left'
});

var submitBtn = Ti.UI.createButton({
	title:'Submit'
});
