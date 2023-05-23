export class GroupElementCutPaste {
    constructor(groupedElements: any, outerSelectionDiv: any) {
        let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
        document.addEventListener('keydown', (e: any) => {
            if (e.ctrlKey && (e.keyCode == 88)) {
                $(outerSelectionDiv).children().each(function () {
                    var cut_element = $(this).detach();
                    //--------Paste Element--------------------------------
                    $(document).on('keydown', director, (e: any) => {
                        if (e.ctrlKey && (e.keyCode == 86)) {
                            $(cut_element).appendTo(outerSelectionDiv);
                        }
                    });
                });
            }
        });
    }
}