document.getElementById("passwordForm").addEventListener('submit', function (e) {
    e.preventDefault();
    const pass = document.getElementById('passwordInput').value;
    if (pass == "ToLoveRuPeak") {
        alert("Yes! Hell yeah! Pass!");
        window.location.href = "/Homework_3/secret_archive/"
    } else {
        alert("Sus! Try Again!");
    }
});