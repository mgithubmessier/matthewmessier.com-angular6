import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { EmployerBlurbComponent } from './employer-blurb/employer-blurb.component';
import { AboutComponent, EducationComponent, ExperienceComponent, LeadershipComponent } from './sections';
import { ContentService } from '../services/content/content.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { UtilityService } from '../services/utility/utility.service';

@NgModule({
  declarations: [
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    LeadershipComponent,
    NavComponent,
    EmployerBlurbComponent
  ],
  exports: [
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    LeadershipComponent,
    NavComponent,
    EmployerBlurbComponent
  ],
  providers: [ContentService, UtilityService],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRippleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
