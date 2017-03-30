var position = 0 , test , test_status, question, choice, choices, chA, chB, chC, correct = 0 ;
var questions = [
        
        ["what is 10 + 4" , "12" , "14" ,"16", "B"],
        ["what is 10 + 8" , "12" , "14" ,"18", "C"],
        ["what is 10 + 10" , "20" , "14" ,"16", "A"],
        ["what is 4 + 4" , "12" , "14" ,"8", "C"]
    
];
function saad(x) {
    return document.getElementById(x);
}

    
 function renderQuestion() {
     
     test = saad("test");
     saad("test_status").innerHTML = "sawal" +(position+1)+   "" +  "of"  + "" +  +questions.length;
     if (position >= questions.length) {
         
         test.innerHTML = "<h2> you got  "+correct+" of "  +questions.length+" question correct    </h2>" ;
     }
     


     question = questions[position][0];
     chA = questions[position][1];
     chB = questions[position][2];
     chC = questions[position][3];
     
     test.innerHTML = "<h3>"+question+"<h3>";
     
     test.innerHTML += "<input type='radio' name='choices' value='A' >" +chA+ "<br>";
     test.innerHTML += "<input type='radio' name='choices' value='B' >" +chB+ "<br>";
     test.innerHTML += "<input type='radio' name='choices' value='C' >" +chC+ "<br><br>";
     
     test.innerHTML += "<button  onclick='checkAnswer()' >SUBMIT ANSWER</button>";
      
 }
 
 function checkAnswer() {
        choices = document.getElementsByName("choices");
        for (var i = 0; i < choices.length; i++) {
            if(choices[i].checked){
                choice = choices[i].value;
            }
            
        }
        if (choice == question[position][4]) {
            correct++;
        }
        position++;
        renderQuestion();
 }
 window.addEventListener("load",renderQuestion, false );    