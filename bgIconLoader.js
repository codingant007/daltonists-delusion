

function showPageAction( tabId, changeInfo, tab ) {
   	//alert(tab.url);
   	chrome.tabs.query({currentWindow:true,active:true},function(tabList){
   		//alert(tabList.url);
		if(tabList[0].url == 'http://106.186.25.143/kuku-kube/en-3/'){
			chrome.pageAction.show(tabId);
		}
	});   	
}

chrome.tabs.onUpdated.addListener(showPageAction);


//chrome.pageAction.onClicked.addListener(hitForEvery(1000));