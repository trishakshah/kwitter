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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_hello").innerHTML="Welcome "+user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"Adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="page3.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room names - "+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirect2room(this.id)'>#"+Room_names+
"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect2room(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="page3.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="page1.html";
}