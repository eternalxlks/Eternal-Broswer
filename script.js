document.addEventListener("DOMContentLoaded", () => {
  const urlInput = document.getElementById("url-input");
  const goButton = document.getElementById("go-button");
  const browserFrame = document.getElementById("browser-frame");

  goButton.addEventListener("click", () => {
    let url = urlInput.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    // Try to load the URL in the iframe
    browserFrame.src = url;

    // Handle iframe load errors
    browserFrame.onerror = () => {
      alert("This website cannot be loaded in the iframe. It will open in a new tab.");
      window.open(url, "_blank");
    };
  });

  urlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      goButton.click();
    }
  });
});
