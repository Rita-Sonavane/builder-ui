import { AllElementsCutPaste } from "./AllElementsCutPaste";
import { AllElementsCopyPaste } from "./AllElementsCopyPaste";
import { AllElementsDeletion } from "./AllElementsDeletion";

export class AllElementsSelection {
    constructor() {
        var resizeHandles =
            `
  <div class="resize nw" id="nw" draggable="false" contenteditable="false"></div>
  <div class="resize n" id="n" draggable="false" contenteditable="false"></div>
  <div class="resize ne" id="ne" draggable="false" contenteditable="false"></div>
  <div class="resize w" id="w" draggable="false" contenteditable="false"></div>
  <div class="resize e" id="e" draggable="false" contenteditable="false"></div>
  <div class="resize sw" id="sw" draggable="false" contenteditable="false"></div>
  <div class="resize s" id="s" draggable="false" contenteditable="false"></div>
  <div class="resize se" id="se" draggable="false" contenteditable="false"></div>`;
        document.addEventListener('keydown', function (event: any) {
            if (event.ctrlKey && (event.keyCode == 65)) {
                var director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
                $(director).children().each(function () {
                    //---------------------For selecting All Elements--------------------------------------------------------
                    $(this).html($(this).html() + resizeHandles);
                    $(this).addClass("selected groupDraggable");
                    //---------------------For Cut Paste All Elements--------------------------------------------------------
                    var allElementsCutPaste = new AllElementsCutPaste();
                    //---------------------For Copy Paste All Elements--------------------------------------------------------
                    var allElementsCopyPaste = new AllElementsCopyPaste();
                    //---------------------For deleting All Elements--------------------------------------------------------
                    var allElementsDeletion = new AllElementsDeletion();
                    //---------------------------------------------------------------------------------------------------------

                    director.addEventListener("click", function (event: any) {
                        var children = director.children;
                        if ($(children).hasClass("groupDraggable")) {
                            var allClickedElements = document.querySelectorAll('[clicked="true"]');
                            $(allClickedElements).removeAttr("clicked");
                            var selecElement = document.getElementsByClassName("selected");
                            $(selecElement).removeClass("selected");
                            var resizeElement = document.getElementsByClassName("resize");
                            $(resizeElement).remove();
                            var draggableElement = document.getElementsByClassName("groupDraggable");
                            $(draggableElement).removeClass("groupDraggable");
                        }
                    });
                });
            }
        });
    }
}