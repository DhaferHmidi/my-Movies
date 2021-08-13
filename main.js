function verif(){
    var pass=document.getElementById('pass').value;
    var user=document.getElementById('username').value;
    var pattsym=/[^a-zA-Z0-9]/;
    var patt=/[a-z]/;
    var patt2=/[A-Z]/;
    var patt3=/[0-9]/; 
 
    if(pattsym.test(pass)&&pass.length>=8)
    { alert("welcom");
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
var movies = function(mov){
     mov =document.getElementById('movie').value;
    $.get("http://www.omdbapi.com/?apikey=c9dddb65&t="+mov,function(data){
  $('#par').text(`${data.Title}`)+$("#pic").attr("src",data.Poster)
    })
}
$('#search').click(movies)