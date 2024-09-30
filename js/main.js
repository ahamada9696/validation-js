// form validation ------------------------

function validate(){
    var name=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var pass=document.getElementById("pass").value;
    var confirm=document.getElementById("confirm").value;
    var result=document.getElementById("result");

    result.setAttribute("class","text-center alert-danger p-3");

    if(name=="" && mail=="" && pass=="" ){
        result.innerHTML="please insert data required !";
        return false;
    }else if(name.length<5 || name.length>15){
        result.innerHTML="please insert name between 5 ~ 15 characters";
        return false;
    }else if(mail.indexOf("@")==-1){
        result.innerHTML="email must contain '@'  ";
        return false;
    }else if (pass.length<8){
        result.innerHTML="passwort must be at least 8 characters ";
        return false ;
    }else if (confirm != pass){
        result.innerHTML="please confirm your password";
        return false;
    }else{return true}
}

// form validation ------------------------
