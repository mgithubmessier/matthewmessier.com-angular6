import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
    selector: 'about',
    templateUrl: './about.template.html',
    styleUrls: ['./about.style.scss']
})
export class AboutComponent {
    aboutContent: Array<string>;
    constructor(private contentService: ContentService) {}
    ngOnInit() {
        this.contentService.get('about').subscribe((aboutContent) => this.aboutContent = aboutContent);
    }    
}