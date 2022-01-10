import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import * as AOS from 'aos';
declare var jQuery: any;
// var $: any = jQuery;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortfolioSpa';
  active : any;
  // router: string;
  // @HostListener("window:scroll", ["$event"])
  // scrollHandler(event: any, value:any) {
  //   //In chrome and some browser scroll is given to body tag
  //   console.log(value);
  //   let pos = (event.srcElement.scrollTop) + event.srcElement.offsetHeight + 10;
  //   let max = event.srcElement.scrollHeight;
  //   // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
  //   if (pos >= max) {
  //     // this.scrollButtonDisable = false;
  //   }
  // }

//   constructor(private _router: Router){
//     this.router = _router.url; 
// }


// constructor(public router: Router) {

//   this.router.events.subscribe(events => {
//     if (events instanceof NavigationEnd) {
//       this.active = router.url;
//     }
//   });




  // @HostListener('window:scroll', ['$event']) 
  // scrollHandler(event: any){
  //   var windowHeight = window.innerHeight;
  //   var scrollValue = window.scrollY;
  //   var positionTracker = 0;
  //   positionTracker = ((scrollValue * 100)/windowHeight);
  //   document.documentElement.style.setProperty('--positionTracker', `${positionTracker}%`);
  //   console.log(positionTracker);
  //   var sectionTracker;
    
  //   function updateSectionTracker(offsetValue:any){
  //     sectionTracker = positionTracker - offsetValue;
  //     // console.log(sectionTracker);
  //     console.log("section tracker is" + sectionTracker);
      
  //     // var opacity1 = positionTracker;
  //     // var opacity2 = 100-opacity1;
  //     // document.documentElement.style.setProperty('--opacity-1', `${opacity1}%`);
  //     // document.documentElement.style.setProperty('--opacity-2', `${opacity2}%`);
  //   }  
  //   function opacityAdjuster1(opacityOffset: any, opacityChanger: any){
  //     var opacityAdjusterValue = opacityOffset-positionTracker;
  //     document.documentElement.style.setProperty(`${opacityChanger}`, `${opacityAdjusterValue}%`);
  //   }
  //   function opacityAdjuster2(opacityOffset: any, opacityChanger: any){
  //     var opacityAdjusterValue2 = positionTracker-opacityOffset;
  //     document.documentElement.style.setProperty(`${opacityChanger}`, `${opacityAdjusterValue2}%`);
  //   }
  //   function borderRadiusAdjuster(borderRadiusOffeset: any){
  //     var positionReverse = positionTracker-50;
  //     var borderRadiusOffesetValue = borderRadiusOffeset-positionReverse;
  //     // var patternPositionerValue = 8.2*positionReverse;
  //     document.documentElement.style.setProperty('--fixed-bg-border-radius', `${borderRadiusOffesetValue}%`);
  //   }
  //   function widthHeightAdjuster(){
  //     var positionReverse = positionTracker-50;
  //     var patternPositionerValue = 8.2*positionReverse;
  //     document.documentElement.style.setProperty('--pattern-left-position', `-${patternPositionerValue}px`);
  //   }
  //   if(positionTracker <= 100){
  //     opacityAdjuster1(100, '--landing-opacity'); 
  //     opacityAdjuster2(0, '--about-me-opacity');
  //   }if(positionTracker >= 100 && positionTracker <= 200){
  //     console.log("second section")
  //     opacityAdjuster1(200, '--about-me-opacity'); 
  //     opacityAdjuster1(200, '--pattern-opacity');
  //     opacityAdjuster2(100, '--experience-opacity');
  //     borderRadiusAdjuster(150);
  //   }if(positionTracker >= 200 && positionTracker <= 300){
  //     console.log("third section")
  //     opacityAdjuster1(300, '--experience-opacity');
  //     opacityAdjuster2(200, '--skills-opacity');
  //     opacityAdjuster2(200, '--pattern-opacity');
  //   }if(positionTracker >= 300 && positionTracker <= 400){
  //     console.log("fourth section")
  //     opacityAdjuster1(400, '--skills-opacity');
  //     opacityAdjuster1(400, '--pattern-opacity');
  //     opacityAdjuster2(300, '--portfolio-opacity');
  //   }if(positionTracker >= 400 && positionTracker <= 500){
  //     console.log("fifth section")
  //     opacityAdjuster1(500, '--portfolio-opacity');
  //     opacityAdjuster2(400, '--get-in-touch-opacity');
  //   }if(positionTracker >= 500 && positionTracker <= 600){
  //     console.log("sixth section")
  //     opacityAdjuster1(600, '--get-in-touch-opacity');
  //     opacityAdjuster2(500, '--opacity-7');
  //   }

  // }







  // @HostListener('window:scroll', ['$event']) 
  // scrollHandler(event: any){
  //   var windowHeight = window.innerHeight;
  //   var scrollValue = window.scrollY;
  //   var positionTracker = 0;
  //   positionTracker = ((scrollValue * 100)/windowHeight);
  //   console.log(positionTracker);
  //   var sectionTracker;
    
  //   function updateSectionTracker(offsetValue:any){
  //     sectionTracker = positionTracker - offsetValue;
  //     // console.log(sectionTracker);
  //     console.log("section tracker is" + sectionTracker);
  //     var opacityIncreaser = positionTracker;
  //     var opacityDecreaser = 100-opacityIncreaser;
  //     document.documentElement.style.setProperty('--opacity-increase', `${opacityIncreaser}%`);
  //     document.documentElement.style.setProperty('--opacity-decrease', `${opacityDecreaser}%`);
  //     if(opacityIncreaser ==100){
  //       resetOpacity();
  //     }
  
  //     function resetOpacity(){
  //       opacityIncreaser = 0;
  //     }
  //   }  


  //   if(positionTracker <= 100){
  //     console.log("first section")
  //     updateSectionTracker(0);
  //   }if(positionTracker >= 100 && positionTracker <= 200){
  //     console.log("second section")
  //     updateSectionTracker(100);
  //   }if(positionTracker >= 200 && positionTracker <= 300){
  //     console.log("third section")
  //     updateSectionTracker(200);
  //     document.documentElement.style.setProperty('--opacity-increase', `0`);
  //     document.documentElement.style.setProperty('--opacity-decrease', `0`);
  //   }if(positionTracker >= 300 && positionTracker <= 400){
  //     console.log("fourth section")
  //     updateSectionTracker(300);
  //   }if(positionTracker >= 400 && positionTracker <= 500){
  //     console.log("fifth section")
  //     updateSectionTracker(400);
  //   }if(positionTracker >= 500 && positionTracker <= 600){
  //     console.log("sixth section")
  //     updateSectionTracker(500);

  //   }

  // }


  // @HostListener('window:scroll', ['$event']) 
  //   scrollHandler(event: any) {
  //     var windowHeight = window.innerHeight;
  //     var firstWindow = windowHeight;
  //     var scrollValue = window.scrollY;
  //     var opacityIncreaser = (scrollValue * 100)/firstWindow;
  //     var opacityDecreaser = 100-opacityIncreaser;
  //     var positioner = 100-((scrollValue * 100)/firstWindow);
  //     var actualPositioner;
  //     if(positioner >= 50){
  //       actualPositioner = (50*(-125))/positioner;
  //     }if(positioner <= 50){
  //       actualPositioner = (50*(-125))/positioner;
  //     }
  //     document.documentElement.style.setProperty('--actual-positioner', `${actualPositioner}px`);
      
  //     console.log(scrollValue);
  //     console.log(opacityIncreaser);
  //     document.documentElement.style.setProperty('--scroll', `${scrollValue}`);
  //     document.documentElement.style.setProperty('--windowHeight', `${windowHeight}`);
  //     document.documentElement.style.setProperty('--opacity-increase', `${opacityIncreaser}%`);
  //     document.documentElement.style.setProperty('--opacity-decrease', `${opacityDecreaser}%`);
  //     document.documentElement.style.setProperty('--positioner', `${positioner}`);



  //     if( scrollValue >= firstWindow){
  //       // if(document.getElementById('background-wrapper')){
  //       //   document.getElementById('background-wrapper')?.style.height = "10px";
  //       // }
  //     }
  //   }

  // scrollInEffect(){
  //   console.log("test");
  // }
    focusMe(value:any){
    console.log(window.scrollY);
    const sectionsCount = [
      'fixed-scroll-bg test',
      'fixed-scroll-bg about-me',
      'fixed-scroll-bg experience',
      'fixed-scroll-bg skills',
      'fixed-scroll-bg portfolio',
      'fixed-scroll-bg get-in-touch' 
    ];
    if(value != undefined){
      this.switchClassName(sectionsCount[value])
    }
    if(value = undefined)
    {
      this.switchClassName('fixed-scroll-bg intermediate')
    }
  }

   private switchClassName(className: string): void {
    document.getElementById('background-wrapper')?.removeAttribute("class");
    document.getElementById('background-wrapper')?.setAttribute("class", `${className}`);
  }

  // focusMe(value:any){
  //   console.log(value);
  //   const sectionsCount = [
  //     'fixed-scroll-bg test',
  //     'fixed-scroll-bg about-me',
  //     'fixed-scroll-bg experience',
  //     'fixed-scroll-bg skills',
  //     'fixed-scroll-bg portfolio',
  //     'fixed-scroll-bg get-in-touch' 
  //   ];
  //   if(value != undefined){
  //     this.switchClassName(sectionsCount[value])
  //   }
  //   if(value = undefined)
  //   {
  //     this.switchClassName('fixed-scroll-bg intermediate')
  //   }
  // }

  //  private switchClassName(className: string): void {
  //   document.getElementById('background-wrapper')?.removeAttribute("class");
  //   document.getElementById('background-wrapper')?.setAttribute("class", `${className}`);
  // }

  // @HostListener('window:scroll') onScroll(e: Event): void {
  //   const windowScrollPosition = window.scrollY;
  //   console.log(e);
  //   const sectionsCount = [
  //     { className: 'fixed-scroll-bg about-me' },
  //     { className: 'fixed-scroll-bg experience' },
  //     { className: 'fixed-scroll-bg bg-green' },
  //     { className: 'fixed-scroll-bg skills' },
  //     { className: 'fixed-scroll-bg portfolio' }
  //   ];
  //   const sectionHeight = document.getElementById(`section-1`)?.clientHeight;
  //   for (let i = 0; i <= sectionsCount.length; i++) {
  //     const sectionPosition = document.getElementById(`section-${i + 1}`)?.offsetTop;
  //     if (sectionHeight && windowScrollPosition <= sectionHeight) {
  //       this.switchClassName(sectionsCount[0]?.className);
  //     }
  //     if (sectionPosition && windowScrollPosition > sectionPosition - 1) {
  //       this.switchClassName(sectionsCount[i]?.className);
  //     }
  //   }
  // }
  // private switchClassName(className: string): void {
  //   document.getElementById('background-wrapper')?.removeAttribute("class");
  //   document.getElementById('background-wrapper')?.setAttribute("class", `${className}`);
  // }

  // ngOnInit() {
  //   AOS.init();
  // }

  //   // didScroll: boolean = false;
  //   var didScroll = false;


  // setInterval(function() {
  //     if ( didScroll ) {
  //            = false;
  //         var $el;

  //         //Same that all the if else statements
  //         switch (true) {
  //             case (scroll >= 591 && scroll <= 1380):
  //                 $el = $("#menu-item-26 a");
  //                 break;
  //             case (scroll >= 1381 && scroll <= 2545):
  //                 $el = $("#menu-item-22 a");
  //                 break;
  //             case (scroll >= 2546 && scroll <= 2969):
  //                 $el = $("#menu-item-23 a");
  //                 break;
  //             case (scroll >= 2970):
  //                 $el = $("#menu-item-24 a");
  //                 break;
  //             default: //scroll<=590
  //                 $el = $("#menu-item-25 a");
  //         }

  //         //Removing blue class from all links
  //         $('.menu a').removeClass('blue');

  //         //Adding blue class to the matched element
  //         $el.addClass('blue');
  //     }
  // }, 50);

  // var target = document.querySelector('#theTarget');

  // document.addEventListener('scroll', () => {
  //   if (window.scrollY >= target.getBoundingClientRect().top) {
  //     console.log('I have been reached');
  //   }
  // });



  // constructor() {
  // }

  // getYPosition(e: Event): number {
  //   return (e.target as Element).scrollTop;
  // }

  // onContainerScroll(event:any) {
  //   alert("scrolled me 1");
  // }
  // onContainerScroll1(event:any) {
  //   alert("scrolled me 1");
  // }
}
