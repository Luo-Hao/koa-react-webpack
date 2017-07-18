/**
 * Created by hao.luo on 2017/7/5.
 */

import React, { Component } from 'react';

class ErrorPage extends Component {
    constructor(props){
        super(props);
    };

    renderAdd(){
        return <div>404</div>
    }

    render(){
        return (
            <div>
                404
                {this.renderAdd()}
            </div>
        )
    }
}

export default ErrorPage;