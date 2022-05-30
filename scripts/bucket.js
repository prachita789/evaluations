// On clicking remove button the item should be removed from DOM as well as localstorage.

let list= JSON.parse(localStorage.getItem("coffee")) || [];
console.log(data);


let price = 0;
list.map(function(ele,index){
    let div2 = document.createElement("div")

    let img = document.createElement("img")
    img.src = ele.img;

    let title = document.createElement("p")
    title.innerText = ele.title;

    let price = document.createElement("p")
    price.innerText = ele.price;

    let btn1 = document.createElement("button")
    btn1.innerText = "Remove";
    btn1.setAttribute("id","remove_coffee")

    btn1.addEventListener("click",function(){
        removecoffee(ele,index)
    })
    div2.append(img,title,price,btn1)

    let box1=document.getElementById("bucket")
    box1.append(div2);

    price = price + Number(ele.price); 
    console.log(price);
})


function removecoffee(index){
    list.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(list))
    window.location.reload();
}