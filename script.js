function openQR() {
  document.getElementById("qrisModal").style.display = "block";
}

function closeQR() {
  document.getElementById("qrisModal").style.display = "none";
}

function addCart() {
  alert("Produk ditambahkan ke keranjang 🛒");
}

function favorite() {
  alert("Produk disimpan ke favorit ❤️");
}

function scrollTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMode() {
  document.body.classList.toggle("light");
}
