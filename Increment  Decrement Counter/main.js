function counter(node, min, max, initial) {
  let count = 0;
  const input = node.querySelector("input");
  const minusBtn = node.querySelector(".minus-btn");
  const plusBtn = node.querySelector(".plus-btn");
  input.value = initial;
  minusBtn.addEventListener("click", function () {
    count = count - 1 < min ? min : count - 1;
    input.value = count;
  });
  input.value = initial;
  plusBtn.addEventListener("click", function () {
    count = count + 1 > max ? max : count + 1;
    input.value = count;
  });
}
counter(document.querySelector(".counter-box"), 1, 10, 1);
