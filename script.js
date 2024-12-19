document.addEventListener("DOMContentLoaded", () => {
  const urlInput = document.getElementById("url-input");
  const goButton = document.getElementById("go-button");
  const browserFrame = document.getElementById("browser-frame");

  goButton.addEventListener("click", () => {
    let url = urlInput.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }
    browserFrame.src = url;
  });

  urlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      goButton.click();
    }
  });
});
