const bootstrap = (path) => {
  //true means "should I look recursively or not"
  const context = require.context("./pages", true, /\.js$/); // look recurservly in the components folder for .js files

  //gives us the keys. Keys meaning the name of the classes
  context.keys().forEach((element) => {
    //dynamically load the component - Imports authomaticall
    const module = context(element);

    //check if class is exported as default, if not, we just need the name of the export const function
    const Class = module.default || module;

    if (
      typeof Class === "function" &&
      `/${module.default.name.toLowerCase()}` === path
    ) {
      const instance = new Class();
    }
  });
};

export default bootstrap;
