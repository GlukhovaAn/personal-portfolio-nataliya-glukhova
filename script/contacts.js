const popUpElement = document.getElementById("pop-up");
const btnSubmit = document.getElementById("submit");
const checkbox = document.getElementById("checkbox");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const userName = document.getElementById("user-name");
const userPhone = document.getElementById("user-phone");
const closeBtn = document.querySelector(".popup__close");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameInput.value && phoneInput.value) {
    userName.textContent = nameInput.value;
    userPhone.textContent = phoneInput.value;
    popUpElement.style.display = "flex";
    popUpElement.showModal();
  }
});

function reset() {
  nameInput.value = "";
  phoneInput.value = "";
}

function closeModal() {
  popUpElement.close();
  popUpElement.style.display = "none";
  reset();
}

closeBtn.addEventListener("click", () => {
  closeModal();
});

const handleModalClick = (event) => {
  const modalRect = popUpElement.getBoundingClientRect();

  if (
    event.clientX < modalRect.left ||
    event.clientX > modalRect.right ||
    event.clientY < modalRect.top ||
    event.clientY > modalRect.bottom
  ) {
    closeModal();
  }
};

popUpElement.addEventListener("click", handleModalClick);

checkbox.addEventListener("change", () => {
  if (!checkbox.checked) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
});
