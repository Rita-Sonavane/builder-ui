export class ElementCutPaste {
    constructor(selectedElement: any) {
        let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;

        selectedElement.addEventListener('keydown', (e: any) => {
            if (!(selectedElement.hasAttribute("locked"))) {
                if (e.ctrlKey && (e.keyCode == 88)) {
                    $(selectedElement).children(".resize").remove();
                    var cut_element = $(selectedElement).detach();
                    //Paste Element
                    $(document).off().on('keydown', director, (e: any) => {
                        if (e.ctrlKey && (e.keyCode == 86)) {
                            $(cut_element).appendTo(director);
                            var allClickedElements = document.querySelectorAll('[clicked="true"]');
                            $(allClickedElements).removeAttr("clicked");
                            var selecElement = document.getElementsByClassName("selected");
                            $(selecElement).removeClass("selected");
                        }
                    });
                }
            }
        });
    }
}