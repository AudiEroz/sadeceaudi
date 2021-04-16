var firebaseConfig = {
    apiKey: "AIzaSyDQnyB466f8b7iT5bpyKLAkOtuo52124-g",
    authDomain: "sadece-audi-challenge.firebaseapp.com",
    projectId: "sadece-audi-challenge",
    storageBucket: "sadece-audi-challenge.appspot.com",
    messagingSenderId: "832788846818",
    appId: "1:832788846818:web:1b88cf5b5ce1a7d01726bb"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("audi1")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()



  //Get Form Values
  let name = document.getElementById('name').value

  //Save Form Data To Firebase
  db.doc().set({
    name: name,
  }).then( () => {
    console.log("Data saved")
window.location.href = 'social.html';
  }).catch((error) => {
    console.log(error)
  })

  //alert


})