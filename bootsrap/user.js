$(document).ready(function(){ 
  
     getUserData();
});

var jsonUserData=[];

  function getUserData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => showUserData(data))
  }
  
  
  function showUserData(userData){
    jsonUserData=userData;
    var n="";
    for(i=0;i<userData.length;i++){
      n=n+
      `<div class="col-sm-4">
      <div class="userContainer" onClick="openPopUp(${i})">
        <div class="col-sm-8" >
          NAME:${userData[i].name}<br>Email:${userData[i].email}         
        </div>
        <div class="col-sm-4" >
          <img src="user.jpg" class="img-rounded" alt="Cinque Terre" width="60px">
        </div>
      </div>
    </div>`
  
    }
    $("#userContainer_id").html(n);
  }

  function openPopUp(index){
    $("#UserId").html(jsonUserData[index].id);
    $("#UserName").html(jsonUserData[index].username);
    $("#UserStreet").html(jsonUserData[index].address.street);
    $("#UserSuite").html(jsonUserData[index].address.suite);
    $("#UserCity").html(jsonUserData[index].address.city);
    $("#UserCode").html(jsonUserData[index].address.zipcode);
    $("#UserLat").html(jsonUserData[index].address.geo.lat);
    $("#UserLon").html(jsonUserData[index].address.geo.lng);
    $("#UserPhone").html(jsonUserData[index].phone);
    $("#UserWebsite").html(jsonUserData[index].website);
    $("#UserCompany").html(jsonUserData[index].company.name);
    $("#UserPhrase").html(jsonUserData[index].company.catchPhrase);
    $("#UserBs").html(jsonUserData[index].company.bs);
    $('#myModal').modal('show');
  }

  