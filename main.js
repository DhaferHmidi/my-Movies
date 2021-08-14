function verif(){
    var pass=document.getElementById('pass').value;
    var user=document.getElementById('username').value;
    var pattsym=/[^a-zA-Z0-9]/;
    var patt=/[a-z]/;
    var patt2=/[A-Z]/;
    var patt3=/[0-9]/; 
 
    if(pattsym.test(pass)&&pass.length>=8) { 
        localStorage.setItem(user,pass);
       window.location.assign('file:///C:/Users/Dhafer%20Hmidi/Desktop/movies/my-Movies/index2.html');
    }
        else{
            alert("please check info");
        }
}
function verifLogIn(){
    var email = document.getElementById('emails').value
    var pass=document.getElementById('pass').value;
    var username=document.getElementById('username').value;
    var pswd=localStorage.getItem(username);
    var pate= /@/
    console.log(pate.test(email))
    if(pswd===pass&& pate.test(email)){
       window.location.assign('file:///C:/Users/Dhafer%20Hmidi/Desktop/movies/my-Movies/index2.html');
    }
    else{
        alert("Your password or your username is wrong ");
    }
}
var favorite=[];
var histore;
var movies = function(mov){
     mov =document.getElementById('movie').value;
    $.get("http://www.omdbapi.com/?apikey=c9dddb65&t="+mov,function(data){
  $('#par').text(`${data.Actors}`)+$('#par1').text(`${data.Awards}`)+$('#par2').text(`${data.Genre}`)+$('#par3').text(`${data.imdbRating}`)+$("#pic").attr("src",data.Poster);
    histore = data
})
}
$('#search').click(movies)
var singout=function(){
   history.back()
}
$('#favorite').click(function(){
    favorite.push(histore)
})
function displayFavorite(){
    var arr = Object.values(favorite.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}));
 for (var i=0;i<arr.length;i++){
     console.log(`${arr[i].Poster}`)
     var timplate=`<div >
     <img src = "${arr[i].Poster}" style="height:200px;width:250px;"/>
     <p class="somthing">${arr[i].Actors}</p>
   <p class='somthing'>${arr[i].Awards}</p>
   <p class='somthing'>${arr[i].Genre}</p>
   <p class='somthing'>${arr[i].imdbRating}</p>
     </div>`
     $('.cont').append(timplate)
 }
}
$('#singout').click(singout);
$("#btn").click(displayFavorite)
