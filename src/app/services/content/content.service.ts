import { Injectable } from "@angular/core";
import { EmployerBlurbModel } from '../../components/employer-blurb/employer-blurb.model';
import { Observable } from "rxjs";

import { of } from "rxjs";

@Injectable()
export class ContentService {
    get(route): Observable<Array<EmployerBlurbModel>> {
        switch(route) {
            case 'experience':
                return of([
                    {
                        iconSrc: '../../assets/fidelity.png',
                        header: 'Software Engineer',
                        timeline: 'September 2016 - October 2018',
                        blurb: 'This position involves developing Angular 2+ components, modules, services, and animations for client facing applications. It also entails corresponding with Java service developers via Node.js middleware, a scrum master, business analysts, on a two week sprint, monthly release, and self organizing Agile scrum team.',
                        link: 'https://www.linkedin.com/company/fidelity-investments/'
                    },
                    {
                        iconSrc: '../../assets/fidelity.png',
                        header: 'Technical Intern',
                        timeline: 'June 2015 - August 2015',
                        blurb: 'Software engineering and legacy code management. Developed though the Agile software process. Converted a legacy C#/.NET desktop web automation system into an updated Java system. Developed on SahiPro and Selenium\'s backend.',
                        link: 'https://www.linkedin.com/company/fidelity-investments/'
                    },
                    {
                        iconSrc: '../../assets/baycoastbank.png',
                        header: 'Information Technology Intern',
                        timeline: 'May 2014 - August 2014',
                        blurb: 'Software, Hardware, and Network management, including hardware repairs and replacement, software troubleshooting, and using network administrator capabilities to help employees throughout several locations.',
                        link: 'https://www.linkedin.com/company/baycoast-bank-2/'
                    },
                    {
                        iconSrc: '../../assets/kvh.png',
                        header: 'Software Engineering Intern',
                        timeline: 'May 2013 - August 2013',
                        blurb: 'The internship position is centered on maintaining software applications in close coordination with Senior Software Engineers. Primarily, the internship requires improving speed, performance and usability in these applications. The position also contains duties such as conducting system tests and correcting software defects.',
                        link: 'https://www.linkedin.com/company/kvh-industries-inc-/'
                    }                
            ])
        }
    }
}