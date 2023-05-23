import { EventBus } from './../event-bus/EventBus';
/**
 * 
 * SubscribeTo is an annotation that accepts an event array as a argument 
 * 
 * @param args 
 * @returns targetClassObject
 */
export function SubscribeTo<T extends { new(...args: any[]): {} }>(...args: any[]): any {

    return (targetClassObject: T): any => {
        return class extends targetClassObject {
            eventStore = EventBus.getInstance().registerSubscribers(args, targetClassObject)
        };
    }
}

export function WebComponent(options: { selector: string }): any {
    return (targetClassObject: any) => {
        {
            const selector = targetClassObject.elselector = options.selector;
            if (customElements.get(selector) == undefined) {
                window.customElements.define(selector, targetClassObject);
            }
        }
    }
}






