var refreshBtn = Ti.UI.createButton({
    systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
});



var searchVenueBar = Ti.UI.createSearchBar({
	barColor:'#F5D76E', showCancel:true, height:43, top:0,
    hintText:'Enter Venue Name Here'
});

	var venueListView = Ti.UI.createView({
		backgroundColor: '#FFFFFF' //pullBackgroundColor:'#FFF'	
		});
	
	var tableView = Ti.UI.createTableView({
			style: Ti.UI.iPhone.TableViewStyle.GROUPED,
			separatorColor: '282828', backgroundColor: '#FFFFFF',    
			scrollable: true, 
			height:Titanium.UI.SIZE,
			width:'100%', top:8
	});
	
	//test code
	var firstSecView = Ti.UI.createView({backgroundColor:'#D24C3A', height:'30'});
	var firstSecTitle = Ti.UI.createLabel({text:'J.A. Albertson Building', color:'#FFF'});
	firstSecView.add(firstSecTitle);
	
	var firstSection = Ti.UI.createTableViewSection({headerView: firstSecView});
	var stoversRow = Ti.UI.createTableViewRow({
		title: 'Stover\'s', 
		backgroundColor: '#ffffff',
		hasChild: true, color:'#444444', leftImage:'images/greendot.png'
	});			
	firstSection.add(stoversRow);



	var secondSecView = Ti.UI.createView({backgroundColor:'#DD8D4D', height:'30'});
	var secondSecTitle = Ti.UI.createLabel({text:'Administration Building & J.E.B.', color:'#FFF'});
	secondSecView.add(secondSecTitle);
																													
	var secondSection = Ti.UI.createTableViewSection({headerView: secondSecView});
		
	var sistersRow = Ti.UI.createTableViewRow({
		title: 'Sisters\' Brew', backgroundColor: '#ffffff',
		hasChild: true, color:'#444444', leftImage:'images/reddot.png'
	});	
	secondSection.add(sistersRow);
	
	
	
	
	var thirdSecView = Ti.UI.createView({backgroundColor:'#f0c11f', height:'30'});
	var thirdSecTitle = Ti.UI.createLabel({text:'Idaho Commons', color:'#FFF'});
	thirdSecView.add(thirdSecTitle);	
	
	var thirdSection = Ti.UI.createTableViewSection({headerView: thirdSecView});
				
	var cobrizoRow = Ti.UI.createTableViewRow({
		title: 'Cobrizo Mexican Grill', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/reddot.png'
		});
	var einsteinsRow = Ti.UI.createTableViewRow({
		title: 'Einstein\'s Bagels', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/green2dot.png'
	});	
	var icommonsRow = Ti.UI.createTableViewRow({
		title: 'I of the Commons', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/greendot.png'
	});		
	var jambaRow = Ti.UI.createTableViewRow({
		title: 'Jamba Juice', backgroundColor: '#ffffff', leftImage:'images/reddot.png',
		color:'#444444', hasChild: true, height:'8.3%'
	});
	var meinRow = Ti.UI.createTableViewRow({
		title: 'Mein Bowl', backgroundColor: '#ffffff', 
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/reddot.png'
	});
	var pizzaRow = Ti.UI.createTableViewRow({
		title: 'Paradise Creek Pizza and Grill', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/reddot.png'
	});
	var subRow = Ti.UI.createTableViewRow({
		title: 'Subconnections', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/reddot.png'
	});
	thirdSection.add(cobrizoRow);
	thirdSection.add(einsteinsRow);
	thirdSection.add(icommonsRow);
	thirdSection.add(jambaRow);
	thirdSection.add(meinRow);
	thirdSection.add(pizzaRow);
	thirdSection.add(subRow);



	var fourthSecView = Ti.UI.createView({backgroundColor:'#009990', height:'30'});
	var fourthSecTitle = Ti.UI.createLabel({text:'Living Learning Community', color:'#FFF'});
	fourthSecView.add(fourthSecTitle);
																													
	var fourthSection = Ti.UI.createTableViewSection({headerView: fourthSecView});
		
	var dennysRow = Ti.UI.createTableViewRow({
		title: 'Denny\'s AllNighter', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/greendot.png'
		});
	var gridRow = Ti.UI.createTableViewRow({
		title: 'The Grid Community Store', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/greendot.png'
	});
	fourthSection.add(dennysRow);
	fourthSection.add(gridRow);		
		
		
	var fifthSecView = Ti.UI.createView({backgroundColor:'#0087AA', height:'30'});
	var fifthSecTitle = Ti.UI.createLabel({text:'Wallace Complex', color:'#FFF'});
	fifthSecView.add(fifthSecTitle);
																													
	var fifthSection = Ti.UI.createTableViewSection({headerView: fifthSecView});
															
	var bobsRow = Ti.UI.createTableViewRow({
		title: 'Bob\'s Place', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/greendot.png'
	});
	fifthSection.add(bobsRow);


	var sixthSecView = Ti.UI.createView({backgroundColor:'#7E4182', height:'30'});
	var sixthSecTitle = Ti.UI.createLabel({text:'University Golf Course', color:'#FFF'});
	sixthSecView.add(sixthSecTitle);
																													
	var sixthSection = Ti.UI.createTableViewSection({headerView: sixthSecView});

	var bogeyRow = Ti.UI.createTableViewRow({
		title: 'Bogey\'s Grill', backgroundColor: '#ffffff',
		color:'#444444', hasChild: true, height:'8.3%', leftImage:'images/reddot.png'
	});
	sixthSection.add(bogeyRow);



	tableView.setData([firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection]);
	venueListView.add(tableView);

