const routes = {
  "/": {
    path: "/pages/landing.html",
  },
  "/login": {
    path: "/pages/auth/login.html",
  },
  "/register": {
    path: "/pages/auth/register.html",
  },
  "/dashboard": {
    path: "/pages/dashboard/index.html",
    auth: true,
  },
};

export default routes;
