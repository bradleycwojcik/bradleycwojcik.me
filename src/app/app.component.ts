import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('navBurger', { static: true }) navBurger: ElementRef;
  @ViewChild('navMenu', { static: true }) navMenu: ElementRef;

  year: number;

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
