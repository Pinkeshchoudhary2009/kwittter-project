user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

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
function send(){

    msg =document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value;
}


function logout()
 { localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html"; }
