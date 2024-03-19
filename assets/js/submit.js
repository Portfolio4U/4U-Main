document.getElementById("phone").addEventListener("input", function(event) {
        const phoneInput = event.target;
        const isValid = phoneInput.checkValidity();

        if (!isValid) {
            phoneInput.setCustomValidity("Please enter a 10-digit phone number.");
        } else {
            phoneInput.setCustomValidity("");
        }
    });



    function showPopup() {
        document.getElementById("sharePopup").style.display = "block";
      }
      
      // Function to close the popup
      function closePopup() {
        document.getElementById("sharePopup").style.display = "none";
      }
      
      // Event listener for the share button
      document.getElementById("shareButton").addEventListener("click", function() {
        showPopup();
      });

      // Function to copy the link to clipboard

      function copyLink() {
        var link = "https://www.portfolio4u.online/";
        navigator.clipboard.writeText(link).then(function() {
          document.getElementById("copyStatus").style.display = "inline";
          setTimeout(function() {
            document.getElementById("copyStatus").style.display = "none";
          }, 2000); // Hide after 2 seconds
        }, function() {
          alert("Failed to copy link.");
        });
      }
