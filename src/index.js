import "./styles.css";

const arr = [
  "“You are who you are meant to be. Dance as if no one’s watching. Love as if it’s all you know. Dream as if you’ll live forever. Live as if you’ll die today.” James Dean",
  "“You do not find the happy life. You make it.”— Camilla Eyring Kimball",
  "“Happiness is not something readymade. It comes from your own actions.”-Dalai Lama",
  "“It is during our darkest moments that we must focus to see the light.” — Aristotle",
  "“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” — Unknown"
];
const btn = document.getElementById("button");
btn.addEventListener("click", getRandomQuote);
function getRandomQuote() {
  const random = Math.floor(Math.random() * arr.length);
  document.getElementById("phrase").innerHTML = arr[random];
}
