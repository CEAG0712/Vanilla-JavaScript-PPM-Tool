import AuthenticationApi from "../../services/AuthenticationApi";
import store from "../../store/index.js";
import Swal from "sweetalert2"; //https://sweetalert2.github.io/
import { eventEmitter, navigateTo } from "../../utils/helpers.js";

class Authentication {
  constructor() {
    this.registrationForm = document.getElementById("registration-form");
    this.loginForm = document.getElementById("login-form");
    console.log("this.registrationForm ", this.registrationForm);
    console.log("this.loginForm ", this.loginForm);

    this.render();
  }

  addSubmitEventListener() {
    console.log("event listener is being called");

    if (this.registrationForm) {
      this.registrationForm.addEventListener(
        "submit",
        this.onSubmitRegisterForm.bind(this)
      );
    }
    if (this.loginForm) {
      console.log("xxxxx");

      this.loginForm.addEventListener(
        "submit",
        this.onSubmitLoginForm.bind(this)
      );
    }
  }

  async onSubmitRegisterForm(e) {
    e.preventDefault();

    const form = e.target;
    const payload = {
      name: form.querySelector("[name='name']").value,
      email: form.querySelector("[name = 'email']").value,
      password: form.querySelector("[name = 'password']").value,
      confirmPassword: form.querySelector("[name = 'confirmPassword']").value,
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.password ||
      !payload.confirmPassword
    ) {
      alert("all fields are required");
      return;
    }

    if (payload.password !== payload.confirmPassword) {
      alert("passwords must match");
      return;
    }

    try {
      await AuthenticationApi.register(payload);
      console.log("registration successfull");
      this.clearFieldsAfterSubmit([
        form.querySelector("[name='name']"),
        form.querySelector("[name = 'email']"),
        form.querySelector("[name = 'password']"),
        form.querySelector("[name = 'confirmPassword']"),
      ]);

      Swal.fire({
        title: "Registration Successful!",
        text: "You are now ready to login!",
        icon: "success",
      });

      navigateTo("/login");
    } catch (error) {
      console.log(error);

      //alert(error?.response?.data?.message ?? " Something went wrong"); //coalesce
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message ?? " Something went wrong",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.log(error?.response?.data);
    }

    console.log(payload);
  }

  async onSubmitLoginForm(e) {
    e.preventDefault();

    const form = e.target;
    const payload = {
      email: form.querySelector("[name = 'email']").value,
      password: form.querySelector("[name = 'password']").value,
    };

    if (!payload.email || !payload.password) {
      alert("all fields are required");
      return;
    }

    try {
      const res = await AuthenticationApi.login(payload);
      console.log("registration successfull");
      this.clearFieldsAfterSubmit([
        form.querySelector("[name = 'email']"),
        form.querySelector("[name = 'password']"),
      ]);

      console.log("clear fields func", this.clearFieldsAfterSubmit);

      Swal.fire({
        title: "Login Successful!",
        text: "You are now ready work on your tasks!",
        icon: "success",
      });
      console.log(res.data);

      store.auth.commit("setAuthUser", res.data.data);
      eventEmitter.emit("authStateChange", true);

      navigateTo("/dashboard");
    } catch (error) {
      console.log(error);

      //alert(error?.response?.data?.message ?? " Something went wrong"); //coalesce
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message ?? " Something went wrong",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.log(error?.response?.data);
    }

    console.log(payload);
  }

  clearFieldsAfterSubmit(element) {
    element.forEach((item) => (item.value = ""));
  }

  render() {
    this.addSubmitEventListener();
  }
}

export default Authentication;
