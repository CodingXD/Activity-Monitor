let alreadyAsked = false;
let timer: number;

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const user = await chrome.storage.sync.get(["user"]);
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    chrome.tabs.get(tabId, function () {
      if (!alreadyAsked) {
        chrome.notifications.create(
          "",
          {
            title: `Are You lost, ${user?.name}?`,
            type: "basic",
            iconUrl: "question-mark.png",
            message: "Something is here",
            requireInteraction: true,
            buttons: [
              {
                title: "Yeah, pretty much",
              },
              {
                title: "No",
              },
            ],
          },
          () => {
            alreadyAsked = true;
            clearInterval(timer!);
          }
        );

        chrome.notifications.onButtonClicked.addListener(
          (notificationId, index) => {
            alreadyAsked = false;
            if (index === 0) {
              // User clicked "Yes"
              chrome.tabs.create({
                url: "https://help.nickelled.com",
              });
            }
          }
        );
      }
    });
  }, 5000);
});
