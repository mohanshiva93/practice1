$(document).ready(function(){   

    $("#submitBtn").click(function(){
        var totalMarks= getTotalMarks();
        alert(totalMarks);
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