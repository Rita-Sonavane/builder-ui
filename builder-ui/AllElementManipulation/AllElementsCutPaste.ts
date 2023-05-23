export class AllElementsCutPaste {

    constructor() {

        document.addEventListener('keydown', (e: any) => {
            // if (document.querySelectorAll('[locked="true"]').length == 0) {
            if (e.ctrlKey && (e.keyCode == 88)) {
                var director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
                var child = director.children;
                if ($(child).hasClass("selected")) {

                    $(director).children().each(function () {
                        $(this).children(".resize").remove();
                        var cut_element = $(this).detach();
                        //--------Paste Element--------------------------------

                        $(document).on('keydown', director, (e: any) => {
                            if (e.ctrlKey && (e.keyCode == 86)) {
                                $(cut_element).appendTo(director);
                                var allClickedElements = document.querySelectorAll('[clicked="true"]');
                                $(allClickedElements).removeAttr("clicked");
                                var selecElement = document.getElementsByClassName("selected");
                                $(selecElement).removeClass("selected");
                            }
                        });

                    });
                }
            }
            //  }
        });
    }
}