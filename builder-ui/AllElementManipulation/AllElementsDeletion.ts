export class AllElementsDeletion {

    constructor() {

        document.addEventListener('keydown', (e: any) => {
            ///  if (document.querySelectorAll('[locked="true"]').length == 0) {
            if (e.keyCode == 46 || e.ctrlKey && (e.keyCode == 46)) {
                var director = document.getElementsByClassName("stage-designer")[0] as any;
                var child = director.children;
                if ($(child).hasClass("selected")) {
                    while (director.hasChildNodes()) {
                        director.removeChild(director.childNodes[0]);
                    }
                }
            }
            //   }
        });
    }
}