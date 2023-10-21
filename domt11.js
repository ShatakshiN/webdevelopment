//sstoring name and email as the 
var form = document.getElementById("my-form");

form.addEventListener('submit',storage);

// function storage(e){
//     e.preventDefault();
//     var name = document.getElementById('name').value;
//     var mail = document.getElementById('email').value;

// }

function storage(e){
    e.preventDefault();
    var name = e.target.name.value;
    var mail = e.target.email.value;
    var book = document.getElementById('book').value;

    var obj = {
        name,
        mail,
        book

    }

    localStorage.setItem('userDetails', JSON.stringify(obj));

}