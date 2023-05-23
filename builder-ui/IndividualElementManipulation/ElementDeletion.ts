export class ElementDeletion {
    constructor(selectedElement: any) {
        selectedElement.addEventListener('keydown', (e: any) => {
            if (!(selectedElement.hasAttribute("locked"))) {
                if (e.keyCode == 46 || e.ctrlKey && (e.keyCode == 46)) {
                    selectedElement.remove();
                }
            }
        });
    }
}