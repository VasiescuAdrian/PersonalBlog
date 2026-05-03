function validateForm() {
    let name = document.getElementById("...").value;
    let email = document.getElementById("...").value;
    let message = document.getElementById("...").value;
    ...
    let correct = 1;
    if (name == "" || email == "" || message == "") {
    alert("...");
    correct = ...;
    return false;
    }
    let emailPattern = ... ;
    
    if (!emailPattern.test(email)) {
    alert("...");
    correct = ... ;
    return false;
    }
    ...
    if(correct == ... ){
    alert("Success!");
    }
    return true;function validateForm() {
        let name = document.getElementById("...").value;
        let email = document.getElementById("...").value;
        let message = document.getElementById("...").value;
        ...
        let correct = 1;
        if (name == "" || email == "" || message == "") {
        alert("...");
        correct = ...;
        return false;
        }
        let emailPattern = ... ;
        
        if (!emailPattern.test(email)) {
        alert("...");
        correct = ... ;
        return false;
        }
        ...
        if(correct == ... ){
        alert("Success!");
        }
        return true;