export class GroupElementDeletion {
    constructor(groupedElements: any, outerSelectionDiv: any) {
        document.addEventListener('keydown', (e: any) => {
            if (e.keyCode == 46 || e.ctrlKey && (e.keyCode == 46)) {
                $(outerSelectionDiv).children().each(function () {
                    $(this).remove();
                    outerSelectionDiv.remove();
                });
            }
        });
    }
}