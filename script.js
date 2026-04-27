document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.className = "form-status";
  status.textContent = "";

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    status.classList.add("error");
    status.textContent = "Merci de remplir tous les champs.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.classList.add("error");
    status.textContent = "Adresse email invalide.";
    return;
  }

  const subject = encodeURIComponent(`Contact site web — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:byandepaul@gmail.com?subject=${subject}&body=${body}`;

  status.classList.add("success");
  status.textContent = "Ouverture de votre client mail…";
  form.reset();
});
