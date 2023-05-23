import { DesignDirector } from "./../src/DesignDirector";
import { ElementDesignerFactory } from "./../src/ElementDesignerFactory";
import $, { event, removeData } from 'jquery';


var elementDesignerFactory = new ElementDesignerFactory();
var designDirector = new DesignDirector();

describe(' call obTollSelected', () => {

    it('The DesignDirector Constructor run with no errors', () => {
        expect(DesignDirector).toBeTruthy();
    });

    it("defines onToolSelectedEvent()", () => {

        expect(typeof designDirector.onToolSelectedEvent).toBe("function");

    });

    it("defines onToolSelectedEvent()", () => {
        const onToolSelectedEventMock = jest
            .spyOn(DesignDirector.prototype, 'onToolSelectedEvent')
            .mockImplementation(() => {
                // console.log('mocked function');
            });
        designDirector.onToolSelectedEvent(event);
        expect(onToolSelectedEventMock).toBeCalledTimes(1);
    });

});

describe('Onclick retrive target element', () => {

    document.body.innerHTML = `
    <div id="design-director" class="director">
    <div id="text"
    <input id="txt">Text</input>
    </div>
    <div id="button"
    <button id="btn">Button</button>
    </div>
    </div>
  `;

    var selectedElement: any;

    test("test click for design-director", () => {

        const data = clickTrack();

        document.getElementById('design-director').click();
        //console.log(data);
        expect(data).toEqual({
            'click.ID': 'design-director'
        });

        function clickTrack() {
            const data: any = {};
            document.addEventListener('click', function clicked(e) {
                const target = e.target as HTMLElement
                if (target.matches('div')) {
                    e.preventDefault();
                    data['click.ID'] = target.id;
                }
            });
            return data;
        }

    });


    test("test click for design-director childrens", () => {
        const data = clickTrack();
        document.getElementById('button').click();
    
        expect(data).toEqual({
            'click.ID': 'button'
        });

        function clickTrack() {
            const data: any = {};
            var director = document.getElementsByClassName('director')[0] as HTMLAnchorElement;
            selectedElement = director.lastElementChild;

            selectedElement.addEventListener('click', function clicked(e: any) {
                const target = e.target as HTMLElement
                if (target.matches('div')) {
                    e.preventDefault();
                    data['click.ID'] = target.id;
                }
            });
            return data;
        }

    });


});