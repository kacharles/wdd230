// alert("working");
const password = document.querySelector("#password");
const repeatpass = document.querySelector("#repeat-password"); 

const subBtn = document.querySelector("button"); 
const message = document.querySelector("#message");

const dateTime = document.querySelector("#timestamp");

dateTime.value = new Date();
// dateTime.textContent = "You and me";


subBtn.addEventListener("click", () => {
    if (password.value == repeatpass.value) { 

      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        // document.getElementById("message").textContent = "Submitting..";
        document.getElementById("submit").textContent = "Signing up...";
        document.getElementById("message").style.display = "block";
        document.getElementById("submit").disabled = true;
    
        // Collect the form data
        var formData = new FormData(this);
        var keyValuePairs = [];
        for (var pair of formData.entries()) {
          keyValuePairs.push(pair[0] + "=" + pair[1]);
        }
    
        var formDataString = keyValuePairs.join("&");
    
        // Send a POST request to your Google Apps Script
        fetch(
          "https://script.google.com/macros/s/AKfycbxnM4ObNviz7EEPRKfBy6iQn237sJq62CB3jo83UloGt-Q2Y4oKy1lWxoV0QR8Z8TuU/exec",
          {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        )
          .then(function (response) {
            // Check if the request was successful
            if (response) {
              return response; // Assuming your script returns JSON response
            } else {
              throw new Error("Failed to submit the form.");
            }
          })
          .then(function (data) {
            // Display a success message
            document.getElementById("message").textContent =
              "Data submitted successfully!";
            document.getElementById("message").style.display = "block";
            document.getElementById("message").style.backgroundColor = "green";
            document.getElementById("message").style.color = "beige";
            document.getElementById("submit").disabled = false;
            document.querySelector("#submit").textContent = "Sign up";
            document.querySelector("#form").reset();
    
            setTimeout(function () {
              document.getElementById("message").textContent = "";
              document.getElementById("message").style.display = "none";
            }, 2600);
          })
          .catch(function (error) {
            // Handle errors, you can display an error message here
            console.error(error);
            document.getElementById("message").textContent =
              "An error occurred while submitting the form.";
            document.getElementById("message").style.display = "block";
          });
      });

    
      // console.log(new Date());
    }
    else { 
        message.textContent = "Password does not match. Please try again.";
        message.style.display = "block";
        message.style.backgroundColor = "red";
        message.style.color = "white";
        message.style.padding = "1rem";
        message.style.margin = "1.5rem";
        repeatpass.focus();
        password.value = ""; 
        repeatpass.value = "";
        setTimeout(function() {
          document.getElementById("message").textContent = "";
          document.getElementById("message").style.display = "none";
        }, 3000);
        
   }
})
