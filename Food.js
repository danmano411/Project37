class Food{
    constructor(image, foodStock){
        this.image = image;
        this.foodStock = foodStock;
    }
    display(){
        imageMode(CENTER)
        image(this.image, 700, 300, 70, 70)

        var x = 720;
        var y = 200;

        if(this.foodStock != 0) {
            for(var i = 0; i < foodStock; i++){
                if(i%10 === 0){
                    x = 150;
                    y += 50;
                }
                image(this.image, x, y, 50, 50)
                x += 30;
            }
        }
    }
    Garden(){
        background(garden)
    }
    Bedroom(){
        background(bedroom)
    }
    Washroom(){
        background(washroom)
    }
}