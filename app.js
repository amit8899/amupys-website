const APK_URLS = {
  beats: "",
  getmp3: "",
  social: ""
};

document.getElementById("year").textContent = new Date().getFullYear();

const toast = document.getElementById("toast");
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

document.querySelectorAll(".apk-link").forEach(link => {
  const app = link.dataset.app;
  const url = APK_URLS[app];

  if (url) {
    link.href = url;
    link.setAttribute("download", "");
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("APK link will be available after you upload the signed APK.");
    });
  }
});
