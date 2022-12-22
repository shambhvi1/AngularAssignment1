import {  Component, OnInit } from '@angular/core';
import { LazyLoadingService } from './shared/LazyLoading/lazy-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  constructor(private lazyLoadingService: LazyLoadingService){}
  

  ngOnInit(){
    // this.lazyLoadingService.lazyload();
  }
}
