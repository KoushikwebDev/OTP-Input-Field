const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".otp-box input");
const verifyBtn = document.querySelector(".verify-btn");

const isAllInputFilled = () => {
  return Array.from(inputs).every((item) => item.value);
};

const getOtpText = () => {
  let text = "";
  inputs.forEach((input) => {
    text += input.value;
  });
  return text;
};

const verifyOTP = () => {
  if (isAllInputFilled()) {
    const text = getOtpText();
    alert(`Your OTP is "${text}". OTP is correct`);
  }
};

// main
form.addEventListener("input", (e) => {
  const target = e.target;
  //   const value = target.value;
  //   console.log({ target, value });

  if (target.nextElementSibling) {
    target.nextElementSibling.focus();
  }
  //   verifyOTP();
});

inputs.forEach((input, currentIndex) => {
  // paste event
  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    // console.log(text);
    inputs.forEach((item, index) => {
      //   if (index >= currentIndex && text[index - currentIndex]) {
      //     item.focus();
      //     item.value = text[index - currentIndex] || "";

      //     // verifyOTP();
      //   }

      if (text[index] === undefined) return;
      item.value = text[index];
      if (item.nextElementSibling) {
        // console.log("running");
        item.nextElementSibling.focus();
      }
    });
  });

  // backspace event and arrow key event
  input.addEventListener("keydown", (e) => {
    if (e.keyCode === 8 || e.key === "Backspace" || e.keyCode === 4) {
      e.preventDefault();
      input.value = "";
      // console.log(input.value);

      if (input.previousElementSibling) {
        input.previousElementSibling.focus();
      }
    } else {
      if (input.value && input.nextElementSibling) {
        input.nextElementSibling.focus();
      }
    }

    if (e.keyCode === 37) {
      if (e.target.previousElementSibling) {
        input.previousElementSibling.focus();
      }
    }
    if (e.keyCode === 39) {
      if (e.target.nextElementSibling) {
        input.nextElementSibling.focus();
      }
    }
  });
});

verifyBtn.addEventListener("click", () => {
  verifyOTP();
});
