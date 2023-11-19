module.exports={
    "checkMenu":["Fried Rice","Fish","Fries","Plain Water","Orange Juice","Coffee"],
    "showMenu":function(){
        var showMenu = "";
        for(var i = 0 ; i<this.checkMenu.length;i++){
            showMenu += "#"+(i+1).toString()+" "+this.checkMenu[i]+"\n";
        }
        return showMenu;
    },
    "placeOrder":function(foodNumber){
        foodNumber = foodNumber.split(',');
        eachOrder = [];
        for(var i = 0 ; i<foodNumber.length;i++){
            eachOrder.push(this.checkMenu[foodNumber[i]-1]);
        }
        this.orderHistory[Object.keys(this.orderHistory).length+1] = eachOrder;

    },
    "orderHistory":{},
    "showHistory":function(){
        var length = Object.keys(this.orderHistory)[0];
        var showOrder = ""
        for(var i=0;i<Object.keys(this.orderHistory).length;i++){
            showOrder += "\n\nOrder Number #"+Object.keys(this.orderHistory)[i]+":\n";
            for(var a = 0 ; a<Object.keys(this.orderHistory)[i].length;a++){
                showOrder +=  "\n #" + (a+1).toString() + " " + this.orderHistory[Object.keys(this.orderHistory)[i]];
            }
        }
        
        return showOrder;
    },
    "reOrder":function(orderNumber){
        this.orderHistory[Object.keys(this.orderHistory).length+1] = this.orderHistory[orderNumber];

    },
    "cancelOrder":function(orderNumber){
        delete this.orderHistory[orderNumber];

    }
}