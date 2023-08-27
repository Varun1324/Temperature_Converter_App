    function isRadioSelected()
    {
        var i=document.getElementById("value1").value;
        console.log("Degrees = "+i);
        var select=document.querySelector('input[name="type"]:checked');
        if(select)
        {
            if(document.getElementById("radio1").checked==true){
                var res=String((i*1.8)+32);
            }
            else if(document.getElementById("radio2").checked==true){
                var res=String((i-32)*0.5);
            }
            else if(document.getElementById("radio3").checked==true){
                var res=String(parseInt(i)+273.15);
            }
        }
        else{
            alert("select a type !");
        }
        document.getElementById("myresult").innerHTML=res;
    }
   