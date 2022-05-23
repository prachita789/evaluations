
let data = JSON.parse(localStorage.getItem("products")) || [];
console.log(data);

data.map(function(ele,index){
    
    let div = document.createElement('div');
    div.setAttribute("id","container");

    let image = document.createElement('img');
    image.setAttribute("id","image")
    image.src=ele.image;

    let type = document.createElement('p')
    type.innerText=ele.type;

    let desc = document.createElement('p');
    desc.innerText=ele.desc;

    
    let price = document.createElement('p');
    price.innerText=ele.price;

    let div1 = document.createElement('div');
    let removebtn = document.createElement('button');
    removebtn.setAttribute("id","remove_product");
    removebtn.innerText="Remove";
    removebtn.addEventListener("click",function(){
        remove(ele,index)
    })

    function remove(ele,index){
        data.splice(index,1)
        localStorage.setItem("products",JSON.stringify(data))
        window.location.reload();
    }

    div1.append(removebtn);
    div.append(image,type,desc,price,div1)
    document.querySelector('#all_products').append(div);
})