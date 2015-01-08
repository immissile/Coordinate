/*jshint -W117: true */

// 检测当前页面是否已有坐标线
function hasLine () {
	return document.getElementById('m-linex') ? true : false;
}

if (hasLine()) {
	document.getElementById("m-linex").remove();
	document.getElementById("m-liney").remove();
}