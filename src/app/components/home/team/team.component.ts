import { Component } from '@angular/core';
import { SectionComponent } from '../../common/section/section.component';
import { NgFor } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSafari, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SectionComponent,NgFor,FontAwesomeModule,ObserveElementDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(faTwitter)
  }

  team: any[] = [
    {
      name: "MR. JITENDRA INGALE",
      description: "C.E.O. & DIRECTOR",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"insta",
          url: "/assets/Images/social-media-logo/insta_logo.svg"
        },
        {
          icon:"facebook",
          url: "/assets/Images/social-media-logo/facebook_logo.svg"
        },
        {
          icon:"whatsapp",
          url: "/assets/Images/social-media-logo/whatsapp_logo.svg"
        },
        {
          icon:"linkedin",
          url: "/assets/Images/social-media-logo/linkedin_logo.svg"
        }
      ],
      animation: 'animate__fadeInLeft'
    },
    {
      name: "MR. NITEEN JADHAV",
      description: "MANAGING DIRECTOR",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"insta",
          url: "/assets/Images/social-media-logo/insta_logo.svg"
        },
        {
          icon:"facebook",
          url: "/assets/Images/social-media-logo/facebook_logo.svg"
        },
        {
          icon:"whatsapp",
          url: "/assets/Images/social-media-logo/whatsapp_logo.svg"
        },
        {
          icon:"linkedin",
          url: "/assets/Images/social-media-logo/linkedin_logo.svg"
        }
      ],
      animation: 'animate__fadeInDown'
    },
    {
      name: "MISS. VIDULA AHER",
      description: "DIRECTOR",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"insta",
          url: "/assets/Images/social-media-logo/insta_logo.svg"
        },
        {
          icon:"facebook",
          url: "/assets/Images/social-media-logo/facebook_logo.svg"
        },
        {
          icon:"whatsapp",
          url: "/assets/Images/social-media-logo/whatsapp_logo.svg"
        },
        {
          icon:"linkedin",
          url: "/assets/Images/social-media-logo/linkedin_logo.svg"
        }
      ],
      animation: 'animate__fadeInRight'
    },
    {
      name: "MR. HARISH SHRIRAO",
      description: "DIRECTOR",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"insta",
          url: "/assets/Images/social-media-logo/insta_logo.svg"
        },
        {
          icon:"facebook",
          url: "/assets/Images/social-media-logo/facebook_logo.svg"
        },
        {
          icon:"whatsapp",
          url: "/assets/Images/social-media-logo/whatsapp_logo.svg"
        },
        {
          icon:"linkedin",
          url: "/assets/Images/social-media-logo/linkedin_logo.svg"
        }
      ],
      animation: 'animate__fadeInLeft'
    },
    {
      name: "MR. MANGESH THORAT",
      description: "DIRECTOR",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"insta",
          url: "/assets/Images/social-media-logo/insta_logo.svg"
        },
        {
          icon:"facebook",
          url: "/assets/Images/social-media-logo/facebook_logo.svg"
        },
        {
          icon:"whatsapp",
          url: "/assets/Images/social-media-logo/whatsapp_logo.svg"
        },
        {
          icon:"linkedin",
          url: "/assets/Images/social-media-logo/linkedin_logo.svg"
        }
      ],
      animation: 'animate__fadeInDown'
    },
    {
      name: "MR. PARAMJEET SINGH",
      description: "DESIGN DIRECTOR",
      url: 'https://inoxceramic.in/wp-content/uploads/2022/08/2-2-360x576.png',
      socialProfile: 
      [
        {
          icon:"insta",
          url: "/assets/Images/social-media-logo/insta_logo.svg"
        },
        {
          icon:"facebook",
          url: "/assets/Images/social-media-logo/facebook_logo.svg"
        },
        {
          icon:"whatsapp",
          url: "/assets/Images/social-media-logo/whatsapp_logo.svg"
        },
        {
          icon:"linkedin",
          url: "/assets/Images/social-media-logo/linkedin_logo.svg"
        }
      ],
      animation: 'animate__fadeInRight'
    }
  ]

  socialMediaUrl: string[] = [
    "",
    "/assets/Images/social-media-logo/facebook_logo.svg",
    "/assets/Images/social-media-logo/whatsapp_logo.svg",
    "/assets/Images/social-media-logo/linkedin_logo.svg"
  ]
  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
