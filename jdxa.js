


var player_one = 1;
//-------------------------------------------------------------------------------------------------------------------------

function display_input(square){
    if ( player_one == 1 ){
        if (document.getElementById(square).innerHTML == "X" ||document.getElementById(square).innerHTML == "O"){
            window.alert("Try another square");
            document.getElementById(square).innerHTML = "X";



            }
           else{

            fetchX(square);

            player_one = 0;
            checkWinner("case1","case2","case3")
            checkWinner("case4","case5","case6")
            checkWinner("case7","case8","case9")
            checkWinner("case1","case4","case7")
            checkWinner("case2","case5","case8")
            checkWinner("case3","case6","case9")
            checkWinner("case1","case5","case9")
            checkWinner("case3","case5","case7")



            }
    }


    else {
        if (checkO(square)||checkX(square) ){
             window.alert("Try another square");


                    }
        else{

            fetchO(square);


            player_one = 1;
            checkWinner("case1","case2","case3")
            checkWinner("case4","case5","case6")
            checkWinner("case7","case8","case9")
            checkWinner("case1","case4","case7")
            checkWinner("case2","case5","case8")
            checkWinner("case3","case6","case9")
            checkWinner("case1","case5","case9")
            checkWinner("case3","case5","case7")




            //var  champion1 = checkWinner("case1","case2","case3");
            //var champion2 = checkWinner("case4","case5","case6");
            //var champion3 = checkWinner("case7","case8","case9");

    //var overall_champ = champion1||champion2||champion3

//            var a, b, c;
//            c = 1;
//            var d = a || b || c;
                    }
            }


}

//--------------------------------WINNER CODE--------------------------------------------------------------------------
var winner ;
function checkWinner(c1,c2,c3){
    if (document.getElementById(c1).innerHTML == document.getElementById(c2).innerHTML &&
        document.getElementById(c2).innerHTML== document.getElementById(c3).innerHTML &&
         (document.getElementById(c1).innerHTML =="X" || document.getElementById(c1).innerHTML=="O")){

         winner = document.getElementById(c1).innerHTML;
         window.alert(winner+ " you are the winner")

            }

}
//----------------------------------Simplify fetching and equivalanece checking---------------------------------------------------------------

function fetchX(location){
    document.getElementById(location).innerHTML ="X"
    }

function checkX(location){
    document.getElementById(location).innerHTML =="X"
    }


function fetchO(location){
    document.getElementById(location).innerHTML ="O"
    }
function checkO(location){
    document.getElementById(location).innerHTML =="O"
    }
//--------------------------------------------------------------------------------------------------------------------------------

// function Grid() {
// this.gridSetup = ko.observableArray([
 // new row (null, null, null )
//   new row (null, null, null)
//   new row (null, null, null)
//    ])};

//ko.appkybindings (new Grid());

//------------------------------------------------------------------------------------

var Mut = new Array