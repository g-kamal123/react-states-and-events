import React, { Component } from 'react'

export class Button extends Component {
    state = {
        count:0,
        numbertype:'',
        incdec:0,
        hours: new Date().getHours(),
        minutes:new Date().getMinutes(),
        seconds: new Date().getSeconds(),
        shours :0,
        sminutes :0,
        sseconds :0
    }
    clickHandler = (event) =>{
        if((this.state.count) % 2 === 0)
        var num = 'odd';
        else num = 'even';
        this.setState({
            count : this.state.count + 1,
            numbertype: num
        })
        
    }
    incrementHandler = (event) =>{
        this.setState({
            incdec: this.state.incdec + 1
        })
    }
    decrementHandler = (event) =>{
        this.setState({
            incdec: this.state.incdec - 1
        })
    }
    resetHandler = (event) => {
        this.setState({
            incdec: 0
        })
    }
    countDownHandler = (event) =>{
        setInterval(this.countdwn,1000);
    }
    countdwn = () =>{
        if(this.state.hours===0 && this.state.minutes===0 && this.state.seconds===0){
            var sec = 0
            var min = 0
            var hrs = 0
        }
        else{
        if(this.state.seconds===0){
               sec = 59;
            if(this.state.minutes===0){
               min = 59;
               hrs = this.state.hours -1;
            }
            else{
                hrs = this.state.hours
                min = this.state.minutes -1
            }
        }
        else {
            sec = this.state.seconds -1
            min = this.state.minutes
            hrs = this.state.hours
        }
    }
        this.setState({
            seconds: sec,
            minutes:min,
            hours:hrs
        })
    }
    interval = this.interval;
    startStopWatchHandler = (event)=>{
        this.interval = setInterval(this.stopwatch,10)
        event.target.disabled = true;
        document.getElementById('resume').disabled = true
    }
    stopwatch = ()=>{
        if(this.state.sseconds===99){
            var ssec = 0
            if(this.state.sminutes===59){
                var smin = 0
                var shrs = this.state.shours + 1 
            }
            else{
                shrs = this.state.shours
                smin = this.state.sminutes + 1       
            } 
        }
        else{
            ssec = this.state.sseconds + 1
            smin = this.state.sminutes
            shrs = this.state.shours
        }
        this.setState({
            sseconds:ssec,
            sminutes:smin,
            shours:shrs
        })
    }
    pauseStopWatchHandler = ()=>{
        clearInterval(this.interval)
        document.getElementById('resume').disabled = false
    }
    resumeStopWatchHandler = (event)=>{
        if(this.state.sseconds !== 0)
        this.startStopWatchHandler(event)
    }
    resetStopWatchHandler = ()=>{
        clearInterval(this.interval)
        document.getElementById('resume').disabled = false
        document.getElementById('start').disabled = false
        this.setState({
            sseconds:0,
            sminutes:0,
            shours:0
        })
    }
  render() {
    return (
      <div>
        <input type="button" value = {'you clicked '+ `${this.state.count}`+' times'} onClick={this.clickHandler}/>
        <div>{this.state.numbertype}</div>
        <br />
        <div className='counter'>
        <h1>Counter</h1>
        <h2>{this.state.incdec}</h2>
        <button onClick={this.incrementHandler}>INCREMENT</button>
        <button onClick={this.resetHandler}>RESET</button>
        <button onClick={this.decrementHandler}>DECREMENT</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h2>Time CountDown</h2>
        <div>{this.state.hours + ':' + this.state.minutes+':'+ this.state.seconds}</div>
        <button onClick={this.countDownHandler}>Count Down</button>
        <br />
        <br />
        <br />
        <br />
        <div className='stopwatch'>
        <h3>React Stopwatch</h3>
        <div className='printStopwatch'>{this.state.shours + ':' + this.state.sminutes+':'+ this.state.sseconds}</div>
        <div className='stopwatchButton'>
        <button id='start' onClick={this.startStopWatchHandler}>Start</button>
        <button onClick={this.pauseStopWatchHandler}>Pause</button>
        <button id='resume' onClick={this.resumeStopWatchHandler}>Resume</button>
        <button onClick={this.resetStopWatchHandler}>Reset</button>
        </div>
        </div>
      </div>
    )
  }
}

export default Button