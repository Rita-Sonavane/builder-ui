import { ToolSelectedEvent } from './../src/ToolSelectedEvent';
import { StageElementSelectedEvent } from '../src/StageElementSelectedEvent';

export class EventBus {
  subscriberMap: Map<ToolSelectedEvent, any> = null;
  static instance: EventBus;
  constructor() {
    this.subscriberMap = new Map<ToolSelectedEvent, any[]>();
  }

  public static getInstance(): EventBus {
    if (this.instance == undefined) {
      this.instance = new EventBus();
    }
    return this.instance;
  }

  /*
    * fireEvent method receives an event 
    * @param event 
    * 
    * @param callback 
    * @param arg 
    * @returns 
    */

  public fireEvent<T>(event: any) {
  
    Array.from(this.subscriberMap.keys()).forEach((mapEvent: any) => {
      if (mapEvent == event.constructor.name) {
        let eventValues: any = this.subscriberMap.get(mapEvent);
        for (let classEntry of eventValues) {
          let methods = Object.getOwnPropertyNames(classEntry.prototype);
          for (let method of methods) {
            if (method.includes(event.constructor.name)) {
              classEntry.prototype[method](event);
            }
          }
        }
      }
    });
  }



  /**
   * registerSubscribers method registers subcriber class instances with event in Map
   * 
   * @param eventArray 
   * @param classObject 
   * @returns subscriberMap
   */

  public registerSubscribers(eventArray: any, classObject: any) {
 
    for (let event of eventArray) {

      if (!this.subscriberMap.has(event.name)) {
        let subs: any[] = [];
        subs.push(classObject);
        this.subscriberMap.set(event.name, subs);
      }
      else {
        this.subscriberMap.get(event.name).push(classObject);
      }
    }

   return this.subscriberMap
  }
}






