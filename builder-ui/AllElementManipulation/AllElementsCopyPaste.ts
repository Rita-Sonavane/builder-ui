export class AllElementsCopyPaste {

    constructor() {

        var cloneCount = 2;
        var innerClone = 2;

        $(document).off().on('keydown', function (e: any) {
            // if (document.querySelectorAll('[locked="true"]').length == 0) 

            if (e.ctrlKey && (e.keyCode == 67)) {
                var director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;
                var child = director.children;
                if ($(child).hasClass("selected")) {

                    $(director).children().each(function () {
                        $(this).children(".resize").remove();
                        var posLeft = $(this).position().left;
                        var posTop = $(this).position().top;

                        $(this).prop('contenteditable', e.type === "focusout");
                        var copy_element = $(this).clone().attr('id', this.id + cloneCount++);
                        $(copy_element).find(":first-child").attr('id', this.children[0].id + innerClone++);

                        //--------Paste Element--------------------------------
                        $(document).on('keydown', director, (e: any) => {
                            if (e.ctrlKey && (e.keyCode == 86)) {

                                $(copy_element).css({ 'left': posLeft + 10 + "px", 'top': posTop + 30 + "px" }).appendTo(director);
                                $(this).prop('contenteditable', e.type === "focusin");
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