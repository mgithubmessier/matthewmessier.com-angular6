import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { BlurbModel } from '../../blurb/blurb.model';

@Component({
    selector: 'education',
    templateUrl: './education.template.html'
})
export class EducationComponent {
    educationBlurbs: Array<BlurbModel>;
    constructor(private contentService: ContentService) {}
    ngOnInit() {
        this.contentService.get('education').subscribe((experience: Array<BlurbModel>) => this.educationBlurbs = experience);
    }
}