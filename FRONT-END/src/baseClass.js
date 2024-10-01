class BaseClass {
  constructor() {
    if (this.render1 === undefined) {
      throw new Error(
        "Classes extending the base class must implement the render method"
      );
    }
  }

  render1() {
    throw new Error("You must implement the render method in this subclass");
  }
}

export default BaseClass;
