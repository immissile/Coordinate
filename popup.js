/*jshint -W117: true */

/**
 * 处理popup相关操作
 */

// listen
document.addEventListener('DOMContentLoaded', function () {
	
	
	// fire btn
	$('.btn-fire').click(function(){
		
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  
			chrome.tabs.sendMessage(tabs[0].id, {greeting: "fire it!"}, function(response) {  
				console.log(response.farewell);
			});  
		});
		
		//$this.text('STOP').removeClass('btn-danger').addClass('btn-success');
		chrome.tabs.executeScript(
			null,
			{
				file: 'Coordinate.js',
			},
			function() {
				window.close();
				console.log('content script Coordinate.js has loaded');
			}
		);
	});
	
	// stop btn
	$('.btn-stop').click(function(){
		
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  
			chrome.tabs.sendMessage(tabs[0].id, {greeting: "stop it!"}, function(response) {  
				console.log(response.farewell);  
			});  
		});
		
		//$this.text('FIRE').removeClass('btn-success').addClass('btn-danger');
		chrome.tabs.executeScript(
			null,
			{
				file: 'stop.js',
			},
			function() {
				window.close();
				console.log('stoped!');
			}
		);
	});
});