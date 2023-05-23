import { GroupElementCopyPaste } from "./GroupElementCopyPaste";
import { GroupElementDesigner } from "./GroupElementDesigner";

export class GroupElementSelection {

    constructor(selectedElement: any, classInstance: any) {

        var _outer = classInstance;

        let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;

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

        var mousedownEventType = ((document.ontouchstart !== null) ? 'mousedown' : 'touchstart');


        //------------------------GROUP SELECTION -------------------------------------------------------------------------

        // -----for previous element selection-------------------
        selectedElement.addEventListener("keydown", function (eve: any) {
            if (eve.ctrlKey) {
                selectedElement.setAttribute("clicked", "true");
                $(selectedElement).html($(selectedElement).html() + resizeHandles);
                $(selectedElement).addClass("selected");
                //console.log("_outer.previousSelected", selectedElement);
            }

             // -----Target element selection-------------------------------------------------------------------------------
        $(director).off().on(mousedownEventType, function (event: any) {
            if (event.ctrlKey && event.button == 0) {
                console.log("INSIDE GROUP ELEMNT SELECTION");
                var target = event.target.parentElement;
                console.log("target", target);

                $(target).html($(target).html() + resizeHandles);
                target.setAttribute("ctrlClicked", "true");
                $(target).addClass("selected groupDraggable");

                // if ($(_outer.outerSelectionDiv).length<1) {
                    if (!_outer._outerSelectionDivCreated) {
                    _outer.outerSelectionDiv = document.createElement("div");
                    _outer.outerSelectionDiv.className = "selection-div";
                    $(_outer.outerSelectionDiv).addClass("selected groupDraggable");
                    // _outer.outerSelectionDiv.setAttribute("style", "width: 50%; height:45%;border:none;cursor:move;draggable:true;overflow:inherit;position:absolute;");
                    _outer.outerSelectionDiv.setAttribute("style", "width: ; height:;border:none;cursor:move;draggable:true;overflow:inherit;position:absolute;");
                    _outer._outerSelectionDivCreated=true;
                    console.log("$(_outer.outerSelectionDiv).length",$(_outer.outerSelectionDiv).length);
                }

                var director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;

                var groupElementDesigner = new GroupElementDesigner(director, _outer.outerSelectionDiv);
                _outer.groupelements = document.getElementsByClassName("selected");
                groupElementDesigner.groupElementsSelection(_outer.groupelements);

                let groupElementCopyPaste = new GroupElementCopyPaste(_outer.groupElements, _outer.outerSelectionDiv);

            }
        });

        });


       

        //-------------------------------------deselection of group elemnts------------------------------
        director.addEventListener("click", function (event: any) {
            if ((document.querySelectorAll('[clicked="true"]').length > 0) || (document.querySelectorAll('[ctrlClicked="true"]').length > 0)) {

                // if (_outer.groupelements != null) {
                    var selectionDiv = document.getElementsByClassName("selection-div");
                    var childrens = $(selectionDiv).children();
                    $(director).append(childrens);
                    $(selectionDiv).remove();
               // }

                var allClickedElements = document.querySelectorAll('[clicked="true"]');
                $(allClickedElements).removeAttr("clicked");

                var allClickedElements = document.querySelectorAll('[ctrlClicked="true"]');
                $(allClickedElements).removeAttr("ctrlClicked");

                var draggableElement = document.getElementsByClassName("groupDraggable");
                $(draggableElement).removeClass("groupDraggable");
                var selecElement = document.getElementsByClassName("selected");
                $(selecElement).removeClass("selected");
                var resizeElement = document.getElementsByClassName("resize");
                $(resizeElement).remove();
                $(_outer.groupelements).removeAttr("clicked");
                $(_outer.groupelements).removeClass("ui-draggable");
                $(_outer.groupelements).removeClass("ui-draggable-handle");

              

                console.log(director.children);
                _outer._outerSelectionDivCreated = false;
                _outer.groupSelectionIsInProgress = false;
                _outer.waitingForEnter = false;
            }
        });


    }

}



// import { GroupElementDesigner } from "./GroupElementDesigner";

// export class GroupElementSelection {

//     constructor(selectedElement: any, classInstance: any) {

//         var _outer = classInstance;

//         let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;

//         var resizeHandles =
//             `
//         <div class="resize nw" id="nw" draggable="false" contenteditable="false"></div>
//         <div class="resize n" id="n" draggable="false" contenteditable="false"></div>
//         <div class="resize ne" id="ne" draggable="false" contenteditable="false"></div>
//         <div class="resize w" id="w" draggable="false" contenteditable="false"></div>
//         <div class="resize e" id="e" draggable="false" contenteditable="false"></div>
//         <div class="resize sw" id="sw" draggable="false" contenteditable="false"></div>
//         <div class="resize s" id="s" draggable="false" contenteditable="false"></div>
//         <div class="resize se" id="se" draggable="false" contenteditable="false"></div>`;

//         var mousedownEventType = ((document.ontouchstart !== null) ? 'mousedown' : 'touchstart');


//         //------------------------GROUP SELECTION -------------------------------------------------------------------------

//         // -----for previous element selection-------------------
//         selectedElement.addEventListener("keydown", function (eve: any) {
//             if (eve.ctrlKey) {
//                 eve.currentTarget.setAttribute("clicked", "true");
//                 _outer.previousSelected = document.querySelectorAll('[clicked="true"]');
//                 $(_outer.previousSelected).html($(_outer.previousSelected).html() + resizeHandles);
//                 $(_outer.previousSelected).addClass("selected");

//                 console.log("_outer.previousSelected", _outer.previousSelected);
//             }

//         });


//         // -----Target element selection-------------------------------------------------------------------------------
//         $(director).on(mousedownEventType, function (event: any) {
//             if (event.ctrlKey && event.button == 0) {
//                 console.log("INSIDE GROUP ELEMNT SELECTION");
//                 var target = event.target.parentElement;
//                 console.log("target", target);

//                 $(target).html($(target).html() + resizeHandles);
//                 target.setAttribute("ctrlClicked", "true");
//                 $(target).addClass("selected groupDraggable");

//                 console.log("target", target);

//                 if (!_outer._outerSelectionDivCreated) {
//                     _outer.outerSelectionDiv = document.createElement("div");
//                     _outer.outerSelectionDiv.className = "selection-div";
//                     _outer.outerSelectionDiv.setAttribute("style", "width: ; height:;border:none;cursor:move;draggable:true;overflow:inherit;position:absolute;");
//                     _outer._outerSelectionDivCreated = true;
//                 }

//                 var director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;

//                 var groupElementDesigner = new GroupElementDesigner(director, _outer.outerSelectionDiv);
//                 _outer.groupelements = document.getElementsByClassName("selected");
//                 groupElementDesigner.groupElementsSelection(_outer.groupelements);

//             }
//         });

//         //-------------------------------------deselection of group elemnts------------------------------
//         director.addEventListener("click", function (event: any) {
//             if ((document.querySelectorAll('[clicked="true"]').length > 0) || (document.querySelectorAll('[ctrlClicked="true"]').length > 0)) {

//                 if (_outer.groupelements != null) {
//                     var selectionDiv = document.getElementsByClassName("selection-div");
//                     var childrens = $(selectionDiv).children();
//                     $(director).append(childrens);
//                     $(selectionDiv).remove();
//                 }

//                 var allClickedElements = document.querySelectorAll('[clicked="true"]');
//                 $(allClickedElements).removeAttr("clicked");

//                 var allClickedElements = document.querySelectorAll('[ctrlClicked="true"]');
//                 $(allClickedElements).removeAttr("ctrlClicked");

//                 var draggableElement = document.getElementsByClassName("groupDraggable");
//                 $(draggableElement).removeClass("groupDraggable");
//                 var selecElement = document.getElementsByClassName("selected");
//                 $(selecElement).removeClass("selected");
//                 var resizeElement = document.getElementsByClassName("resize");
//                 $(resizeElement).remove();
//                 $(_outer.groupelements).removeAttr("clicked");
//                 $(_outer.groupelements).removeClass("ui-draggable");
//                 $(_outer.groupelements).removeClass("ui-draggable-handle");

//                 console.log(director.children);
//                 _outer._outerSelectionDivCreated = false;
//                 _outer.groupSelectionIsInProgress = false;
//                 _outer.waitingForEnter = false;
//             }
//         });


//     }

// }






