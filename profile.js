
firebase.auth().onAuthStateChanged((user) => {
    
    if (user) {
     
      var uid = user.uid;
      console.log(uid)
    firebase.database().ref(`users/${uid}`).once('value',(data)=>{

      var welcome = document.getElementById("welcome")
      var info1 = document.getElementById("info1");
      var info2 = document.getElementById("info2");
      var info3 = document.getElementById("info3");
      var info4 = document.getElementById("info4");
      var info5 = document.getElementById("info5");
      var info6 = document.getElementById("info6");
  
      welcome.innerText = `Welcome! ` + data.val().fullName
      info1.innerText = `Name: ` + data.val().fullName
      info2.innerText = `Email: ` + data.val().email
      info3.innerText = `Age: ` + data.val().age
      info4.innerText = `Phone Number: ` + data.val().number
      info5.innerText = `Password: ` + data.val().password
      info6.innerText = `Address: ` + data.val().address
  
  
      console.log(data.val());

         })
   
    } else {
        window.location="index.html"
     
    }
  });


  edit=()=>{

    let ediv=document.getElementById("ediv")
    ediv.style.display="block"

       firebase.auth().onAuthStateChanged((user) => {
      if (user) {
       
        var uid = user.uid;
      firebase.database().ref(`users/${uid}`).once('value',(data)=>{
      
  
  
        let eusername=document.getElementById("eusername");
        let Eage=document.getElementById("eage");
        let Eemail=document.getElementById("Eemail");
        let ephone=document.getElementById("ephone")
        let eadd=document.getElementById("eadd")
        let epass=document.getElementById("epass")
  
        eusername.value=data.val().fullName;
        Eage.value=data.val().age;
        Eemail.value=data.val().email;
        ephone.value=data.val().number;
        eadd.value=data.val().address;
        epass.value=data.val().password
  
        console.log(data.val());
  
           })
     
      } else {
          window.location="index.html"
       
      }
    });
    
    

  }


 saveProfile=()=>{

    let fullName=document.getElementById("eusername");
    let age=document.getElementById("eage");
    let email=document.getElementById("Eemail");
    let number=document.getElementById("ephone")
    let address=document.getElementById("eadd")
    let password=document.getElementById("epass")

  let user = firebase.auth().currentUser;
  let uid;
  if(user != null){
      uid = user.uid;
  }
  var firebaseRef = firebase.database().ref();
  var userData = {
    fullName: fullName.value,
    email: email.value,
    age: age.value,
    number: number.value,
    password: password.value,
    address: address.value,
      
  }
  firebaseRef.child(`users/${uid}`).set(userData);
  console.log(userData)
  setTimeout(()=>{
    window.location="home.html"
  },3000)
  swal({
    type:'success',
    title:'Profile Edited'
  }

  )
  }
  cancell=()=>{
    window.location="home.html"
  }
    

  
 
// let userFormFirebase= new Promise((resolve,reject)=>{
//     firebase.auth().onAuthStateChanged((user)=>{
//         if(user){
//             resolve(user.uid)
//         }

//     })
// });
  

let logout=()=>{
    firebase.auth().signOut()
    .then(()=>{
       
        window.location= "index.html"
    });
}