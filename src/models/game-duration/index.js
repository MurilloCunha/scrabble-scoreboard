export class gameDuration {
  constructor(){
    this._startTime = 0
    this._endTime = 0
  }

  setStartTime(){
    const currentDate = new Date()
    this._startTime = [currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds()]
  }

  setEndTime(){
    const currentDate = new Date()
    this._endTime = [currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds()]
  }

  getDuration(){
    const hours = Math.abs(this._endTime[0] - this._startTime[0])
    const minutes = Math.abs(this._endTime[1] - this._startTime[1])
    const seconds = Math.abs(this._endTime[2] - this._startTime[2])

    return `${hours}h ${minutes}m ${seconds}s`
  }

}