import { EditablePropertyManager } from './EditablePropertyManager';
import { StageElementSelectedEvent } from './StageElementSelectedEvent';
import { SubscribeTo } from "./Decorator";
import { singleton } from 'tsyringe';
import { DesignerConversions } from './DesignerConversions';


@singleton()
@SubscribeTo(StageElementSelectedEvent)
export class PropertyEditor implements EditablePropertyManager {

    constructor() {

    }
    /**
     * 
     * @param elementDescription  
     * populatePropeties takes the parameter as elementDescription and update the properties of the element
     */
    populateProperties(elementDescription: any) {
        // console.log("elementDescription", elementDescription)

        let con = new DesignerConversions;



        //----------------------selector------------------------------------------------
        const selector = document.getElementById("selector-text") as HTMLInputElement;
        selector.setAttribute("value", elementDescription.getId());
        selector.addEventListener("change", function (e: any,) {
            var element = document.getElementById(elementDescription.getId())
            element.setAttribute("id", selector.value);
        });

        //-------------------------Inner Text-----------------------------------------------

        $("#edit-text").val(elementDescription.getInnerText());
        $("#edit-text").off().on("input", function (e: any) {
            elementDescription.setInnerText(e.target.value);
            document.getElementById(elementDescription.getId()).innerText = e.target.value;
        });

        // --------------width-------------------------------------------------------------------------------------------------------------------------------------------------

        let widthelement = document.getElementById("selection-unit-option-width");
        widthelement.addEventListener("input", function () {

            let selectUnitWidth: any = document.querySelector('#selection-unit-option-width');
            let widthUnit = selectUnitWidth.value;

            let width: any = document.querySelector('#edit-width');
            let widthNum = width.value;
            elementDescription.setWidth(con.strtonum(widthNum));
            document.getElementById(elementDescription.getOuterId()).style.width = con.strtonum(widthNum) + widthUnit;
        });

        $("#edit-width").val(elementDescription.getWidth());
        $("#edit-width").off().on("input", function (e: any) {
            let selectUnitWidth: any = document.querySelector('#selection-unit-option-width');
            let widthUnit = selectUnitWidth.value;
            elementDescription.setWidth(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.width = e.target.value + widthUnit;
        });

        //---------------height----------------------------------------------------------------------------------------------------------------------------------------------

        let heightelement = document.getElementById("selection-unit-option-height");
        heightelement.addEventListener("input", function () {

            let selectUnitHeight: any = document.querySelector('#selection-unit-option-height');
            let heightUnit = selectUnitHeight.value;

            let height: any = document.querySelector('#edit-height');
            let heightNum = height.value;
            elementDescription.setHeigth(con.strtonum(heightNum));
            document.getElementById(elementDescription.getOuterId()).style.height = con.strtonum(heightNum) + heightUnit;
        });

        $("#edit-height").val(elementDescription.getHeigth());
        $("#edit-height").off().on("input", function (e: any) {
            let selectUnitHeight: any = document.querySelector('#selection-unit-option-height');
            let heightUnit = selectUnitHeight.value;
            elementDescription.setHeigth(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.height = e.target.value + heightUnit;
        });

        // -------min width---------------


        let selectUnitMinWidth: any = document.querySelector('#selection-unit-option-minw');
        let minWidthUnit = selectUnitMinWidth.value;

        $("#editmin-width").val(elementDescription.getMinWidth());
        $("#editmin-width").off().on("input", function (e: any) {
            elementDescription.setMinWidth(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.minWidth = e.target.value + minWidthUnit;
        });

        // -------min Height---------------

        let selectUnitMinHeight: any = document.querySelector('#selection-unit-option-minh');
        let minHeightUnit = selectUnitMinHeight.value;

        $("#editmin-height").val(elementDescription.getMinHeight());
        $("#editmin-height").off().on("input", function (e: any) {
            elementDescription.setMinHeight(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.minHeight = e.target.value + minHeightUnit;
        });


        //---------font----------------------

        const elementFontFamily = document.getElementById("select") as HTMLInputElement;
        elementFontFamily.setAttribute("value", elementDescription.getFontType());
        $("select").off().on("input", function (e: any) {
            elementDescription.setFontType(e.target.value);
            document.getElementById(elementDescription.getId()).style.fontFamily = e.target.value;
        });


        // -----font weight-------------------------



        $("#select-weight").val(elementDescription.getFontWeight());
        $("#select-weight").off().on("input", function (e: any) {
            elementDescription.setFontWeight(e.target.value);
            document.getElementById(elementDescription.getId()).style.fontWeight = e.target.value;
        });


        //---------fontcolor----------------------

        $("#font-colorpicker").val(elementDescription.getFontColor());
        $("#font-color").val(elementDescription.getFontColor());
        $("#font-colorpicker").off().on("input", function (e: any) {
            $("#font-color").val(e.target.value);
            elementDescription.setFontColor(e.target.value);
            document.getElementById(elementDescription.getId()).style.color = e.target.value;
        });

        //---------fontSize----------------------

        $("#font-size").val(elementDescription.getFontSize());
        $("#font-size").off().on("input", function (e: any) {
            elementDescription.setFontSize(e.target.value);
            document.getElementById(elementDescription.getId()).style.fontSize = e.target.value + "px";
        });


        // --------backgroundcolor----------

        $("#colorPicker").val(elementDescription.getBackgroundColor());
        $("#background-color").val(elementDescription.getBackgroundColor());
        $("#colorPicker").off().on("input", function (e: any) {
            $("#background-color").val(e.target.value);
            elementDescription.setBackgroundColor(e.target.value);
            document.getElementById(elementDescription.getId()).style.backgroundColor = e.target.value;
        });

        // -----------------border radius------------------------

        $("#border-radius").val(elementDescription.getBorderRadius());
        $("#border-radius").off().on("input", function (e: any) {
            elementDescription.setBorderRadius(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.borderRadius = e.target.value + "px";
            document.getElementById(elementDescription.getId()).style.borderRadius = e.target.value + "px";
        });

        // -----------------border width------------------------

        $("#border-width").val(elementDescription.getBorderWidth());
        $("#border-width").off().on("input", function (e: any) {
            elementDescription.setBorderWidth(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.borderWidth = e.target.value + "px";

        });

        // -----------------border color------------------------

        $("#border-colorpicker").val(elementDescription.getBorderColor());
        $("#border-color").val(elementDescription.getBorderColor());
        $("#border-colorpicker").off().on("input", function (e: any) {
            $("#border-color").val(e.target.value);
            elementDescription.setBorderColor(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.borderColor = e.target.value;
        });

        //-------------border style-----------------------------------

        $(".border-none").off().on("click", function (e: any) {

            elementDescription.setBorder(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.border = "none";
        });

        $(".border-solid").off().on("click", function (e: any) {

            elementDescription.setBorder(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.border = "solid";
        });

        $(".border-dashed").off().on("click", function (e: any) {

            elementDescription.setBorder(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.border = "dashed";
        });

        $(".border-dotted").off().on("click", function (e: any) {

            elementDescription.setBorder(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.border = "dotted";
        });

        // -----------margin-top--------------------------


        this.spacingElements("#spacing-margin-top", elementDescription, elementDescription.getMarginTop(), "marginTop", "pageY");

        // -----------margin-Right--------------------------

        this.spacingElements("#spacing-margin-right", elementDescription, elementDescription.getMarginRight(), "marginRight", "pageX");


        //   -----------margin-bottom--------------------------

        this.spacingElements("#spacing-margin-bottom", elementDescription, elementDescription.getMarginBottom(), "marginBottom", "pageY");

        // -----------margin-left--------------------------

        this.spacingElements("#spacing-margin-left", elementDescription, elementDescription.getMarginLeft(), "marginLeft", "pageX");

        // -----------padding-top--------------------------

        $("#spacing-padding-top").val(elementDescription.getPaddingTop());
        $("#spacing-padding-top").off().on("input", function (e: any) {
            elementDescription.setPaddingTop(e.target.value);
            document.getElementById(elementDescription.getId()).style.paddingTop = e.target.value + "px";
        });


        // -----------padding-left--------------------------

        $("#spacing-padding-left").val(elementDescription.getPaddingLeft());
        $("#spacing-padding-left").off().on("input", function (e: any) {
            elementDescription.setPaddingLeft(e.target.value);
            document.getElementById(elementDescription.getId()).style.paddingLeft = e.target.value + "px";
        });


        //   --------padding-bottom----------------------------

        this.spacingElements("#spacing-padding-bottom", elementDescription, elementDescription.getPaddingBottom(), "paddingBottom", "pageY");


        //   --------padding-right----------------------------

        this.spacingElements("#spacing-padding-right", elementDescription, elementDescription.getPaddingRight(), "paddingRight", "pageX");





    }

    onStageElementSelectedEvent(data: any) {

        let currentSelectedElement = data.selectedElement;
        let elementId = data.slectedelementId
    }

    spacingElements(id: any, elementDescription: any, value: any, spacingType: any, dir: any) {

        $(id).val(value);
        var clicking = false;
        $(document).click(function () {
            clicking = false;
        });

        $(id).mousedown(function () {
            clicking = true;
        });

        var i = 0;
        var y = 0;

        $(document).mousemove(function (my: any) {
            if (clicking === false) {
                return false;
            }
            else {

                // change value
                if (my[dir] <= $(id).offset().top + parseInt($(id).css('width').replace('px', '')) / 10) {
                    y = parseInt($(id).val().toString()) + 1;
                    $('.movestatus').text('plus');
                }
                else {
                    y = parseInt($(id).val().toString()) - 1;
                    $('.movestatus').text('minus');
                }
                $(id).val(parseInt(y.toString()));
                // Mouse click + moving logic here
                // $('.movestatus').text('mouse moved ' + i);

                elementDescription.setMarginTop(parseInt(y.toString()));
                document.getElementById(elementDescription.getOuterId()).style[spacingType] = parseInt(y.toString()) + "px";
                i++;
            }
        });
        $(id).mouseup(function (e) {
            clicking = false;
            //e.stopPropagation();
        });
        $('.selector').mouseup(function (e) {
            i = 0;
        });
    }

    indexPopulateProperties(elementDescription: any) {


        const selector = document.getElementById("selector-text") as HTMLInputElement;
        selector.setAttribute("value", elementDescription.getId());
        selector.addEventListener("change", function (e: any,) {
            var element = document.getElementById(elementDescription.getId())
            element.setAttribute("id", selector.value);
        });


        // --------backgroundcolor----------

        $("#colorPicker").val(elementDescription.getBackgroundColor());
        $("#background-color").val(elementDescription.getBackgroundColor());
        $("#colorPicker").off().on("input", function (e: any) {
            $("#background-color").val(e.target.value);
            elementDescription.setBackgroundColor(e.target.value);
            (document.getElementsByClassName(elementDescription.getId())[0] as HTMLElement).style.backgroundColor = e.target.value;
        });

    }

    iconPopulateProperties(elementDescription: any) {
        // console.log("elementDescription",elementDescription)


        const selector = document.getElementById("selector-text") as HTMLInputElement;
        selector.setAttribute("value", elementDescription.getId());
        selector.addEventListener("change", function (e: any,) {
            var element = document.getElementById(elementDescription.getId())
            element.setAttribute("id", selector.value);
        });


        //---------------------------icon-----------------------------------------------------------

        let director = document.getElementsByClassName("stage-designer")[0] as HTMLElement;


        $("#btn-icon").on("click", function () {
            $(".icon_palette").css("display", "block");
        })
        director.addEventListener("click", function () {
            $(".icon_palette").css("display", "none");
        });

        let iconpicker = document.getElementsByClassName("icon_palette")[0] as HTMLElement;
        $("#button-caption").val(elementDescription.getIconClass());

        let btnIcon = document.getElementById("btn-icon") as HTMLElement;
        // console.log(btnIcon);
        btnIcon.setAttribute("class", elementDescription.getIconClass());


        $(".icon_palette").off().on("click", function (e: any) {
            let pick = (e.target as HTMLElement).className;
            let setButtonValue = $("#button-caption").val(pick)
            btnIcon.setAttribute("class", pick);
            var element = document.getElementById(elementDescription.getId());
            element.setAttribute("class", pick);

        });

        //----------icon-color----------------------------------------------------------------------

        $("#icon-colorpicker").val(elementDescription.getIconColor());
        $("#icon-color").val(elementDescription.getIconColor());
        $("#icon-colorpicker").off().on("input", function (e: any) {
            $("#icon-color").val(e.target.value);
            elementDescription.setIconColor(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.color = e.target.value;
        });



        //---------IconSize----------------------

        $("#icon-size").val(elementDescription.getIconSize());
        $("#icon-size").off().on("input", function (e: any) {
            elementDescription.setIconSize(e.target.value);
            document.getElementById(elementDescription.getOuterId()).style.fontSize = e.target.value + "px";
        });

    }
}
