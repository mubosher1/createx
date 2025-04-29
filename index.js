const showBtn = document.getElementById("show");
const sidebar = document.getElementById("sidebar");

showBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

function openModal() {
  document.getElementById('cvModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('cvModal').style.display = 'none';
}

function closeModalOutside(event) {
  if (event.target.id === 'cvModal') {
    closeModal();   
  }
}

const shopcard = document.querySelector(".shopcard")
console.log(shopcard);

function open_shop() {
  shopcard.style.display = "grid"
  shopcard.style.top = "50px"
}
function close_shop() {
  shopcard.style.display = "grid"
  shopcard.style.top = "-650px"
}
