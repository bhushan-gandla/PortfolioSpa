import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-landing-page',
  templateUrl: './portfolio-landing-page.component.html',
  styleUrls: ['./portfolio-landing-page.component.scss'],
})

export class PortfolioLandingPageComponent implements OnInit {
  sh = 0;
  // rowIndex:number;
  isChecked: boolean = true;
  filteredPortfolioItems: any[] = [];
  // portfolioItems: any[] = [];
  // toolsUsed: any[] = [];
//   safeURL : any;

  constructor(private sanitizer: DomSanitizer,){
   
 }

 santizer(val:any){
  alert(val);
 }

  ngOnInit(): void {
    this.filteredPortfolioItems = this.portfolioItems;
  }



  
  showHideTabs(val: number){
    // alert(val);
    if(val==0){
      this.filteredPortfolioItems = this.portfolioItems;
    }else if(val==1){
      this.filteredPortfolioItems = this.portfolioItems.filter(t => t.value == val);
      console.log(this.filteredPortfolioItems)
    }else if(val==2){
      this.filteredPortfolioItems = this.portfolioItems.filter(t => t.value == val);
      console.log(this.filteredPortfolioItems)
    }else if(val==3){
      this.filteredPortfolioItems = this.portfolioItems.filter(t => t.value == val);
      console.log(this.filteredPortfolioItems)
    }else if(val==4){
      this.filteredPortfolioItems = this.portfolioItems.filter(t => t.value == val);
      console.log(this.filteredPortfolioItems)
    }else{
      this.filteredPortfolioItems = this.portfolioItems;
    }
    
  }

  portfolioItems: any[] = [
    {
      name: 'EXOS Design System',
      imageSrc: 'assets/design-system@2x.png',
      id: 'exos-design-system',
      value: 1,
      content: '<p class="t-18">During my stint as a Front-End Engineer at ServiceLink, we had to solve for UI consistency across multiple products. To ensure consistency and help maintain UI standards, we were in a dire need of an internal Design System. </p> <p class="t-18">Apart from IT department, we wanted the Design System to mainly serve UI Designers and Developers. We included designing standards like specs, good/bad practices and guidelines in different used cases. Whereas, for developers I made it easy to import the theme by building private npm packages and easy to follow instructions. In addition, to the package, I added reusable components, code snippets, icon library and live demos. From a developer point of view, I wanted adopters to be able to start using the CSS theme in a few seconds.</p><p class="t-18">I played multiple roles for this project. In a nutshell, I oversaw releases, implemented the theme CSS, created/published npm packages, designed UIs and prioritized features</p>',
      toolsUsed: [
        {
          toolName: 'Adobe XD',
          toolClass: 'adobe-xd'
        },
        {
          toolName: 'Adobe XD 1',
          toolClass: 'adobe-xd'
        }
      ]
    },
    {
      name: 'Poly Arts Studio',
      imageSrc: 'assets/polyarts-logo.png',
      id: 'poly-arts-studio',
      value: 3,
      content: '<p class="t-18">POLY- many ARTS-art forms</p> <p class="t-18">Designed an identity for myself which was dedicated to create different art forms with digital design/development as its back bone. </p><p class="t-18">To emphasis “poly”, low poly art was used in designing this logo. I drew inspiration from an origami Pegasus. Pegasus was intentionally tilted at an angle depicting take off. This also meant that studio was ready to go onwards and upwards. </p>',
      toolsUsed: [
      ]
    },
    {
      name: 'EXOS Loan Servicing',
      imageSrc: 'assets/servicing@2x.png',
      id: 'exos-loan-servicing',
      value: 1,
      content: '<p class="t-18">EXOS Loan Servicing is a Web app that enables users to pay and manage mortgage payments. This app had to house functionality which allowed the users to onboard, make payments, set up auto payments and understand their payment history using charts and data grids.</p> <p class="t-18">Since the app was consumer facing, it had to be pixel-perfect, responsive, accessible, private label ready and work on major browsers including phones. To make the app private label ready, I used SCSS to create private label themes which had to load based on different URLs. To ensure the app was in conformance with level AA - WCAG 2.0 guidelines, I worked with external auditors who tested the app for accessibility.</p>',
      toolsUsed: [
      ]

    },
    {
      name: 'EXOS Ard',
      imageSrc: 'assets/ard-exploded-iso.png',
      id: 'exos-ard',
      value: 2,
      content: '<p class="t-18">Client: ServiceLink </p> <p class="t-18">EXOS Ard is a tool which is used to manage records for multiple users.</p><p class="t-18">As a UI Designer for this project, I collaborated with project stakeholders like project managers, product managers, users, business analysts and architects.</p>',
      toolsUsed: [
      ]

    },
    {
      name: 'EXOS Underwriter Dashboard',
      imageSrc: 'assets/uw-dashboard.png',
      id: 'exos-underwriter-dashoard',
      value: 2,
      content: '<p class="t-18">Client: ServiceLink </p> <p class="t-18">EXOS Underwriter is a complete end-to-end appraisal review solution, enhancing appraisal risk management through dynamic QC rule management and industry-leading data. </p><p class="t-18">I designed and developed dashboards for this app. The app was completely responsive and the dashboards included charts and data points that enabled users to make key decisions. </p>',
      toolsUsed: [
      ]

    },
    {
      name: 'Rahul and Spandana Poster',
      imageSrc: 'assets/r+s-final-image.png',
      id: 'rahul-and-spandana-poster',
      value: 3,
      content: '<p class="t-18">I designed a vibrant poster to announce the client’s wedding date. I designed the illustration in Illustrator and blended the illustration on the wall using Photoshop. </p>',
      toolsUsed: [
      ]

    },
    {
      name: 'EXOS Valuation Suite',
      imageSrc: 'assets/exos-suite@2x.png',
      id: 'exos-valuation-suite',
      value: 1,
      content: '<p class="t-18">The EXOS Valuation Suite manages workflows for appraisals. This suite includes a wide array of web apps which cater to different users. This B2B app allows users to manage orders, schedule appointments, assign orders and creates high-level dashboards.</p> <p class="t-18">I designed and developed three web apps for this project. To better understand user needs, I shadowed a few B2B users and created mock ups based off their requirements and feedback. Once the high fidelity mock ups were ready, I developed pixel-perfect-responsive web templates. I also developed mobile responsive email templates which notified users with vital appointment information. </p>',
      toolsUsed: [
      ]

    },
    {
      name: 'EXOS Appraiser App',
      imageSrc: 'assets/appraiser-app-exploded-iso.png',
      id: 'exos-appraiser-app',
      value: 1,
      content: '<p class="t-18">The Appraiser App allows appraisers to manage their schedule and document different aspects of the property. This app syncs with their calendar and allows the users to accept orders which fit their schedule. </p> <p class="t-18">I developed 20+ screens for this app. This is a hybrid app and it had to be completely responsive until mobile form factor. This app is available to download on the App Store and Google Play store.</p>',
      toolsUsed: [
      ]

    },
    {
      name: 'Fast Diagnostics logo',
      imageSrc: 'assets/fast-logo.png',
      id: 'fast-diagnostic-logo',
      value: 3,
      content: '<p class="t-18">I created this logo for a startup company. The grid represents an array and each cell represents a component. The green and red shapes represent the product’s ability to provide accurate results with high specificity. This emphasizes the company’s motto to provide fast and accurate diagnostics. </p>',
      toolsUsed: [
      ]

    },
    {
      name: 'Youshin and Derrick Poster',
      imageSrc: 'assets/y+d-posters.png',
      id: 'youshin-and-derrick-poster',
      value: 3,
      content: '<p class="t-18">I worked with my friends Derrick and Youshin to create a unified design for their wedding. Since the wedding was scheduled for Spring, the clients had requested a floral theme. I designed the invitations, direction cards and placards for the wedding.</p>',
      toolsUsed: [
      ]

    },
    {
      name: 'EXOS Style guide',
      imageSrc: 'assets/style-guide.png',
      id: 'exos-style-guide',
      value: 2,
      content: '<p class="t-18">While working at ServiceLink, I was tasked with creating a Design System. As the sole contributor in the early stages of this project, I designed mock ups and created design standards. I had to design mock ups and create designing standards. I also worked on a few POCs to showcase scroll effect and implement pixel perfect web templates. </p>',
      toolsUsed: [
      ]

    },
    {
      name: 'Toblerone - Stop Motion',
      imageSrc: 'assets/toblerone.jpg',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/PPEeVqV0ZzY",
      toolsUsed: [
      ]

    },
    {
      name: 'Washington Square - Hyperlapse',
      imageSrc: 'assets/washington-sq.jpg',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/ya1tUHVi2vI",
      toolsUsed: [
      ]
    },
    {
      name: 'Reaching Myra',
      imageSrc: 'assets/reaching-myra.jpg',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/S0bYyat4QAc",
      toolsUsed: [
      ]
    },
    {
      name: 'Altoids - Stop Motion',
      imageSrc: 'assets/altoids.jpg',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/hC0iqPhSArs",
      toolsUsed: [
      ]
    },
    {
      name: 'Stop Sign - Stop Motion',
      imageSrc: 'assets/stop-sign.jpg',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/UmBN14d2D8E",
      toolsUsed: [
      ]
    }
  ];
  
}


