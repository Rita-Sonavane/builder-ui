import { DomSubscriber } from './DomSubscriber';
import { SubscribeTo, WebComponent } from "./Decorator";
import { ToolSelectedEvent } from "./ToolSelectedEvent";
import { ElementDesignerFactory } from "./ElementDesignerFactory";
import { IndexPageSelection } from './IndexPageSelection';




/**
 * DesignDirector This class handles the stage-designer div events
 *
 * click on stage-designer div if selectionMode is true it will return element positon X , Y
 * and if the selectionMode is flase it will create the new element and return element positon X , Y
 *
 */
@WebComponent({
  selector: "app-design"
})

@SubscribeTo(ToolSelectedEvent)
export class DesignDirector extends HTMLElement implements DomSubscriber {

  private currentSelectedTool: any;
  private selectionMode: Boolean = true;
  private director: HTMLElement;
  private elementSelected = false;
  private designer: any;
  private elementDropped = false;



  public getElementDropped() {
    return this.elementDropped;
  }
  public setElementDropped(elementDropped: boolean) {
    this.elementDropped = elementDropped;
  }
  appendElementCount = 0;

  constructor() {

    super();

    // let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
    // $(director).off().on("click", function () {
    //   let index = new IndexPageSelection;
    //   index.selection(director);

    // });



  }

  getAttachedElement(): any {
    this.director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
    for (let children of this.director.children) {
      var childrenObj = Object.create(children);
    }


  }
  /**
   *
   * @returns getDirectorElement(): This method return the html div element(user_body)
   */
  getDirectorElement(): HTMLElement {
    return <HTMLElement>$(".stage-designer")[0];
  }
  /**
   *
   * @param event This method returns the current onselected tool
   */
  onToolSelectedEvent(event: any) {

    this.currentSelectedTool = event.toolType;
    this.elementDropped = event.elementDropped
    this.setElementDropped(false);
    var id_outer: any = 1;
    var id_inner: any = 1;
    let _elementDesignerFactoy = new ElementDesignerFactory();
    var _outer = this;

    let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
    director.addEventListener("click", function (event: any) {

      //----------------new element instance mode---------------------------------------------

      if (_elementDesignerFactoy != undefined) {
        let designer = _elementDesignerFactoy.getDesignerInstance(_outer.currentSelectedTool);
        if (_outer.designer != undefined) {
        }
        if (_outer.elementDropped == false) {
          if (_outer.getElementDropped() == false) {
            designer.newElementInstance(_outer.getDirectorElement(), event.x, event.y, id_outer, id_inner);
            id_outer++;
            id_inner++;
            _outer.selectionMode = true;
            _outer.setElementDropped(true);

          }
        }

      }
      //------------------------selection mode-------------------------------------------------

      if (_outer.selectionMode == true) {
        if (this.hasChildNodes) {
          let divHierarchy = this.children;
          if (divHierarchy != null) {
            $(divHierarchy).off().one("click", function (e) {
              var currentSelectedElement: any = e.currentTarget;
              let designer = _elementDesignerFactoy.getDesignerInstance(_outer.currentSelectedTool);
              designer.selection(currentSelectedElement, event.x, event.y);
            });
          }
        }
      }
    });

  }


}