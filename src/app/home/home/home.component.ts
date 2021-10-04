import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {StateDataService} from './../../state-data.service';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
   resp: any
   pageItem: any;
   length: any;
   currentPage: any = 0;
   searchStr: any;
   subsArr: Subscription[] = []
   constructor(
      private httpService: HttpService,
      private stateDataService: StateDataService
   ) {
      this.stateDataService.getSearchString().subscribe(str => {
         if(str != null){
            this.getData(str, 0); this.searchStr = str
         }         
      })
   }

   ngOnInit(): void {
      

   }

   alert() {
      alert('Item added to cart')
   }

   handlePageEvent(e) {
      this.currentPage = e.pageIndex;
      this.getData(this.searchStr, this.currentPage)
   }

   getData(search, page) {
      this.subsArr.push(this.httpService.getList(search, page).subscribe((resp) => {
         this.resp = resp;
         this.pageItem = this.resp.data.paging
         this.length = this.pageItem.total_item
      }))
   }

   ngOnDestroy(): void{
      this.subsArr.forEach(sub => {
         sub.unsubscribe()
      });
   }

}
