export class ElementCopyPaste {
    constructor(selectedElement: any) {

        let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
        var cloneCount = 2;
        var innerClone = 2;
        //-----------Copy Element------------------------------
        $(document).off().on('keydown', function (e: any) {
            // if (!(selectedElement.hasAttribute("locked"))) {

            if (e.ctrlKey && (e.keyCode == 67)) {
                $(selectedElement).children(".resize").remove();
                var posLeft = $(selectedElement).position().left;
                var posTop = $(selectedElement).position().top;
                $(selectedElement).prop('contenteditable', e.type === "focusout");

                var copy_element = $(selectedElement).clone().attr('id', selectedElement.id + cloneCount++);
                $(copy_element).find(":first-child").attr('id', selectedElement.children[0].id + innerClone++);

                //--------Paste Element--------------------------------
                $(document).on('keydown', director, (e: any) => {
                    if (e.ctrlKey && (e.keyCode == 86)) {
                        $(copy_element).css({ 'left': posLeft + 10 + "px", 'top': posTop + 30 + "px" }).appendTo(director);
                        $(selectedElement).prop('contenteditable', e.type === "focusin");
                        var allClickedElements = document.querySelectorAll('[clicked="true"]');
                        $(allClickedElements).removeAttr("clicked");
                        var selecElement = document.getElementsByClassName("selected");
                        $(selecElement).removeClass("selected");
                    }

                });
            }
            // }
        });
    }
}