import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery: any;
var $: any = jQuery;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  passwordCheck: string = "";
  passwordValue: string = "Cool1234";
  isPasswordInValid: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.passwordValue === this.passwordCheck){
      this.isPasswordInValid = false;
      $("#portfolioDrawer").modal("hide");
      window.open("/portfolio-landing-page", "_blank");
    }else{
      this.isPasswordInValid = true;
    }
  }

  showMore(){
    if(this.router.url === "/passwordTrue"){
      window.open("/portfolio-landing-page", "_blank");
    }else{
      $("#portfolioDrawer").modal("show");
    }
  }

  onFocus(){
    $("#password").addClass("fc-touched");
  }

}
