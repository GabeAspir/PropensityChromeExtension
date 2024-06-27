anychart.onDocumentReady(function () {
	var data = [
		{x: "Ad Impressions", value: 49,
			legendItem: {
				fontColor: "#757575",
				fontFamily: "Montserrat",
				fontSize: 14,
				fontWeight: 400,
				iconEnabled: true,
				iconType: "circle",
				iconSize: 12,
				iconFill: "#081AA1"
			}
		},
		{x: "Ad Clicks", value: 4,
			legendItem: {
				fontColor: "#757575",
				fontFamily: "Montserrat",
				fontSize: 14,
				fontWeight: 400,
				iconEnabled: true,
				iconType: "circle",
				iconSize: 12,
				iconFill: "#4788FF"
			}
		},
		{x: "Email Opens", value: 12,
			legendItem: {
				fontColor: "#757575",
				fontFamily: "Montserrat",
				fontSize: 14,
				fontWeight: 400,
				iconEnabled: true,
				iconType: "circle",
				iconSize: 12,
				iconFill: "#9100AB"
			}
		},
		{x: "Website Visits", value: 4,
			legendItem: {
				fontColor: "#757575",
				fontFamily: "Montserrat",
				fontSize: 14,
				fontWeight: 400,
				iconEnabled: true,
				iconType: "circle",
				iconSize: 12,
				iconFill: "#5D50E6"
			}
		}
	];

	var colors = [
		"#081AA1",
		"#9100AB",
		"#4788FF",
		"#5D50E6"
	]
	var chart = anychart.pie(data);
	chart.innerRadius("60%");
	chart.sort("desc");
	chart.legend().itemsLayout("vertical");
	chart.legend().position("right");
	chart.legend().align("top");
	chart.container("doughnutChartContainer");
	chart.palette(colors);
	chart.legend().enabled(false)
	chart.draw();
});

anychart.onDocumentReady(function () {
	var data = [
		{x: "Mar 1", value: 0},
		{x: "Mar 8", value: 2},
		{x: "Mar 15", value: 1},
		{x: "Mar 22", value: 0},
		{x: "Mar 30", value: 1},
		{x: "Apr 06", value: 2},
		{x: "Apr 13", value: 0}
	];

	var chart = anychart.area();
	var series = chart.splineArea(data);
	series.fill('#AA4CFC 0.1');
	series.stroke('#AA4CFC');
	chart.yAxis().enabled(false);
	chart.container("splineChartContainer");
	chart.draw();
});
