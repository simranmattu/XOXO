//----------------------FIREBASE-------------------------------------------------------------


var player_one = 1;
//-------------------------------------------------------------------------------------------------------------------------


function MyViewModel(){

    var self = this;
    self.gridSetup = ko.observableArray([
    ko.observableArray([new MyViewModel_Cell(),new MyViewModel_Cell(),new MyViewModel_Cell()]),
    ko.observableArray([new MyViewModel_Cell(),new MyViewModel_Cell() ,new MyViewModel_Cell() ]),
    ko.observableArray([new MyViewModel_Cell(), new MyViewModel_Cell(), new MyViewModel_Cell()])
                ]);
    self.count = 0

    this.gridSetup().forEach(function (items) {
        console.log(items())
    })
    }

function MyViewModel_Cell(){

    var self = this;
    self.userEntry = ko.observable('')
    this.updateGrid = function(location){


        if (player_one == 1){
            if (userEntryCheckX() || userEntryCheckO()) {
                window.alert("Try another square!");
            }


            else {
                self.userEntry('O');
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
              return self.userEntry() == "O"
              }
      var winner ;
          function checkWinnerHorizontal(row,p1,p2,p3){
              if (window.grid.gridSetup()[row]()[p1].userEntry() == window.grid.gridSetup()[row]()[p2].userEntry() &&
                  window.grid.gridSetup()[row]()[p2].userEntry() == window.grid.gridSetup()[row]()[p3].userEntry()&&
                   (window.grid.gridSetup()[row]()[p1].userEntry() == 'X' || window.grid.gridSetup()[row]()[p1].userEntry() == 'O')){

                   winner = window.grid.gridSetup()[row]()[row].userEntry() ;
                   window.alert("Congratulations player "+winner+ " you are the winner")

                      }

              else if (window.grid.count == 9 && (winner!== "X" || winner != "O")){

                      window.alert("LOL it is a draw")
                              }
               }

          function checkWinnerVertical(row1,row2,row3,p){
              if (window.grid.gridSetup()[row1]()[p].userEntry() == window.grid.gridSetup()[row2]()[p].userEntry() &&
                window.grid.gridSetup()[row2]()[p].userEntry() == window.grid.gridSetup()[row3]()[p].userEntry()&&
                (window.grid.gridSetup()[row1]()[p].userEntry() == 'X' || window.grid.gridSetup()[row1]()[p].userEntry() == 'O')){

                winner = window.grid.gridSetup()[row1]()[p].userEntry() ;
                window.alert("Congratulations player "+winner+ " you are the winner")

                                }

              else if (window.grid.count == 9 && (winner!== "X" || winner != "O")){

                                            window.alert("LOL it is a draw")
                                                    }
              }

           function checkWinnerDiagonal1(){

            if (window.grid.gridSetup()[0]()[0].userEntry() == window.grid.gridSetup()[1]()[1].userEntry() &&
                window.grid.gridSetup()[1]()[1].userEntry() == window.grid.gridSetup()[2]()[2].userEntry()&&
                (window.grid.gridSetup()[0]()[0].userEntry() == 'X' || window.grid.gridSetup()[0]()[0].userEntry() == 'O')){
                winner = window.grid.gridSetup()[0]()[0].userEntry() ;
                window.alert("Congratulations player "+winner+ " you are the winner")

                                          }
            else if (window.grid.count == 9 && (winner!== "X" || winner != "O")){

                                  window.alert("LOL it is a draw")
                                          }
                    }
            function checkDiagonal2(){
                if (window.grid.gridSetup()[0]()[2].userEntry() == window.grid.gridSetup()[1]()[1].userEntry() &&
                    window.grid.gridSetup()[1]()[1].userEntry() == window.grid.gridSetup()[2]()[0].userEntry()&&
                    (window.grid.gridSetup()[0]()[2].userEntry() == 'X' || window.grid.gridSetup()[0]()[2].userEntry() == 'O')){
                    winner = window.grid.gridSetup()[0]()[2].userEntry() ;
                    window.alert("Congratulations player "+winner+ " you are the winner")

                                           }
                else if (window.grid.count == 9 && (winner!== "X" || winner != "O")){

                                      window.alert("LOL it is a draw")
                                              }
                     }
            function get(){
                window.grid.gridSetup()
                }

}

window.grid = new MyViewModel();

ko.applyBindings(window.grid);
//-------------------------------------------------------------------------------------------------------
var myFirebaseRef = new Firebase("https://softwireworkexpxo.firebaseio.com/");


myFirebaseRef.on("value", function(snapshot) {
    for (x in snapshot.val()) {

        var xmyFirebaseRef = new Firebase("https://softwireworkexpxo.firebaseio.com/"+x+"/");
        xmyFirebaseRef.once("value", function(xsnapshot) {
            var data = xsnapshot.val();
            var name = data["name"];
            console.log(name);
        }
        );
    }
}
,function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


