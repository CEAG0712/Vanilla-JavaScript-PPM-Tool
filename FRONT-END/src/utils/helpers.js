import { router } from "../index.js";
import store from "../store/index.js";

export const eventEmitter = {
  events: {},

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  },
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data));
    }
  },
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

function logout(e) {
  e.preventDefault();
  store.auth.clearState();
  updateNavBar();
  navigateTo("/login");
}

function updateNavBar() {
  const storeData = store.auth.getState();

  const registerNavLink = document.getElementById("register-nav-link");
  const loginNavLink = document.getElementById("login-nav-link");
  const dashboardNavLink = document.getElementById("dashboard-nav-link");
  const usernameLink = document.getElementById("username");
  const logoutLink = document.getElementById("logout");
  const logoutContainer = document.getElementById("logout-container");

  if (logoutLink) {
    logoutLink.addEventListener("click", logout);
  }

  if (storeData?.isAuthenticated) {
    dashboardNavLink.style.display = "block";
    registerNavLink.style.display = "none";
    loginNavLink.style.display = "none";
    usernameLink.innerHTML = storeData.user.name;
    usernameLink.style.display = "block";
    logoutContainer.style.display = "block";
  } else {
    dashboardNavLink.style.display = "none";
    registerNavLink.style.display = "block";
    loginNavLink.style.display = "block";
    usernameLink.style.display = "none";
    logoutContainer.style.display = "none";
  }
} //iife immediately invoked function expression

eventEmitter.on("authStateChange", updateNavBar);

updateNavBar();
