import { authMiddleware } from "./authMiddleware.js";

//executes the middleware

const middlewares = [authMiddleware];

export const runMiddlewares = (route, next) => {
  let index = 0;

  const runNextMiddleware = () => {
    const middleware = middlewares[index];
    index++;

    if (middleware) {
      middleware(route, runNextMiddleware);
    } else {
      next();
    }
  };

  runNextMiddleware();
};
