import * as React from "react";

interface MainViewProps{

}

interface MainViewState{
    name:string
}

export default class MainView extends React.Component<MainViewProps,MainViewState> {
    constructor(public props:MainViewProps,public state:MainViewState)
    {
        super(props);
        this.state = {
            name : ""
        }
    }

    handleChange = (event) =>{
        this.setState({
           name : event.target.value
        });
    }

    render() {
        return (
            <div>
                <span><input type="text" value={this.state.name} onChange={this.handleChange} /></span>
                <span>{this.state.name}</span>
            </div>
        )
    }
}