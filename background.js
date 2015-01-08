/*jshint -W117: true */

// action
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.type) {
    case "enable":
        pr.enable();
        break;
    case "disable":
        pr.disable();
    }
    sendResponse({
        success: !0
    });
});

chrome.runtime.sendMessage({
    action: "disable"
});