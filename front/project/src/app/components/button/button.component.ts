import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
// export class ButtonComponent implements OnInit {
export class ButtonComponent {
	@Input() text: string;
	@Input() color: string;
	@Output() btnClick = new EventEmitter();

	constructor() {
		this.text = 'Click me';
		this.color = 'blue';
	}

	// ngOnInit(): void {}

	onClick() {
		this.btnClick.emit();
	}

}
