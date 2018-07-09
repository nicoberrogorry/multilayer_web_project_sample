import {
	Component,
	ViewChild,
	EventEmitter,
	Input,
	Output
} from '@angular/core';

@Component({
	selector: 'persons-page',
	templateUrl: './personsPage.html',
	styleUrls: ['./personsPage.scss']
})

export class PersonsPage{
	public currentStep: Number;

	constructor() {
		this.currentStep = 1;
	}
}