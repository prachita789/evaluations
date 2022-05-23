//store the products array in localstorage as "products"

function Mydata(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

let data = JSON.parse(localStorage.getItem("products")) || [];

function productData(e){
    e.preventDefault();
    
    let form = document.getElementById('products')

    let type = form.type.value;
     
    let desc = form.desc.value;

    let price = form.price.value;

    let image = form.image.value;



let s1 = new Mydata(type,desc,price,image);
// console.log(s1);

data.push(s1);

localStorage.setItem("products",JSON.stringify(data));
}