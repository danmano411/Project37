class Feedbutton
{
    constructor()
    {

    }

    display()
    {
        feedbutton = createButton("Feed Me!");
        feedbutton.position(900, 80)
       

        feedbutton.mousePressed(function(){
            foodStock--;
            writeStock(foodStock)
        });
    }
}
