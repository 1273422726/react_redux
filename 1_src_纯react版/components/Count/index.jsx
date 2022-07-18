import React, { Component } from 'react'

export default class Count extends Component {
    state = {count:0}
    //加法
    increment = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({count:count+value*1})
    }
    //减法
    decrement = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({count:count-value*1})
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        if(count%2 !== 0){
            this.setState({count:count+value*1})
        }
        
    }
    incermentAsync = () => {
        const {value} = this.selectNumber
		const {count} = this.state
		setTimeout(()=>{
			this.setState({count:count+value*1})
		},100)
    }
    render() {
        return (
            <div>
               <h1>当前求和为：{this.state.count}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incermentAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
