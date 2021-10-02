import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateDataService } from 'src/app/state-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value: any = '';
  constructor(
    private route: Router,
    private stateDataService: StateDataService
  ) { }

  ngOnInit(): void {
  }
  navBack(): void{
    
  }
  navToHome(): void{
    this.route.navigateByUrl('home');
  }
  search(){
    this.stateDataService.setSearchString(this.value);
  }

}
