import "./styles/stylekanban.css";
import routes from "./routes.js";
import bootstrap from "./bootstrap.js";
import store from "./store/index.js";
import { runMiddlewares } from "./middleware/index.js";
import { controlNavigation } from "./utils/helpers.js";

console.log("call index.js @src");

export const router = async () => {
  const app = document.getElementById("app");
  const path = location.pathname || "/";
  const route = routes[path]; // " / "
  console.log("location ", location);

  runMiddlewares(route, async () => {
  try {
    const res = await fetch(route.path);
    const html = await res.text();
    app.innerHTML = html;
    bootstrap(path); // bootstraps everything
  } catch (error) {
    console.log(error);
    app.innerHTML = "<h1> 404 PAGE NOT FOUND </h1>";
  }
  });
};

controlNavigation();
