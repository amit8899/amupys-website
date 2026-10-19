document.addEventListener("DOMContentLoaded", () => {
  const id = document.body.dataset.app,
    app = window.AMUPYS_APPS[id];
  if (!app) return;
  document.title = `${app.name} — Amupys`;
  document
    .querySelectorAll("[data-app-name]")
    .forEach((e) => (e.textContent = app.name));
  document
    .querySelectorAll("[data-app-short]")
    .forEach((e) => (e.textContent = app.shortName));
  document
    .querySelectorAll("[data-package]")
    .forEach((e) => (e.textContent = app.packageName));
  document
    .querySelectorAll("[data-description]")
    .forEach((e) => (e.textContent = app.description));
  document.querySelectorAll("[data-app-icon]").forEach((e) => {
    e.src = app.icon;
    e.alt = `${app.name} icon`;
  });
  document
    .querySelectorAll("[data-play-link]")
    .forEach((e) => (e.href = app.playUrl));
  document
    .querySelectorAll("[data-privacy-link]")
    .forEach((e) => (e.href = app.privacyUrl));
  const fg = document.getElementById("featureGrid");
  app.features.forEach(([icon, title, desc]) => {
    const n = document.createElement("article");
    n.className = "feature-card";
    n.innerHTML = `<div class="feature-icon">${icon}</div><h3>${title}</h3><p>${desc}</p>`;
    fg.appendChild(n);
  });
  const gal = document.getElementById("screenshotGallery");
  if (gal) {
    app.screenshots.forEach((src, i) => {
      const a = document.createElement("a");
      a.className = "gallery-item";
      a.href = src;
      a.target = "_blank";
      a.innerHTML = `<img src="${src}" alt="${app.name} screenshot ${i + 1}" loading="lazy">`;
      gal.appendChild(a);
    });
  }
  const vr = document.getElementById("versionRows");
  app.versions.forEach((v, i) => {
    const r = document.createElement("div");
    r.className = "version-row";
    const cls = v.url ? "btn primary small" : "btn secondary small disabled";
    r.innerHTML = `<div class="version-name"><strong>${v.label}</strong><span>${i === 0 ? "Recommended release" : "Older release"}</span></div><div class="meta-muted">${v.version}</div><div class="meta-muted">${v.date}</div><div class="meta-muted">${v.size}</div><div><a class="${cls}" href="${v.url || "#"}" ${v.url ? 'target="_blank" rel="noopener"' : ""}>Download APK</a></div>`;
    vr.appendChild(r);
  });
});
