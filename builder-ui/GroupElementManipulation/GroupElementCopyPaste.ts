export class GroupElementCopyPaste {
    constructor(groupedElements: any, outerSelectionDiv: any) {
        let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
        console.log("INSIDE COPY GROUP")
        var cloneCount = 2;
        var innerClone = 2;
        $(document).off().on('keydown', function (e: any) {
            if (e.ctrlKey && (e.keyCode == 67)) {
                $(outerSelectionDiv).children().each(function () {
                    console.log("this", this);
                    var posLeft = $(this).position().left;
                    var posTop = $(this).position().top;
                    $(groupedElements).prop('contenteditable', e.type === "focusout");
                    var copy_element = $(this).clone().attr('id', this.id + cloneCount++);
                    $(copy_element).find(":first-child").attr('id', this.children[0].id + innerClone++);
                    //--------Paste Element--------------------------------
                    $(document).on('keydown', director, (e: any) => {
                        if (e.ctrlKey && (e.keyCode == 86)) {
                            $(copy_element).css({ 'left': posLeft + 10 + "px", 'top': posTop + 30 + "px" }).appendTo(outerSelectionDiv);
                            $(groupedElements).prop('contenteditable', e.type === "focusin");
                        }
                    });
                });
            }
        });
    }
}