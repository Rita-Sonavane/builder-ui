export class GroupLocking {

    constructor(groupedElements: any, outerSelectionDiv: any) {

        // $(document).off().on('keydown', function (event: any) {
            document.addEventListener('keydown', (event: any) => {
            if (event.ctrlKey && event.shiftKey && (event.keyCode == 76)) {
                $(groupedElements).prop('contenteditable', event.type === "focusout");
                $(outerSelectionDiv).children().each(function () {
                    console.log("this locking", this);
                    $(this).children(".resize").remove();
                    var posLeft = $(this).position().left;
                    var posTop = $(this).position().top;
                    this.setAttribute("locked", "true");
                    this.style.left = posLeft + 'px';
                    this.style.top = posTop + 'px';
                    console.log("groupedElements", this);

                });
            }

        });



    }
}