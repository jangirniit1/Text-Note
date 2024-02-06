const btn = document.querySelector("#btn");
btn.addEventListener("click", addNote);

function addNote() {
  const text = document.getElementById("noteText").value;
  const color = document.getElementById("colorPicker").value;
  const textColor = document.getElementById("textColor").value;
  const noteDisplay = document.getElementById("noteDisplay");
  const noteEle = document.createElement("div");
  noteEle.classList.add("noteBox");
  noteEle.innerHTML = text;
  noteEle.contentEditable = true;
  noteEle.style.backgroundColor = color;
  noteEle.style.color = textColor;

  const btn2 = document.createElement("a");
  btn2.classList.add("closeBtn");
  noteEle.append(btn2);
  btn2.innerHTML = "&times;";

  const cross = noteEle.querySelector(".closeBtn");
  cross.addEventListener("click", () => {
    // noteEle.style.display="none"; // Expected output :- This can remove the div but in the element that div is available.
    // noteEle.remove();  // Expected output:- This can remove the div from main div.
    noteDisplay.removeChild(noteEle); // Expected output:- This can remove the div from main div.
  });

  document.getElementById("noteDisplay").appendChild(noteEle);
  document.getElementById("noteText").value = "";
}
