$(document).ready(function() {

    $("#getBtn").click(function(){
        $("#house").html("");
        var houseData=$("#house").text()  +" <br />";


        if($(family).is(":checked") && $(veg).is(":checked")){
            houseData= houseData+"you can get house1<br></br>";           
       }
        if($(single).is(":checked") && $(veg).is(":checked")){
            houseData= houseData+"you can get house2";
        }
        if($(bachelor).is(":checked") && $(veg).is(":checked")){
            houseData= houseData+"you can get house3";
        }
        if($(family).is(":checked")){
            houseData= houseData+"you can get house4";
        }
        if($(single).is(":checked")){
            houseData= houseData+"you can get house5";
        }
        if($(bachelor).is(":checked")){
            houseData= houseData+"you can get house6";
        }
        
        $("#house").html(houseData);
        
    });
});

