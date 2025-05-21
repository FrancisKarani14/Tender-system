document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myform");
    const error = document.getElementById("errorMessage")
    form.addEventListener("submit", function (e) {
        e .preventDefault()

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmpassword = document.getElementById("confirmpassword").value.trim();
        const age = Number(document.getElementById("age").value);
        const nationality = document.getElementById("nationality").value.trim();

        if (name === "") {
            error.textContent ="Kindly insert your name";
            return;
            
        }
        if (email ==="") {
            error.textContent ="kindly insert your email";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            error.textContent ="enter valid email";
            return;
        }
       
        if (password ==="") {
            error.textContent ="kindly insert your password";
            return;
        }
        if (password.length<6) {
            error.textContent="password shoud have atleast 6 characters";
            return;
        }
        if (password.length>8) {
            error.textContent="password should not exceed 8 characters.";
            return;
        }

        if (!password.includes("!")&&
            !password.includes("@")&&
            !password.includes("$")&&
            !password.includes("*")) {
            error.textContent="Password should atleast have one special character eg: !, @, $, *";
            return;
        }
        if (confirmpassword ==="") {
            error.textContent="Kindly insert your confirm Password";
            return;
            
        }
        if (password !== confirmpassword) {
            error.textContent="Your passwords do not match."
            return;
        }
        if (nationality === "") {
            error.textContent="Kindly enter your nationality"
            return;
            
        }
        if (!age) {
            error.textContent ="Kindly insert your age."
            return;
        }
        
       if (age < 18 || nationality !== "Kenyan") {
        error.textContent="You are not qualified for Tender procurement.";
        return;
        
       }
    //    all validations passed
       error.style.color ="green";
       error.textContent ="Sign-in successful! Redirecting...";

       setTimeout(() => {
            window.location.href ="tenderlist.html";
       }, 2000);
        
        

    })
    
})