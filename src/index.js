document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const nameInput = document.getElementById("guest-name");
  const categoryInput = document.getElementById("guest-category");
  const guestList = document.getElementById("guest-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");

    if (guestList.children.length >= 10) {
      alert("Guest limit reached (10 guests max)!");
      console.log("Guest limit reached");
      return;
    }

    const name = nameInput.value.trim();
    const category = categoryInput.value;
    
    console.log("Guest name:", name);
    console.log("Guest category:", category);
    if (name === ""){
      console.log("Name input was empty – guest not added");
     return;
    }

    const li = document.createElement("li");
    li.className = "guest-item";

    const guestInfo = document.createElement("span");
    guestInfo.textContent = `${name} (${category}) - Added at ${new Date().toLocaleTimeString()}`;
    console.log("Guest category:", category);

    guestInfo.classList.add(category);

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Not Attending";
    rsvpBtn.addEventListener("click", () => {
      rsvpBtn.textContent = rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
      console.log(`RSVP toggled for ${name}:`, rsvpBtn.textContent);
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const newName = prompt("Edit guest name:", name);
      if (newName && newName.trim() !== "") {
        guestInfo.textContent = `${newName.trim()} (${category}) - Updated at ${new Date().toLocaleTimeString()}`;
         console.log(`Guest name updated from ${name} to ${newName.trim()}`);
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
      guestList.removeChild(li);
    });

    li.append(guestInfo, rsvpBtn, editBtn, deleteBtn);
    guestList.appendChild(li);
    console.log("Guest added to list");
    form.reset();
  });
});
