import AuthenticationApi from "../../services/AuthenticationApi.js";
import Swal from "sweetalert2"; //https://sweetalert2.github.io/
import { navigateTo } from "../../utils/helpers.js";

class Register {
  constructor() {
    this.registrationForm = document.getElementById("registration-form");

    this.render();
  }

  addSubmitEventListener() {
    this.registrationForm.addEventListener(
      "submit",
      this.onSubmitRegisterForm.bind(this)
    );
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (payload.password !== payload.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password do not match",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
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

  clearFieldsAfterSubmit(element) {
    element.forEach((item) => (item.value = ""));
  }

  render() {
    this.addSubmitEventListener();
  }
}

export default Register;
