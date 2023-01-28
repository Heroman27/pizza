menuListArray = ["Pizza Vegetariana","Pizza nutella com coxinha","Pizza de feijoada abacaxi tomate e cebola com borda de molho de pimenta"
                    ];

function getMenu(){
var htmldata;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.lenght;i++){
htmldata=htmldata+imgtags+menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML=htmldata
}

function addItem(){
var htmldata;
var imgtags='<img id="imi" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata= ""
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+imgtags+menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML=htmldata;
}
function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}