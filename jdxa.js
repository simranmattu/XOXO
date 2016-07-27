


var player_one = 1;
//-------------------------------------------------------------------------------------------------------------------------
function display_input(square){
    if ( player_one == 1 ){
        if (document.getElementById(square).innerHTML == "X"||document.getElementById(square).innerHTML == "O"){
            window.alert("Try another square");
            document.getElementById(square).innerHTML = "X";


            }
           else{
            document.getElementById(square).innerHTML = "X";
            player_one = 0;
            checkWinner("case1","case2","case3")
            checkWinner("case4","case5","case6")
            checkWinner("case7","case8","case9")


            }
    }









    else {
        if (document.getElementById(square).innerHTML == "O"||document.getElementById(square).innerHTML == "X" ){
             window.alert("Try another square");
             document.getElementById(square).innerHTML = "O";

                    }
        else{
            document.getElementById(square).innerHTML = "O";
            player_one = 1;
            checkWinner("case1","case2","case3")
            checkWinner("case4","case5","case6")
            checkWinner("case7","case8","case9")

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
         document.getElementById(c1).innerHTML=="X" || document.getElementById(c1).innerHTML=="O"){

         winner = document.getElementById(c1).innerHTML;

            }

}
//-------------------------------------------------------------------------------------------------

