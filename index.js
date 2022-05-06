document.addEventListener("DOMContentLoaded", function (e) {

    var p = document.getElementById("signInText");

    if (localStorage.getItem('logeduser') != null) {
        p.innerText = "Hi,\t" + JSON.parse(localStorage.getItem('logeduser')).fname;
        document.getElementById("sign-in-btn").style.display = "none";
        document.getElementById("sign-up-btn").style.display = "none";
        var signout = document.getElementById("signout");
        signout.style.display = "block"
        signout.addEventListener("click", function (ev) {
            localStorage.removeItem("logeduser");
            document.location = "index.html";
        });
    
    }

    
    });