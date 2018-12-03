import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { MatButton } from '@angular/material';

@Component({
    selector: 'blurb',
    templateUrl: './blurb.template.html',
    styleUrls: ['./blurb.style.scss']
})
export class BlurbComponent {
    @Input() iconSrc: string;
    @Input() blurbs: string;
    @Input() header: string;
    @Input() timeline: string;
    showBlurb: boolean;
    constructor(private utilityService: UtilityService, private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event'])
    onClick($event) {
        this.showBlurb = this.utilityService.hasParent($event.target, this.elementRef.nativeElement);
    }
}