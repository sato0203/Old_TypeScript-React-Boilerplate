import PageState from "./PageState";
export default class MainComponentToModel{
    updateState:() => void;
    changePage:(pageState:PageState) => void;
}