(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const {type} = obj;
    console.log(obj);
    if (type === 'NEW') {
      newVideoLoaded();
    }
  });

  const newVideoLoaded = () => {
    const title = document.querySelector(
      '#title > h1 > yt-formatted-string'
    ).textContent;
    const dislikeButton = document.querySelector(
      '#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button'
    );

    if (
      typeof title === 'string' &&
      title.toLowerCase().includes('piers morgan') &&
      dislikeButton &&
      dislikeButton.getAttribute('aria-pressed') === 'false'
    ) {
      dislikeButton.click();
    }
  };
  newVideoLoaded();
})();
