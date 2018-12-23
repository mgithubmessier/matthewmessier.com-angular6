import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { BlurbModel } from '../../blurb/blurb.model';

@Component({
    selector: 'education',
    templateUrl: './education.template.html',
    styleUrls: ['./education.style.scss']
})
export class EducationComponent {
    blurbs: Array<BlurbModel>;
    constructor(private contentService: ContentService) {}
    ngOnInit() {
        this.contentService.get('education').subscribe((experience: Array<BlurbModel>) => this.blurbs = experience);
    }
}