function signUp() {
    var name = document.getElementById("usrName").value;
    var email = document.getElementById("usrEmail").value;
    var pass = document.getElementById("bugpassword").value;
    var p = document.getElementById("inner");
    
       if(pass == "" ) {
        p.innerHTML = "please password";     
    }
    else if(pass.length < 8) {
       p.innerHTML = "password is to short";
    }
  
    
    else if(name == ""){
        p.innerHTML = "please write your name";
    }
    else if(email == ""){
        p.innerHTML="please write your email address";
    }
    else if( email.indexOf("@") == "=1" ){
       p.innerHTML = "please enter valid email";


    }

    else {
        localStorage.setItem("userName", name);
        localStorage.setItem("userPassword", pass);
        localStorage.setItem("userEmail", email);
        alert("you are registered!");
       return document.location.href = "login.html";
    }}

    function logIn() {
        var email = document.getElementById("usrEmail").value;
        var pass = document.getElementById("bugpassword").value;
        var p = document.getElementById("inner");
        
        var usrEmail = localStorage.getItem("userEmail");
        var bugpassword = localStorage.getItem("userPassword");
        
        if (email == ""){
            p.innerHTML = "you must enter your email ";
        }
        
        else if(email.indexOf("@") == "-1" ){
            p.innerHTML = "please enter valid email address";
        }
        
        else if(pass == "" ) {
        p.innerHTML = "please password";     
    }
    else if(pass.length < 8) {
       p.innerHTML = "password is to short";
    }
    else if(email != usrEmail || pass != bugpassword){
        p.innerHTML = "you entered wrong details";
    }
    else if(email === usrEmail && pass === bugpassword){
        alert("log in succesfully");
        return document.location.href = "profile.html";
    }
    }

        function profile(){

            // var name = document.getElementById("usrName").value;
           //  var email = document.getElementById("usrEmail").value;

             var usrEmail = localStorage.getItem("userEmail");
             var usrName = localStorage.getItem("userName");

             document.getElementById("profileName").innerHTML = usrName;
    document.getElementById("profileEmail").innerHTML = usrEmail;


        }

        function logOut() {
  return document.location.href = "login.html";
}






