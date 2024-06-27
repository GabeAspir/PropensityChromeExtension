anychart.onDocumentReady(function () {
	var data = [
		["Ad Impressions", 49],
		["Ad Clicks", 4],
		["Email Opens", 12],
		["Website Visits", 4]
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
	chart.draw();
});
document.getElementById('copyButton').addEventListener('click', function() {
	// Simulate copy to clipboard
	navigator.clipboard.writeText('Text to copy').then(function() {
		// Show notification
		var notification = document.getElementById('notification');
		notification.classList.add('show');

		// Hide notification after 2 seconds
		setTimeout(function() {
			notification.classList.remove('show');
		}, 2000);
	});
});
