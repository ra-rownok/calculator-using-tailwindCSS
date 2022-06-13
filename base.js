function setValue(inputID) {
    document.getElementById(inputID).addEventListener("click",function(event){
        const btnText = event.target.value
        let total = document.getElementById("total");
        if(total.value == '' && btnText == '+'){
            btnText.disabled = true;
        }
        else if(total.value == '' && btnText == '*'){
            btnText.disabled = true;
        }
        else if(total.value == '' && btnText == '/'){
            btnText.disabled = true;
        }
        else if(total.value == '' && btnText == '='){
            btnText.disabled = true;
        }
        else if (btnText != '='){
            total.value = total.value+ btnText;
        }
        else{
            total.value = eval(total.value)
        }
    })
}

setValue("button-text");

