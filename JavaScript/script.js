var judul = document.getElementById('judul');
console.log(judul);

function validateForm(){
    let x = document.forms["Login"]["password"].value
    if (x == "" ) {
        alert("password must be filled out");    
        return false;
    }
}
