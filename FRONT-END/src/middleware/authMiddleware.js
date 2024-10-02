import store from "../store/index.js";
import { navigateTo } from "../utils/helpers.js";

export const authMiddleware = (route, next) => {
  const authState = store.auth.getState();

  if (!authState?.isAuthenticated && route.auth) {
    navigateTo("/login");
    return false;
  }

  if (authState?.isAuthenticated && !route.auth) {
    navigateTo("/dashboard");
    return false;
  }
  next();
};
