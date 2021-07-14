var firebaseConfig = {
      apiKey: "AIzaSyBrX1DXGcj6mh17AYx8uBTN3jkx4ymCxgc",
      authDomain: "trisha-cw.firebaseapp.com",
      databaseURL: "https://trisha-cw-default-rtdb.firebaseio.com",
      projectId: "trisha-cw",
      storageBucket: "trisha-cw.appspot.com",
      messagingSenderId: "202433578736",
      appId: "1:202433578736:web:19cfb47b9ee9fe282a6435"
    };
    firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
      message=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            like:0
      });
      document.getElementById("message").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
sender=message_data["name"];
message=message_data["message"];
like=message_data["like"];
nameTag="<h4>"+sender+"<image class='user_tick' src='tick.png'></h4>";
messageTag="<h4 class='message_h4'>"+message+"</h4>";
likeTag="<button class='btn btn-warning' id='"+firebase_message_id+"' onclick='updateLike(this.id)' value='"+like+"'>";
spanTag="<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span></button>";
row=nameTag+messageTag+likeTag+spanTag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="page1.html";
}

function updateLike(firebase_message_id){
      console.log("Like button clicked for "+firebase_message_id);
      buttonID=firebase_message_id;
      likes=document.getElementById(buttonID).value;
      updatedLikes=Number(likes)+1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(firebase_message_id).update({
            like:updatedLikes
      });
}