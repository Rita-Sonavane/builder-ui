export class GroupUnlocking {

    constructor(groupedElements: any, outerSelectionDiv: any) {

        $(document).off().on('keydown', function (event: any) {
            if (event.ctrlKey && event.shiftKey && (event.keyCode == 191)) {
                $(outerSelectionDiv).children().each(function () {
                    $(this).removeAttr("locked");
                    $(groupedElements).prop('contenteditable', event.type === "focusin");
                });
            }
        });

    }
}