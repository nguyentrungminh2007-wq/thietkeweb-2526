function inBCC(n){
    let result=""
    for(let i=1;i<=10;i++)
    {
     result+=`${n} x ${i} = ${n*i} <br>`;
    }
    document.getElementById('result').innerHTML=result;
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
function createItemV2(obj)
{
    const list=document.getElementById("product-list")
    list.innerHTML+=`
        <div class="col">
            <div class="card product-item">
                <div class="product-image">
                    <img src="${obj.image}" alt="${obj.names}" width="100%" height="120">
                </div>
                <div class="card-body product-infor text-center">
                    <h4 class="card-title text-danger">${obj.names}</h4>
                    <h5>${obj.price}</h5>
                    <p style ="text-align:justify;line-height:1.5">${obj.description}</p>
                    <a href="${obj.linkproduct}">chi tiết</a>
                    </div>
                </div>
        </div>
    `
}
w
function vonglap(array)
{
    let i=0;
    while(i<array.length)
    { 
       createItemV2(array[i]);
        i++;
    }
}


