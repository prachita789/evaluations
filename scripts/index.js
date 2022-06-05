// Add the coffee to local storage with key "coffee"

async function productData(){
    let url = ` https://masai-mock-api.herokuapp.com/coffee/menu`;
    try{
        let res = await fetch(url);

        let data = await res.json();
        appendData(data.menu);
        console.log(data.menu)
    }catch (err){
        console.log(err);
    }
}
productData();



 

function appendData(data){

    let div1=document.getElementById("menu")

    data.data.map(function(ele){

        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.image;
        image.style.width = '300px';
        image.style.height = '50%';

        let title = document.createElement("p");
        title.innerText = ele.title;

        let price = document.createElement("p");
        price.innerText = ele.price;

        let btn = document.createElement("button");
        btn.innerText="Add to Bucket";
        btn.setAttribute("id","add_to_bucket");

        box.append(image,title,price,btn);

        btn.addEventListener("click", function(){
            addtobucket(ele)
        })
        div1.append(box);
    });
}


let count = 1;


function coffeeData(i,t,p){
    this.image = i;
    this.title = t;
    this.price = p;
}



let items= JSON.parse(localStorage.getItem("coffee")) || [];

function addtobucket(ele){
    event.preventDefault();

    document.getElementById("coffee_count").innerText = count++;

    let image = ele.image;

    let title = ele.title;

    let price = ele.price;

    let p1 = new coffeeData(image,title,price);

    console.log(p1);

    items.push(p1);

    localStorage.setItem("coffee",JSON.stringify(items));
   
    

}