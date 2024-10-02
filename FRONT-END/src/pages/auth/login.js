import AuthenticationApi from "../../services/AuthenticationApi.js";
import store from "../../store/index.js";
import Swal from "sweetalert2"; //https://sweetalert2.github.io/
import { eventEmitter, navigateTo } from "../../utils/helpers.js";

class Login {
  constructor() {
    this.loginForm = document.getElementById("login-form");
    console.log("this.loginForm ", this.loginForm);

    this.render();
  }

  addSubmitEventListener() {
    this.loginForm.addEventListener(
      "submit",
      this.onSubmitLoginForm.bind(this)
    );
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

export default Login;
