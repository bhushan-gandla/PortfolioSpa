import { Component } from '@angular/core';

// declare var jQuery: any;
// var $: any = jQuery;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortfolioSpa';

//   // didScroll: boolean = false;
//   var didScroll = false;

// $(window).scroll(function() {
//     didScroll = true;
// });

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

// @HostListener('window:scroll') onScroll(e: Event): void {
//   console.log(this.getYPosition(e));
// }

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
