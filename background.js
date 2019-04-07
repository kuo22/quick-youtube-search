chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "quickYTsearch",
        "contexts": ["selection"],
        "title": "Youtube '%s'"
    });

    chrome.contextMenus.onClicked.addListener(function(e) {
        var url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(e.selectionText);
        chrome.tabs.create({
            "url": url
        });
    });
});