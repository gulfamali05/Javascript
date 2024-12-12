
const onSubmit =()=>{
    event.preventDefault()
    let input1 =document.getElementById("width").value
    let input2 =document.getElementById("height").value
    if(input1=="" && input2==""){
        alert("invalid input")
    }
    else{
        let area = input1*input2
        document.getElementById("areas").innerHTML=area
    }

}