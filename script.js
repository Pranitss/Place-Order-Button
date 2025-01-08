const btn = document.querySelector(".place-order");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("place-order--placing")) {
    btn.classList.remove("place-order--default");
    btn.classList.add("place-order--placing");

    // Trigger "Done" state after animations
    setTimeout(() => {
      btn.classList.remove("place-order--placing");
      btn.classList.add("place-order--done");
    }, 4000);

    // Reset to default state
    setTimeout(() => {
      btn.classList.remove("place-order--done");
      btn.classList.add("place-order--default");
    }, 6000);
  }
});
