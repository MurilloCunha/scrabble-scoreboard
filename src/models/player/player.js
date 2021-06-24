export class player{
    constructor(id,name){
        this._id = id;
        this._name = name;
        this._score = [];
    }

    get totalScore(){
        return this._score.reduce((sum,currentScore)=> sum + currentScore,0)
    }
    
    get id(){
        return this._id
    }

    get name(){
        return this._name
    }
    setName(newName){
        this._name=newName
    }
    get score(){
        return this._score
    }

    get data(){
        return {
            id:this._id,
            name:this._name,
            score:this._score
        }
    }
    addScore(value){
        this._score.push(value)
    }

    removeScore(index){
        this._score.splice(index,1)
    }

} 