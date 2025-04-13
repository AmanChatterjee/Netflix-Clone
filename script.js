let l = document.querySelector("#m");

l.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default behavior

    l.innerHTML = `
        <p style="
            color: #ffffff80; 
            position: relative; 
            left: 164px; 
            font-family: Helvetica, sans-serif;
            font-size: 13px;
            width: 322px;
            line-height: 1.5;
            text-align: left;
        ">
            The information collected by Google reCAPTCHA is subject to the Google 
            <span style="color: #448ef4;">Privacy Policy</span> and 
            <span style="color: #448ef4;">Terms of Service</span>, 
            and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes 
            (it is not used for personalised advertising by Google).
        </p>`;
});
let x=0;
let a = document.querySelector("#a");
let c = document.querySelector("#c");

c.addEventListener("click", (e) => {
  e.preventDefault();

  a.style.display = "none"; // hides the login container
  let p = document.createElement("div");
  p.style.color = "red";
  p.style.fontSize = "50px";
  p.style.textAlign = "center";
  p.style.display = "flex";
  p.style.justifyContent = "center";
  p.style.alignItems = "center";
  p.style.height = "20vh"; // fill screen height
  p.style.backgroundColor="rgba(0,0,0,0.8)";
  let us = document.querySelector("#user");
  let pwd = document.querySelector("#pwd");
console.log(us.value);
console.log(pwd.value);
if(x==0){
if(us.value==""|| pwd.value==""){
    p.innerHTML = `USERNAME / PASSWORD INVALID`;
    alert("FAILED");
}
else{
p.innerHTML = `WELCOME TO NETFLIX CLONE`;
alert("SUCCESS");
}


  document.body.appendChild(p); // add to DOM
}
else{
  if(us.value==""){
    p.innerHTML = `USERNAME / PASSWORD INVALID`;
    alert("FAILED");
}
else{
p.innerHTML = `WELCOME TO NETFLIX CLONE`;
alert("SUCCESS");
}


  document.body.appendChild(p); // add to DOM
}

});
let d = document.querySelector("#d");


d.addEventListener("click",(e)=>{
  e.preventDefault();
  if(x==0){
  let pwd = document.querySelector("#pwd");
  pwd.style.display = "none";
  let p2= document.querySelector("#new");
if(!p2){
  let p = document.createElement("p");
  p.innerHTML="Message and data rates may apply";
  c.innerHTML="Send sign-in code";
  c.style.fontFamily="Helvetica, sans-serif";
  c.style.cursor = "pointer"; 
  d.innerHTML="Use password";
  d.style.fontFamily="Helvetica, sans-serif";
  let e1= document.querySelector("#e");
  e1.innerHTML="Forgot email or phone number?";
  e1.style.fontFamily="Helvetica, sans-serif";
  e1.style.left="45px";
  p.style.color="#ffffff80";
  p.style.fontSize="14px";
  document.querySelector("#a").appendChild(p);
p.style.position="relative";
p.style.top="-435px";
p.style.fontFamily="Helvetica, sans-serif";
p.style.height="18px";
p.id="new";
x=1;
}
else{
  p2.style.display="block";
  x=1;

}
  }
  else{
    x=0;
  c.innerHTML="Sign In";
  c.style.fontFamily="Helvetica, sans-serif";
  d.innerHTML="Use a sign-in code";
  d.style.fontFamily="Helvetica, sans-serif";
  let e1= document.querySelector("#e");
  e1.innerHTML="Forgot password?";
  e1.style.fontFamily="Helvetica, sans-serif";
  e1.style.left="45px";
  let p1= document.querySelector("#new");
  p1.style.display = "none";
  e1.style.left="88px";
  let pwd = document.querySelector("#pwd");
   pwd.style.display="block";

 

    
  }
});
 
let sel= document.querySelector("select");
sel.addEventListener("change",()=>{
  let b2= document.querySelector("#b2");
  let b3= document.querySelector("#b3");
  let b4= document.querySelector("#b4");
  let b5= document.querySelector("#b5");
  let b6= document.querySelector("#b6");
  let pp= document.querySelector("#p");
 
  


  if(sel.value=="Hindi"){
      b2.innerHTML="सहायता केंद्र";
      b3.innerHTML="उपयोग की शर्तें";
      b4.innerHTML="प्रायवेसी";
      b5.innerHTML="कुकी प्रेफ़रेंसेज़";
      b6.innerHTML="कॉरपोरेट जानकारी";
      pp.innerHTML=`कोई सवाल हैं? <a id="q1"href="tel:000-800-919-1743">000-800-919-1743 (टोल फ़्री) पर कॉल करें</a>`;  
      let qq= document.querySelector("#q1");
      qq.style.left="96px";
      qq.style.textDecoration="none";
      qq.style.color=" #ffffffb3";
  }
  else{
    b2.innerHTML="Help Centre";
      b3.innerHTML="Terms of Use";
      b4.innerHTML="Privacy";
      b5.innerHTML="Cookie Preferences";
      b6.innerHTML="Corporate Information";
      pp.innerHTML=`Questions? Call<a id="q1"href="tel:000-800-919-1743">000-800-919-1743 (Toll-Free)</a>`;  
      let qq= document.querySelector("#q1");
      qq.style.left="116px";
      qq.style.textDecoration="none";
      qq.style.color=" #ffffffb3";
  }
});



