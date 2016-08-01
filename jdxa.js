
var player_one = 1;
//-------------------------------------------------------------------------------------------------------------------------
//
//function display_input(square){
//    if ( player_one == 1 ){
//        if (document.getElementById(square).innerHTML == "X" ||document.getElementById(square).innerHTML == "O"){
//            window.alert("Try another square");
//            document.getElementById(square).innerHTML = "X";
//
//
//
//            }
//           else{
//
//            fetchX(square);
//
//            player_one = 0;
//            checkWinner("case1","case2","case3")
//            checkWinner("case4","case5","case6")
//            checkWinner("case7","case8","case9")
//            checkWinner("case1","case4","case7")
//            checkWinner("case2","case5","case8")
//            checkWinner("case3","case6","case9")
//            checkWinner("case1","case5","case9")
//            checkWinner("case3","case5","case7")
//
//
//
//            }
//    }
//
//
//    else {
//        if (checkO(square)||checkX(square) ){
//             window.alert("Try another square");
//
//
//                    }
//        else{
//
//            fetchO(square);
//
//
//            player_one = 1;
//            checkWinner("case1","case2","case3")
//            checkWinner("case4","case5","case6")
//            checkWinner("case7","case8","case9")
//            checkWinner("case1","case4","case7")
//            checkWinner("case2","case5","case8")
//            checkWinner("case3","case6","case9")
//            checkWinner("case1","case5","case9")
//            checkWinner("case3","case5","case7")
//
//
//
//
//            //var  champion1 = checkWinner("case1","case2","case3");
//            //var champion2 = checkWinner("case4","case5","case6");
//            //var champion3 = checkWinner("case7","case8","case9");

    //var overall_champ = champion1||champion2||champion3

//            var a, b, c;
//            c = 1;
//            var d = a || b || c;
//                    }
//            }
//
//
//}

//--------------------------------WINNER CODE--------------------------------------------------------------------------


//----------------------------------Simplify fetching and equivalence checking---------------------------------------------------------------

function fetchX(location){
    document.getElementById(location).innerHTML ="X"
    }

function checkX(location){
    return document.getElementById(location).innerHTML =="X"

    }

function fetchO(location){
    document.getElementById(location).innerHTML ="O"
    }
function checkO(location){
    return document.getElementById(location).innerHTML =="O"

    }

//---------------------------------------------------------------------------------------------------------------------------


//function Grid() {
//    this.gridSetup = ko.observableArray([
//      ko.observableArray(["X", "", "O"]),
//      ko.observableArray(["X", "O", ""]),
//      ko.observableArray(["O", "", ""])
//     ]);
//     }



function MyViewModel(){

console.log('Called MyViewModel')

    var self = this;
    self.gridSetup = ko.observableArray([
    ko.observableArray([new MyViewModel_Cell(),new MyViewModel_Cell(),new MyViewModel_Cell()]),
    ko.observableArray([new MyViewModel_Cell(),new MyViewModel_Cell() ,new MyViewModel_Cell() ]),
    ko.observableArray([new MyViewModel_Cell(), new MyViewModel_Cell(), new MyViewModel_Cell()])
                ]);
    self.count = 0


    //this.gridSetup
    //console.log(this.gridSetup())
    this.gridSetup().forEach(function (items) {
        console.log(items())
    })
    }





// //function display_input(square){
   //    if ( player_one == 1 ){
   //        if (document.getElementById(square).innerHTML == "X" ||document.getElementById(square).innerHTML == "O"){
   //            window.alert("Try another square");
   //            document.getElementById(square).innerHTML = "X";

function MyViewModel_Cell(){

    var self = this;
    console.log('Called MyViewModel_Cell')

    self.userEntry = ko.observable('')

    this.updateGrid = function(location){


//console.log('B')
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
                   window.alert(winner+ " you are the winner")

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
                window.alert(winner+ " you are the winner")

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
                window.alert(winner+ " you are the winner")

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
                    window.alert(winner+ " you are the winner")

                                           }
                else if (window.grid.count == 9 && (winner!== "X" || winner != "O")){

                                      window.alert("LOL it is a draw")
                                              }
                     }

}







window.grid = new MyViewModel();
//function convertToObservable(gridSetup)
//{
//    var newList = [];
//    $.each(gridSetup, function (i, obj) {
//        var newObj = {};
 //       Object.keys(obj).forEach(function (key) {
 //           newObj[key] = ko.observable(obj[key]);
//        });
//        newList.push(newObj);
//    });
//    return newList;

//
//function updateGridX(){
ko.applyBindings(window.grid);

// works ------ko.applyBindings(new window.grid);