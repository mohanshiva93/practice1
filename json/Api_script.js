$(document).ready(function(){ 
  $("#btn").click(function(){
   getUserData();

function getUserData(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => showUserData(data))
}


function showUserData(userData){
  var n="";
  for(i=0;i<userData.length;i++){
    n=n+"<div class='userContainer'></hr></br>"+ "Name: "+ userData[i].name+
    "</br>"+ "ID: "+userData[i].id+
    "</br>"+"Username:"+userData[i].username+
    "</br>"+"Email:"+userData[i].email+
    "</br>"+"Address:"+userData[i].address.street+","+
    "</br>"+userData[i].address.suite+","+
    "</br>"+userData[i].address.city+","+
    "</br>"+userData[i].address.zipcode+","+
    "</br>"+"lattitude:"+userData[i].address.geo.lat+","+
    "</br>"+"longitude:"+userData[i].address.geo.lng+","+
    "</br>"+"Phone:"+userData[i].phone+","+
    "</br>"+"Website:"+userData[i].website+","+
    "</br>"+"Company name:"+userData[i].company.name+","+
    "</br>"+"Company Type:"+userData[i].company.catchPhrase+","+
    "</br>"+"Business Strategy:"+userData[i].company.bs
    
    +"</div>"

  }
  $("#getData").html(n);
}
});
});