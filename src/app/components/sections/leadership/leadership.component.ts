import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { BlurbModel } from '../../blurb/blurb.model';

@Component({
    selector: 'leadership',
    templateUrl: './leadership.template.html',
    styleUrls: ['./leadership.style.scss']
})
export class LeadershipComponent {
    blurbs: Array<BlurbModel>;
    constructor(private contentService: ContentService) {}
    ngOnInit() {
        this.contentService.get('leadership').subscribe((experience: Array<BlurbModel>) => this.blurbs = experience);
    }
}