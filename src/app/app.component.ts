import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
  animations: [
    // animation triggers go here
  ],
})
export class AppComponent implements OnInit {
  constructor(private analytics: AnalyticsService) {}

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
