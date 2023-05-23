export class Preview {

    constructor() {
        const url = 'http://localhost:3000/builderdb/';

        $.get(url, function (data) {

            let lastPageState = (data[data.length - 1]).htmlelement;
            var newElement = new DOMParser().parseFromString(lastPageState, "text/html");
            let previewDocument = document.getElementsByClassName("preview-page")[0];
            previewDocument.appendChild(newElement.documentElement);
        });
    }

}