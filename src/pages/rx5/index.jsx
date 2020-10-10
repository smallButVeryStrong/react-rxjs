
import React, { Component } from "react"
import { of, timer, Observable, concat, merge } from 'rxjs';
import { map, take } from 'rxjs/operators'
import "./index.css"

class Main extends Component {
    constructor(props) {
        super(props)
        // 疑问
        const answer = {
            1: "书上说concat有静态操作符，还有实例操作符。实例操作符如何引入？"
        }
        this.state = {
            // concat合并流
            concatOb: [],
            // merge数据流
            mergeOb: []
        }
    }
    componentDidMount() {
        // concat数据流合并操作符  首尾相连
        const source1$ = of(1,2,3);
        const source2$ = of(4,5,6);
        // 同数组方法concat  
        const concated$ = concat(
            source1$,
            source2$
        );
        concated$.subscribe(res => {
            console.log(`concat 首位相连${res}`)
            this.setState((state) => {
                return {
                    concatOb: [...state.concatOb, `concat 首位相连${res}`]
                }
            })
        })

        // merge数据流合并操作符  先到先入
        const source3$ = timer(0, 1000).pipe(
            map(x => `${x}A`)
        )
        const source4$ = timer(500, 1000).pipe(
            map(x => `${x}B`)
        )
        const mergeed$ = merge(
            source3$,
            source4$
        )
       const subscribtion =  mergeed$.subscribe(res => {
            this.setState((state) => {
                return {
                    mergeOb: [...state.mergeOb, `merge合并==》${res}`]
                }
            })
            if (res === "5A") {
                subscribtion.unsubscribe();
            }
        })
    }
    render() {
        return (
        <div>
            <h2>rxjs第五章：合并数据流</h2>
            <div className="contain">
                <div className="item">
                    <h4>concat合并数据流</h4>
                    <ul>
                        {
                            this.state.concatOb.map((item, index) => {
                            return <li key={ index }>{ item }</li>
                            })
                        }
                    </ul>
                </div>
                <div className="item">
                    <h4>merge合并数据流</h4>
                    <ul>
                        {
                            this.state.mergeOb.map((item, index) => {
                            return <li key={ index }>{ item }</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Main;