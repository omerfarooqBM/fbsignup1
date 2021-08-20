// Signup Page function
function signup() {
    var fullName = document.getElementById("fullName");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var number = document.getElementById("phoneNumber");
    var password = document.getElementById("password");
    var address = document.getElementById("address");
    var message = document.getElementById("message");
    var obj = {
        fullName: fullName.value,
        email: email.value,
        age: age.value,
        number: number.value,
        password: password.value,
        address: address.value,

    };
   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((res)=>{
      firebase.database().ref(`users/${res.user.uid}`).set(obj)
      .then(() => {
  
        // var user = res.user;
        // console.log("user==>" , user)
    
        setTimeout(()=>{
          window.location="index.html"
        },1000)
        
        message.innerHTML=" User register succesfully";
        fullName.value="";
        username.value="";
        email.value="";
        password.value="";
        age.value="";
        number.value="";
        address.value="";
        
        
       
      })
      .catch((err) => {
        
        var errorMessage = err.message;
        console.log(err)
        
      });
    })
}




// Login Page function
function login() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var message = document.getElementById("message")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
    
          // console.log("user==>" ,res.user.uid)
        
          var user = res.user;
      
          
          message.innerHTML=" User Login succesfully";
          
         
          email.value="";
          password.value="";
      
          
          setTimeout(()=>{
              window.location="home.html"
            },1000)
    
      })
      .catch((error) => {
      
      var errorMessage = error.message;
      console.log(error)


      });
  
     
}


// for Logout



// Current User on index.html
function getCurrentUser() {
    var welcome = document.getElementById("welcome")
    var info1 = document.getElementById("info1");
    var info2 = document.getElementById("info2");
    var info3 = document.getElementById("info3");
    var info4 = document.getElementById("info4");
    var info5 = document.getElementById("info5");
    var info6 = document.getElementById("info6");

    welcome.innerText = `Welcome! ` + loginUser.fullName
    info1.innerText = `Name: ` + loginUser.fullName
    info2.innerText = `Email: ` + loginUser.email
    info3.innerText = `Age: ` + loginUser.age
    info4.innerText = `Phone Number: ` + loginUser.number
    info5.innerText = `Password: ` + loginUser.password
    info6.innerText = `Address: ` + loginUser.address

}


