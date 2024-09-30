import h1Title from "./h1-title";
import "./styles/stylekanban.css";

const testH1 = document.getElementById("test-h1");


insertTitle(testH1, h1Title.title);

const insertTitle = (element, title) => {
    return (element.innerHTML = title);
  };




console.log("webpack setup");
