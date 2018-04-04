
function renderTimeLine(){
	var group, barGroup, context;
		
	var m = [80, 160, 0, 80]; // top right bottom left
	var m2 = [570, 160, 20, 80];
	var	w = 1200 - m[1] - m[3]; // width    
	var h = 700 - m[0] - m[2]; // height
	var h2 = 700 - m2[0] - m2[2];

	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	//Data array for the timeline - List month-1 because Jan = 0
	data = [{"label": "Verscend", "color": "#100699", "dates":[{"startdate": new Date(2017,11,7), "enddate": new Date(2018,6,15), "effort": 1}]}, 
			{"label": "WuXi NextCODE Titan", "color": "#67CCD8", "dates":[{"startdate": new Date(2017,7,16), "enddate": new Date(2017,10,8), "effort": 1}]},
		{"label": "FasterCures", "color": "#4859A8", "dates":[{"startdate": new Date(2017,5,27), "enddate": new Date(2017,7,4), "effort": .5}, {"startdate": new Date(2017,7,4), "enddate": new Date(2017,9,14), "effort": .25}]},
		{"label": "Glytec Therapy Advisor", "color": "#063f6c", "dates":[{"startdate": new Date(2017,2,21), "enddate": new Date(2017,5,14), "effort": .5}]},
		{"label": "Walgreens RXPass", "color": "#247092", "dates":[{"startdate": new Date(2017,1,8), "enddate": new Date(2017,2,17), "effort": .5}, {"startdate": new Date(2017,2,17), "enddate": new Date(2017,5,20), "effort": .25}]},
		{"label": "CAS Planaria", "color": "#247092", "dates":[{"startdate": new Date(2016,8,20), "enddate": new Date(2017,5,14), "effort": 1}]},
		{"label": "Imprivata", "color": "#ED293F", "dates":[{"startdate": new Date(2016,6,12), "enddate": new Date(2016,9,14), "effort": .5}]},
		{"label": "Glytec website", "color": "#063f6c", "dates":[{"startdate": new Date(2016,3,14), "enddate": new Date(2016,5,14), "effort": 1}]},
		{"label": "Glytec Glucommander", "color": "#063f6c", "dates":[{"startdate": new Date(2016,2,1), "enddate": new Date(2016,3,14), "effort": 1}, {"startdate": new Date(2016,3,14), "enddate": new Date(2016,4,7), "effort": .5}]},
		{"label": "Zika", "color": "#8f2741", "dates":[{"startdate": new Date(2016,1,21), "enddate": new Date(2016,1,31), "effort": 1}]},
		{"label": "CureForward", "color": "#ff8212", "dates":[{"startdate": new Date(2016,1,12), "enddate": new Date(2016,1,20), "effort": 1}]},
		{"label": "Partners InfoEd", "color": "#2c4e81", "dates":[{"startdate": new Date(2015,10,1), "enddate": new Date(2015,12,18), "effort": .5}]},
		{"label": "IMS", "color": "#002868", "dates":[{"startdate": new Date(2015,7,1), "enddate": new Date(2015,9,7), "effort": 1},
			{"startdate": new Date(2015,9,7), "enddate": new Date(2015,9,21), "effort": .5},
			{"startdate": new Date(2015,9,21), "enddate": new Date(2015,12,18 ), "effort": 1}]},
		{"label": "Care Cards", "color": "#4791ba", "dates":[{"startdate": new Date(2015,6,7), "enddate": new Date(2015,6,21), "effort": 1}]},
		{"label": "SmashFly", "color": "#4a91d3", "dates":[{"startdate": new Date(2014,6,24), "enddate": new Date(2014,11,18), "effort": 1}]},
		{"label": "Partners Insight", "color": "#2c4e81", "dates":[{"startdate": new Date(2013,11,14), "enddate": new Date(2014,4,7), "effort": 1}, 
			{"startdate": new Date(2014,5,1), "enddate": new Date(2014,8,7), "effort": 1}, 
			{"startdate": new Date(2014,8,24), "enddate": new Date(2014,10,1), "effort": .5}, 
			{"startdate": new Date(2014,10,1), "enddate": new Date(2015,5,24), "effort": 1},
			{"startdate": new Date(2015,5,24), "enddate": new Date(2015,7,1), "effort": .5},
			{"startdate": new Date(2015,11,1), "enddate": new Date(2015,11,18), "effort": .5},
			{"startdate": new Date(2016,1,1), "enddate": new Date(2016,1,12), "effort": 1}]},
		{"label": "Inspired EHRs", "color": "#6ea5d7", "dates":[{"startdate": new Date(2013,7,7), "enddate": new Date(2013,11,14), "effort": 1}, 
			{"startdate": new Date(2013,11,14), "enddate": new Date(2014,7,7), "effort": .5},
			{"startdate": new Date(2014,8,24), "enddate": new Date(2014,10,7), "effort": .5}]},
		{"label": "Happtique", "color": "#09a8d8", "dates":[{"startdate": new Date(2013,6,18), "enddate": new Date(2013,7,7), "effort": .5}]},
		{"label": "Emerging Tech website", "color": "#7474a4", "dates":[{"startdate": new Date(2013,6,7), "enddate": new Date(2013,8,1), "effort": .5}]},
		{"label": "MarketSight", "color": "#1a529e", "dates":[{"startdate": new Date(2013,3,1), "enddate": new Date(2013,6,7), "effort": 1}]},
		{"label": "QuadraMed", "color": "#dd5959", "dates":[{"startdate": new Date(2013,2,1), "enddate": new Date(2013,3,1), "effort": .5}]},
		{"label": "Strength Matters", "color": "#b8ccb6", "dates":[{"startdate": new Date(2013,2,1), "enddate": new Date(2013,3,1), "effort": .5}]},
		{"label": "uTest - Neptune", "color": "#0082b2", "dates":[{"startdate": new Date(2012,10,22), "enddate": new Date(2013,2,1), "effort": 1}]},
		{"label": "uTest - Tester App", "color": "#488ab3", "dates":[{"startdate": new Date(2012,6,1), "enddate": new Date(2012,9,12), "effort": 1}]},
		{"label": "uTest - Applause", "color": "#f05519", "dates":[{"startdate": new Date(2012,4,24), "enddate": new Date(2012,6,7), "effort": .5}, 
			{"startdate": new Date(2012,9,24), "enddate": new Date(2012,11,7), "effort": 1}]},
		{"label": "Extole", "color": "#ac111a", "dates":[{"startdate": new Date(2012,4,1), "enddate": new Date(2012,5,1), "effort": .5}]},
		{"label": "Ten Fourteen", "color": "#81c6c8", "dates":[{"startdate": new Date(2012,3,1), "enddate": new Date(2012,4,12), "effort": .5}]},
		{"label": "SDL", "color": "#027497", "dates":[{"startdate": new Date(2012,2,15), "enddate": new Date(2012,4,25), "effort": .5}]},
		{"label": "Facio", "color": "#D1DBD6", "dates":[{"startdate": new Date(2011,10,7), "enddate": new Date(2012,2,15), "effort": 1}, 
			{"startdate": new Date(2012,2,15), "enddate": new Date(2012,4,1), "effort": 8}]},
		{"label": "Design Axioms", "color": "#bf4848", "dates":[{"startdate": new Date(2011,9,12), "enddate": new Date(2011,10,10), "effort": .5}]},
		{"label": "PTC Wiki", "color": "rgb(147,211,165)", "dates":[{"startdate": new Date(2011,9,12), "enddate": new Date(2011,10,7), "effort": .5}]}
		];
	
	x = d3.time.scale().range([126, w + 160]);		//X-axis 
	x2 = d3.time.scale().range([126, w + 160]);		//X-axis in the scrubber region
		
	var startdates=[];									//Array to store the startdates
	var enddates=[];									//Array to store the enddates
	
	//This loop adds the startdates and enddates into the respective arrays	
	for(var i = 0; i < data.length; i++){
		for(var j = 0; j < data[i].dates.length; j++){
			startdates[startdates.length] = new Date(data[i].dates[j].startdate);
			enddates[enddates.length] = new Date(data[i].dates[j].enddate);
		}
	}
		
	minDate = startdates[0]; //Variable to store the minimum Date
	maxDate = enddates[0]; //Variable to store the maximum Date
		
	//Loop to find out the min and max Date
	for(var i = 1; i < startdates.length; i++){
		if(startdates[i] < minDate)
			minDate = startdates[i];
			
		if(enddates[i] > maxDate)
			maxDate = enddates[i];
	}
		
	minDate = new Date(minDate.getFullYear(),0,1);
	maxDate = new Date(maxDate.getFullYear()+1,0,1);
		
	var lDate = new Date(); //Variable to store the left date to set brush extent
	var rDate = new Date();	//Variable to store the right date to set brush extent 
	var currDate = new Date(); //Stores the current Date

	rDate = currDate;
	lDate.setTime(rDate.getTime() - (1000*60*60*24*365*2)); 
	//2 years before the right date (note: that multiplication is calculating the # of miliseconds in 2 years 

	//Setting the domain of the x-axis	
	x.domain([minDate, maxDate]);
	x2.domain([minDate, maxDate]);

	//Setting the Y-axis 	
	var y = d3.scale.linear().domain([0, 19]).range([75, h-40]);
	var y2 = d3.scale.linear().domain([0, data.length]).range([0, 48]);
	
	//Declaring the zoom behavior	
	zoom = d3.behavior.zoom()
		.scaleExtent([.7, 1.3])
		.on("zoom", zoomed);
	
	//Declaring the brush 				
	brush = d3.svg.brush()
		.x(x2)
		.extent([lDate, rDate])
		.on("brush", brushed);

	var vDrag = d3.behavior.drag()
		.on("drag",scrolldrag);
				
	//Creating the chart area	
	var chart = d3.select('.timeline_chart').append("svg")
		.classed("chart", true)
		.attr("width", w+m[1]+50)
		.attr("height",h+m[0]+m[2]);
	
	//Appending a rectangular pane to the chart area	
	var pane = chart.append("g");
	
	pane.append("rect")
		.attr("class", "pane")
		.attr("x", 126)
		.attr("width", w + 50)
		.attr("y", 55)
		.attr("height", h - 80)
		.attr("stroke", "#EEEEEE")
		.attr("stroke-width", 1);

	//Setting the x-axis				
	var xaxis=d3.svg.axis()
		.scale(x)
		.orient("top")
		.tickSize(h-80)
		.tickPadding(13);
				
	var xaxis2 = d3.svg.axis()
		.scale(x2)
		.orient("bottom")
		.tickPadding(3)
		.tickSize(1);

	var xaxis3 = d3.svg.axis()
		.scale(x)
		.orient("top")
		.tickSize(0)
		.tickPadding(3);

	//Append the x-axis to the chart
	chart.append("g").attr("class", "x axis")
		.attr("transform", "translate(-20, "+ (h-25) + ")")
		.attr("font-size", "15px")
		.call(xaxis);

	//Variable to create the timeline bars 		
	var projects=chart.selectAll(".projectGroup").data(data).enter().append('g').classed("projectGroup", true)
							.attr('transform', function(d, i){ return 'translate(-20,'+ (y(i)) +')' });

	//Selects each project and draws the rectangle based on the start date and end date in the data array
	projects.each(function(d, i){
		group = d3.select(this);
		color = d3.rgb(d.color);
	 
		barGroup = group.append("g").classed("barGroup", true); //Appends timeline bars and text to the bars		
		barGroup.selectAll(".timeBars")
			.data(d.dates)
			.enter()
			.append("rect")
			.classed("timeBars", true)
			.attr("y", -10)
			.attr("height", 20)
			.attr("fill", color)
			.attr("opacity",  function(d){ return d.effort;})
			.call(zoom);

		timeBars = barGroup.selectAll(".timeBars");

		timeBars.append("text")
			.classed("timeBarstext", true)
			.attr("x", x)
			.attr("y", y(i))
			.attr("fill", "white")
			.attr("text-anchor", "start")
			.attr("font-size", "12px")
			.text(function(d){return d.label;});	
	});
	
	pane.call(zoom);
	var day = currDate.getDate();
	var month = currDate.getMonth();
	var newDate = monthNames[month] + " " + day; //Stores the current date and month 
   
	//Append the drug names on the y-axis
	var yAxisLabel = chart.append("g");
	
	yAxisLabel.append("rect")
			.attr("class", "yAxisRect")
			.attr("x", 0)
			.attr("y", 54)
			.attr("width", 125)
			.attr("height", h+50)
			.attr("stroke", "white")
			.attr("fill", "white");
	
	projects.each(function(d, i){
		yAxisLabel.append("text")
			.attr("class", "yAxisText")
			.attr("y", y(i)+3)
			.attr("x",105)
			.attr("height", 100)
			.attr("stroke", "none")
			.attr("fill", "rgba(67,67,67,.5)")
			.attr("text-anchor", "end")
			.attr("font-size","12px")
			.text(d.label);
	});

	yAxisLabel.append("rect")
			.attr("x", 0)
			.attr("y", 590)
			.attr("width", 115)
			.attr("height", h+50)
			.attr("fill", "white");

	chart.append("rect")
		.attr("x", -10)
		.attr("y", -10)
		.attr("width", w+175)
		.attr("height", 67)
		.attr("fill", "white");

	chart.append("g").attr("class", "xaxis2")
			.attr("transform", "translate(-20, 50)")
			.attr("fill", "rgba(67,67,67,.5)")
			.attr("font-size", "12px")
			.call(xaxis3);
	
	//A vertical scroll bar to scroll the chart vertically
	scrollBar = chart.append("g");			
	
	scrollBar.append("rect")
			.attr("class", "vScroller")
			.attr("x", 1108)
			.attr("width", 8)
			.attr("y", 55)
			.attr("height", (15/data.length)*515)
			.attr("rx", 4)
			.attr("ry", 4)
			.attr("fill", "#AAA8A8")
			.attr("cursor", "move")
			.call(vDrag);

	//Variable for mini version of the timeline to allow brushing to select
	//region one wants to view
	context = chart.append("g")
				.attr("transform", "translate(0 , " + (m2[0]+ 30) + ")");
	
	//Appends a rectangular region to display the mini timeline			
	context.append("rect")
			.attr("x", 126)
			.attr("width", w + 40)
			.attr("y", -5)
			.attr("height", 60)
			.attr("stroke", "#d9d9d9")
			.attr("stroke-width", .75)
			.attr("fill", "#ededed");

	context.append("rect")
		.attr("x", 115)
		.attr("y", 55)
		.attr("width", w+100)
		.attr("height", h2)
		.attr("fill", "white");

	//Appends x-axis to the context area		
	context.append("g")
		.attr("class", "x axis")
		.attr("fill", "rgba(67,67,67,.5)")
		.attr("transform", "translate(0, " + (h2-55) + ")")
		.call(xaxis2);
	
	//Creates the timeline bars in the context area	
	var contextBars = context.selectAll(".projectGroup").data(data)
		.enter().append("g")
		.classed("contextBar", true)
		.attr("transform", function(d, i){ return "translate(0, " + (y2(i)) + ")" ;});
	
	//Selects each medicine group and draws the reactangle for each drug
	//based on the start date and end date in the data array						
	contextBars.each(function(d, i){
		var cGroup = d3.select(this);
		color = d3.rgb(d.color);
		
		cGroup.selectAll(".contextBars")
			.data(d.dates)
			.enter()
			.append("rect")
			.classed("cBars", true)
			.attr("x", function(d){ return x(d.startdate);})
			.attr("width", function(d){ return x(d.enddate) - x(d.startdate);})
			.attr("y", 2)
			.attr("height", 1)
			.attr("fill", color)
			.attr("opacity",  function(d){ return d.effort;})
	});
	
	//Appends a brush over the context region	
	b = context.append("g")
			.attr("class", "x brush");
	
   	b.call(brush);
		
    b.selectAll("rect")
		.attr("y", -4)
		.attr("height", 58);
        
	b.selectAll(".resize.e rect").attr("width", 25).attr("x", -5);
	b.selectAll(".resize.w rect").attr("width", 25).attr("x", -5);
		
	chart.append("rect")
		.attr("x", 1119)
		.attr("width", 1)
		.attr("y", 55)
		.attr("height", h-20)
		.attr("stroke", "#EEEEEE");
	
	chart.append("rect")
		.attr("x", 1120)
		.attr("width", 50)
		.attr("y", -10)
		.attr("height", h+48)
		.attr("fill", "white");

	chart.append("rect")
			.attr("x", 0)
			.attr("width", 110)
			.attr("y", 0)
			.attr("height", 55)
			.attr("fill", "white");

	//This function updates the timeline bars when zooming or dragging based on the
	//x-axis and redraws them	
	function updateBars(){
		projects.each(function(d, i){
			group=d3.select(this);
			
			group.select(".barGroup").selectAll(".timeBars").each(function(d){
				d3.select(this)
				.attr("x", function(d){ return x(d.startdate);})
				.attr("width", function(d){ return x(d.enddate)-x(d.startdate);})
			});
			
			//Displays the label over the bars based on the width of the bars. If width is less than 30px the text
			//is not grey
			group.select(".barGroup").selectAll(".timeBarstext").each(function(d){
				d3.select(this).attr("x", function(d){return x(d.startdate)+(x(d.enddate)-x(d.startdate))-8;})
					.attr("fill", function(d){
						if((x(d.enddate) - x(d.startdate))< 30)
							return "#A3A3A3";
						else
							return "white";
					});
			});
		});
	}

	//Gets the translation value of the scroll bar and allows for scrolling of the chart
	//in the vertical direction by calling the updateOnScroll function
	function scrolldrag(d){
		var yVal = scrollBar.select(".vScroller").attr("y")*1+d3.event.dy;
		if(yVal < 55)
			yVal = 55;
		else if(yVal > (593-scrollBar.select(".vScroller").attr("height")*1))
			yVal = (593-scrollBar.select(".vScroller").attr("height")*1);
		var deltaY = scrollBar.select(".vScroller").attr("y")*1-yVal;
		scrollBar.select(".vScroller").attr("y",yVal);
		updateOnScroll(deltaY);
	};

	//Updates the position of the bars and axis labels when the scroll bar is dragged
	updateOnScroll = function(yVal){ 
		chart.selectAll(".projectGroup").each(function(d,j){
			var tranStr = d3.select(this).attr("transform");
			if(tranStr != null)
				tranStr = tranStr.substring(14,tranStr.length-1);
			else
				tranStr = 0;
			d3.select(this).attr('transform', 'translate(-20,'+ (tranStr*1+yVal) +')') ;
		});

		yAxisLabel.selectAll(".yAxisText").each(function(d,j){
			var label = d3.select(this).attr("transform");
			if(label != null)
				label = label.substring(13,label.length-1);
			else
				label = 0;
			d3.select(this).attr('transform', 'translate(0, '+ (label*1+yVal) +')') ;
		});
	};
	
	//Allows dragging the chart and zooming along the x-axis and based on the zoom/drag moves the brush
	//to indicate the region of the timeline that is in focus
	function zoomed(){
		if(d3.event.scale == 1) {
			if(d3.event.sourceEvent.webkitMovementX != null) {
				var dir = -d3.event.sourceEvent.webkitMovementX*.2;
				var tx1 = x2(brush.extent()[0])+dir;
				var tx2 = x2(brush.extent()[1])+dir;
				if(tx1 < 127) {
					tx2 += 127-tx1;
					tx1 = 127;
				}
				if(tx2 > 1120) {
					tx1 += 1120-tx2;
					tx2 = 1120;
				}
				d3.select(".extent").attr("x",tx1);
				brush.extent([x2.invert(tx1),x2.invert(tx2)]);
				x.domain(brush.extent());
				brushed();

				//zoom.translate([0,0]);
			} else {
				var dir = -d3.event.translate[0]/25;
				var tx1 = x2(brush.extent()[0])+dir;
				var tx2 = x2(brush.extent()[1])+dir;
			
				if(tx1 < 127) {
					tx2 += 127-tx1;
					tx1 = 127;
				}
			
				if(tx2 > 1120) {
					tx1 += 1120-tx2;
					tx2 = 1120;
				}

				d3.select(".extent").attr("x",tx1);
				brush.extent([x2.invert(tx1),x2.invert(tx2)]);
				x.domain(brush.extent());
				brushed();

				zoom.translate([0,0]);
			}
		} else {
			var zScale = d3.event.scale;
			var mid = (x2(brush.extent()[1])-x2(brush.extent()[0]))/2+x2(brush.extent()[0]);
			var zWidth = (x2(brush.extent()[1])-x2(brush.extent()[0]))*zScale;
			
			var ts1 = mid-zWidth/2;
			var ts2 = mid+zWidth/2;
			
			if(zWidth > x2(minDate.setMonth(minDate.getMonth()+1))-126) {
				if(ts1 < 127)
					ts1 = 127;
				
				if(ts2 > 1120)
					ts2 = 1120;

				d3.select(".extent").attr("x",ts1);
				d3.select(".extent").attr("width",zWidth);
			
				brush.extent([x2.invert(ts1),x2.invert(ts2)])
				x.domain(brush.extent());
				brushed();
			}
			minDate.setMonth(minDate.getMonth()-1);
			zoom.scale(1)	
		}
	};	
		
	//Allows brushing over the mini timeline and helps selecting a particular
	//section of the timeline
	function brushed() {
		x.domain(brush.extent());
		barGroup.selectAll(".timeBars").attr("x", function(d){return  x(d.startdate);});
		barGroup.attr("width", 5);
		chart.select("g.x.axis").call(xaxis);
		chart.select("g.xaxis2").call(xaxis3);
		updateBars();
	}
		
	brushed();
		
	brushFunc = function() {
		x.domain(brush.extent());
		barGroup.selectAll(".timeBars").attr("x", function(d){return  x(d.startdate);});
		barGroup.attr("width", 5);
		chart.select("g.x.axis").call(xaxis);
		chart.select("g.xaxis2").call(xaxis3);
		updateBars();
	}
}