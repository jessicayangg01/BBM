chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: '.amazon.ca'},
          css: ["#buybox"]
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: '.amazon.com'},
          css: ["#buybox"]
        })
      ],
     actions: [
               new chrome.declarativeContent.ShowPageAction()
            ]
    }]);
  });
