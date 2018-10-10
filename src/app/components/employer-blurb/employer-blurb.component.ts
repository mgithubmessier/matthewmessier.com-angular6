import { Component, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { UtilityService } from 'src/app/services/utility/utility.service';
@Component({
    selector: 'employer-blurb',
    templateUrl: './employer-blurb.template.html',
    styleUrls: ['./employer-blurb.style.scss']
})
export class EmployerBlurbComponent {
    @Input() iconSrc: string;
    @Input() blurb: string;
    @Input() header: string;
    @Input() timeline: string;
    @ViewChild('headerRef') headerRef: ElementRef;
    private showBlurb: boolean;
    constructor(private utilityService: UtilityService) {}

    @HostListener('document:click', ['$event'])
    onClick($event) {
        this.showBlurb = this.utilityService.hasParent($event.target, this.headerRef.nativeElement);
    }
}