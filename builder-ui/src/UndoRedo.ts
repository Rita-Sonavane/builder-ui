

export class UndoRedo {

    constructor() {

        let undostack: any[] = [];
        let redostack: any[] = [];
        let target = document.getElementsByClassName("stage-designer")[0] as HTMLElement;

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

        let observer = new MutationObserver((mutations) => {

            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    if (mutation.addedNodes.length > 0) {

                        undostack.push({
                            type: 'add',
                            nodes: Array.from(mutation.addedNodes),
                        });

                    }
                    if (mutation.removedNodes.length > 0) {
                        undostack.push({
                            type: 'remove',
                            nodes: Array.from(mutation.addedNodes),
                        });
                    }
                } 
                if (mutation.type == 'attributes') {
                    undostack.push({
                        
                        type: 'attributes',
                        node: mutation.target as HTMLElement,
                        attributeName: mutation.attributeName,
                        oldeValue: mutation.oldValue,
                    });
                }
            });
        });

        var config = { attributes: true, childList: true, characterData: true, subtree: true, attributeOldValue: true, characterDataOldValue: true, attributeFilter: ["style"] }
        observer.observe(target, config);

        function undo() {
            const change = undostack.pop();
            console.log("after undo pop",undostack);
            if (change) {
                applyChange(change, true);
                redostack.push(change);
                console.log("added pop undo element into redostack ",redostack);
                console.log("after push",undostack);
                return ;
            }

        }
        function redo() {
            console.log("redostack",redostack);
            const change = redostack.pop();
            console.log("after redo pop",redostack)
            if (change) {
                applyChange(change, false);
                undostack.push(change);
                console.log("added pop redo element into undostack",undostack);
            }
        }

        function applyChange(change: any, undo: boolean) {
            if (change.type === 'add') {
                for (const node of change.nodes) {
                    if (undo) {
                        node.remove();
                    } else {
                        target.appendChild(node);
                    }
                }
            } else if (change.type === 'remove') {
                for (const node of change.nodes) {
                    if (undo) {
                        target.appendChild(node);
                    } else {
                        node.remove();
                    }
                }
            } else if (change.type === 'attributes') {
                if (undo) {
                    change.node.setAttribute(change.attributeName, change.oldeValue);
                } else {
                    change.node.setAttribute(change.attributeName, change.oldeValue);

                }
            }
        }
    }
}