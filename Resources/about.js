/* This is the About Page, include info about the app and provider of UI campus dining */


var vLogo = Ti.UI.createImageView({image:'images/vdininglogo.png', top:'15', height:'100'});


var settingSwitch = Titanium.UI.createSwitch({
	onTintColor:'F5D76E',
	value:false, 
	right:'10%'
});

var aboutAppView = Ti.UI.createView({});
var aboutAppTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: true,
	showVerticalScrollIndicator: true,
	width:'100%',
	backgroundColor:'#FFFFFF', top:'140'
}); 

aboutAppView.add(vLogo);

//
var settingsSection = Ti.UI.createTableViewSection({headerTitle:'Settings' });

var settingsRow1 = Ti.UI.createTableViewRow({ title:'Enable Large Font Size', leftImage:'images/fontSize.png', height:'45' });
var settingsRow2 = Ti.UI.createTableViewRow({ title:'Read App Tutorial', leftImage:'images/qmark.png', hasChild:true, height:'45' });
settingsRow1.add(settingSwitch);

settingsSection.add(settingsRow1);
settingsSection.add(settingsRow2);


//
var appSection = Ti.UI.createTableViewSection({});

var aboutAppRow1 = Ti.UI.createTableViewRow({ title:'About This App', hasChild: true, leftImage:'images/vInfo.png', height:'45' });
var aboutAppRow2 = Ti.UI.createTableViewRow({ title:'Terms of Service', hasChild: true, leftImage:'images/terms.png', height:'45' });
var aboutAppRow3 = Ti.UI.createTableViewRow({ title:'Privacy Policy', hasChild: true, leftImage:'images/aboutPP.png', height:'45' });


appSection.add(aboutAppRow1);
appSection.add(aboutAppRow2);
appSection.add(aboutAppRow3);




//
var sdxSection = Ti.UI.createTableViewSection({headerTitle:'Sodexo' });

var aboutSdxRow1 = Ti.UI.createTableViewRow({ title:'About Sodexo', hasChild: true, leftImage:'images/vInfo.png' });
var aboutSdxRow2 = Ti.UI.createTableViewRow({ title:'Our Website', hasChild: true, leftImage:'images/web.png' });
var aboutSdxRow3 = Ti.UI.createTableViewRow({ title:'Email Us', hasChild: true, leftImage:'images/sdxEmail.png' });
var aboutSdxRow4 = Ti.UI.createTableViewRow({ title:'Facebook', hasChild: true, leftImage:'images/sdxFb.png' });
var aboutSdxRow5 = Ti.UI.createTableViewRow({ title:'Twitter', hasChild: true, leftImage:'images/sdxTw.png' });

sdxSection.add(aboutSdxRow1);
sdxSection.add(aboutSdxRow2);
sdxSection.add(aboutSdxRow3);
sdxSection.add(aboutSdxRow4);
sdxSection.add(aboutSdxRow5);

aboutSdxRow2.addEventListener('click', function(){
	Titanium.Platform.openURL("http://vandalsdining.sodexomyway.com"); });
aboutSdxRow4.addEventListener('click', function(){
	Titanium.Platform.openURL("http://www.facebook.com/uidining"); });	
aboutSdxRow5.addEventListener('click', function(){
	Titanium.Platform.openURL("http://twitter.com/uidining");  });		




//
var emailSdx= Ti.UI.createEmailDialog();
emailSdx.subject = "Feedback";
emailSdx.toRecipients = ['feedback@sodexo.com'];
emailSdx.messageBody = 'Let us know how we\'re doing!';


aboutSdxRow3.addEventListener('click', function(){
	emailSdx.open();
});
//

aboutAppTableView.setData([settingsSection, appSection, sdxSection]);
aboutAppView.add(aboutAppTableView);


/*
 * Child Page: Terms of Service
 */
var termsWin = Ti.UI.createWindow({ backgroundColor:'#FFF', title:'Terms of Service' });
var termsScrollView = Ti.UI.createScrollView({
  contentHeight: 'auto',
  layout: 'vertical',
  width:'100%',
  showVerticalScrollIndicator: true
});

var termsLabel = Ti.UI.createLabel({ 
	left:20, right:20, color:'#525252', textAlign:'left',
	text:'\n1. Terms\nBy accessing this app, you are agreeing to be bound by these app Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this app are protected by applicable copyright and trade mark law.\n\n2. Use License\nPermission is granted to temporarily download one copy of the materials (information or software) on Vandal Dining\'s app for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\nmodify or copy the materials;\nuse the materials for any commercial purpose, or for any public display (commercial or non-commercial);\nattempt to decompile or reverse engineer any software contained on Vandal Dining\'s app; remove any copyright or other proprietary notations from the materials; or\ntransfer the materials to another person or "mirror" the materials on any other server.\nThis license shall automatically terminate if you violate any of these restrictions and may be terminated by Vandal Dining at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.\n\n3. Disclaimer\nThe materials on Vandal Dining\'s app are provided "as is". Vandal Dining makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Vandal Dining does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet app or otherwise relating to such materials or on any sites linked to this site.\n\n4. Limitations\nIn no event shall Vandal Dining or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Vandal Dining\'s Internet site, even if Vandal Dining or a Vandal Dining authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.\n\n5. Revisions and Errata\nThe materials appearing on Vandal Dining\'s app could include technical, typographical, or photographic errors. Vandal Dining does not warrant that any of the materials on its app are accurate, complete, or current. Vandal Dining may make changes to the materials contained on its app at any time without notice. Vandal Dining does not, however, make any commitment to update the materials.\n\n6. Links\nVandal Dining has not reviewed all of the sites linked to its Internet app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vandal Dining of the site. Use of any such linked app is at the user\'s own risk.\n\n7. Site Terms of Use Modifications\nVandal Dining may revise these terms of use for its app at any time without notice. By using this app you are agreeing to be bound by the then current version of these Terms and Conditions of Use.\n\n8. Governing Law\nAny claim relating to Vandal Dining\'s app shall be governed by the laws of the State of Idaho without regard to its conflict of law provisions.'
});

termsScrollView.add(termsLabel);
termsWin.add(termsScrollView);
/*
 * Child Page: Privacy Policy
 */
var ppolicyWin = Ti.UI.createWindow({ backgroundColor:'#FFF', title:'Privacy Policy' });
var ppolicyScrollView = Ti.UI.createScrollView({
  contentHeight: 'auto',
  layout: 'vertical',
  width:'100%',
  showVerticalScrollIndicator: true
});

var ppolicyLabel = Ti.UI.createLabel({ 
	left:20, right:20, color:'#525252', textAlign:'left',
	text:'\nYour privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.\n\nBefore or at the time of collecting personal information, we will identify the purposes for which information is being collected.\n\nWe will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.\n\nWe will only retain personal information as long as necessary for the fulfillment of those purposes.\n\nWe will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.\n\nPersonal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.\n\nWe will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.\n\nWe will make readily available to customers information about our policies and practices relating to the management of personal information.\n\nWe are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.'
});

ppolicyScrollView.add(ppolicyLabel);
ppolicyWin.add(ppolicyScrollView);

/*
 * Child Page: About This App
 */

var aboutAppWin = Ti.UI.createWindow({backgroundColor:'#FFF', title:'About This App'});

var aboutAppLabel = Ti.UI.createLabel({
	text:'App Version: 0.2.0\n\n App Prototype Created By:\nEverett Boker, Jessica Greene,\nDarien Huang, Claire Johnson',
	textAlign: 'center'
});

aboutAppWin.add(aboutAppLabel);

/*
 * Child Page: About Sodexo
 */

var sdxInfoWin = Ti.UI.createWindow({ backgroundColor:'#FFF' });

var sdxInfoLabel = Ti.UI.createLabel({
	top:'50%',
	text:'By protecting and improving our environment, the communities where we do business and the students we serve, Sodexo makes every day a better day and every tomorrow a better tomorrow.'
});
var chefImg = Ti.UI.createImageView({ image:'images/chefSmiling.jpg', top:'0%', width:'100%'});
sdxInfoWin.add(sdxInfoLabel);
sdxInfoWin.add(chefImg);
