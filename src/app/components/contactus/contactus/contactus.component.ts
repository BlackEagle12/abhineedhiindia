import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../../common/footer/footer.component';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FontAwesomeModule,NgFor, FooterComponent, ObserveElementDirective],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }

  companyPhones: any[] = [
    {number : "+91 95031 86868", animation : "animate__fadeInLeft"},
    {number : "+91 95031 87878", animation : "animate__fadeInRight"},
  ]

  persons: any[] = [
    {
      name: "Mr. Jitendra Ingale(C.E.O. & Director)",
      email: "mudra.india@gmail.com",
      contactNo: "+91 9503 186868"
    },
    {
      name: "Mr. Niteen Jadhav (Managing Director)",
      email: "niteen@mudra-group.com",
      contactNo: "+91 9503 183838,  +91 9767448888"
    },
    {
      name: "Miss. Vidula Aher (Director)",
      email: "vidula@mudra-group.com",
      contactNo: "+91 9503 184848 , +91 9028 184848"
    },
    {
      name: "Mr. Harish Shrirao (Director)",
      email: "harish@mudra-group.com",
      contactNo: "+91 9503 185858"
    },
    {
      name: "Mr. Mangesh Thorat (Director)",
      email: "mangesh@mudra-group.com",
      contactNo: "+91 9503 187878 ,+91 8446 187878"
    },
  ]

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
