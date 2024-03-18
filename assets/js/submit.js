
    document.getElementById("phone").addEventListener("input", function(event) {
        const phoneInput = event.target;
        const isValid = phoneInput.checkValidity();

        if (!isValid) {
            phoneInput.setCustomValidity("Please enter a 10-digit phone number.");
        } else {
            phoneInput.setCustomValidity("");
        }
    });

