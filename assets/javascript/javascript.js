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

 
 $("#submitBtn").on("click", function(event){
     event.preventDefault();

     var trainName = $("#trainName").val().trim();
     var destination = $("#destination").val().trim();
     var firstTime = moment($("#firstTraintime").val().trim(), "hh:mm").format("X");
     var Frequency = $("#Frequency").val().trim();

     var newTrain = {
       name: trainName,
       Destination: destination,
       frequency: Frequency,
       first_train_time: firstTime,
      };
      
      database.ref().push(newTrain);
      
      console.log(firstTime);
      console.log(Frequency);
      
      $("#trainName").val("");
      $("#destination").val("");
      $("#Frequency").val("");
      $("#firstTraintime").val("");
    });
    
    database.ref().on("child_added", function(childSnapshot){

      var newTrainName = childSnapshot.val().name;
      var trainDestination = childSnapshot.val().Destination;
      var trainFirstTime = childSnapshot.val().first_train_time;
      var trainFrequency = childSnapshot.val().frequency;

      console.log(newTrainName);
      console.log(trainDestination);
      console.log(moment(trainFirstTime, "X").format("hh:mm"));
      console.log(trainFrequency);

      
      var trainTimeConverted =  moment(trainFirstTime, "X");
      console.log(trainTimeConverted);
      var diffTime = moment(trainTimeConverted).diff(moment());
      console.log("Difference in Time: " + moment(diffTime, "X").format("hh:mm"));
      var tRemainder = diffTime % trainFrequency;
      var minutesAway = trainFrequency - tRemainder;
      var nextArrival = moment().add(minutesAway, "minutes");
      console.log("Arrival time: " + moment(nextArrival).format("hh:mm"));
      console.log(tRemainder);
      console.log("Minutes until Train: " + minutesAway)
 

   var newRow = $("<tr>").append(
     $("<td>").text(newTrainName),
     $("<td>").text(trainDestination),
     $("<td>").text(trainFrequency),
     $("<td>").text(moment(nextArrival).format("hh:mm")),
     $("<td>").text(minutesAway),
   );
   $("#trainTable").append(newRow);
 });