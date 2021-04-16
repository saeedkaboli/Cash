// var
let El={
    Body:document.querySelector("body"),
    name:document.getElementById("Name"),
    price:document.getElementById("Price"),
    Add:document.getElementById("AddCost"),
    Week:document.getElementById("week"),
    over:document.getElementById("Over"),
    btn:document.getElementById("Btn"),
    priceWeek:document.getElementById("PriceWeek")

}


//---------------------- Event

//Onload
El.Body.onload=function(){
    var test=new Onload();
    test.Alert();
}

// Add Cash
El.btn.addEventListener("click",function(){
    const test=new Button();
    test.AddBtn();
    const test2=new Min();
    El.priceWeek.innerHTML=`${test2.Leftover()}`;
    test.ClearValueInput();
   
})


// Object
class Onload{
    Alert(){
     var  al=Number(prompt("بودجه هفته رو تعیین کن"));
     if(al==null || isNaN(al)==true || al==0){
         alert("Erorr")
     }
     else{
         El.Week.innerHTML=`بودجه هفته: ${al} تومان`;
        El.priceWeek.innerHTML=`${al}`;
         El.over.style.background="#21cf95";
         El.Week.style.background="#129ff1";
     }
    }
}

class Button{
    // Add Value in the BoxAddition
    AddBtn(){
        var N=El.name.value;
        var P=El.price.value;

        if(N=="" || P=="" || isNaN(N)==false || isNaN(P)==true){
            alert("Erorr")
        }
        else{
            let div=document.createElement("div");
            let pr=document.createElement("div");
            pr.id="Pr";
            pr.append(P)
            let Na=document.createElement("div");
            Na.id="Na"
            Na.append(N);
            div.id='CostData';
            div.append(pr);
            div.append(Na);
            El.Add.append(div);
        }
      
    }
    ClearValueInput(){
        El.name.value="";
        El.price.value="";
    }
}
class Min{
Leftover(){
   var one=El.priceWeek.innerHTML;
   var two=El.price.value;
   const answer=one - two;
   return answer;
}
// Rightover(){return El.price.value;}
}
