 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCblUGf_Y8Pl_3ky0AN6dQOoUwIZTXcTXs",
    authDomain: "video-945da.firebaseapp.com",
    databaseURL: "https://video-945da.firebaseio.com",
    projectId: "video-945da",
    storageBucket: "video-945da.appspot.com",
    messagingSenderId: "470609664814",
    appId: "1:470609664814:web:e3b3ad68553621d2fdb8bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



document.getElementById("send").addEventListener("click",(clicked)=>{

    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let number=document.getElementById("number").value
    let birth=document.getElementById("dob").value
    let age=document.getElementById("age").value
    let query=document.getElementById("queryQuestion").value
    let male=document.getElementById("male").checked
    let female=document.getElementById("female").checked
    let trans=document.getElementById("transgender").checked
    let gender;

    clicked.preventDefault()

    // console.log(name,":,",email,":,",number,birth,":,",age,query,male,female,trans)

    if(male) {gender=`Male`}
    if(female) {gender=`Female`}
    if(trans) {gender=`TransGender`}

    // console.log(query)

    let formData ={
        FullName : name.trim(),
        Email : email.trim(),
        Number : number.trim(),
        DateofBirth : birth.trim(),
        Age : age.trim(),
        Gender : gender.trim(),
        Query : query.trim()
    }

    console.log(formData)

    var init = firebase.database()

    let databaseRef = init.ref("/Form")
    let db = databaseRef.child(`${name}`.split(" ").join()).set(formData)
    db.then(()=>{
        console.log("Data Uploaded")
    })

    db.catch((error)=>{
        console.log(error,"Error :")
    })




})



