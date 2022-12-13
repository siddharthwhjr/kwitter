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



//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message, msg,
            name : username,
            like : 0
      });
      document.getElementById("message").value = "";
}
//End code
      } });  }); }
getData();
