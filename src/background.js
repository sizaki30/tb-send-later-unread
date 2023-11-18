var errorWindow;

browser.compose.onAfterSend.addListener((tab, sendInfo) => {

    if (sendInfo.error) {
        if (!errorWindow) {
            errorWindow = browser.windows.create({
                "top": 100,
                "left": 100,
                "height": 300,
                "width": 800,
                "url": "error.html",
                "type": "popup"
            });
        }

    } else if (sendInfo.mode === "sendLater") {
        let messageId       = sendInfo.messages[0].id;
        let newProperties   = {"read": false};
        messenger.messages.update(messageId, newProperties);
    }
});