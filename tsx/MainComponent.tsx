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

export class MainComponentToModel{
    updateState:() => void;
    changePage:(pageState:PageState) => void;
}

export default class MainComponent extends React.Component<MainComponentProps,MainComponentState> {
    public state:MainComponentState = new MainComponentState();
    constructor(public props:MainComponentProps)
    {
        super(props);
    }

    //初期化
    componentWillMount(){
        //Modelの起動
        this.state.firstPageModel = new FirstPageModel(this.mainComponentToModel);

        //最初のページを指定
        this.changePage(PageState.First);
    }

    render() {
        return this.state.curPage.render();
    }

    //mainComponentToModelの設定

    private get mainComponentToModel(){
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