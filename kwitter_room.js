const firebaseConfig = {
      apiKey: "AIzaSyAjk5qcWNl0GpH05HBNtoh8oUovGg6MjHY",
      authDomain: "kwitter-83624.firebaseapp.com",
      databaseURL: "https://kwitter-83624-default-rtdb.firebaseio.com",
      projectId: "kwitter-83624",
      storageBucket: "kwitter-83624.appspot.com",
      messagingSenderId: "1011717511704",
      appId: "1:1011717511704:web:2b4dc9bff430     8189fbc16d"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+ username + " !";

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
        console.log("Room name = " + room_name);
        row = "<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
          window.location = "kwitter_page.html";
}
