const bootstrap = async (path) => {
  try {
    let module;
    switch (path) {
      case "/login":
        module = await import("./pages/auth/login.js");
        break;

      case "/register":
        module = await import("./pages/auth/register.js");
        break;

      case "/dashboard":
        module = await import("./pages/dashboard/index.js");
        break;

      default:
        console.log(`no module found for ${path}`);

        break;
    }
    if(module){
      const Class = module.default || module;

      if (typeof Class === "function") {
        console.log("new class instantiated");
  
        new Class();
      }
    }
  
  } catch (error) {
    console.log(error, "error loading the module");
  }

  // //true means "should I look recursively or not"
  // const context = require.context("./pages", true, /\.js$/); // look recurservly in the components folder for .js files

  // //gives us the keys. Keys meaning the name of the classes
  // context.keys().forEach(async (element) => {
  //   console.log(
  //     "element ",
  //     typeof (await import("./pages/auth/login.js")).default
  //   );

  //   const login = (await import("./pages/auth/login.js")).default;
  //   const i = new login();

  //   //dynamically load the component - Imports authomaticall
  //   const module = context(element);

  //   console.log("module ", module);

  //   //check if class is exported as default, if not, we just need the name of the export const function
  //   const Class = module.default || module;

  //   if (
  //     typeof Class === "function" &&
  //     `/${module.default.name.toLowerCase()}` === path
  //   ) {
  //     console.log("new class instantiated");

  //     new Class();
  //   }
  // });
};

export default bootstrap;
