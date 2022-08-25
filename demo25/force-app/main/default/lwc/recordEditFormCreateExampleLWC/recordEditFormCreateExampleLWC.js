import { LightningElement} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class RecordEditFormCreateExampleLWC extends LightningElement {
    connectedCallback() {
        
        this.contactHomePageRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        };
        this[NavigationMixin.GenerateUrl](this.contactHomePageRef)
            .then(url => this.url = url);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
       
        this[NavigationMixin.Navigate](this.contactHomePageRef);
        console.log('onsubmit event recordEditForm'+ event.detail.fields);

    }
}