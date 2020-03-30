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
     var currentDetails = quiz[currentQuestion];
     document.getElementById("question").innerHTML=currentDetails.question;
        
        console.log(currentDetails) 
        //currentQuestion++
        for (var k=0; k<currentDetails.optionsAnswers.length;k++)
        {
            var option=currentDetails.optionsAnswers[k]
            var optionnode=document.createElement ("button");
            optionnode.addEventListener("click", function(){
                //console.log(this.textContent)
                //console.log(quiz[currentQuestion].answer);
                if (this.textContent==quiz[currentQuestion].answer){
                    console.log("correct");
                }
                else{
                    console.log("wrong")
                }

            
                //1 == 1 //true
                //1 == "1" //true
                //1 === "1" //false
            });
            var space = document.createElement("br");
            var optiontext = document.createTextNode(option);//<div>1</div>");
            optionnode.appendChild(optiontext);
            console.log(optionnode)
            document.getElementById("answer").appendChild(optionnode).appendChild(space);


        }
    
    
    
    });
    


    //quiz[i].question
    //console.log(currentquestion.question);
    
    // console.log(currentquestion.answer);
    // console.log(currentquestion.optionsAnswers);
    // 

    //for(var j=0; j<quiz.length;i++)












