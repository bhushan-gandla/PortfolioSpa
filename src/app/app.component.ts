import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';
declare var jQuery: any;
// var $: any = jQuery;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortfolioSpa';

  @HostListener('window:scroll') onScroll(e: Event): void {
    const windowScrollPosition = window.scrollY;
    const sectionsCount = [
      { className: 'fixed-scroll-bg about-me' },
      { className: 'fixed-scroll-bg experience' },
      { className: 'fixed-scroll-bg bg-green' },
      { className: 'fixed-scroll-bg skills' },
      { className: 'fixed-scroll-bg portfolio' }
    ];
    const sectionHeight = document.getElementById(`section-1`)?.clientHeight;
    for (let i = 0; i <= sectionsCount.length; i++) {
      const sectionPosition = document.getElementById(`section-${i + 1}`)?.offsetTop;
      if (sectionHeight && windowScrollPosition <= sectionHeight) {
        this.switchClassName(sectionsCount[0]?.className);
      }
      if (sectionPosition && windowScrollPosition > sectionPosition - 1) {
        this.switchClassName(sectionsCount[i]?.className);
      }
    }
  }
  private switchClassName(className: string): void {
    document.getElementById('background-wrapper')?.removeAttribute("class");
    document.getElementById('background-wrapper')?.setAttribute("class", `${className}`);
  }

  ngOnInit() {
    AOS.init();
  }

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
