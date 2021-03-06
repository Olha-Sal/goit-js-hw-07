"use strict";

const input = document.querySelector("#validation-input");
const validLength = Number(input.getAttribute("data-length"));

const borderFocus = function(event) {
  if (event.target.value.length === validLength) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  };
};

input.addEventListener("blur", borderFocus);