import MainComponentToModel from "../../Constants/MVC/MainComponentToModel";
export class PageModel{
    protected mainComponentToModel:MainComponentToModel;
    constructor(mainComponentToModel:MainComponentToModel){
        this.mainComponentToModel = mainComponentToModel;
    }
}