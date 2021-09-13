$(document).ready(function(){
  $("#sub").click(function(){
   
    var n=$("#count").val();
    var msgTxt="";
 
    for(i=0 ;i<n ;i++)
    {
     msgTxt=msgTxt+" welcome <br/>";
      
    }
    $("#msg").html(msgTxt);
  });
  $("#clr").click(function(){
    $(".output").hide();
   });
   
  });  