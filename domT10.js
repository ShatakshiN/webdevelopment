var form = document.getElementById("my-form");

form.addEventListener('submit',storage);

function storage(e){
    e.preventDefault();
    var namee = document.getElementById('name').value;
    var mail = document.getElementById('email').value;

    localStorage.setItem('name',namee);
    localStorage.setItem('email',mail);
}

