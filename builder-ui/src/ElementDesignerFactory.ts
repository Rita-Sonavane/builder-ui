

import "reflect-metadata";
import { singleton } from "tsyringe";
import { injectable } from "tsyringe";
import { ElementDesigner } from "./ElementDesigner";
import { ToolElement } from "./ToolBarElement";

import { TextDesigner } from "../Designers/TextDesigner";
import { ButtonDesigner } from "../Designers/ButtonDesigner";
import { IconDesigner } from "../Designers/IconDesigner";
import { ContainerDesigner } from "../Designers/ContainerDesigner";

@injectable()
@singleton()
export class ElementDesignerFactory {
  constructor() {

  }

  /**
   * getDesignerInstance method accepts tool element and matches with a enum tool element and return matched element designer class instance
   * 
   * @param tool 
   * @returns 
   */
  getDesignerInstance(tool: ToolElement): ElementDesigner {

    switch (tool) {
      
      case ToolElement.Text:
        return new TextDesigner();

      case ToolElement.Button:
        return new ButtonDesigner();

      case ToolElement.Container:
          return new ContainerDesigner();

      case ToolElement.Icon:
            return new IconDesigner();
  

      default:

    }
  }
}
