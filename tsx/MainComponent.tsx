import * as React from "react";
import PageState from "./Constants/MVC/PageState";
import FirstPageView from "./View/PageView/FirstPageView";
import FirstPageModel from "./Model/PageModel/FirstPageModel";
import {PageView} from "./View/PageView/PageView";

class MainComponentProps{

}

class MainComponentState{
    firstPageModel:FirstPageModel
    curPage:PageView
    pafeState:PageState
}


export default class MainComponent extends React.Component<MainComponentProps,MainComponentState> {
    public state:MainComponentState = new MainComponentState();
    public modelInit = ():void =>
    {
        this.state.firstPageModel = new FirstPageModel(this.controller2Model);
    }

    constructor(public props:MainComponentProps)
    {
        super(props);
    }

    //初期化
    componentWillMount(){
        //Modelの起動
        this.state.firstPageModel = new FirstPageModel(this.controller2Model);

        //最初のページを指定
        this.changePage(PageState.First);
    }

    render() {
        return this.state.curPage.render();
    }

    //contoller2Modelの設定

    private get controller2Model(){
        return {
            changePage : this.changePage,
            updateState : this.updateState
        }
    }

    //PageStateに応じたViewが起動
    public changePage = (pageState:PageState):void =>
    {
        this.state.pafeState = pageState;
        switch(pageState)
        {
            case PageState.First:
                this.state.curPage = new FirstPageView(this.state.firstPageModel);
        }
        this.updateState();
    }

    public updateState = ():void => {
        this.setState(this.state);
    }

}