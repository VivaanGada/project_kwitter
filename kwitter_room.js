const firebaseConfig = {
      apiKey: "AIzaSyDcl-7-Fai2LktPbTZpkRie0Mq6WKF2kg0",
      authDomain: "kwitter-20e40.firebaseapp.com",
      databaseURL: "https://kwitter-20e40-default-rtdb.firebaseio.com",
      projectId: "kwitter-20e40",
      storageBucket: "kwitter-20e40.appspot.com",
      messagingSenderId: "553493159514",
      appId: "1:553493159514:web:2239feeb6347b2cfa30263",
      measurementId: "G-FL1RETZ6NF"
    };
    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function addRoom(){
 room_name = document.getElementById("room_name").value ;
 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"

 });

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -" + Room_names);
row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+ Room_name +" </div><hr>";
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
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}