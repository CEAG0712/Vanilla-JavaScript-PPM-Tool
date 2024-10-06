import AuthenticationApi from"../../services/AuthenticationApi.js";import store from"../../store/index.js";import Swal from"sweetalert2";import{eventEmitter,navigateTo}from"../../utils/helpers.js";class Login{pagePath1="/login";constructor(){this.loginForm=document.getElementById("login-form"),console.log("this.loginForm ",this.loginForm),this.pagePath="/login",this.render()}addSubmitEventListener(){this.loginForm.addEventListener("submit",this.onSubmitLoginForm.bind(this))}async onSubmitLoginForm(e){e.preventDefault();const t=e.target,o={email:t.querySelector("[name = 'email']").value,password:t.querySelector("[name = 'password']").value};if(o.email&&o.password){try{const e=await AuthenticationApi.login(o);console.log("registration successfull"),this.clearFieldsAfterSubmit([t.querySelector("[name = 'email']"),t.querySelector("[name = 'password']")]),console.log("clear fields func",this.clearFieldsAfterSubmit),Swal.fire({title:"Login Successful!",text:"You are now ready work on your tasks!",icon:"success"}),console.log(e.data),store.auth.commit("setAuthUser",e.data.data),eventEmitter.emit("authStateChange",!0),navigateTo("/dashboard")}catch(e){console.log(e),Swal.fire({icon:"error",title:"Oops...",text:e?.response?.data?.message??" Something went wrong"}),console.log(e?.response?.data)}console.log(o)}else alert("all fields are required")}clearFieldsAfterSubmit(e){e.forEach((e=>e.value=""))}render(){this.addSubmitEventListener()}}export default Login;