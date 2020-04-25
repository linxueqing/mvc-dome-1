import $ from "jquery";
import "./app1.css";
console.log($);
const $number = $("#app1 .number");
const n = localStorage.getItem("n");
$number.text(n || 100);

const $button1 = $("#app1 .add");
$button1.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

const $button2 = $("#app1 .minus");
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

const $button3 = $("#app1 .mul");
$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});

const $button4 = $("#app1 .divide");
$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
