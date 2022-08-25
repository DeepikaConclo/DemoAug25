import { LightningElement} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class RecordEditFormCreateExampleLWC extends LightningElement {
    connectedCallback() {
        // Store the PageReference in a variable to use in handleClick.
        // This is a plain Javascript object that conforms to the
        // PageReference type by including 'type' and 'attributes' properties.
        // The 'state' property is optional.
        this.contactHomePageRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        };
        this[NavigationMixin.GenerateUrl](this.accountHomePageRef)
            .then(url => this.url = url);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        // Navigate to the Account Home page.
        this[NavigationMixin.Navigate](this.contactHomePageRef);
        console.log('onsubmit event recordEditForm'+ event.detail.fields);

    }
}