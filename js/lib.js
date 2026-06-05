function inBCC(n){
    let result=""
    for(let i=1;i<=10;i++)
    {
     result+=`${n} x ${i} = ${n*i} <br>`;
    }
    document.getElementById('result').innerHTML=result;
}
const product ={
    names:"xe tank",
    price:"1.000.000 usd",
    description:"vật phẩm ban phát hòa bình và sự bình đẳng",
    image:"../assets/images/xetank.jpg",
    linkproduct:"chi-tiêt.html",
}
const productList =[
    {
        names:"xe tank",
    price:"1.000.000 usd",
    description:"vật phẩm ban phát hòa bình và sự bình đẳng",
    image:"../assets/images/xetank.jpg",
    linkproduct:"chi-tiêt.html",
}
]
function createItem(obj)
{
const item=document.createElement("div")
item.setAttribute("class","container-item")
const image=document.createElement("img");
image.setAttribute("src",obj.image);
image.setAttribute("alt",obj.names);
const containerImage=document.createElement("div")
containerImage.setAttribute("class","container-image")
containerImage.appendChild(image)
const containerInfor=document.createElement("div")
containerInfor.setAttribute("class","container-infor")
const names =document.createElement("p");
names.innerHTML=obj.names;
const price =document.createElement("p");
price.innerHTML=obj.price;
const description =document.createElement("p");
description.innerHTML=obj.description;
const linkproduct=document.createElement("a");
linkproduct.innerHTML="xetank";
linkproduct.setAttribute("href",obj.linkprodust);
containerInfor.appendChild(names);
containerInfor.appendChild(price);
containerInfor.appendChild(description);
containerInfor.appendChild(linkproduct);
item.appendChild(containerImage);
item.appendChild(containerInfor);
document.getElementById("productList").appendChild(item);
}



