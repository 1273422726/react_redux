import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

    state = {carName:'奔驰c63'}
    componentDidMount(){
		//检测redux中状态的变化，只要变化，就调用render
		store.subscribe(()=>{
			this.setState({})
		})
    }
    //加法
    increment = () => {
        const { value } = this.selectNumber
        store.dispatch({type:'increment',data:value*1})
       
    }
    //减法
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({type:'decrement',data:value*1})
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
		if(count % 2 !== 0){
			store.dispatch({type:'increment',data:value*1})
		}
       
        
    }
    incermentAsync = () => {
        const {value} = this.selectNumber
        setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
    }
    render() {
        return (
            <div>
               <h1>当前求和为：{store.getState()}</h1>
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
