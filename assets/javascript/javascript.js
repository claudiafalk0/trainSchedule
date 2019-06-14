// ### Instructions

// * Make sure that your app suits this basic spec:
  
//   * When adding trains, administrators should be able to submit the following:
    
//     * Train Name
    
//     * Destination 
    
//     * First Train Time -- in military time
    
//     * Frequency -- in minutes
  
//   * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
//   * Users from many different machines must be able to view same train times.
  
//   * Styling and theme are completely up to you. Get Creative!

var firebaseConfig = {
    apiKey: "AIzaSyBxlKgTPUMuRnc7PjWVfb6_Igd4-bvl4fM",
    authDomain: "practicefirebase-4edf4.firebaseapp.com",
    databaseURL: "https://practicefirebase-4edf4.firebaseio.com",
    projectId: "practicefirebase-4edf4",
    storageBucket: "practicefirebase-4edf4.appspot.com",
    messagingSenderId: "1031985668562",
    appId: "1:1031985668562:web:ff2a88db91270648"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  database.ref().on("value", function(snapshot){
      
  })

  // function time_converter(num){
  //   var toHours = Math.floor(num/60);
  //   var toMinutes = num % 60;
  //   return toHours + ":" + toMinutes;
  // }
 $("#submitBtn").on("click", function(event){
     event.preventDefault();

     var trainName = $("#trainName").val().trim();
     var destination = $("#destination").val().trim();
     var firstTrainTime = document.getElementById("militaryTime").value;
     var Frequency = $("#Frequency").val().trim();
     var timeConverter = moment().minutes(Frequency);
     var date = new Date();
     var hours = ('0' + (((date.getHours() + 11) % 12) + 1));
     var minutes = ('0' + date.getMinutes()).slice(-2);
     var currentTime = hours + ":" + minutes;
     var nextArrival = firstTrainTime + timeConverter;
     var minutesAway = currentTime - nextArrival;
     
     console.log("FirstTrainTime: " + firstTrainTime, "Frequency: " + Frequency, "Next Arrival: " + nextArrival, "Minutes Away: " + minutesAway);
 }) 