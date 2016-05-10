		$(document).ready(function(){
	  		$('.bxslider').bxSlider({
	  			auto: true,
  				autoControls: true
	  		});
		});


		function check(question){  

        for(i=0;i<question.length;i++){    
            if(question.elements[i].value == ""){
                alert("Sorry，"+question.elements[i].id + " cannot be empty");
                document.getElementById(question.elements[i].id).style.borderColor = "red";
                question.elements[i].focus(); 
                return false;  
            }
        }

		var radio=document.getElementsByName("gender_field");
		var r=false;
		for(var i=0;i<radio.length;i++)
			{
				if(radio[i].checked==true)
				{
				    r=true;
				    break;
				}
			}
		if(r==false)
		{
			document.getElementById("sex").style.color = "red";
			alert("Sorry, gender cannot be empty"); 
			return false;
		}

		var number = "1234567890+-";
		var  i;
		var  j; 
		if(question.phone_field.value.charAt(0)!="+"){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return false;
		}
		if(question.phone_field.value.charAt(2)!="-"){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return false;
		}
		if(question.phone_field.value.charAt(6)!="-"){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return false;
		}
		if(question.phone_field.value.charAt(10)!="-"){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return false;
		}   
		for (i=0;i<15;i++)     
		{     
			j=number.indexOf(question.phone_field.value.charAt(i));     
			if (j==-1)     
			{     
				alert("Please enter correct number");
				document.getElementById("phone number").style.borderColor = "red";
				return false;     
			}          
		} 
		if(question.phone_field.value.charAt(1) == '-'||question.phone_field.value.charAt(1)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
			}
		if(question.phone_field.value.charAt(3) == '-'||question.phone_field.value.charAt(3)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(4)  == '-'||question.phone_field.value.charAt(4)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(5)  == '-'||question.phone_field.value.charAt(5)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(7)  == '-'||question.phone_field.value.charAt(7)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(8)  == '-'||question.phone_field.value.charAt(8)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(9)  == '-'||question.phone_field.value.charAt(9)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(11)  == '-'||question.phone_field.value.charAt(11)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(12)  == '-'||question.phone_field.value.charAt(12)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(13)  == '-'||question.phone_field.value.charAt(13)  == '+'){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}
		if(question.phone_field.value.charAt(14)  == '-'||question.phone_field.value.charAt(14)  == '+'||question.phone_field.value.charAt(14) ==""){
			alert("Please enter your number like this: +1-312-912-4021");
			document.getElementById("phone number").style.borderColor = "red";
			return  false;
		}

		var e=question.email_field.value.length;     
		var temp = question.email_field.value.indexOf('@');     
		var temp = question.email_field.value.indexOf('.');     
		if (temp > 1) {     
			if ((e-temp) > 3){     
				if ((e-tempd)>0){     
		return true;     
				}     
			}     
		}
		alert("Please enter a correct email");
		return false;
    }

    