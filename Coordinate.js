/*jshint -W117: true */

console.info('Coordinate Init...');

// 获取鼠标坐标
function getMouseCoordinate (e) {
	if (e.pageX || e.pageY) {
            return {
                x: e.pageX,
                y: e.pageY
            };
        }
        return {
            x: e.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: e.clientY + document.body.scrollTop - document.body.clientTop
        };
}

var init = function () {
    var body = document.body;
	
	// remove old
	var oldX = document.getElementById('m-linex');
	var oldY = document.getElementById('m-liney');
	if (oldX) {
		oldX.remove();
	}
	if (oldY) {
		oldY.remove();
	}
	
    var linex = document.createElement("div");
    var liney = document.createElement("div");
    linex.setAttribute('id', 'm-linex');
    liney.setAttribute('id', 'm-liney');
    body.appendChild(linex);
    body.appendChild(liney);

	// 设置坐标宽高(等于页面的宽高)
	linex.style.width = document.body.scrollWidth + 'px';
	liney.style.height = document.body.scrollHeight + 'px';

    body.onmousemove = function (e) {
        e = e || window.event;
		
		var m = getMouseCoordinate(e);
		
        linex.style.display = liney.style.display = 'block';
		linex.style.top = (m.y) + 'px';
		liney.style.left = (m.x) + 'px';
    };
    document.body.onclick = function (e) {
        e = e || window.event;
        // console.log(e.offsetX, e.offsetY);
    };
};

init();

// chrome.message
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {  
	//console.log('message:', request.greeting, sender.tab, sender.tab.url);
	sendResponse({farewell: "Got!"});
});