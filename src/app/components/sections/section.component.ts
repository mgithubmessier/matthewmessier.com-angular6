import { Component, Input } from '@angular/core';

@Component({})
export abstract class SectionComponent {
    @Input() selectedHeading: string;
}