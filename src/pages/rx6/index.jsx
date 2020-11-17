
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

        // max 和 min：最大最小值
        const sourceMin$ = of (
            { name: 'rxjs', year: 2011 },
            { name: 'react', year: 2013 },
            { name: 'redux', year: 2015 },
        )

        const min$ = sourceMin$.pipe(
            min((a, b) => a.year - b.year)
        )

        min$.subscribe((res) => {
            console.log(`min最小值${res}`)
            this.setState({
                minValue: res
            })
        })

        const max$ = sourceMin$.pipe(
            max((a, b) => a.year - b.year)
        )
        max$.subscribe((res) => {
            this.setState({
                maxValue: res
            })
        })

        // reduce规约函数
        const sourceReduce$ = range(1, 6);
        const reduced$ = sourceReduce$.pipe(
            reduce(
                (acc, current) => acc + current,
                0
            )
        )
        reduced$.subscribe((res) => {
            this.setState({
                reduceTotal: res
            })
        })
    }
    render() {
        return (
        <div>
            <h2>rxjs第6章：辅助类操作符</h2>
            <div className="contain">
                <div className="item">
                    <h4>count:统计数据个数{this.state.countNum}</h4>
                </div>
                <div className="item">
                    <h4>min:最小值：：名称{ this.state.minValue.name } , 年份{ this.state.minValue.year }</h4>
                </div>
                <div className="item">
                    <h4>min:最大值：：名称{ this.state.maxValue.name } , 年份{ this.state.maxValue.year }</h4>
                </div>
                <div className="item">
                    <h4>reduce值：：：{ this.state.reduceTotal }</h4>
                </div>
            </div>
        </div>
        )
    }
}

export default Main;