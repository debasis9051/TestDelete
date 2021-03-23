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
  let formDb,forms;

  var init = firebase.database()

    let db=init.ref(`/`).get(`Form`)
    db.then((data)=>{
        data.forEach((form)=>{
            formDb=form.val();
        })
        forms=Object.keys(formDb)
        for(let i=0;i<forms.length;i++)
        {
            let person=forms[i]
            let details=document.querySelector("#form").content
            let ui=details.cloneNode(true)


            console.log(formDb[person])
            console.log(ui.querySelector(".query"))

            let name = ui.querySelector(".fullName")
            let email =ui.querySelector(".email")
            let number =ui.querySelector(".number")
            let dob=ui.querySelector(".dob")
            let age = ui.querySelector(".age")
            let gender = ui.querySelector(".gender")
            let query = ui.querySelector(".query")

            name.innerHTML=`${formDb[person].FullName}`
            email.innerHTML=`Email ID :-${formDb[person].Email}`
            number.innerHTML=` Contact No :-${formDb[person].Number}`
            dob.innerHTML=`Date of Birth :-${formDb[person].DateofBirth}`
            age.innerHTML=`Age :-${formDb[person].Age}`
            gender.innerHTML=`Gender :-${formDb[person].Gender}`
            query.innerHTML=`Query :- "${formDb[person].Query}"`

            document.querySelector(".header").appendChild(ui)
            
            console.log(name,email,number,dob,age,gender,query)



        }
        console.log(forms)
        console.log(formDb)
    })
