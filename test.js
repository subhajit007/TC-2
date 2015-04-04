window.onload = function(){
    var html5_audiotypes={ //defining audio file extensions and their associated audio types.
    "mp3": "audio/mpeg",
    }

function createsoundbite(sound){

    var html5audio=document.createElement('audio')

    if (html5audio.canPlayType){ //check support for HTML5 audio

        for (var i=0; i<arguments.length; i++){
            var sourceel=document.createElement('source')
            sourceel.setAttribute('src', arguments[i])

            if (arguments[i].match(/\.(\w+)$/i))
                sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
            html5audio.appendChild(sourceel)
        }

        html5audio.load()
        html5audio.playclip=function(){
            html5audio.pause()
            html5audio.currentTime=0
            html5audio.play()
        }
        return html5audio
    }
    else{
        return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
    }
}

// sound clips

var coins=createsoundbite( "CLICKTIC.mp3")
console.log(document.getElementsByClassName('btn'));
    var btn = document.getElementsByClassName('btn');

    for(i=0; i < btn.length; i++)
    {
        console.log(btn[i]);
        btn[i].addEventListener('click', function(){
            console.log('clickedButton');
            coins.playclip();
        });
    }

}

// creating palyer and function which will take value from btn id and the game logic goes on from here
var player = 1;

function clickBtn(btn){
    if (player==1)
    {
    document.getElementById(btn).value= "X";
    document.getElementById(btn).disabled ="disabled";
    player +=1;
    winner();
    } else
            {
    document.getElementById(btn).value= "0";
    document.getElementById(btn).disabled="disabled";
    player -=1;
    winner();
                    }
}

function winner(){
    if (
        document.getElementById("btn1").value =="X" &&
        document.getElementById("btn2").value =="X" &&
        document.getElementById("btn3").value =="X" ||
        document.getElementById("btn4").value =="X" &&
        document.getElementById("btn5").value =="X" &&
        document.getElementById("btn6").value =="X" ||
        document.getElementById("btn7").value =="X" &&
        document.getElementById("btn8").value =="X" &&
        document.getElementById("btn9").value =="X" ||
        document.getElementById("btn1").value =="X" &&
        document.getElementById("btn4").value =="X" &&
        document.getElementById("btn7").value =="X" ||
        document.getElementById("btn2").value =="X" &&
        document.getElementById("btn5").value =="X" &&
        document.getElementById("btn8").value =="X" ||
        document.getElementById("btn3").value =="X" &&
        document.getElementById("btn6").value =="X" &&
        document.getElementById("btn9").value =="X" ||
        document.getElementById("btn1").value =="X" &&
        document.getElementById("btn5").value =="X" &&
        document.getElementById("btn9").value =="X" ||
        document.getElementById("btn3").value =="X" &&
        document.getElementById("btn5").value =="X" &&
        document.getElementById("btn7").value =="X"
){
        document.getElementById('xyz').play(); //one sound clip is playing when alert triggers
        alert("X you are the winner Your account has been Credited ");
        reset(); //game is going to reset for a new session

    }
}
 function reset(){
    console.log('hello');
        document.getElementById("btn1").value == " ";
        document.getElementById("btn2").value == " ";
        document.getElementById("btn3").value == " ";
        document.getElementById("btn4").value == " ";
        document.getElementById("btn5").value == " ";
        document.getElementById("btn6").value == " ";
        document.getElementById("btn7").value == " ";
        document.getElementById("btn8").value == " ";
        document.getElementById("btn9").value == " ";
}