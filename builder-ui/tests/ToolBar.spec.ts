import { event } from "jquery";
import { ToolBar } from "../src/ToolBar";
import $, { removeData } from 'jquery';



describe('Onclick retrive id', () => {
    test("test", () => {
        document.body.innerHTML = `
            <div id="element_Text" draggable="true">
            <button id="btn">Text</button>
            </div>
          `;
        require('../src/ToolBar');
        const data = clickTrack();

        document.getElementById('element_Text').click();
        //   console.log(data);
        expect(data).toEqual({
            'click.ID': 'element_Text'
        });
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


describe('Keyboard Shorcut Test', () => {

    document.body.innerHTML =
        `
    <div  class="element-tree" >
    </div>`;

    require('../src/ToolBar');

    var keycodeNo: any;
    var targetkey: any;
    var div = document.querySelector('div');
    it("onKeydown 69 test", () => {
        function keydownTrack() {
            var data: any = {};
            document.addEventListener('keydown', function clicked(e) {
                var targetCode = e.keyCode;
                targetkey = e.key;
                if (e.key && targetCode == 69) {
                    e.preventDefault();
                    //console.log("INSIDE 69");
                    data['click'] = div.className;
                    keycodeNo = targetCode;
                }
            });
            return data;
        }


        const data = keydownTrack();
        var event = new KeyboardEvent('keydown', { 'keyCode': 69, 'key': 'shiftkey' });
        var p = document.dispatchEvent(event);

        // console.log(data);
        //  console.log(targetkey, event.key);
        // console.log(keycodeNo, event.keyCode);
        expect(targetkey).toEqual(event.key);
        expect(keycodeNo).toEqual(event.keyCode);
        expect(data).toEqual({ 'click': 'element-tree' });
    });

});