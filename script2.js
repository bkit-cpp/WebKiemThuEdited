function dangky(e)
{
  event.preventDefault();
  var username=document.getElementById('username').value;
  var pass=document.getElementById('pass').value;
  var pass2=document.getElementById('repass').value;

  if(username==''||pass==''||pass2=='')
  {
    alert("Please fill these blank"); 
    return false;
  }
  else if(pass.length<6||pass2.length<6){
alert("Too Short");
return false;
  }
  else{
  var user={
username: username,
password: pass,
pass2: repass,
  };
  var json=JSON.stringify(user);
  localStorage.setItem(username,json);
  console.log('user added');
  window.location.href="https://bkit-cpp.github.io/WebKiemThuEdited/dangnhap.html";
}
  
}
function dangnhap(e){
  event.preventDefault();
  var username=document.getElementById('username').value;
  var pass=document.getElementById('pass2').value;
  var pass3=document.getElementById('pass3').value;
  var user=localStorage.getItem(username);
  var data=JSON.parse(user);
  console.log(data);
  if(username==''||pass==''||pass3=='')
  {
    alert("Please fill these blank");
    window.location.href="https://bkit-cpp.github.io/WebKiemThuEdited/dangnhap.html";
  }
  else if(username==data.username&& pass==data.password && pass3==data.password)
  {
    window.location.href="https://bkit-cpp.github.io/WebKiemThuEdited/";
    }
 
 
}
