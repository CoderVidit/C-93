const firebaseConfig = {
      apiKey: "AIzaSyBVAKUGK34OxHo52Zqqp3Trx2QRrKk_Esg",
      authDomain: "kwitter-website-41683.firebaseapp.com",
      databaseURL: "https://kwitter-website-41683-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-41683",
      storageBucket: "kwitter-website-41683.appspot.com",
      messagingSenderId: "260665916924",
      appId: "1:260665916924:web:e6ff8a75ae2020776b4679",
      measurementId: "G-SLZX94EVJ7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
