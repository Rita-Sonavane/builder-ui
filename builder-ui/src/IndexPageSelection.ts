import { IndexPageDescriptor } from './../ElementDescriptions/IndexPageDescriptor';

import { DesignerConversions } from "./DesignerConversions";
import { PropertyEditor } from "./PropertyEditor";

export class IndexPageSelection {
    constructor() {

    }

    selection(indexElement: any) {

        let propertyDescriptor = new IndexPageDescriptor
        let propertyEditor = new PropertyEditor();
        let designerConversion = new DesignerConversions;

        propertyDescriptor.setId((indexElement as HTMLElement).className);
        propertyDescriptor.setBackgroundColor(designerConversion.rgb2hex(indexElement.style.backgroundColor));
        propertyEditor.indexPopulateProperties(propertyDescriptor);


    }
}