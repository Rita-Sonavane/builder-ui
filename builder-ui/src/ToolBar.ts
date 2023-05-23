import "reflect-metadata"
import { injectable, singleton } from "tsyringe"
import { EventBus } from "./../event-bus/EventBus";
import { ToolElement } from "./ToolBarElement";
import { ToolSelectedEvent } from "./ToolSelectedEvent";
import { AllElementsSelection } from "../AllElementManipulation/AllElementsSelection";


/**
 * ToolBar Class adds the click event on toolbar and if clicked element id matches with tag id then fires the ToolSelectedEvent
 */

@injectable()
@singleton()
export class ToolBar {


  constructor() {

    var _outer = this;
    window.addEventListener("load", function (event) {
      let toolBar = document.getElementsByClassName("toolbox-pannel")[0] as HTMLElement;
      toolBar.addEventListener("click", function (event: any) {

        const tool_element = (event.target as Element).className
        const toolEvent = new ToolSelectedEvent();


        switch (tool_element) {
          case "element_Text":
            toolEvent.toolType = ToolElement.Text;
            toolEvent.elementDropped = false;
            break;

          case "element_Button":
            toolEvent.toolType = ToolElement.Button;
            toolEvent.elementDropped = false;
            break;

          case "element_container":
            toolEvent.toolType = ToolElement.Container;
            toolEvent.elementDropped = false;
            break;

          case "icon_container":
            toolEvent.toolType = ToolElement.Icon;
            toolEvent.elementDropped = false;
            break;
        }

        EventBus.getInstance().fireEvent(toolEvent);


      }.bind(this)
      );

    });

    //----------------------------Selecting All Elemnts----------------------------------------------------------------------------
    var keyboardShortcut = new AllElementsSelection();

    //-------------------KEYBORDSHORTCUTS FOR NAVIGATION----------------------------------------------------

    // Navigate to keyboard shortcuts
    document.addEventListener('keydown', (e: any) => {
      if (e.shiftKey && (e.keyCode == 72)) {
        $("#keyboard-shortcut").click();
      }
    });

    // Navigate to Element tree
    document.addEventListener('keydown', (e: any) => {
      if (e.shiftKey && (e.keyCode == 69)) {
        $(".element-tree").click();
      }
    });

    // Navigate to Tool
    document.addEventListener('keydown', (e: any) => {
      if (e.shiftKey && (e.keyCode == 84)) {
        $("#tool").click();
      }
    });

    //-------------------------------------------------Property Editor TABS------------------------------------------------------------
    //Navigation in 
    // const dropdownToggle = $(".style-tab"); // Brush tab
    // const dropdownMenu = $(".panel");
    // const dropdownMenuItems = $(dropdownMenu).children();
    // const dropdownMenuItemsSummy = Array.from($(dropdownMenuItems).children());
    // let active = -1;
    // document.addEventListener('keydown', function (event: any) {
    //   $(".style-tab .fa").removeClass("hover");
    //   if (event.shiftKey && (event.keyCode == 80)) {

    //     $(dropdownToggle).click();
    //     $(".style-tab .fa").addClass("hover")
    //   }
    //   //Navigation in Style Tab
    //   $(".element-setting-tab .fa").removeClass("hover");
    //   if (event.shiftKey && (event.keyCode == 83)) {

    //     $(".element-setting-tab").click();
    //     $(".element-setting-tab .fa").addClass("hover")
    //   }

    //   //Navigation in Style Manager
    //   $(".style-manager .fa").removeClass("hover");
    //   if (event.shiftKey && (event.keyCode == 77)) {

    //     $(".style-manager").click();
    //     $(".style-manager .fa").addClass("hover")
    //   }

    // });

    // //-----------------------------------RESPONSIVE BAR MODES------------------------------------------------------------------------------------------------

    // //Switch to MODE
    // document.addEventListener('keydown', function (event: any) {
    //   $("i").css("color", "");
    //   switch (event.keyCode) {
    //     case 49:
    //       $("#desk").click();
    //       $("#desk").css("color", "aqua");
    //       break;
    //     case 50:
    //       $("#lap").click();
    //       $("#lap").css("color", "aqua");
    //       break;
    //     case 51:
    //       if (!event.shiftKey) {
    //         $("#mob").click();
    //         $("#mob").css("color", "aqua");
    //       }
    //       break;
    //   }
    // });

    //------------------Element Tree---------------------------------------
    let tools = document.getElementsByClassName("tools-pannel tools")[0] as HTMLElement;
    let elementTree = document.getElementsByClassName("element-tree")[0] as HTMLElement;
    let tool = document.getElementsByClassName("all-tools")[0] as HTMLElement;
    let tree = document.getElementsByClassName("element-tree-pannel")[0] as HTMLElement;


    tools.addEventListener("click", function () {
      let show = tool.style.display = "block";
      let hide = tree.style.display = "none";
    });

    elementTree.addEventListener("click", function (event) {

      let show = tree.style.display = "block";
      let hide = tool.style.display = "none";

      let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
      if (director.childNodes) {

        let elements = director.children
        let temp = ""
        let textId: any = 1
        let btnId: any = 1

        for (let element of elements) {
          if (element.id.match("ao-text")) {
            temp += "<div> Text " + textId++ + "</div>"
          }
          if (element.id.match("ao-button")) {
            temp += " <div> Button " + btnId++ + "</div>"
          }
        }
        tree.innerHTML = temp;
      }
    })
  }
}