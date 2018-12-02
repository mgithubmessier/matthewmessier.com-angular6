import { Component } from '@angular/core';
import { BlurbModel } from '../../blurb/blurb.model';
import { ContentService } from '../../../services/content/content.service';

@Component({
    selector: 'experience',
    templateUrl: './experience.template.html'
})
export class ExperienceComponent {
    employerBlurbs: Array<BlurbModel>;
    constructor(private contentService: ContentService) {}
    ngOnInit() {
        this.contentService.get('experience').subscribe((experience: Array<BlurbModel>) => this.employerBlurbs = experience);
    }
}