import {PageModel} from "./PageModel";
import {MainComponentToModel} from "../../MainComponent";

export default class FirstPageModel extends PageModel{
    constructor(mainComponentToModel:MainComponentToModel) {
        super(mainComponentToModel);
    }
}