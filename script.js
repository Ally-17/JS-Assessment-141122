            <!create validation to make return date visibility be hidden>
            function OneWay() 
            {
                if (OneWay === true)
                {}
                else{
                    return false;}
            } 
              
            function TDate() {
                var departDate = document.getElementById("depart").value;
                var Today=Today

                if (departDate <= Today) {
                alert("The Date must be Bigger or Equal to today date");
                return false;
                }
                return true;
                }

            function confirmPassword()
            {
                let password1=document.jsAssessment.password1.value;
                let password2=document.jsAssessment.password2.value;
                if (password1.length<6)
                {alert("ensure password is minimum of 6 characters")
            return false;}
            if (password1==password2)
                {return true;}
                else{
                    alert("Passwords dont Match")
                    return false;}
                }
            
            function confirmMobile()
            {
                if (mobileNo.length<10)
                {alert("Enter Valid Mobile Number")
            return false;}
                }

            function submit() {
                window.alert("You have Successfully Submitted your Form");
            }
            
            let PayName= document.jsAssessment.Name1.value;
            return getElementById("PayName")= PayName

    