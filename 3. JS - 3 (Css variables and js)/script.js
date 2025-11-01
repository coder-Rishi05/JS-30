const input = document.querySelectorAll(".controls input");

function handleUpdate() {
//   console.log(this.value); // it will print each updated value.
  const suffix = this.dataset.sizing || ""; // it an object that is already we dont need to select.it will automatically put the value of data-dash name,size etc
  console.log(suffix);
  console.log(this.name);

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

input.forEach((item, index) => {
  item.addEventListener("change", handleUpdate); // it will triiger the value getting by change on inout.
});
input.forEach((item, index) => {
  item.addEventListener("mousemove", handleUpdate);
});
