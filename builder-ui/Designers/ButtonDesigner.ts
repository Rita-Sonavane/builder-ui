import { ButtonPropertyDescriptor } from "../ElementDescriptions/ButtonPropertyDescroiptor";
import { DesignerConversions } from "../src/DesignerConversions";
import { ElementCopyPaste } from "../IndividualElementManipulation/ElementCopyPaste";
import { ElementCutPaste } from "../IndividualElementManipulation/ElementCutPaste";
import { ElementDeletion } from "../IndividualElementManipulation/ElementDeletion";
import { ElementDesigner } from "../src/ElementDesigner";
import { GroupElementSelection } from "../GroupElementManipulation/GroupElementSelection";
import { PropertyEditor } from "../src//PropertyEditor";
import { ElementLock } from "../IndividualElementManipulation/ElementLock";
/**
 * TexDesigner class extends the ElementDesigner class
 */
export class ButtonDesigner extends ElementDesigner {

    private previousSelected: any;
    private outerSelectionDiv: any;
    private groupelements: any;
    private groupSelectionIsInProgress: any;
    private keydownGroupSelection = false;
    private groupSelection = false;
    private _outerSelectionDivCreated: boolean = false;



    constructor() {
        super();
    }
    public newElementInstance(director: HTMLDivElement, x: number, y: number, id_outer: any, id_inner: any): HTMLElement {


        let element = document.createElement("div");
        element.id = "ao-button" + id_outer;
        element.setAttribute("style", "box-sizing: border-box;  position: absolute;  opacity: 1; height:4vh;top: 570px; left: 397px; width: 9vw;");
        element.style.left = x - 490 + 'px';
        element.style.top = y - 60 + 'px';

        let textField = document.createElement("button");
        let innerid = textField.id = "Button" + id_inner;
        textField.innerText = "....editme.....";
        textField.setAttribute("style", "min-height: -webkit-fill-available;box-sizing: border-box;height:100%;width:100%; position: relative;padding: 0px; cursor: inherit; background: none #d98c8c; border: none; text-align: center; font-family: var(--font_default); font-size: 14px; font-weight: 700; color: #000; letter-spacing: 2px; line-height: 1; border-radius: 5px;");
        element.appendChild(textField);
        director.appendChild(element);
        return element;

    }

    public selection(selectedElement: any, x: number, y: number): any {

        var _outer = this;
        let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
        selectedElement.className = "resizable";
        selectedElement.setAttribute("contenteditable", "true");

        var dragging = false,
            currentDragged: any;

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


        var resizing = false,
            currentResizeHandle: any,
            sX: any,
            sY: any;
        var mousedownEventType = ((document.ontouchstart !== null) ? 'mousedown' : 'touchstart'),
            mousemoveEventType = ((document.ontouchmove !== null) ? 'mousemove' : 'touchmove'),
            mouseupEventType = ((document.ontouchmove !== null) ? 'mouseup' : 'touchend');

        selectedElement.addEventListener(mousedownEventType, function (e: any) {
            if (!(selectedElement.hasAttribute("locked"))) {
                if (!e.target.classList.contains("resize") && !resizing) {
                    currentDragged = $(this);
                    dragging = true;
                    sX = e.pageX;
                    sY = e.pageY;
                }
            }
            if (e.currentTarget == selectedElement) {
                _outer.updateProperties(selectedElement);
            }
        });

        selectedElement.addEventListener("focus", function (e: any) {
            $(this).html($(this).html() + resizeHandles);
            // $(".container").css("display", "flex");

            if (!(selectedElement.hasAttribute("locked"))) {
                $(".resize").on(mousedownEventType, function (e) {
                    currentResizeHandle = $(this);
                    resizing = true;
                    sX = e.pageX;
                    sY = e.pageY;
                });
            }
        });

        var groupElementSelection = new GroupElementSelection(selectedElement, this);

        selectedElement.addEventListener("blur", function (event: any) {
            if (document.querySelectorAll('[clicked="true"]').length == 0) {
                if (!event.target.classList.contains("groupDraggable")) {
                    $(this).children(".resize").remove();
                    $(this).removeClass("selected");
                }
            }
        });

        $(".stage-designer").on(mousemoveEventType, function (e: any) {
            var xChange = e.pageX - sX,
                yChange = e.pageY - sY;
            if (resizing) {
                e.preventDefault();
                var parent = currentResizeHandle.parent();
                switch (currentResizeHandle.attr('id')) {
                    case "nw":
                        var newWidth = parseFloat(parent.css('width')) - xChange,
                            newHeight = parseFloat(parent.css('height')) - yChange,
                            newLeft = parseFloat(parent.css('left')) + xChange,
                            newTop = parseFloat(parent.css('top')) + yChange;
                        break;
                    case "n":
                        var newWidth = parseFloat(parent.css('width')),
                            newHeight = parseFloat(parent.css('height')) - yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top')) + yChange;
                        break;
                    case "ne":
                        var newWidth = parseFloat(parent.css('width')) + xChange,
                            newHeight = parseFloat(parent.css('height')) - yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top')) + yChange;
                        break;
                    case "e":
                        var newWidth = parseFloat(parent.css('width')) + xChange,
                            newHeight = parseFloat(parent.css('height')),
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "w":
                        var newWidth = parseFloat(parent.css('width')) - xChange,
                            newHeight = parseFloat(parent.css('height')),
                            newLeft = parseFloat(parent.css('left')) + xChange,
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "sw":
                        var newWidth = parseFloat(parent.css('width')) - xChange,
                            newHeight = parseFloat(parent.css('height')) + yChange,
                            newLeft = parseFloat(parent.css('left')) + xChange,
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "s":
                        var newWidth = parseFloat(parent.css('width')),
                            newHeight = parseFloat(parent.css('height')) + yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top'));
                        break;
                    case "se":
                        var newWidth = parseFloat(parent.css('width')) + xChange,
                            newHeight = parseFloat(parent.css('height')) + yChange,
                            newLeft = parseFloat(parent.css('left')),
                            newTop = parseFloat(parent.css('top'));
                        break;
                }
                //Width
                var containerWidth = parseFloat(parent.parent().css("width"));
                if (newLeft < 0) {
                    newWidth += newLeft;
                    newLeft = 0;
                }
                if (newWidth < 0) {
                    newWidth = 0;
                    newLeft = parent.css("left");
                }
                if (newLeft + newWidth > containerWidth) {
                    newWidth = containerWidth - newLeft;
                }
                parent
                    .css('left', newLeft + "px")
                    .css('width', newWidth + "px");
                sX = e.pageX;
                //Height
                var containerHeight = parseFloat(parent.parent().css("height"));
                if (newTop < 0) {
                    newHeight += newTop;
                    newTop = 0;
                }
                if (newHeight < 0) {
                    newHeight = 0;
                    newTop = parent.css("top");
                }
                if (newTop + newHeight > containerHeight) {
                    newHeight = containerHeight - newTop;
                }
                parent
                    .css('top', newTop + "px")
                    .css('height', newHeight + "px");
                sY = e.pageY;
            }
            else if (dragging) {

                e.preventDefault();
                var draggedWidth = parseFloat(currentDragged.css("width")),
                    draggedHeight = parseFloat(currentDragged.css("height")),
                    containerWidth = parseFloat(currentDragged.parent().css("width")),
                    containerHeight = parseFloat(currentDragged.parent().css("height"));
                var newLeft = (parseFloat(currentDragged.css("left")) + xChange),
                    newTop = (parseFloat(currentDragged.css("top")) + yChange);
                if (newLeft < 0) {
                    newLeft = 0;
                }
                if (newTop < 0) {
                    newTop = 0;
                }
                if (newLeft + draggedWidth > containerWidth) {
                    newLeft = containerWidth - draggedWidth;
                }
                if (newTop + draggedHeight > containerHeight) {
                    newTop = containerHeight - draggedHeight;
                }
                currentDragged
                    .css("left", newLeft + "px")
                    .css("top", newTop + "px");
                sX = e.pageX;
                sY = e.pageY;
            }
        })
            .on(mouseupEventType, function (e) {
                dragging = false;
                resizing = false;
            });


        //----------------------MANIPULATION OF ELEMENTS---------------------------------------

        //----------------------element deletion-----------------------------------------------
        let elementDeletion = new ElementDeletion(selectedElement);

        //-----------------------Element Cut paste -------------------------------------------
        let elementCutPaste = new ElementCutPaste(selectedElement);

        //-----------------------Element Copy paste ------------------------------------------
        let elementCopyPaste = new ElementCopyPaste(selectedElement);

        //-----------------------Element Locking ---------------------------------------------
        let elementLock = new ElementLock(selectedElement);


        return selectedElement;
    }

    updateProperties(selectedElement: any) {

        let propertyDescriptor = new ButtonPropertyDescriptor();
        let propertyEditor = new PropertyEditor();
        let designerConversion = new DesignerConversions;

        propertyDescriptor.setId((selectedElement.firstChild as HTMLElement).id);
        propertyDescriptor.setOuterId((selectedElement.id));
        propertyDescriptor.setInnerText((selectedElement.firstChild.innerText))
        propertyDescriptor.setWidth(designerConversion.strtonum(selectedElement.style.width));
        propertyDescriptor.setHeigth(designerConversion.strtonum(selectedElement.style.height));
        propertyDescriptor.setMinWidth(designerConversion.strtonum(selectedElement.style.minWidth))
        propertyDescriptor.setMinHeight(designerConversion.strtonum(selectedElement.style.minHeight))
        propertyDescriptor.setFontType(selectedElement.firstChild.style.fontFamily);
        propertyDescriptor.setFontWeight(selectedElement.firstChild.style.fontWeight);
        propertyDescriptor.setFontColor(designerConversion.rgb2hex(selectedElement.firstChild.style.color));
        propertyDescriptor.setFontSize(designerConversion.strtonum(selectedElement.firstChild.style.fontSize));
        propertyDescriptor.setBackgroundColor(designerConversion.rgb2hex(selectedElement.firstChild.style.backgroundColor));

        propertyEditor.populateProperties(propertyDescriptor);

    }
}