angular
.module('tictacapp')
.controller('TicTacToeController', TicTacToeController);

TicTacToeController.$inject = ['$scope','$firebaseObject', '$firebaseArray'];

function TicTacToeController($scope, $firebaseObject, $firebaseArray){
	// capture variable
var self = this;
self.player = 1;



  var ref = new Firebase("https://tictactoe-jit.firebaseio.com/players"); //players is related with firebase object

  self.playerArray = $firebaseObject(ref);

// Game Object Properties
self.playerArray.board = ["","","","","","","","",""];
self.playerArray.$save();






//Game logic with +1 and - 1 player var is moving

  self.clickBtn= function(btn){

    if (self.player == 1 ) {
      self.playerArray.board[btn]= "X";
      self.player +=1;
      self.playerArray.$save(); //saving data in firebase
      winner("X");

    } else{
      self.playerArray.board[btn]= "O";

      self.player -=1;

      self.playerArray.$save(); //saving data in firebase
      winner("O");
}

  };
  function winner(player){
    if (
      self.playerArray.board[0] ==player &&
      self.playerArray.board[1] ==player &&
      self.playerArray.board[2] ==player ||
      self.playerArray.board[3] ==player &&
      self.playerArray.board[4] ==player &&
      self.playerArray.board[5] ==player ||
      self.playerArray.board[6] ==player &&
      self.playerArray.board[7] ==player &&
      self.playerArray.board[8] ==player ||
      self.playerArray.board[0] ==player &&
      self.playerArray.board[3] ==player &&
      self.playerArray.board[6] ==player ||
      self.playerArray.board[1] ==player &&
      self.playerArray.board[4] ==player &&
      self.playerArray.board[7] ==player ||
      self.playerArray.board[2] ==player &&
      self.playerArray.board[5] ==player &&
      self.playerArray.board[8] ==player ||
      self.playerArray.board[0] ==player &&
      self.playerArray.board[4] ==player &&
      self.playerArray.board[8] ==player ||
      self.playerArray.board[2] ==player &&
      self.playerArray.board[4] ==player &&
      self.playerArray.board[6] ==player
      ){
     self.playerArray.board =["","","","","","","",""]; //reset previous data as null
     self.playerArray.$save();

        document.getElementById('xyz').play(); //one sound clip is playing when alert triggers
        alert(player+" you are the winner Your account has been Credited ");

// self.clearBoard=function(){
//   for (i=0; i<self.playerArray.board.length ;  i ++){
//     self.playerArray.board[i] = null;
//   }
//   self.playerArray.$save();
// };
}

}

}

