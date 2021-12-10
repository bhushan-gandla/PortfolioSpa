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
      content: '<p class="t-18">Served the role of a Technical Product Manager for EXOS Design System. Developed web pages, assigned work and overlooked releases.</p> <p class="t-18">Design System is a live documentation of designing and developing standards. Specs and code snippets are available in ready to use format. In addition, to the documentation it also offers private npm packages.</p>'
    },
    {
      name: 'Poly Arts Studio',
      imageSrc: 'assets/polyarts-logo.png',
      id: 'poly-arts-studio',
      value: 3,
      content: '<p class="t-18">POLY- many ARTS-art forms</p> <p class="t-18">Designed an identity for my self which was dedicated to create different art forms with digital design as its back bone. Low poly art was used in designing this logo. In addition, an origami horse was used as a template.</p>'
    },
    {
      name: 'EXOS Loan Servicing',
      imageSrc: 'assets/servicing@2x.png',
      id: 'exos-loan-servicing',
      value: 1,
      content: '<p class="t-18">Worked on developing web pages for a Loan Servicing Web application. This web app had to be completely responsive, accessible and private label ready.</p> <p class="t-18">SCSS was used to create private labelling framework.</p>'

    },
    {
      name: 'EXOS Ard',
      imageSrc: 'assets/ard-exploded-iso.png',
      id: 'exos-ard',
      value: 2,
      content: '<p class="t-18">Client: ServiceLink </p> <p class="t-18">Designed screens for a project called ARD using an existing theme. These screens were created using Xperience XD. </p>'
    },
    {
      name: 'EXOS Underwriter Dashboard',
      imageSrc: 'assets/uw-dashboard.png',
      id: 'exos-underwriter-dashoard',
      value: 2,
      content: '<p class="t-18">Client: ServiceLink </p> <p class="t-18">Designed and developed a dashboard for underwriter by following an existing style guide. </p>'
    },
    {
      name: 'Rahul and Spandana Poster',
      imageSrc: 'assets/r+s-final-image.png',
      id: 'rahul-and-spandana-poster',
      value: 3,
      content: '<p class="t-18">Designed wedding announcement poster for Rahul and Spandana.</p>'
    },
    {
      name: 'EXOS Valuation Suite',
      imageSrc: 'assets/exos-suite@2x.png',
      id: 'exos-valuation-suite',
      value: 1,
      content: '<p class="t-18">Designed and developed pixel perfect responsive B2B and B2C facing applications under the EXOS suite.</p> <p class="t-18">B2B application include internal and external work flow management solutions. These applications include Appraiser App. This app is used by Appraisers to schedule and manage their orders.</p> <p class="t-18">B2C application like the Consumer App is a hybrid application. Currently, live on Google and App Store.</p>'
    },
    {
      name: 'EXOS Appraiser App',
      imageSrc: 'assets/appraiser-app-exploded-iso.png',
      id: 'exos-appraiser-app',
      value: 1,
      content: '<p class="t-18">Developed 20+ screens for a mobile app called EXOS Appraiser. By using this app an Appraiser can schedule, manage and accept new appraisal orders.</p> <p class="t-18"><small>Note:This app is live on Google Play Store and Apple app store as EXOS Appraiser.</small></p>'
    },
    {
      name: 'Fast Diagnostics logo',
      imageSrc: 'assets/fast-logo.png',
      id: 'fast-diagnostic-logo',
      value: 3,
      content: '<p class="t-18">Created  logo for a startup. This startup was focused on creating fast and efficient diagnostic services. The boxes in the logo represents an array.</p>'
    },
    {
      name: 'Youshin and Derrick Poster',
      imageSrc: 'assets/y+d-posters.png',
      id: 'youshin-and-derrick-poster',
      value: 3,
      content: '<p class="t-18">Created different wedding ceremony cards for Youshin and Derick.</p>'
    },
    {
      name: 'EXOS Style guide',
      imageSrc: 'assets/style-guide.png',
      id: 'exos-style-guide',
      value: 2,
      content: '<p class="t-18">Worked on creating a style guide, which has instructions about using different HTML elements and good practices for writing HTML and CSS code. </p>'
    },
    {
      name: 'Washington Square - Hyperlapse',
      imageSrc: 'assets/washingtonsq-timelapse.png',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/ya1tUHVi2vI"
    },
    {
      name: 'Altoids - Hyperlapse',
      imageSrc: 'assets/washingtonsq-timelapse.png',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/hC0iqPhSArs"
    },
    {
      name: 'Stop Sign - Hyperlapse',
      imageSrc: 'assets/washingtonsq-timelapse.png',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/UmBN14d2D8E"
    },
    {
      name: 'Reaching Myra',
      imageSrc: 'assets/washingtonsq-timelapse.png',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/S0bYyat4QAc"
    },
    {
      name: 'Toblerone - Hyperlapse',
      imageSrc: 'assets/washingtonsq-timelapse.png',
      id: 'washington-sq-hyperlapse',
      value: 4,
      showHide: true,
      url: "https://youtu.be/ya1tUHVi2vI"
    },
  ];
}


