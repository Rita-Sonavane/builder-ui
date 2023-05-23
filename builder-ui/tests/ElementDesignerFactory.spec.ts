import "reflect-metadata"
import { ToolElement } from "./DemotoolBarElement";
import { ElementDesignerFactory } from "./../src/ElementDesignerFactory";
import { TextDesigner } from "../Designers/TextDesigner";
import { ButtonDesigner } from "../Designers/ButtonDesigner";


let toolElement = ToolElement;


describe('getDesignerInstance module', () => {
    var elementDesignerFactoy = new ElementDesignerFactory();
    it("should return TextDesigner instance", () => {

        let tool = elementDesignerFactoy.getDesignerInstance(toolElement.Text);
        let isdemoTextDesigner = tool instanceof TextDesigner;
        expect(isdemoTextDesigner).toBe(true);
    });

    it("should return TextDesigner instance", () => {

        let tool = elementDesignerFactoy.getDesignerInstance(toolElement.Button);
        let isdemoButtonDesigner = tool instanceof ButtonDesigner;
        expect(isdemoButtonDesigner).toBe(true);
    });
});