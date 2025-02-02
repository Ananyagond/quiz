var right_ans = ["Blue whale","Vatian city","Gobi","Australia"];
c=0;
        function next_question()
        {
            reset();
            var id=document.getElementById("lblid").innerHTML;
            id=Number(id)+1;
            
            manage_div_visibility(id);
            document.getElementById("lblid").innerHTML=id;
            var ques =["1.What is the largest animal in the world?","2.What is the smallest country in the world?",
            "3.What is the smallest desert in the world?","4.What is the smallest continent in the world?"];
            var opt1 =["Shark","Vatian city","Kalahari","Asia"];
            var opt2 =["Blue whale","Nepal","Gobi","Australia"];
            var opt3 =["Elephant","Bhutan","Sahara","Arctic"];
            var opt4 =["Giraffe","Shri Lanka","Antarctica","Africa"];
            
            document.getElementById('queue').innerHTML=ques[id];
            document.getElementById('op1').innerHTML=opt1[id];
            document.getElementById('op2').innerHTML=opt2[id];
            document.getElementById('op3').innerHTML=opt3[id];
            document.getElementById('op4').innerHTML=opt4[id];
        }
        function checkanswer(clicked_id)
        {
            reset();
            
            var id=document.getElementById("lblid").innerHTML
            
            var clicked_option=document.getElementById(clicked_id).innerHTML
            
            if(clicked_option==right_ans[id]){
                if(right_ans[id]==document.getElementById('op1').innerHTML)
                    {
                        op1.style.backgroundColor = "green";
                        c++;
                    }
                else if(right_ans[id]==document.getElementById('op2').innerHTML)
                    {
                        op2.style.backgroundColor = "green";
                        c++;
                    }
                else if(right_ans[id]==document.getElementById('op3').innerHTML)
                    {
                    
                        op3.style.backgroundColor = "green";
                        c++;
                    }
                else if(right_ans[id]==document.getElementById('op4').innerHTML)
                   {
                        op4.style.backgroundColor = "green";
                        c++;
                   }
            console.log(c);
            }
            else{
                document.getElementById(clicked_id).style.backgroundColor = "red";
            }
            
        }
        function manage_div_visibility(id)
        {
            //div_que
            //div_result
            if(id==right_ans.length)
                {
                    document.getElementById("div_que").style.display = "none";
                    document.getElementById("div_result").style.display = "block";
                    showscore();
                }
            else{
                    document.getElementById("div_que").style.display = "block";
                    document.getElementById("div_result").style.display = "none";
            }    
            }
        function reset()
        {
            elements = document.getElementsByClassName('test');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor="antiquewhite";
                
               
               
            }
        }
        function showscore(){
            document.getElementById('score').innerHTML
            =`You scored ${c} out of ${right_ans.length}!`;
        }