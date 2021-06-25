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

   restore(){
        this._playersList= [new player(1,''),new player(2,'')]
    }


}