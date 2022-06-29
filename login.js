const details=["Faisal","notUserName"]
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(details.indexOf(username)==0 && details.indexOf(password)==1){
        alert("login succesfull");
        return false;
    }
    else if(password.length<=8){
        alert("Password should be minimum of 8 Characters");
    }
    else{
        alert("login Failed");
    }
}