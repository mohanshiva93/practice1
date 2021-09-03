$(document).ready(function() {

    $("#gradeBtn").click(function(){
       var percentage= parseInt($("#grade").val());
        if(  percentage>=90){
            $("#your_grade").text("A");
        }
        else if(percentage >=80){
            $("#your_grade").text("B");
        }
        else if(percentage >=70){
            $("#your_grade").text("C");   
        }
        else if(percentage >=60){
            $("#your_grade").text("D");
        }
        else if(percentage >=0){
            $("#your_grade").text("E");
        }        
        else if(isNaN(percentage)){
            $("#your_grade").text("PLEASE ENTER THE VALUE");
        }

    
})
})