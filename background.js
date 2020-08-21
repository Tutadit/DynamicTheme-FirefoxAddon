var port = browser.runtime.connectNative(
    "get_firefox_theme"
)

/*
  Listen for messages from set_firefox_theme
*/
port.onMessage.addListener((response) => {
    console.log(response);
    browser.theme.update(response);
});

