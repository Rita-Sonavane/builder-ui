export class ElementLock {

    constructor(selectedElement: any) {

        selectedElement.addEventListener('keydown', (event: any) => {
            if (event.ctrlKey && event.shiftKey && (event.keyCode == 76)) {
                console.log("INSIDE LOCKING", selectedElement);
                $(selectedElement).children(".resize").remove();
                $(selectedElement).prop('contenteditable', event.type === "focusout");

                selectedElement.setAttribute("locked", "true");

                var posLeft = $(selectedElement).position().left;
                var posTop = $(selectedElement).position().top;
                selectedElement.style.left = posLeft + 'px';
                selectedElement.style.top = posTop + 'px';

                $(selectedElement).removeAttr("clicked");
                $(selectedElement).removeClass("selected");
            }
        });

        selectedElement.addEventListener('keydown', (event: any) => {
            if (event.ctrlKey && event.shiftKey && (event.keyCode == 191)) {
                console.log("INSIDE UN---------LOCKING", selectedElement);

                $(selectedElement).removeAttr("locked");
                $(selectedElement).prop('contenteditable', event.type === "focusin");

                $(selectedElement).removeAttr("clicked");
            }
        });

    }
}


// switch (element.classList.length) {
//     case 1:
//         console.log("inside unock00");
//         $(element).toggleClass('unlocked');
//         // var allClickedElements = document.querySelectorAll('[locked="true"]');
//         $(selectedElement).removeAttr("locked");
//         break;

//     case 2:
//         if (document.querySelectorAll('[locked="true"]').length == 0) {
//             $(element).toggleClass('unlocked');
//             // console.log("check class", ele.className);
//             $(selectedElement).prop('contenteditable', event.type === "focusout");
//             console.log("elemnt", selectedElement);
//             selectedElement.setAttribute("locked", "true");
//             var posLeft = $(selectedElement).position().left;
//             var posTop = $(selectedElement).position().top;
//             selectedElement.style.left = posLeft + 'px';
//             selectedElement.style.top = posTop + 'px';
//             console.log("ELEMNT LOCK TRUE",);
//         }
//         break;

// }