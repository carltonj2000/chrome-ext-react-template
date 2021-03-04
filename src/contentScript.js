console.log("contentScript");

chrome.runtime.onMessage.addListener((req, sender, resp) => {
  console.log("got a message", { req, sender, resp });
  resp({ txt: "contentScript receive receipt" });
});
