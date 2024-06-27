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
