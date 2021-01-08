class Feedbutton
{
    constructor()
    {
        this.feedbutton = createButton("Feed Me!");
    }

    display()
    {
        this.feedbutton.show();
        this.feedbutton.position(900, 80)
        this.feedbutton.mousePressed(function(){
            foodStock--;
            writeStock(foodStock)
            database.ref("/").update({
                FeedTime:hour()
            })
            dog.addImage(happyDog);
        });
    }

    hide(){
        this.feedbutton.hide();
    }

}
