//------------------------------FIREBASE------------------------------------------------------------

var myFirebaseRef = new Firebase("https://softwireworkexpxo.firebaseio.com/");



var player_one = 1;
//-------------------------------------------------------------------------------------------------------------------------


function MyViewModel(gridData){

    var self = this;
    self.gridSetup = ko.observableArray([
    ko.observableArray([new MyViewModel_Cell(window.gridData.GameInProgress1.row1.substring(0,1)),new MyViewModel_Cell(window.gridData.GameInProgress1.row1.substring(2,3)),new MyViewModel_Cell(window.gridData.GameInProgress1.row1.substring(4,5))]),
    ko.observableArray([new MyViewModel_Cell(window.gridData.GameInProgress1.row2.substring(0,1)),new MyViewModel_Cell(window.gridData.GameInProgress1.row2.substring(2,3)) ,new MyViewModel_Cell(window.gridData.GameInProgress1.row2.substring(4,5))]),
    ko.observableArray([new MyViewModel_Cell(window.gridData.GameInProgress1.row3.substring(0,1)), new MyViewModel_Cell(window.gridData.GameInProgress1.row3.substring(2,3)), new MyViewModel_Cell(window.gridData.GameInProgress1.row3.substring(4,5))])
                ]);
    self.count = 0

    this.gridSetup().forEach(function (items) {
//        console.log(items())
    })
    }

//    function getGameData (game,c1,c2){
//
//
//
//        }
//

function MyViewModel_Cell(value){

    var self = this;
    self.userEntry = ko.observable(value)
    this.updateGrid = function(location){


        if (player_one == 1){
            if (userEntryCheckX() || userEntryCheckO()) {
                window.alert("Try another square!");
            }


            else {
                self.userEntry('0');

                // message when the data has finished synchronizing.
                // Same as the previous example, except we will also display an alert
                // message when the data has finished synchronizing.
                var onComplete = function(error) {
                  if (error) {
                    console.log('Synchronization failed');
                  } else {
                    console.log('Synchronization succeeded');
                  }
                };

                myFirebaseRef.update({ GameInProgress1: { row1: window.grid.gridSetup()[0]()[0].userEntry()+"," + window.grid.gridSetup()[0]()[1].userEntry()+"," +window.grid.gridSetup()[0]()[2].userEntry(),
                                                         row2: window.grid.gridSetup()[1]()[0].userEntry()+","+window.grid.gridSetup()[1]()[1].userEntry()+","+window.grid.gridSetup()[1]()[2].userEntry(),
                                                         row3: window.grid.gridSetup()[2]()[0].userEntry()+","+window.grid.gridSetup()[2]()[1].userEntry()+","+window.grid.gridSetup()[2]()[2].userEntry()  }});





                window.grid.count+=1
                player_one=0
                checkWinnerHorizontal(0,0,1,2)
                checkWinnerHorizontal(1,0,1,2)
                checkWinnerHorizontal(2,0,1,2)
                checkWinnerVertical(0,1,2,0)
                checkWinnerVertical(0,1,2,1)
                checkWinnerVertical(0,1,2,2)
                checkWinnerDiagonal1()
                checkDiagonal2()
            }
        }


        else {
            if(userEntryCheckX() || userEntryCheckO()) {
                window.alert("Try another square!");
            }

            else {
                self.userEntry('X');

                var onComplete = function(error) {
                                  if (error) {
                                    console.log('Synchronization failed');
                                  } else {
                                    console.log('Synchronization succeeded');
                                  }
                                };
                myFirebaseRef.update({ GameInProgress1: { row1: window.grid.gridSetup()[0]()[0].userEntry()+"," + window.grid.gridSetup()[0]()[1].userEntry()+"," +window.grid.gridSetup()[0]()[2].userEntry(),
                                                           row2: window.grid.gridSetup()[1]()[0].userEntry()+","+window.grid.gridSetup()[1]()[1].userEntry()+","+window.grid.gridSetup()[1]()[2].userEntry(),
                                                           row3: window.grid.gridSetup()[2]()[0].userEntry()+","+window.grid.gridSetup()[2]()[1].userEntry()+","+window.grid.gridSetup()[2]()[2].userEntry()  }});


                window.grid.count+=1
                player_one=1
                checkWinnerHorizontal(0,0,1,2)
                checkWinnerHorizontal(1,0,1,2)
                checkWinnerHorizontal(2,0,1,2)
                checkWinnerVertical(0,1,2,0)
                checkWinnerVertical(0,1,2,1)
                checkWinnerVertical(0,1,2,2)
                checkWinnerDiagonal1()
                checkDiagonal2()


             }
        }
    }
    function userEntryCheckX(){
         return self.userEntry() == "X"
         }
         function userEntryCheckO(){
              return self.userEntry() == "0"
              }
      var winner ;
          function checkWinnerHorizontal(row,p1,p2,p3){
              if (window.grid.gridSetup()[row]()[p1].userEntry() == window.grid.gridSetup()[row]()[p2].userEntry() &&
                  window.grid.gridSetup()[row]()[p2].userEntry() == window.grid.gridSetup()[row]()[p3].userEntry()&&
                   (window.grid.gridSetup()[row]()[p1].userEntry() == 'X' || window.grid.gridSetup()[row]()[p1].userEntry() == '0')){

                   winner = window.grid.gridSetup()[row]()[row].userEntry() ;
                   window.alert("Congratulations player "+winner+ " you are the winner")

                      }

              else if (window.grid.count == 9 && (winner!== "X" || winner != "0")){

                      window.alert("LOL it is a draw")
                              }
               }

          function checkWinnerVertical(row1,row2,row3,p){
              if (window.grid.gridSetup()[row1]()[p].userEntry() == window.grid.gridSetup()[row2]()[p].userEntry() &&
                window.grid.gridSetup()[row2]()[p].userEntry() == window.grid.gridSetup()[row3]()[p].userEntry()&&
                (window.grid.gridSetup()[row1]()[p].userEntry() == 'X' || window.grid.gridSetup()[row1]()[p].userEntry() == '0')){

                winner = window.grid.gridSetup()[row1]()[p].userEntry() ;
                window.alert("Congratulations player "+winner+ " you are the winner")

                                }

              else if (window.grid.count == 9 && (winner!== "X" || winner != "0")){

                                            window.alert("LOL it is a draw")
                                                    }
              }

           function checkWinnerDiagonal1(){

            if (window.grid.gridSetup()[0]()[0].userEntry() == window.grid.gridSetup()[1]()[1].userEntry() &&
                window.grid.gridSetup()[1]()[1].userEntry() == window.grid.gridSetup()[2]()[2].userEntry()&&
                (window.grid.gridSetup()[0]()[0].userEntry() == 'X' || window.grid.gridSetup()[0]()[0].userEntry() == '0')){
                winner = window.grid.gridSetup()[0]()[0].userEntry() ;
                window.alert("Congratulations player "+winner+ " you are the winner")

                                          }
            else if (window.grid.count == 9 && (winner!== "X" || winner != "0")){

                                  window.alert("LOL it is a draw")
                                          }
                    }
            function checkDiagonal2(){
                if (window.grid.gridSetup()[0]()[2].userEntry() == window.grid.gridSetup()[1]()[1].userEntry() &&
                    window.grid.gridSetup()[1]()[1].userEntry() == window.grid.gridSetup()[2]()[0].userEntry()&&
                    (window.grid.gridSetup()[0]()[2].userEntry() == 'X' || window.grid.gridSetup()[0]()[2].userEntry() == '0')){
                    winner = window.grid.gridSetup()[0]()[2].userEntry() ;
                    window.alert("Congratulations player "+winner+ " you are the winner")

                                           }
                else if (window.grid.count == 9 && (winner!== "X" || winner != "0")){

                                      window.alert("LOL it is a draw")
                                              }
                     }

}


myFirebaseRef.authWithCustomToken("y15j1bOZQnQkp2xUUMSMpKePjFYgdmU5x5xHnEXH", function(error, authData) {
  if (error) {
    console.log("Authentication Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

// Attach an asynchronous callback to read the data at our posts reference
myFirebaseRef.on("value", firebaseCallFinished, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function firebaseCallFinished (snapshot) {
    if (!window.grid){
    var gridData = snapshot.val()

  window.gridData = gridData
  console.log(gridData);

  window.grid = new MyViewModel();
  ko.applyBindings(window.grid);
}
}



//-------------------------------------------------------------------------------------------------------

