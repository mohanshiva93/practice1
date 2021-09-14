$(document).ready(function(){
  $("#Sum_of_N_numbers").click(function(){
    var n= $("#textData").val();
    var sum=0;
    for(i=0 ;i<=n ;i++)
    { 
        sum = sum + i;
    }
    alert (sum);
  });
  $("#Cube_of_N_numbers").click(function(){
    var x = $("#textData").val();
    var cube=0;
    for(i=0; i<=x; i++)
    {
    cube= i * i * i ;
    console.log("the cube of number "+ i +" is: "+ cube);
    }
  });
    $("#Multiple_of_N_numbers").click(function(){
      var m = $("#textData").val();
      var multiple=0;
      for(i=0; i<=10; i++)
      {
        multiple = m * i;
        console.log(m+"*"+ i +"="+ multiple);
      }
    });
    $("#Factorial_of_N_numbers").click(function(){ 
      var f=$("#textData").val();
      var factorial = 1;
      for(i=1; i<=f; i++)
      {
        factorial = factorial * i;
      }
      console.log(factorial);
    });

    $("#Prime_of_N_numbers").click(function(){ 
      var p=$("#textData").val();
      var isPrime = true;
      for(i=2; i<p; i++)
      {
        if(p % i == 0)
        {
          isPrime = false;
        }
      }
      if(isPrime == true){
        console.log("it is a prime number");
        }
        else
        console.log("it is not a prime number");
    });
    $("#even_numbers").click(function(){ 
      var e=$("#textData").val();
      var add=0;
      for(i=0; i<=e; i++)
      {
        if(e%2 == 0){
          console.log("it is an even number");
        }
        else 
        console.log("it is not an odd number");
      }
     
    });
    $("#pyramid").click(function(){
      var py=$("#textData").val();
      
      for(i=0; i<=py; i++)
      {
        var mid="";
        for(j=0; j<i; j++)
        {
          mid= mid+i;
        }
        
        console.log(mid);
      }
      
    });
  });  