import React,{Component} from "react";

import "./index.scss";

class App extends Component{
    render(){
        return (
            <div id="app">
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default App;