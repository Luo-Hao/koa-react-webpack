/**
 * Created by hao.luo on 2017/7/5.
 */

import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    };

    search(){

    }

    renderAddmoreBtn(){
        return <button className="addMore" onClick={this.search}>登陆</button>
    }

    render(){
        return (
            <div>
                登陆
                {this.renderAddmoreBtn()}
            </div>
        )
    }
}

export default Login;