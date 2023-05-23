
import { PropertyEditor } from './PropertyEditor';
import { DesignDirector } from "./DesignDirector";
import { injectable, singleton } from "tsyringe"
import { Preview } from './Preview';
import { UndoRedo } from './UndoRedo';
import { ServerUrlDetails } from './ServerUrlDetails';
import { undo } from './undo';
import { KeyboardShortcutList } from './KeyboardShortcutList';




/**
 * StageManager class invokes the DesignDirector class
 */
@singleton()
@injectable()
export class StageManager {

  constructor(design: DesignDirector, editor: PropertyEditor, preview: Preview) {

    let undo = new UndoRedo();
    let kyboardshortcutlist = new KeyboardShortcutList();



    // let undoo =  new undo
    let target = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
    let mutationList: any = [];
    let classInstance = this;

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutationList.push(mutation.target);
      });

      let element = (mutationList[0] as HTMLElement);
      let html: any = element.outerHTML;
      classInstance.saveContent(html);

    });
    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true, subtree: true, attributeOldValue: true, characterDataOldValue: true, attributeFilter: ["style"] }

    // pass in the target node, as well as the observer options
    observer.observe(target, config);
    let previewDoc = document.getElementById("preview_eye");
    $(previewDoc).off().on("click", function (event) {
      var previewPage = window.open(ServerUrlDetails.LOCAL_SOURCE_URL + "/preview.html");
    });
  }

  saveContent(html: any) {
    let htmlContentString = JSON.stringify({ htmlelement: html });
    $.ajax({
      type: "POST",
      url: ServerUrlDetails.LOCAL_SERVER_URL + "/builderdb/",
      data: htmlContentString,
      contentType: "application/json",
    });
  }


}
