function login(){
    const email = document.getElementsByClassName('email').value;
    const password = document.getElementsByClassName('pass').value;
    
    const data = new FormData({email: email, password: password});


var options = { method: 'POST',
               body: data,
               headers: { 
                   'Content-Type': 'application/json'
                 },
            };

fetch('http://localhost:3000/api/users/login',options)
.then(response => response.json())
.then(data => {
        if(data.length > 0){
            //     console.log('data is present');
                 var url= "http://localhost:3000/pages/home.html";  
                 window.location = url;
             }else{
                 alert("Login ou mot de passe incorrect");
             }
    });
}