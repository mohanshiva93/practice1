$(document).ready(function(){ 

    $("#submitBtn").click(function(){
      $(".container2").show();
      $("#display_name").text($("#name").val());
      $("#display_surname").text($("#surname").val());
      
      if($("#male").prop("checked") === true ){
        $("#display_gender").text("male");  
       }

      else if($("#female").prop("checked") === true ){
        $("#display_gender").text("female");
      }
      if( parseInt($("#age").val()) < 18){
      $("#display_age").text("you are minor");  
      }
      else if(parseInt($("#age").val())>=18){
        $("#display_age").text("you are major");  
      }
       var totalMarks= getTotalMarks();
      $("#display_total").text(totalMarks);
      $("#display_percent").text(totalMarks/6 +"%");
      $("#clearBtn").click(function(){
        $(".container2").hide();
       });
      });

      
  });
  
  
  function getTotalMarks(){
    var subject1=$("#subject1").val();
    var subject2=$("#subject2").val();
    var subject3=$("#subject3").val();
    var subject4=$("#subject4").val();
    var subject5=$("#subject5").val();
    var subject6=$("#subject6").val();
    var total=parseInt(subject1)+parseInt(subject2)+parseInt(subject3)+parseInt(subject4)+parseInt(subject5)+parseInt(subject6);
    
    return total;    
  }
  