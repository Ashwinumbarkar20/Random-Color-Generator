let colorcontainer=document.getElementById("colorcontainer")
let input=document.getElementById("numb");
let Generate=document.getElementById("Generate");
let chars="0123456789abcde";
Generate.addEventListener("click",()=>{
    let getvalue=+input.value;
        for(let i=0;i<getvalue;i++)
    {
        let colordiv=document.createElement("div")
        colordiv.classList.add("colors");
        colorcontainer.append(colordiv);
        console.log(colordiv)
    let colorcode=getcolorCode();
    colordiv.style.backgroundColor =colorcode;
    colordiv.innerText=colorcode
    }
          
    })
    function getcolorCode(){
    let colorcode="";
    for(let i=0;i<6;i++)
    {
        let no=Math.floor(Math.random()*chars.length)
        colorcode+=chars.substring(no,no+1);
    }

    return("#"+colorcode)
    
    }

    