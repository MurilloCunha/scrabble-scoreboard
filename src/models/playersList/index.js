import { player } from "../player/"

export class playersList{
    constructor(){
        this._playersList = [new player(1,''),new player(2,'')]
    }

    get all(){
        return this._playersList
    }

    add({id,name}){
        this._playersList.push(new player(id,name))
    }

    remove(playerID){
        this._playersList.splice(playerID,1)
    }

    updatePlayerName(updateID,value){
        this._playersList[updateID].setName(value)
    }

    addPlayerScore(updateID,value){
        this._playersList[updateID].addScore(value)
    }

    removePlayerScore(updateID,scoreID){
        this._playersList[updateID].removeScore(scoreID)
    }
}