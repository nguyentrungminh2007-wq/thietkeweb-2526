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
linkproduct.setAttribute("href",obj.linkproduct);
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
            <div class="card product-item" style="border-radius:12px; overflow:hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.15); transition: transform 0.3s;">
                <div class="product-image" style="height:200px; overflow:hidden;">
                    <img src="${obj.image}" alt="${obj.names}" style="width:100%; height:100%; object-fit:cover; transition: transform 0.3s;">
                </div>
                <div class="card-body product-infor text-center" style="padding:15px; background: linear-gradient(135deg, #1a1a2e, #16213e);">
                    <h4 class="card-title" style="color:#e94560; font-weight:bold; text-transform:uppercase; font-size:1rem;">${obj.names}</h4>
                    <h5 style="color:#f5a623; font-weight:bold;">${obj.price}</h5>
                    <p style="text-align:justify; line-height:1.5; color:#aaa; font-size:0.85rem;">${obj.description}</p>
                    <a href="${obj.linkproduct}?masp=${obj.id}" style="display:inline-block; padding:8px 20px; background:#e94560; color:white; border-radius:20px; text-decoration:none; font-weight:bold; font-size:0.85rem;">Chi tiết →</a>
                </div>
            </div>
        </div>
    `
}

function vonglap(array)
{
    let i=0;
    while(i<array.length)
    { 
       createItemV2(array[i]);
        i++;
    }
}


