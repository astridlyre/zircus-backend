(() => {
  const q = (id) => document.getElementById(id);
  const form = q("login-form");
  const msg = q("login-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const usernameInput = e.target[0];
    const passwordInput = e.target[1];
    const submitButton = e.submitter;
    const payload = {
      username: usernameInput.value,
      password: passwordInput.value,
    };
    const reply = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const parsedReply = await reply.json();
    if (parsedReply.error) {
      msg.textContent = "Login failed.";
      msg.classList.add("red");
      usernameInput.disabled = true;
      passwordInput.disabled = true;
      submitButton.disabled = true;
      setTimeout(() => {
        msg.textContent = "Please Log in:";
        msg.classList.remove("red");
        usernameInput.disabled = false;
        passwordInput.disabled = false;
        submitButton.disabled = false;
      }, 3000);
      return;
    }
    localStorage.setItem("user", parsedReply.name);
    localStorage.setItem("token", parsedReply.token);
  });
})();
