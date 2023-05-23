import { GroupElementDeletion } from "./GroupElementDeletion";
import { GroupElementCutPaste } from "./GroupElementCutPaste";
import { GroupLocking } from "./GroupLocking";
import { GroupUnlocking } from "./GroupUnlocking";
export class GroupElementDesigner {

    private director: HTMLElement;
    private outerSelectionDiv: HTMLElement;
    private selectedObjets: any;


    constructor(director: HTMLElement, outerSelectionDiv: any) {
        this.director = director;
        this.outerSelectionDiv = outerSelectionDiv;
    }
    public groupElementsSelection(groupElements: any) {
        var _outer = this;
        $(groupElements).addClass("selected");
        console.log("groupElements",groupElements);
        var collectionDiv = $(_outer.outerSelectionDiv).append(groupElements);
        $(_outer.director).append(collectionDiv);
        _outer.selectedObjets = _outer.outerSelectionDiv;


        let groupElementDeletion = new GroupElementDeletion(groupElements, _outer.outerSelectionDiv);
      
        let groupElementCutPaste = new GroupElementCutPaste(groupElements, _outer.outerSelectionDiv);

        let groupLocking = new GroupLocking(groupElements, _outer.outerSelectionDiv);
        let groupUnlocking = new GroupUnlocking(groupElements, _outer.outerSelectionDiv);
        

       //  if (!(groupElements.hasAttribute("locked"))) {
        $(_outer.selectedObjets).draggable({
            drag: function (event: any, ui: any) {

                var currentLocation = $(this).position();
                var prevLoc = $(this).data('prevLoc');
                if (!prevLoc) {
                    prevLoc = ui.originalPosition;
                }
                var offsetLeft = currentLocation.left - prevLoc.left;
                var offsetTop = currentLocation.top - prevLoc.top;

                $(_outer.selectedObjets).children().each(function () {

                    var $this = $(this);
                    var pos = $this.position();
                    var l = pos.left;
                    var t = pos.top;
                    $this.css('left', l + offsetLeft);
                    $this.css('top', t + offsetTop);
                });

                $(_outer.selectedObjets).children().each(function () {
                    $(this).children().removeData('prevLoc');
                });
                $(this).data('prevLoc', currentLocation);
            }

        });
     //    }
    }
}














































































