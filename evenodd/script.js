$(document).ready(function(){
    $("#sbtbtn").click(function(){
    var n=$("#get").val();
    var msgTxt="";
    var sum=0;
    for(i=0 ;i<=n ;i++)
    {
        if($("#even").prop("checked") === true && i%2 == 0){
            msgTxt=msgTxt + i + "<br/>";
        }
        if($("#odd").prop("checked") === true && i%2 != 0 ){
            msgTxt=msgTxt + i +"<br/>";
        }
        if($("#natural").prop("checked") === true){
            sum = sum + i;
        }
    }
    $("#output").html(msgTxt);
    $("#output").html(sum);
    });
});