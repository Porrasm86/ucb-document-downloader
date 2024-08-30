docutment.
    querySelectorAll("div.no-print")[0]
    .children[1].textContent.match(/PDFFile\s*:\s*'([^']+)'/)[1]; // gets the pdf file name

  t documentLink = document.createElement("a");
  documentLink.href = `https://neo.ucb.edu.bo${documentViewer}`;

  const documentButton = document.createElement("button");
  documentButton.innerText = "ABRIR DOCUMENTO EN PESTAÑA NUEVA";
  doentButton.style = "margin-left: 10px;";
  documentButton.onclick = () => {
    window.open(documentLink.href, "_blank");
  };

 documentDownloadButton = document.createElement("button");
  documentDownloadButton.innerText = "DESCARGAR DOCUMENTO";
  documentDownloadButton.style = "margin-left: 10px;";
  documentDownloadButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ message: "download", url: documentLink.href });


  const documentButtonContainer = document.createElement("div");
  documentButtonContainer.style = "display: flex; align-items: center;";
  documentButtonContainer.appendChild(documentButton);
  documentButtonContainer.appendChild(documentDownloadBut
  const lessonArea = document
    .getElementsByClassName("max_user_content_width not_centered")[0]
    .getElementsByTagName("p")[0];
  lessonArea.prepend(documentButtonContainer);
} catch (errole.log("UCB NEO Downloader: Something went wrong.", e