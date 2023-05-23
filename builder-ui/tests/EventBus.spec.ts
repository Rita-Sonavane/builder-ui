import { EventBus } from "../event-bus/EventBus";
import { SubscribeTo } from "../src/Decorator";
import { ToolSelectedEvent } from "../src/ToolSelectedEvent";
import { TestEvent } from "./TestEvent";


test('test registerSubscribers', () => {
    class Todos {
        constructor() {

        }
    }
    let todos = new Todos();
    let result = new Map<any, any>([
        [ToolSelectedEvent.name, [todos]],

    ])
    let eventStore = EventBus.getInstance().registerSubscribers([ToolSelectedEvent], todos);
    expect(result).toEqual(eventStore);

});

test('test fireEvent', () => {
    let methodCalled = false;
    let data;
    @SubscribeTo(TestEvent)
    class Demo {
        constructor() {
        }
        onTestEvent(event: any) {
            data = event.data;
            methodCalled = true;
        }
    }
    let demo = new Demo();
    let event = new TestEvent();
    event.data = "Tested successfully";
    EventBus.getInstance().fireEvent(event);

    expect(true).toEqual(methodCalled);
    expect(data).toEqual(event.data);
});







