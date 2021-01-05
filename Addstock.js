class addButton
{
    constructor()
    {

    }

    display()
    {
        var addButton = createButton("Add Food!");
        addButton.position(1000, 80)
       

        addButton.mousePressed(function(){
            foodStock++;
            writeStock(foodStock)
        });
    }
}
