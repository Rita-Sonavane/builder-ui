import { WebComponent } from '../src/Decorator';

@WebComponent({
 selector : 'test-component'
})
export class Test extends HTMLElement {

    constructor() {
        super();
        const paragraph = document.createElement('p');
        paragraph.textContent = 'It Is Pragraph!';
        paragraph.setAttribute("style", "text-decoration: underline;");
        this.appendChild(paragraph);
    }
}

test('custom elements test', () => {
    document.body.innerHTML = `<h1>selector></h1><test-component></test-component>`
    console.log("document.body.innerHTML", document.body.innerHTML);

    expect(document.body.innerHTML).toContain('It Is Pragraph!');

    const element = document.getElementsByTagName('p')[0];

    const styles = getComputedStyle(element);

    expect(styles.textDecoration).toBe('underline');
});














// import { WebComponent } from '../project/event-bus/Decorator';
// test("test webComponent annotation", () => {

//     document.body.innerHTML = `
   
//     <p id="para1"><u>some test here</u></p>
//     <p is="test-class"></p>
 
//     `;

//     @WebComponent({
//         selector: 'test-class'
//     })
//     class Demo extends HTMLParagraphElement {
//         constructor() {

//             super();

//             const Parent = this.parentNode;

//             const para = document.getElementById('para1');

//             const div = document.createElement("div");
//             div.textContent = 'abc';

//             document.body.append(div);

//             //expect(para.style.textDecoration).toBe('u');

//             // const para1 = document.querySelector("test-class");
//             // console.log("para1", para1);


//             expect(para.innerHTML).toEqual('<u>some test here</u>');

//             //expect(div).toBeInTheDocument();


//         }
//     }

// });



