/**
 * Created by hao.luo on 2017/7/5.
 */

import React,{ Component } from 'react';

class HelloMessage extends Component {
    render(){
        return (
            <h1>{this.props.name}</h1>
        )
    }
}

export default HelloMessage
