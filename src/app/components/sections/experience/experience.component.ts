import { Component } from '@angular/core';
import { EmployerBlurbModel } from '../../employer-blurb/employer-blurb.model';
import { ContentService } from '../../../services/content/content.service';
import { SectionComponent } from '../section.component';
@Component({
    selector: 'experience',
    templateUrl: './experience.template.html'
})
export class ExperienceComponent extends SectionComponent {
    employerBlurbs: Array<EmployerBlurbModel>;
    constructor(private contentService: ContentService) { super(); }
    ngOnInit() {
        this.contentService.get('experience').subscribe((experience: Array<EmployerBlurbModel>) => this.employerBlurbs = experience);
    }
}