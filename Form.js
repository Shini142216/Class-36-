class Form{

    constructor(){

    }
    display(){
        var title = createElement("H2")
        title.html("Car race game")
        title.position(200,20);
        var input=createInput("name")
        var button=createButton("Play")
        var greeting=createElement("H3")
        input.position(130,160)
        button.position(250,250)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value()
            playercount=playercount+1;
            player.update(name)
            player.updatecount(playercount)
            greeting.html("Welcome "+name)
            greeting.position(130,160)

        })
    }
}