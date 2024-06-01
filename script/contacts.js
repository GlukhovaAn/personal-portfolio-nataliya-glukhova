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
    popUpElement.showModal();
  }
});

closeBtn.addEventListener("click", () => {
  popUpElement.close();
});

const handleModalClick = (event) => {
  const modalRect = popUpElement.getBoundingClientRect();

  if (
    event.clientX < modalRect.left ||
    event.clientX > modalRect.right ||
    event.clientY < modalRect.top ||
    event.clientY > modalRect.bottom
  ) {
    popUpElement.close();
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
