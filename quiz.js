var quiz=[{
    question:"Where do Pitbulls come from?",
    answer:"England",
    optionsAnswers:["Turkey","England","USA"]
},
{
    question:"Did Pitbull serve in the Military?",
    answer:"true",
    optionsAnswers:["true","false"]

},
{
    question:"What Pitbull received the purple heart?",
    answer:"Sergeant Stubby",
    optionsAnswers:["Sergeant bully","Sergeant Stubby","seargeant chocolate"]

},
{
    question:"what nickmane did pitbulls have in the early 1900's?",
    answer:"Nanny Dogs",
    optionsAnswers:["Guard Dogs","Ruthless Dogs", "Nanny Dogs"]

},
{
    question:"how many States are Pitbulls banned in?",
    answer:"10",
    optionsAnswers:["5","10","8"]

},

];
var currentQuestion=0

    //console.log(quiz[i]);
    //current question
    var btnElement=document.querySelector("#btn");
    btnElement.addEventListener("click", function(){var timeOut=90
        var intervalId=setInterval(function(){
          
            document.getElementById("right").innerHTML=timeOut--
            if (timeOut==-1)
        
            clearInterval(intervalId)
         
        },1000);
        var questionElement=document.querySelector("#question")

     document.querySelector("#answer").innerHTML=""
     //Recursive function
    getQuestion(currentQuestion)
    });
    
    function getQuestion(currentQuestion) {
        var currentDetails = quiz[currentQuestion];
        document.getElementById("question").innerHTML=currentDetails.question;
        $("#answer").empty()
           for (var k=0; k<currentDetails.optionsAnswers.length;k++)
           {
               console.log("asldfk")
               var option=currentDetails.optionsAnswers[k]
               var optionnode=document.createElement("button");
               
               var space = document.createElement("br");
               var optiontext = document.createTextNode(option);//<div>1</div>");
               optionnode.appendChild(optiontext);
               document.getElementById("answer").appendChild(optionnode).appendChild(space);
               optionnode.addEventListener("click", function(){
                //console.log(this.textContent)
                //console.log(quiz[currentQuestion].answer);
                if (this.textContent==quiz[currentQuestion].answer){
                 $("#correcto").text("correct");
                 Scores++;
                 $("#scores").text(`Score so far: ${Scores}/5`);
                }
                else {
                    $("#correcto").text("wrong");
                }
                getQuestion(++currentQuestion)
                
            });
           }
     }
var Scores=0

    //quiz[i].question
    //console.log(currentquestion.question);
    
    // console.log(currentquestion.answer);
    // console.log(currentquestion.optionsAnswers);
    // 

    //for(var j=0; j<quiz.length;i++)












