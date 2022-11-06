import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  handleRefresh() {
    setTimeout(() => {
      // Any calls to load data go here
      // event.target.complete();
    }, 2000);
  };

  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl("home")
    }, 3000);
  }

  ngOnInit() {
  }

}