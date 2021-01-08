class addButton
{
    constructor()
    {
        this.addbutton = createButton("Add Food!")
    }

    display()
    {
        this.addbutton.show();
        this.addbutton.position(1000, 80)
        this.addbutton.mousePressed(function(){
            foodStock++;
            writeStock(foodStock)
        });

        
    }

    hide(){
       this.addbutton.hide()
    }
}
