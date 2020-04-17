function navclose(){
    var nav2 = document.getElementById('nav2');

    nav2.style.right = '-100%' ;

}
function navopen(){
    var nav2 = document.getElementById('nav2');

    nav2.style.right = '0' ;
    
}

window.addEventListener('scroll',function(){
    var navigation_bar= document.getElementById('navigation-bar');
    var offset = window.pageYOffset;

    if(offset > 55){
        navigation_bar.style.top = "0";
        navigation_bar.style.backgroundColor = "rgba(0,0,0,0.5)";

    }else{
        navigation_bar.style.top = "2%";
        navigation_bar.style.backgroundColor = "transparent";
    }
});

// whatsapp message
var yourNumber = "+5493814751951"
var yourMessage = "Hello sergio...."



function getLinkWhastapp(number, message) {
  number = yourNumber
  message = yourMessage.split(' ').join('%20')

  return console.log('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
}

getLinkWhastapp()



var myform = $("form#form-contact");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_Nfiu3Cxw";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("mensaje enviado");
       myform.find("button").text("Send");
       event.target.reset();
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});
