
const onSubmit =()=>{
    event.preventDefault()
    let input1 =document.querySelector("#height").value
    let input2 =document.querySelector("#width").value
    if(input1=="" && input2==""){
        alert("invalid input")
    }
    else{
        let area = input1*input2
        document.querySelector("#areas").innerHTML=area
    }

}