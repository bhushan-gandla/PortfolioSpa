import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  

  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event: any){
    // debugger;
    var windowHeight = window.innerHeight;
    var scrollValue = window.scrollY;
    var positionTracker = 0;
    positionTracker = ((scrollValue * 100)/windowHeight);
    document.documentElement.style.setProperty('--positionTracker', `${positionTracker}%`);
    console.log(positionTracker);
    var sectionTracker;
    
    function updateSectionTracker(offsetValue:any){
      sectionTracker = positionTracker - offsetValue;
      console.log("section tracker is" + sectionTracker);
    }  
    function opacityAdjuster1(opacityOffset: any, opacityChanger: any){
      var opacityAdjusterValue = opacityOffset-positionTracker;
      document.documentElement.style.setProperty(`${opacityChanger}`, `${opacityAdjusterValue}%`);
    }
    function opacityAdjuster2(opacityOffset: any, opacityChanger: any){
      var opacityAdjusterValue2 = positionTracker-opacityOffset;
      document.documentElement.style.setProperty(`${opacityChanger}`, `${opacityAdjusterValue2}%`);
    }
    function borderRadiusAdjuster(borderRadiusOffeset: any){
      var positionReverse = positionTracker-50;
      var borderRadiusOffesetValue = borderRadiusOffeset-positionReverse;
      document.documentElement.style.setProperty('--fixed-bg-border-radius', `${borderRadiusOffesetValue}%`);
    }
    function widthHeightAdjuster(){
      var positionReverse = positionTracker-50;
      var patternPositionerValue = 8.2*positionReverse;
      document.documentElement.style.setProperty('--pattern-left-position', `-${patternPositionerValue}px`);
    }
    if(positionTracker <= 100){
      opacityAdjuster1(100, '--landing-opacity'); 
      opacityAdjuster2(0, '--about-me-opacity');
      // this.router. ([`#landing`]);
      // document.location.href = window.location.pathname + `#landingPageScroll`;
    }if(positionTracker >= 100 && positionTracker <= 200){
      console.log("second section")
      opacityAdjuster1(200, '--about-me-opacity'); 
      opacityAdjuster1(200, '--pattern-opacity');
      opacityAdjuster2(100, '--experience-opacity');
      borderRadiusAdjuster(150);
      // document.location.href = window.location.pathname + `#aboutMePage`;
    }if(positionTracker >= 200 && positionTracker <= 300){
      console.log("third section")
      opacityAdjuster1(300, '--experience-opacity');
      opacityAdjuster2(200, '--skills-opacity');
      opacityAdjuster2(200, '--pattern-opacity');
      document.documentElement.style.setProperty('--landing-opacity', '0%');
    
      document.documentElement.style.setProperty('--fixed-bg-border-radius', '0%');

      // document.location.href = window.location.pathname + `#experienceScroll`;
    }if(positionTracker >= 300 && positionTracker <= 400){
      console.log("fourth section")
      opacityAdjuster1(400, '--skills-opacity');
      opacityAdjuster1(400, '--pattern-opacity');
      opacityAdjuster2(300, '--portfolio-opacity');
      document.documentElement.style.setProperty('--landing-opacity', '0%');
      document.documentElement.style.setProperty('--fixed-bg-border-radius', '0%');

      // document.location.href = window.location.pathname + `#skillsScroll`;
    }if(positionTracker >= 400 && positionTracker <= 500){
      console.log("fifth section")
      opacityAdjuster1(500, '--portfolio-opacity');
      opacityAdjuster2(400, '--get-in-touch-opacity');
      document.documentElement.style.setProperty('--landing-opacity', '0%');
      document.documentElement.style.setProperty('--fixed-bg-border-radius', '0%');
      document.documentElement.style.setProperty('--pattern-opacity', '0%');

      // document.location.href = window.location.pathname + `#portfolioScroll`;
    }if(positionTracker >= 500 && positionTracker <= 600){
      console.log("sixth section")
      opacityAdjuster1(600, '--get-in-touch-opacity');
      opacityAdjuster2(500, '--opacity-7');
      // document.location.href = window.location.pathname + `#getInTouchScroll`;`
    }

  }

  // onLoad(event: any) = scrollHandler(event: any);

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

}

