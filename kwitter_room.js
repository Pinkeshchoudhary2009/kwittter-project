var firebaseConfig = {
  apiKey: "AIzaSyC9JGkEMcLdP8qCtXvs5J1fD7sgEqmP1gA",
  authDomain: "kwitter-75279.firebaseapp.com",
  databaseURL: "https://kwitter-75279-default-rtdb.firebaseio.com",
  projectId: "kwitter-75279",
  storageBucket: "kwitter-75279.appspot.com",
  messagingSenderId: "137780071751",
  appId: "1:137780071751:web:805d0ae1715d4f8fc91062",
  measurementId: "G-H30G6KNFGW"
};

// Initialize Firebas
firebase .initializeApp(firebaseConfig);

 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room name -" +Room_names);
        row ="<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function addRoom (){
   room_name =document.getElementById("room_name").value;
   firebase.database().ref("/").child("room_name").update({
    purpose : "adding room name" 
   });

   localStorage.setItem("room_name" , room_name);
   window.location = "Kwitter_page.html" ;

}

function redirectToRoomName(name){

  console.log(name);
  localStorage.setItem("room_name" ,name)
  window.location ="index.html";
}

function logout()
 { localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html"; }

