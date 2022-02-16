

class dataObject{
    constructor(_title, _num, _price){
        this.name = _title
        this.total = _num
        this.price = _price
        this.totalPrice = this.totalPrice() 
    }


    totalPrice(){
        return this.total * this.price;
    }

}





console.log(new dataObject("Banana", 45, 0.32))