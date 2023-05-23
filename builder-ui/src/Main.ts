import { UndoRedo } from './UndoRedo';

import "reflect-metadata";
import { container, injectable } from "tsyringe"
import { ToolBar } from "./ToolBar";
import { StageManager } from "./StageManager";
import { Preview } from "./Preview";

/**
 * MainContainer Class invoke the ToolBar and StageManager Class
 */
@injectable()
export class MainContainer {

    constructor(toolbar: ToolBar, stage: StageManager) {
   let preview = new Preview
    }
}
let main = container.resolve(MainContainer);



