export class undo {

    constructor() {
        // Create a stack to store changes
        let undoStack: Array<MutationRecord> = [];
        let redoStack: Array<MutationRecord> = [];

        let undoBtn = document.getElementById("undo-btn");
        undoBtn.addEventListener("click", function () {
            undo();
        });

        //--keyboard shortcut undo
        document.addEventListener('keydown', function (event: any) {
            $(".element-setting-tab .fa").removeClass("hover");
            if (event.ctrlKey && (event.keyCode == 90)) {
                $("#undo-btn").click();
            }
        });


        let redoBtn = document.getElementById("redo-btn");
        redoBtn.addEventListener("click", function () {
            redo();
        });


        // --keyboard shortcut redo
        document.addEventListener('keydown', function (event: any) {
            $(".element-setting-tab .fa").removeClass("hover");
            if (event.ctrlKey && (event.keyCode == 89)) {
                $("#redo-btn").click();
            }
        });
        //-------------------------------------------------------muttaion observer----------------------------------------------------------------
        // Create a new MutationObserver
        const observer = new MutationObserver((mutations: MutationRecord[]) => {
            // Push each mutation to the undo stack
            for (const mutation of mutations) {
                undoStack.push(mutation);
                console.log("undoStack", undoStack)
            }
        });

        // Configure the observer to listen for changes to element attributes and child elements
        var config = { attributes: true, childList: true, characterData: true, subtree: true, attributeOldValue: true, characterDataOldValue: true, attributeFilter: ["style"] }

        // Start observing the target element
        let target = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
        observer.observe(target, config);



        //-----------------------------------------------------------undo---------------------------------------------------------------

        function undo() {
            // Check if there are any changes to undo
            if (undoStack.length === 0) return;

            // Get the last change from the undo stack
            const lastChange = undoStack.pop();


            // Reverse the change
            if (lastChange.type === "attributes") {
                let node = lastChange.target as Element
                node.setAttribute(lastChange.attributeName, lastChange.oldValue);

            } else if (lastChange.type === "childList") {
                if (lastChange.removedNodes.length > 0) {
                    for (const node of lastChange.removedNodes) {
                        target.appendChild(node);
                    }
                } else if (lastChange.addedNodes.length > 0) {
                    for (const node of lastChange.addedNodes) {
                        target.removeChild(node);
                    }
                }
            }
            redoStack.push(lastChange)
        }

        //-------------------------------------------------------------redo------------------------------------------------------

        // Function to redo the last undone change
        function redo() {
            // Check if there are any changes to redo
            if (redoStack.length === 0) return;
            console.log("redoStack", redoStack);
            // Get the last undone change from the redo stack
            const lastUndoneChange = redoStack.pop();
            console.log("lastUndoneChange", lastUndoneChange)
            // Reapply the change
            if (lastUndoneChange.type === "attributes") {
                let node = lastUndoneChange.target as Element
                console.log(lastUndoneChange.oldValue);
                node.setAttribute(lastUndoneChange.attributeName, lastUndoneChange.oldValue)

            } else if (lastUndoneChange.type === "childList") {
                if (lastUndoneChange.removedNodes.length > 0) {
                    for (const node of lastUndoneChange.removedNodes) {
                        target.removeChild(node);
                    }
                } else if (lastUndoneChange.addedNodes.length > 0) {
                    for (const node of lastUndoneChange.addedNodes) {
                        target.appendChild(node);
                    }
                }
            }
            undoStack.push(lastUndoneChange);
        }
    }

}