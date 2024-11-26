const openBut = document.getElementById("openWindow");
const closeBut = document.getElementById("closeWindow");
const dialog = document.getElementById("mod");

openBut.addEventListener("click", () => {
  dialog.showModal();
});

closeBut.addEventListener("click", () => {
  dialog.close();
});