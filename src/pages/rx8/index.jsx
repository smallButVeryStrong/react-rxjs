
import React, { Component } from "react"
import { of, timer, Observable, concat, merge, range } from 'rxjs';
import { count, min, max, reduce } from 'rxjs/operators'
import "./index.css"

class Main extends Component {
    constructor(props) {
        super(props)
        // 疑问
        const answer = {
            
        }
        this.state = {
            // count统计数量
            countNum: 0,
            // min 最小值
            minValue : {},
            // max 最大值
            maxValue: {},
            // reduce值
            reduceTotal: 0,
        }
    }
    componentDidMount() {
        // count 统计数据个数
        const source$ = concat(
            of(1, 2, 3),
            of(4, 5, 6)
        )
        const count$ = source$.pipe(
            count()
        )
        count$.subscribe((res) => {
            console.log(`count总体数据的数量是${res}`);
            this.setState({
                countNum: res
            })
        })
    }
    render() {
        return (
        <div>
            <h2>rxjs第8章：转化数据流</h2>
            <div className="contain">
                <div className="item">
                    <h4>count:统计数据个数{this.state.countNum}</h4>
                </div>
            </div>
        </div>
        )
    }
}

export default Main;