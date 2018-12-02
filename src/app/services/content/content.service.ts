import { Injectable } from "@angular/core";
import { BlurbModel } from '../../components/blurb/blurb.model';
import { Observable } from "rxjs";

import { of } from "rxjs";

@Injectable()
export class ContentService {
    get(route): Observable<any> {
        switch(route) {
            case 'experience':
                return of([
                    {
                        iconSrc: '../../assets/fidelity.png',
                        header: 'Software Engineer',
                        timeline: 'September 2016 - October 2018',
                        blurbs: [
                            'Developing Angular 2+ components, modules, services, and animations for client facing applications.',
                            'Corresponding with Java service developers, a scrum master, business analysts, on a two week sprint, monthly release, and self organizing Agile scrum team.',
                            'Received the “Excellence in Action” award in the “Act as One Team” category.'
                        ]
                    },
                    {
                        iconSrc: '../../assets/fidelity.png',
                        header: 'Technical Intern',
                        timeline: 'June 2015 - August 2015',
                        blurbs: [
                            'Developed a desktop application that expedites quality assurance testing pop.',
                            'Conducted demonstrations and smoke tests, the program was then internally distributed.'
                        ]
                    },
                    {
                        iconSrc: '../../assets/baycoastbank.jpeg',
                        header: 'Information Technology Intern',
                        timeline: 'May 2014 - August 2014',
                        blurbs: [
                            'Provided bank employees and customers with hardware and software support as a network administrator.',
                            'Aided supervisors in setup and maintenance of bank servers.'
                        ]
                    },
                    {
                        iconSrc: '../../assets/kvh.png',
                        header: 'Software Engineering Intern',
                        timeline: 'May 2013 - August 2013',
                        blurbs: [
                            'Developed a more efficient program for flashing a GPS System.',
                            'Collaborated with a senior software engineer to solve GPS connectivity issues by gathering extensive data on users’ issues with KHV Industries’ GPS systems by testing KVH satellites’ connections with users\' devices.'
                        ]
                    }                
                ] as Array<BlurbModel>);
            case 'about':
                return of(['coffee.', 'computers.', 'music.', 'movies.'] as Array<string>);
            case 'education':
                return of([{
                    iconSrc: '../../assets/stonehill.png',
                    header: 'Bachelor of the Sciences: Computer Science',
                    timeline: 'May 2016'
                }, 
                {
                    iconSrc: '../../assets/stonehill.png',
                    header: 'Bachelor of the Arts: Economics',
                    timeline: 'May 2016'
                }] as Array<BlurbModel>);
            case 'leadership':
                return of([{
                    iconSrc: '../../assets/stonehill.png',
                    header: 'Academic Leadership: Teacher’s Assistant for Computer Science I',
                    timeline: 'Fall 2014 - May 2016',
                    blurbs: [
                        'Supporting students wishing to gain a complete understanding of Java Programming fundamentals.',
                        'Correcting programming assignments providing experience with analyzing others’ code.'
                    ]
                }, {
                    iconSrc: '../../assets/acm.png',
                    header: 'Association for Computing Machinery: President, Stonehill College Chapter',
                    timeline: 'Spring 2013 - May 2016',
                    blurbs: [
                        'Consulting with other officers to bring in professional speakers (i.e. Amazon).',
                        'Collaborating in planning computer programming competition events.'
                    ]
                }]);
        }
    }
}