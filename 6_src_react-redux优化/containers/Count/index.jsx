//引入Count的UI组件
import React, { Component } from 'react'
//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

class Count extends Component {
    state = { carName: '奔驰c63' }
    //加法
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    //减法
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    incermentAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1,500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
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
//使用connect()()创建并暴露一个Count的容器组件
export default connect(state => ({ count: state }), 
// mapDispatchToProps 的一般写法
//     dispatch => {
//     return {
//         jia: number => dispatch(createIncrementAction(number)),
//         jian: number => dispatch(createDecrementAction(number)),
//         jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
//     }
// }
// mapDispatchToPropsde 的简写
{
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction,
}
)(Count)

