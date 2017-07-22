import MainComponentToModel from "../../Constants/MVC/MainComponentToModel";
import {PageModel} from "./PageModel";
export default class FirstPageModel extends PageModel{
    constructor(mainComponentToModel:MainComponentToModel) {
        super(mainComponentToModel);
    }
}