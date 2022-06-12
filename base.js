function setValue(inputID) {
    document.getElementById(inputID).addEventListener("click",function(){
        const btnText = document.getElementById(inputID).value;
        const equal = document.getElementById("b=").value;
        let total = document.getElementById("total");
        if (btnText != equal){
            total.value = total.value+ btnText;
        }
        else {
            total.value = eval(total.value)
        }
    })
}

setValue("b7")
setValue("b8")
setValue("b9")
setValue("b+")
setValue("b4")
setValue("b5")
setValue("b6")
setValue("b-")
setValue("b1")
setValue("b2")
setValue("b3")
setValue("b*")
setValue("b0")
setValue("b.")
setValue("b/")
setValue("b=")



