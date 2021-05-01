class Player{

    constructor(){

    }
    getcount(){
        var playercountinfo = database.ref("playercount");
        playercountinfo.on("value",function(data){
            playercount=data.val()
        })
    }
    updatecount(num){
        database.ref("/").update({
           playercount:num 
        })
    }
    update(name){
        var playerindex ="player"+playercount;
        database.ref(playerindex).set({
            name:name
        })
    }
}