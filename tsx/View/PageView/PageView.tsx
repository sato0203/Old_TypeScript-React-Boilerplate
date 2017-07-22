import {PageModel} from "../../Model/PageModel/PageModel";
export abstract class PageView{
    protected model:PageModel;
    constructor(model:PageModel)
    {
        this.model = model;
    }
    abstract render():JSX.Element
}