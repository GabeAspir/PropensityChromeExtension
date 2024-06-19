// anychart.onDocumentReady(function () {
// 	var data = [
// 		["January", 1000],
// 		["February", 1200],
// 		["March", 1800],
// 		["April", 1500],
// 		["May", 1600],
// 		["June", 1900],
// 	];
// 	var chart = anychart.line();
// 	var lineSeries = chart.line(data);
// 	chart.container("chartContainer");
// 	chart.draw();
// });
$(document).ready(function() {
	$('.nav-item .nav-link').on('click', function(event) {
		event.preventDefault();
		$('.nav-item').removeClass('active');
		$(this).parent().addClass('active');
	});
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
