/**
 * Switch naar de m. variant van de website
 */
function vSwitchToMobile() {
	var sURL = document.URL.replace('http://','');
	sURL = sURL.replace('www.','');
	document.location='http://m.' + sURL;
}

function vCheckForMobile(){
	if(bMobile())
		vSwitchToMobile();
}

function bMobile(){
	var sUserAgent = navigator.userAgent;
	return 	document.documentElement.clientWidth < 767 ||
			screen.width < 767 ||
			sUserAgent.match(/GT\-I8190|HTC One SV|SM\-N900V|HTC_A510c|X909|W1\-U00|LG\-E430|GT\-I9000|BlackBerry 9320|GT\-I9505|iPod|GT\-I9001|GT\-I9505|Lumia 620|GT\-I9070|GT\-I9305|DROID RAZR|GT\-N5100|Radar C110e|GT-N7000|GT\-S5830|X by HTC|iPhone|Windows Phone|Lumia 810|GT\-I9105P|GT\-I9300|LG\-P760|GT\-I9100|GT\-N7100|myTouch.*Huawei|BB10|SGH\-I777|GT\-N7100|GT\-N7000|SPH\-L720|GT\-S6500|Puffin|Lumia 710|Lumia 800/i) ? true : false;
}

// iPhone:					iPhone
// iPod:					iPod
// Windows Phone:			Windows Phone
// Samsung Galaxy:			GT\-I9300, GT\-I9100, SGH\-I777, GT\-N7100, SPH\-L720, GT\-S6500, GT\-I9105P, GT\-S5830, GT\-N7000, GT\-I9305, GT\-I9070, 
//							GT\-I9505, GT\-I9001, GT\-I9505, GT\-I9000, GT\-I8190
// Samsung Galaxy Note: 	GT\-N7100, GT\-N7000, GT\-N5100, SM\-N900V
// LG Optimus:				LG\-P760, LG\-E430
// Huawei:					myTouch.*Huawei, W1\-U00
// BlackBerry				BB10, BlackBerry 9320
// Puffin browser			Puffin
// Nokia Lumia				Lumia 710, Lumia 800, Lumia 810, Lumia 620 
// HTC						Radar C110e, X by HTC, HTC_A510c, HTC One SV
// Motorola					DROID RAZR
// Oppo						X909
