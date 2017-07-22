import * as React from "react";
import {PageView} from "./PageView";

export default class FirstPageView extends PageView{
    render():JSX.Element{
        return (
            <div>
                <span>Hello</span>
            </div>
        );
    }
}