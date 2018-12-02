import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'nav',
    templateUrl: './nav.template.html',
    styleUrls: ['./nav.style.scss']
})
export class NavComponent {
    @Input() sectionHeadings: Array<string>;
    @Output() headingSelected: EventEmitter<string> = new EventEmitter();
    constructor() {}
    onClick(header) {
        this.headingSelected.emit(header);
    }
}