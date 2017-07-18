/**
 * Created by hao.luo on 2017/7/5.
 */

import React, { Component } from 'react';

import fetch from '../common/fetch';
import "../less/style.less";

import HelloMessage from '../components/demo/demo01';
import Page from '../components/demo/demo02';

class ReactTest extends Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.state = {
            data: []
        };
    }

    search(){
        fetch.post({
            url: '/getArticle/a',
            body: {
                code: 'utf-8',
                q: this.q.value
            },
            callback: (data) => {
                this.setState({data: data.result});
            }
        });
    }

    renderAddmoreBtn(){
        return <button className="addMore" onClick={this.search}>查询</button>
    }

    render(){
        return (
            <div>
                <Page/>
                <HelloMessage name="淘宝商品搜索" />
                搜索：<input type="text" ref={(input) => this.q = input}/>
                {this.renderAddmoreBtn()}
                <ol>
                    {
                        this.state.data.map((child) => <li key={child[1]}>{child[0]}</li>)
                    }
                </ol>
            </div>
        )
    }
}

export default ReactTest;