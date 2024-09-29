import insertTitle from "./h1-title";
import "./styles/stylekanban.css";

const testH1 = document.getElementById("test-h1");

// testH1.innerHTML = h1Title.title;
const titleFromFunction = "title from function"
insertTitle(testH1, titleFromFunction )

console.log("webpack setup");
