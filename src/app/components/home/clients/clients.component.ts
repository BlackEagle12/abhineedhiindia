import { Component } from '@angular/core';
import { SectionComponent } from '../../common/section/section.component';
import { NgFor } from '@angular/common';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [SectionComponent,NgFor,ObserveElementDirective],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clients: any[] = [
    {
      heading : "Direct-clients",
      clientUrls : [
        '/assets/Images/clients/1.jpeg',
        '/assets/Images/clients/2.jpeg',
        '/assets/Images/clients/3.jpeg',
        '/assets/Images/clients/4.jpeg',
        '/assets/Images/clients/5.jpeg',
        '/assets/Images/clients/6.jpeg',
        '/assets/Images/clients/7.jpeg',
        '/assets/Images/clients/8.jpeg',
        '/assets/Images/clients/Alicon.jpeg',
        '/assets/Images/clients/bajaj.jpeg'
        // '/assets/Images/clients/Bronze-Alu.jpeg'
      ],
      animation: 'animate__fadeInLeft'
    },{
      heading : "Our-clients",
      clientUrls : [
        '/assets/Images/clients/Cast-4-aluminium.jpeg',
        '/assets/Images/clients/continental-engines.jpeg',
        '/assets/Images/clients/Endurance.jpeg',
        '/assets/Images/clients/Jaya_Hind_Industries_logo.jpg',
        '/assets/Images/clients/Linamar.jpeg',
        '/assets/Images/clients/mareli-motherson.jpeg',
        '/assets/Images/clients/Motherson-Sumi.jpg',
        '/assets/Images/clients/Phoenix-Mecano.jpeg',
        '/assets/Images/clients/Rockman.jpeg',
        '/assets/Images/clients/Sandhar.jpeg',
        '/assets/Images/clients/Spark-Minda.jpg',
        '/assets/Images/clients/techsence-engineering.jpeg',
        '/assets/Images/clients/The-Metals-Company.jpeg',
        '/assets/Images/clients/UNO-MINDA.jpg'
      ],
      animation: 'animate__fadeInRight'
    }
  ]

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
