import { Component } from '@angular/core';
import { IdleDetectService } from './services/idle-detect-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wo-lib';

  constructor(
    private idleDetectService: IdleDetectService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('onInit');
    
    this.idleDetectService.startTimer(10000);

    this.idleDetectService.watcher().subscribe((res) => {
      if( res ) {
        console.log('Is session expired? ', res)
        if(confirm('Your session has expired.')) {
          this.router.navigate(['/sessionExpired']);
        }
      }
    });
  }
}
