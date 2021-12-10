import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
var $: any = jQuery;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  modalToggle = document.getElementById('exampleModal')

  public closeModal() {
    // $('#exampleModal')?.modal('hide');
    // setTimeout(() => {
    //   alert('test');
    // }, 1000);
  }
}
