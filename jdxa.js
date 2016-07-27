


var player_one = 1;
//-------------------------------------------------------------------------------------------------------------------------
function display_input(square){
    if ( player_one == 1 ){
        if (document.getElementById(square).innerHTML == "X"||document.getElementById(square).innerHTML == "O"){
            window.alert("Try another square");
            document.getElementById(square).innerHTML = "X";
            checkWinner()
            }
           else{
            document.getElementById(square).innerHTML = "X";
        player_one = 0;
            checkWinner()
            }
    }









    else {
        if (document.getElementById(square).innerHTML == "O"||document.getElementById(square).innerHTML == "X" ){
             window.alert("Try another square");
             document.getElementById(square).innerHTML = "0";

                    }
        else{
            document.getElementById(square).innerHTML = "O";
        player_one = 1;
                    }
            }


}

//--------------------------------WINNER CODE--------------------------------------------------------------------------

function checkWinner(){
    if (document.getElementById("case1").innerHTML == document.getElementById("case2").innerHTML && document.getElementById("case2").innerHTML== document.getElementById("case3").innerHTML){

         var winner = document.getElementById("case1").innerHTML;
         window.alert("Well done player"+winner+ "is the winner " );
            }
    else{
            window.alert("You are not the winner"+ winner);//
            }

}
//-------------------------------------------------------------------------------------------------

