import { player } from "../player/"

export class playersList{
    constructor(){
        this._playersList = [new player(1,''),new player(2,'')]
    }

    get all(){
        return this._playersList
    }

    get winner(){
        console.log(this._playersList.reduce((compare, Player) =>
        compare.totalScore > Player.totalScore ? compare : Player
        ))
        return this._playersList.reduce((compare, Player) =>
            compare.totalScore > Player.totalScore ? compare : Player
            )
    }

    get higherScore(){
       const playerWithHigherScore = this._playersList.reduce((compare,Player) =>
        Math.max(compare.score) > Math.max(Player.score)
        ? compare : Player
        )
        return {
            score:Math.max(...playerWithHigherScore.score),
            player:playerWithHigherScore.name
          }
    }

    get lowerScore(){
        const playerWithLowerScore = this._playersList.reduce((compare,player) =>
            Math.min(...player.score) < Math.min(compare.score)  ? player : compare
        )
        return{
        score:Math.min(...playerWithLowerScore.score),
        player:playerWithLowerScore.name
        }
    }

    add({id,name}){
        this._playersList.push(new player(id,name))
    }

   restore(){
        this._playersList= [new player(1,''),new player(2,'')]
    }


}