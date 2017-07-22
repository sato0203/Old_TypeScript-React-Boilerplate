import {MainComponentToModel} from "../../MainComponent";
export class PageModel{
    protected mainComponentToModel:MainComponentToModel;
    constructor(mainComponentToModel:MainComponentToModel){
        this.mainComponentToModel = mainComponentToModel;
    }
}