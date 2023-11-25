document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signupMessage = document.getElementById("signupMessage");
    const profilePage = document.getElementById("profilePage");
    const profileDetails = document.getElementById("profileDetails");
    const logoutButton = document.getElementById("logoutButton");

    // Check if the user is already logged in
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        showProfilePage();
        displayUserProfile();
    }

    // Signup form submission
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulate a server-side token generation
        const accessToken = generateAccessToken();

        // Store user details in local storage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Display success message and redirect to the profile page
        signupMessage.textContent = "Signup successful!";
        showProfilePage();
        displayUserProfile();
    });

    // Logout button click
    logoutButton.addEventListener("click", function () {
        // Clear local storage and redirect to signup page
        localStorage.clear();
        showSignupPage();
    });

    // Function to show the signup page
    function showSignupPage() {
        document.getElementById("signupPage").style.display = "block";
        document.getElementById("profilePage").style.display = "none";
    }

    // Function to show the profile page
    function showProfilePage() {
        document.getElementById("signupPage").style.display = "none";
        document.getElementById("profilePage").style.display = "block";
    }

    // Function to display user details on the profile page
    function displayUserProfile() {
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        const accessToken = localStorage.getItem("accesstoken");


        profileDetails.innerHTML = `
            <img src="user-128.png" width = 50px>
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>password: ${password}</p>
        
        `;
    }

    // Function to generate a random access token
    function generateAccessToken() {
        const byteArr = new Uint8Array(16);
        window.crypto.getRandomValues(byteArr);
        return Array.from(byteArr, (byte) => byte.toString(16).padStart(2, '0')).join('');
    }
});
