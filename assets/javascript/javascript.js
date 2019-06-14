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

 
 $("#submitBtn").on("click", function(event){
     event.preventDefault();

     var trainName = $("#trainName").val().trim();
     var destination = $("#destination").val().trim();
     var firstTime = $(("#militaryTime")).val().trim();
     var firstTrainTime =  moment(firstTime, "HH:mm");
     var diffTime = moment().diff(moment(firstTrainTime), "minutes");
     var Frequency = $("#Frequency").val().trim();
     var tRemainder = diffTime % Frequency;
     var nextArrival = moment().add(minutesAway, "minutes");
     var minutesAway = Frequency - tRemainder;
     
     var newTrain = {
       name: trainName,
       destination: destination,
       frequency: Frequency,
       nextTrain: nextArrival,
       minutesAway: minutesAway
     };

     database.ref().push(newTrain);

     $("#trainName".val(""))
 }) 