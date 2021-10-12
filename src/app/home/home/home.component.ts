import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { StateDataService } from './../../state-data.service';
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
         if (str != null) {
            this.getData(str, 0); this.searchStr = str
         }
      })
   }

   ngOnInit(): void {

      // this.getData('samsung', 0);
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
      // this.resp = {
      //    "code": 200,
      //    "status": "OK",
      //    "data": {
      //       "pageType": [

      //       ],
      //       "searchTerm": "samsung",
      //       "suggestions": [

      //       ],
      //       "correctedSearchResponses": [

      //       ],
      //       "ageRestricted": false,
      //       "products": [
      //          {
      //             "id": "SAO-60034-01398",
      //             "sku": "SAO-60034-01398",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy M32 Smartphone [6 GB/ 128 GB]",
      //             "price": {
      //                "priceDisplay": "Rp2.799.000 - Rp2.800.000",
      //                "discount": 0,
      //                "minPrice": 2799000.0
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full51_s22dukbf.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full41_sfqtkzs6.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full42_gnvofzle.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full43_ibk9bm9k.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full44_sl69dlen.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full45_gutj5xqw.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full46_io2f3x9t.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full47_qdwiinl5.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 454,
      //                "absoluteRating": 4.8
      //             },
      //             "itemCount": 3,
      //             "defaultSku": "SAO-60034-01398-00002",
      //             "itemSku": "SAO-60034-01398-00002",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TUKAR_TAMBAH",
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ],
      //             "formattedId": "ps--SAO-60034-01398",
      //             "url": "/p/samsung-galaxy-m32-smartphone-6-gb-128-gb/ps--SAO-60034-01398?ds=SAO-60034-01398-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01398&tag=trending",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 3
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp2.799.000",
      //                      "strikeThroughPriceDisplay": "Rp2.999.000",
      //                      "discount": 6,
      //                      "minPrice": 2799000.0,
      //                      "offerPriceDisplay": "Rp2.800.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full51_s22dukbf.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full41_sfqtkzs6.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full42_gnvofzle.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full43_ibk9bm9k.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full44_sl69dlen.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full45_gutj5xqw.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full46_io2f3x9t.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full47_qdwiinl5.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 454,
      //                      "absoluteRating": 4.8
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01398-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "EXCLUSIVE_CAMPAIGN",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-m32-smartphone-6-gb-128-gb/ps--SAO-60034-01398?ds=SAO-60034-01398-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01398",
      //                   "promoEndTime": 0,
      //                   "campaignInfo": {
      //                      "name": "Road to 10.10",
      //                      "code": "CAMP-00751"
      //                   },
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp2.799.000",
      //                      "strikeThroughPriceDisplay": "Rp2.999.000",
      //                      "discount": 6,
      //                      "minPrice": 2799000.0,
      //                      "offerPriceDisplay": "Rp2.800.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full50_rcmuicoq.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full33_nrhbfu5s.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full34_pszoy8x3.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full35_gx6ziv2o.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full36_o7nrdr9p.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full37_lr02djr3.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full38_jfxxam98.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full39_ps03x6rg.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 454,
      //                      "absoluteRating": 4.8
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01398-00003",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "EXCLUSIVE_CAMPAIGN",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-m32-smartphone-6-gb-128-gb/ps--SAO-60034-01398?ds=SAO-60034-01398-00003&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01398",
      //                   "promoEndTime": 0,
      //                   "campaignInfo": {
      //                      "name": "Road to 10.10",
      //                      "code": "CAMP-00751"
      //                   },
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp2.800.000",
      //                      "strikeThroughPriceDisplay": "Rp2.999.000",
      //                      "discount": 6,
      //                      "minPrice": 2800000.0,
      //                      "offerPriceDisplay": "Rp2.800.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full49_ent6q4ct.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full25_ji7zbn3g.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full26_p0wdr5ws.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full27_glpnof6g.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full28_d3puz1h3.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full29_bdqbetoq.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full30_ixkhmgnz.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-22292328/samsung_samsung_galaxy_m32_smartphone_-6_gb-_128_gb-_full31_cgsjgm40.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 454,
      //                      "absoluteRating": 4.8
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01398-00001",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-m32-smartphone-6-gb-128-gb/ps--SAO-60034-01398?ds=SAO-60034-01398-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01398",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Tangerang",
      //             "numLocations": 2,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-22292328",
      //             "uniqueSellingPoint": "• Infinity-U Display<br>• Multi Camera System<br>• Rear Camera 64MP + 8MP + 2MP + 2MP<br>• Front Camera 20MP<br>• The 5,000mAh Battery*<br>• One UI for your Galaxy Experience<br>• Processor Octa-Core 2GHz, 1.8GHz<br>• OS Android",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "2,1 k",
      //                "id": "2,1 rb"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "SAO-60034-01061",
      //             "sku": "SAO-60034-01061",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy M02 Smartphone [3 2GB/ 2 GB] + Free Earphone - Black",
      //             "price": {
      //                "priceDisplay": "Rp1.299.000",
      //                "strikeThroughPriceDisplay": "Rp1.349.000",
      //                "discount": 3,
      //                "minPrice": 1299000.0,
      //                "offerPriceDisplay": "Rp1.299.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full02_j94vklnc.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full10_tcr5bqzi.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full11_pnvs7wa5.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full12_c11w42z3.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full13_dhjxytet.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full14_igsc27oe.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full15_pkxee12d.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full16_fuyi85gl.jpeg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 562,
      //                "absoluteRating": 4.9
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "SAO-60034-01061-00002",
      //             "itemSku": "SAO-60034-01061-00002",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "TUKAR_TAMBAH",
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ],
      //             "formattedId": "ps--SAO-60034-01061",
      //             "url": "/p/samsung-galaxy-m02-smartphone-3-2gb-2-gb-free-earphone-black/ps--SAO-60034-01061?ds=SAO-60034-01061-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01061&tag=trending",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "SA-1000110",
      //                "HA-1000002",
      //                "TU-1000021"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp1.299.000",
      //                      "strikeThroughPriceDisplay": "Rp1.349.000",
      //                      "discount": 3,
      //                      "minPrice": 1299000.0,
      //                      "offerPriceDisplay": "Rp1.299.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full02_j94vklnc.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full10_tcr5bqzi.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full11_pnvs7wa5.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full12_c11w42z3.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full13_dhjxytet.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full14_igsc27oe.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full15_pkxee12d.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full16_fuyi85gl.jpeg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 562,
      //                      "absoluteRating": 4.9
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01061-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-m02-smartphone-3-2gb-2-gb-free-earphone-black/ps--SAO-60034-01061?ds=SAO-60034-01061-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01061",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp1.299.000",
      //                      "strikeThroughPriceDisplay": "Rp1.349.000",
      //                      "discount": 3,
      //                      "minPrice": 1299000.0,
      //                      "offerPriceDisplay": "Rp1.299.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full01_rrrsnc2t.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full02_qwo6g63.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full03_hvkrw0bn.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full04_mlh791x.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full05_cfhv3t9u.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full06_knnh4css.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full07_bvzw11ih.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-12071738/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full08_uh9lvykg.jpeg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 562,
      //                      "absoluteRating": 4.9
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01061-00001",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-m02-smartphone-3-2gb-2-gb-free-earphone-black/ps--SAO-60034-01061?ds=SAO-60034-01061-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01061",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Tangerang",
      //             "numLocations": 2,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-12071738",
      //             "uniqueSellingPoint": "• OS Android 10, One UI 2.0<br>• Chipset Mediatek MT6739W (28 nm) CPU Quad-core 1.5 GHz Cortex-A53<br>• GPU PowerVR GE8100<br>• Main Camera :13MP + 2MP, Selfie Camera:5MP<br>• Battery 5000 mAh",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "4,3 k",
      //                "id": "4,3 rb"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "JKO-70001-00019",
      //             "sku": "JKO-70001-00019",
      //             "merchantCode": "JKO-70001",
      //             "status": "AVAILABLE",
      //             "name": "OEM Y30 TWS Wireless Bluetooth 5.0 Earphone Noise Cancelling Earphone Stereo HD Earphone for iPhone Samsung Xiaomi",
      //             "price": {
      //                "priceDisplay": "Rp73.000",
      //                "strikeThroughPriceDisplay": "Rp199.000",
      //                "discount": 63,
      //                "minPrice": 73000.0,
      //                "offerPriceDisplay": "Rp73.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//90/MTA-9255123/oem_y30_tws_wireless_bluetooth_5-0_earphone_noise_cancelling_earphone_stereo_hd_earphone_for_iphone_samsung_xiaomi_full01_imm8v8fz.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//90/MTA-9255123/oem_y30_tws_wireless_bluetooth_5-0_earphone_noise_cancelling_earphone_stereo_hd_earphone_for_iphone_samsung_xiaomi_full02_kfvbg781.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//90/MTA-9255123/oem_y30_tws_wireless_bluetooth_5-0_earphone_noise_cancelling_earphone_stereo_hd_earphone_for_iphone_samsung_xiaomi_full03_rvkctftv.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//90/MTA-9255123/oem_y30_tws_wireless_bluetooth_5-0_earphone_noise_cancelling_earphone_stereo_hd_earphone_for_iphone_samsung_xiaomi_full04_cjakxxxx.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//90/MTA-9255123/oem_y30_tws_wireless_bluetooth_5-0_earphone_noise_cancelling_earphone_stereo_hd_earphone_for_iphone_samsung_xiaomi_full05_n2grhzqg.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54650",
      //                "name": "Peralatan Elektronik"
      //             },
      //             "brand": "OEM",
      //             "review": {
      //                "rating": 4,
      //                "count": 137,
      //                "absoluteRating": 4.6
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "JKO-70001-00019-00001",
      //             "itemSku": "JKO-70001-00019-00001",
      //             "tags": [
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ],
      //             "formattedId": "ps--JKO-70001-00019",
      //             "url": "/p/oem-y30-tws-wireless-bluetooth-5-0-earphone-noise-cancelling-earphone-stereo-hd-earphone-for-iphone-samsung-xiaomi/ps--JKO-70001-00019?ds=JKO-70001-00019-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3146553&pid=JKO-70001-00019&tag=trending",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 1
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54650",
      //                "AU-1000001",
      //                "HE-1000001",
      //                "EA-1000001",
      //                "EA-1000021"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Jakarta Timur",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-9255123",
      //             "uniqueSellingPoint": "• Deskripsi:\n<br>• Satu tombol, mudah dioperasikan\n<br>• Pembaruan baru, chip Bluetooth 5.0\n<br>• Nirkabel sejati, bodi ganda independen\n<br>• Bodi kompak, mini dan indah\n<br>• Pengurangan kebisingan cerdas, tampilan baterai cerdas\n<br>• Versi Bluetooth: Jerry V5.0\n<br>• Baterai headphone: 50mAh\n<br>• Waktu siaga:> 100 jam\n<br>• Waktu bicara:> 4,5 jam\n<br>• Baterai: baterai lithium polimer, earphone 50 mA, ruang pengisian 300 mA.",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "306",
      //                "id": "306"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "SAO-60034-00889",
      //             "sku": "SAO-60034-00889",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy M51 Smartphone [128GB/ 8GB]",
      //             "price": {
      //                "priceDisplay": "Rp3.998.000",
      //                "strikeThroughPriceDisplay": "Rp5.499.000",
      //                "discount": 27,
      //                "minPrice": 3998000.0,
      //                "offerPriceDisplay": "Rp3.999.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-8912492/samsung_samsung_galaxy_m51_smartphone_-128gb-_8gb-_full15_bgqfznlj.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-8912492/samsung_samsung-galaxy-m51-smartphone--128gb--8gb-_full03.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-8912492/samsung_samsung-galaxy-m51-smartphone--128gb--8gb-_full04.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-8912492/samsung_samsung-galaxy-m51-smartphone--128gb--8gb-_full05.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-8912492/samsung_samsung-galaxy-m51-smartphone--128gb--8gb-_full06.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-8912492/samsung_samsung-galaxy-m51-smartphone--128gb--8gb-_full07.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-8912492/samsung_samsung-galaxy-m51-smartphone--128gb--8gb-_full08.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 898,
      //                "absoluteRating": 4.8
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "SAO-60034-00889-00001",
      //             "itemSku": "SAO-60034-00889-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TUKAR_TAMBAH",
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ],
      //             "formattedId": "ps--SAO-60034-00889",
      //             "url": "/p/samsung-galaxy-m51-smartphone-128gb-8gb/ps--SAO-60034-00889?ds=SAO-60034-00889-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-00889&tag=trending",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 1
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "SA-1000110",
      //                "HA-1000002",
      //                "TU-1000021"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Tangerang",
      //             "numLocations": 2,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "SAO-60034-00889",
      //             "uniqueSellingPoint": "• OS : Android 10, One UI 2.1\n<br>• Prosesor : Octa-core (2x2.2 GHz Kryo 470 Gold 6x1.8 GHz Kryo 470 Silver)\n<br>• Kamera : Rear Camera 64MP (F1.7) + 12MP (F2.2) +5MP (F2.4) + 5MP F(2.4), Front 32 MP (F2.0)\n<br>• Layar : 6.7 inches, 108.4 cm2 (~86.7% screen-to-body ratio)\n<br>• Baterai : Li-Po 7000 mAh, non-removable",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "8,2 k",
      //                "id": "8,2 rb"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "SAO-60034-01217",
      //             "sku": "SAO-60034-01217",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy M02 Smartphone [32GB/ 2 GB] + Earphone Free SP Telkomsel BundlingMax",
      //             "price": {
      //                "priceDisplay": "Rp1.298.000",
      //                "strikeThroughPriceDisplay": "Rp1.299.000",
      //                "discount": 0,
      //                "minPrice": 1298000.0,
      //                "offerPriceDisplay": "Rp1.299.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-32gb-_2_gb-_-_earphone_free_telkomsel_starter_pack_full01_tyh316da.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full02_qwo6g63.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full03_hvkrw0bn.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full04_mlh791x.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full05_cfhv3t9u.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full06_knnh4css.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full07_bvzw11ih.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-18928316/samsung_samsung_galaxy_m02_smartphone_-3_2gb-_2_gb-_-_free_earphone_-_black_full08_uh9lvykg.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 65,
      //                "absoluteRating": 4.8
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "SAO-60034-01217-00002",
      //             "itemSku": "SAO-60034-01217-00002",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TUKAR_TAMBAH"
      //             ],
      //             "formattedId": "ps--SAO-60034-01217",
      //             "url": "/p/samsung-galaxy-m02-smartphone-32gb-2-gb-earphone-free-sp-telkomsel-bundlingmax/ps--SAO-60034-01217?ds=SAO-60034-01217-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01217",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 1
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Tangerang",
      //             "numLocations": 2,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "SAO-60034-01217",
      //             "uniqueSellingPoint": "• OS Android 10, One UI 2.0<br>• Chipset Mediatek MT6739W (28 nm) CPU Quad-core 1.5 GHz Cortex-A53<br>• GPU PowerVR GE8100<br>• Main Camera :13MP + 2MP, Selfie Camera:5MP<br>• Battery 5000 mAh",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "550",
      //                "id": "550"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "BIS-56524-00094",
      //             "sku": "BIS-56524-00094",
      //             "merchantCode": "BIS-56524",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy A12 6/128",
      //             "price": {
      //                "priceDisplay": "Rp2.459.000 - Rp2.470.000",
      //                "discount": 0,
      //                "minPrice": 2459000.0
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//117/MTA-19988298/samsung_samsung_galaxy_a12___full01_ur1ypfii.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 10,
      //                "absoluteRating": 4.9
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "BIS-56524-00094-00003",
      //             "itemSku": "BIS-56524-00094-00003",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--BIS-56524-00094",
      //             "url": "/p/samsung-galaxy-a12-6-128/ps--BIS-56524-00094?ds=BIS-56524-00094-00003&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3019363&pid=BIS-56524-00094",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Jakarta Barat",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "BIS-56524-00094",
      //             "uniqueSellingPoint": "• Samsung Galaxy A12",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "276",
      //                "id": "276"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "CAC-60042-00038",
      //             "sku": "CAC-60042-00038",
      //             "merchantCode": "CAC-60042",
      //             "status": "AVAILABLE",
      //             "name": "SAMSUNG GALAXY A02 3/32GB",
      //             "price": {
      //                "priceDisplay": "Rp1.438.000",
      //                "strikeThroughPriceDisplay": "Rp1.600.000",
      //                "discount": 10,
      //                "minPrice": 1438000.0,
      //                "offerPriceDisplay": "Rp1.438.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-19722310/samsung_samsung_galaxy_a02_full02_fhp8us8z.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 14,
      //                "absoluteRating": 4.9
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "CAC-60042-00038-00002",
      //             "itemSku": "CAC-60042-00038-00002",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--CAC-60042-00038",
      //             "url": "/p/samsung-galaxy-a02-3-32gb/ps--CAC-60042-00038?ds=CAC-60042-00038-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3042560&pid=CAC-60042-00038",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp1.438.000",
      //                      "strikeThroughPriceDisplay": "Rp1.600.000",
      //                      "discount": 10,
      //                      "minPrice": 1438000.0,
      //                      "offerPriceDisplay": "Rp1.438.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-19722310/samsung_samsung_galaxy_a02_full02_fhp8us8z.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 14,
      //                      "absoluteRating": 4.9
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "CAC-60042-00038-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a02-3-32gb/ps--CAC-60042-00038?ds=CAC-60042-00038-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3042560&pid=CAC-60042-00038",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp1.438.000",
      //                      "strikeThroughPriceDisplay": "Rp1.600.000",
      //                      "discount": 10,
      //                      "minPrice": 1438000.0,
      //                      "offerPriceDisplay": "Rp1.438.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-19722310/samsung_samsung_galaxy_a02_full01_ud5yqv7r.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 14,
      //                      "absoluteRating": 4.9
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "CAC-60042-00038-00001",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a02-3-32gb/ps--CAC-60042-00038?ds=CAC-60042-00038-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3042560&pid=CAC-60042-00038",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Jakarta Barat",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-19722310",
      //             "uniqueSellingPoint": "",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "382",
      //                "id": "382"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "INS-14388-02540",
      //             "sku": "INS-14388-02540",
      //             "merchantCode": "INS-14388",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy A02 Sein 3/32gb",
      //             "price": {
      //                "priceDisplay": "Rp1.479.000",
      //                "strikeThroughPriceDisplay": "Rp1.499.000",
      //                "discount": 1,
      //                "minPrice": 1479000.0,
      //                "offerPriceDisplay": "Rp1.479.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-11566510/samsung_samsung_galaxy_a02_sein_3-32gb_full01_q43qnec4.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-11566510/samsung_samsung_galaxy_a02_sein_3-32gb_full02_ofle4m50.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 4,
      //                "absoluteRating": 4.0
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "INS-14388-02540-00002",
      //             "itemSku": "INS-14388-02540-00002",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "TUKAR_TAMBAH"
      //             ],
      //             "formattedId": "ps--INS-14388-02540",
      //             "url": "/p/samsung-galaxy-a02-sein-3-32gb/ps--INS-14388-02540?ds=INS-14388-02540-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=INS-14388-002&pid=INS-14388-02540",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 1
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "SA-1000110",
      //                "HA-1000002",
      //                "TU-1000021"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Jakarta Pusat",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-11566510",
      //             "uniqueSellingPoint": "",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "6",
      //                "id": "6"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "UNC-53496-00358",
      //             "sku": "UNC-53496-00358",
      //             "merchantCode": "UNC-53496",
      //             "status": "AVAILABLE",
      //             "name": "SAMSUNG GALAXY A32 [8 GB/ 128 GB/ SEIN]",
      //             "price": {
      //                "priceDisplay": "Rp3.514.000",
      //                "strikeThroughPriceDisplay": "Rp3.799.000",
      //                "discount": 7,
      //                "minPrice": 3514000.0,
      //                "offerPriceDisplay": "Rp3.514.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//92/MTA-19147421/samsung_samsung_galaxy_a32_8-128gb_full01_li3zch7i.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 5,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "UNC-53496-00358-00001",
      //             "itemSku": "UNC-53496-00358-00001",
      //             "tags": [
      //                "PRISTINE",
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--UNC-53496-00358",
      //             "url": "/p/samsung-galaxy-a32-8-gb-128-gb-sein/ps--UNC-53496-00358?ds=UNC-53496-00358-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3018173&pid=UNC-53496-00358",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Medan",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Gold",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //             },
      //             "level0Id": "PRI-136498-00",
      //             "uniqueSellingPoint": "• Ukuran layar: 6.4 inches, 98.9 cm2 (~84.6% screen-to-body ratio), Super AMOLED, 90Hz, 800 nits (peak)\n<br>• Memori: RAM 8GB, ROM 128GB, microSDXC (dedicated slot)\n<br>• Sistem operasi: Android 11, One UI 3.1\n<br>• CPU: Mediatek Helio G80 (12 nm), Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "59",
      //                "id": "59"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "SAO-60034-01221",
      //             "sku": "SAO-60034-01221",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy M62 Smartphone [8 GB/ 256 GB] Free SP Telkomsel BundlingMax",
      //             "price": {
      //                "priceDisplay": "Rp4.899.000",
      //                "strikeThroughPriceDisplay": "Rp5.999.000",
      //                "discount": 18,
      //                "minPrice": 4899000.0,
      //                "offerPriceDisplay": "Rp5.099.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_-_free_telkomsel_starter_pack_full01_hdayq06a.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//115/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_full18_rnnw76rt.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//115/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_full19_r5jr3qvh.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//115/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_full20_gu629rjl.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//115/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_full21_uv5f7qst.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//115/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_full22_bu7e2kw8.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//115/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_full23_qwloaoh6.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//115/MTA-18928699/samsung_samsung_galaxy_m62_smartphone_-8_gb-_256_gb-_full24_fbk9aqu1.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 9,
      //                "absoluteRating": 4.6
      //             },
      //             "itemCount": 3,
      //             "defaultSku": "SAO-60034-01221-00001",
      //             "itemSku": "SAO-60034-01221-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TUKAR_TAMBAH"
      //             ],
      //             "formattedId": "ps--SAO-60034-01221",
      //             "url": "/p/samsung-galaxy-m62-smartphone-8-gb-256-gb-free-sp-telkomsel-bundlingmax/ps--SAO-60034-01221?ds=SAO-60034-01221-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01221",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 3
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Bekasi",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "SAO-60034-01221",
      //             "uniqueSellingPoint": "• Android \n<br>• Display 6.7 inch\n<br>• Processor Exynos 9825 \n<br>• Rear Camera 64 + 12 UW + 5MP Depth + 5MP Macro\n<br>• Front Camera 32 MP (F2.0)\n<br>• Battery 7,000 mAh",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "17",
      //                "id": "17"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "UCA-60023-00279",
      //             "sku": "UCA-60023-00279",
      //             "merchantCode": "UCA-60023",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy A02 Smartphone [32GB/ 3GB]",
      //             "price": {
      //                "priceDisplay": "Rp1.499.000",
      //                "discount": 0,
      //                "minPrice": 1499000.0,
      //                "offerPriceDisplay": "Rp1.499.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full05.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full06.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full07.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full08.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 2,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "UCA-60023-00279-00001",
      //             "itemSku": "UCA-60023-00279-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--UCA-60023-00279",
      //             "url": "/p/samsung-galaxy-a02-smartphone-32gb-3gb/ps--UCA-60023-00279?ds=UCA-60023-00279-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3091938&pid=UCA-60023-00279",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp1.499.000",
      //                      "discount": 0,
      //                      "minPrice": 1499000.0,
      //                      "offerPriceDisplay": "Rp1.499.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full05.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full06.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full07.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full08.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 5,
      //                      "count": 2,
      //                      "absoluteRating": 5.0
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "UCA-60023-00279-00001",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a02-smartphone-32gb-3gb/ps--UCA-60023-00279?ds=UCA-60023-00279-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3091938&pid=UCA-60023-00279",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Gold",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp1.499.000",
      //                      "discount": 0,
      //                      "minPrice": 1499000.0,
      //                      "offerPriceDisplay": "Rp1.499.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full01.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full02.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full03.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-11525386/samsung_samsung_full04.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 5,
      //                      "count": 2,
      //                      "absoluteRating": 5.0
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "UCA-60023-00279-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a02-smartphone-32gb-3gb/ps--UCA-60023-00279?ds=UCA-60023-00279-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3091938&pid=UCA-60023-00279",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Gold",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Jakarta Timur",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Gold",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //             },
      //             "level0Id": "MTA-14503885",
      //             "uniqueSellingPoint": "• Smartphone<br>• OS Android 10<br>• Chipset Mediatek MT6739W (28 nm)<br>• CPU Quad-core 1.5 GHz Cortex-A53<br>• GPU PowerVR GE8100<br>• Rear Camera Dual 13 MP + 2MP<br>• Selfie Camera 5MP<br>• Battery 5000 mAh",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "2",
      //                "id": "2"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "BLA-60054-01949",
      //             "sku": "BLA-60054-01949",
      //             "merchantCode": "BLA-60054",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Lifestyle QA65LS03AAKXXD TV 65\" The Frame Art Mode QLED 4K Smart TV LS03A (2021)",
      //             "price": {
      //                "priceDisplay": "Rp19.499.000",
      //                "strikeThroughPriceDisplay": "Rp31.729.000",
      //                "discount": 38,
      //                "minPrice": 1.9499E7,
      //                "offerPriceDisplay": "Rp20.499.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-13776441/samsung_samsung_lifestyle_qa65ls03aakxxd_tv_65-_the_frame_art_mode_qled_4k_smart_tv_ls03a_-2021-_full04_hbu30tfh.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-13776441/samsung_-internal-_-_samsung_qa65ls03aakxxd_the_frame_art_mode_qled_4k_smart_tv_-65_inch-_full02_itfvri8l.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54650",
      //                "name": "Peralatan Elektronik"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 2,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "BLA-60054-01949-00001",
      //             "itemSku": "BLA-60054-01949-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN"
      //             ],
      //             "formattedId": "ps--BLA-60054-01949",
      //             "url": "/p/samsung-lifestyle-qa65ls03aakxxd-tv-65-the-frame-art-mode-qled-4k-smart-tv-ls03a-2021/ps--BLA-60054-01949?ds=BLA-60054-01949-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3094910&pid=BLA-60054-01949",
      //             "attributes": [
      //                {
      //                   "count": 0
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54650",
      //                "TE-1000002",
      //                "SM-1000052",
      //                "TE-1000004",
      //                "SM-1000046"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kab. Bekasi",
      //             "numLocations": 1,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "BLA-60054-01949",
      //             "uniqueSellingPoint": "• Display Screen Size 65\"\n<br>• Resolution 3,840 x 2,160\n<br>• Screen Curvature #N/A\n<br>• Pengiriman Bezzel akan di kirimkan Max 10 Hari setelah barang diterima",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "7",
      //                "id": "7"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "BLA-60054-01854",
      //             "sku": "BLA-60054-01854",
      //             "merchantCode": "BLA-60054",
      //             "status": "AVAILABLE",
      //             "name": "Surabaya - Samsung WA70H4200SW/SE Top Loading Mesin Cuci [7 Kg]",
      //             "price": {
      //                "priceDisplay": "Rp2.149.000",
      //                "strikeThroughPriceDisplay": "Rp2.999.000",
      //                "discount": 28,
      //                "minPrice": 2149000.0,
      //                "offerPriceDisplay": "Rp2.149.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//97/MTA-12078950/samsung_-internal-_-_samsung_wa70h4200sw-se_top_loading_mesin_cuci_-7_kg-surabaya-_full01_tzawtq0o.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//97/MTA-12078950/samsung_-internal-_-_samsung_wa70h4200sw-se_top_loading_mesin_cuci_-7_kg-surabaya-_full02_gxa3b0vy.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//97/MTA-12078950/samsung_-internal-_-_samsung_wa70h4200sw-se_top_loading_mesin_cuci_-7_kg-surabaya-_full03_oxhhz0gc.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//97/MTA-12078950/samsung_-internal-_-_samsung_wa70h4200sw-se_top_loading_mesin_cuci_-7_kg-surabaya-_full04_p2f4uad9.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54650",
      //                "name": "Peralatan Elektronik"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 9,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "BLA-60054-01854-00001",
      //             "itemSku": "BLA-60054-01854-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "BIG_PRODUCT",
      //                "BLIBLI_SHIPPING"
      //             ],
      //             "formattedId": "ps--BLA-60054-01854",
      //             "url": "/p/surabaya-samsung-wa70h4200sw-se-top-loading-mesin-cuci-7-kg/ps--BLA-60054-01854?ds=BLA-60054-01854-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3100620&pid=BLA-60054-01854",
      //             "attributes": [
      //                {
      //                   "count": 0
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54650",
      //                "ME-1000185",
      //                "ME-1000003",
      //                "ME-1000012"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kab. Sidoarjo",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "BLA-60054-01854",
      //             "uniqueSellingPoint": "• Kapasitas : 7 KG<br>• Panel display : Dual Cluster Control<br>• Water Level : 5 Levels<br>• Drum type : Diamond Drum",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "23",
      //                "id": "23"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "BLA-60054-01745",
      //             "sku": "BLA-60054-01745",
      //             "merchantCode": "BLA-60054",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Lifestyle QA43LS05TAKXXD TV 43\" The Sero QLED 4K Smart TV LS05T",
      //             "price": {
      //                "priceDisplay": "Rp11.999.000",
      //                "strikeThroughPriceDisplay": "Rp18.999.000",
      //                "discount": 36,
      //                "minPrice": 1.1999E7,
      //                "offerPriceDisplay": "Rp11.999.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-10159331/samsung_samsung_lifestyle_qa43ls05takxxd_tv_43-_the_sero_qled_4k_smart_tv_ls05t_full08_jpajv6tj.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-10159331/samsung_samsung_qa43ls05takxxd_the_sero_qled_4k_smart_tv_-43_inch-_full02_gdrbqilf.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-10159331/samsung_samsung_qa43ls05takxxd_the_sero_qled_4k_smart_tv_-43_inch-_full03_qwqtut1l.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-10159331/samsung_samsung_qa43ls05takxxd_the_sero_qled_4k_smart_tv_-43_inch-_full04_ovzeyn7.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-10159331/samsung_samsung_qa43ls05takxxd_the_sero_qled_4k_smart_tv_-43_inch-_full05_gxqrwvnm.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-10159331/samsung_samsung_qa43ls05takxxd_the_sero_qled_4k_smart_tv_-43_inch-_full06_sul745fi.jpeg"
      //             ],
      //             "rootCategory": {
      //                "id": "54650",
      //                "name": "Peralatan Elektronik"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 6,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "BLA-60054-01745-00001",
      //             "itemSku": "BLA-60054-01745-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "TUKAR_TAMBAH"
      //             ],
      //             "formattedId": "ps--BLA-60054-01745",
      //             "url": "/p/samsung-lifestyle-qa43ls05takxxd-tv-43-the-sero-qled-4k-smart-tv-ls05t/ps--BLA-60054-01745?ds=BLA-60054-01745-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3094856&pid=BLA-60054-01745",
      //             "attributes": [
      //                {
      //                   "count": 0
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54650",
      //                "TE-1000002",
      //                "SM-1000050",
      //                "TE-1000004",
      //                "SM-1000046"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kab. Bekasi",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "BLA-60054-01745",
      //             "uniqueSellingPoint": "• Screen Size : 43 Inch<br>• Resolution : 3.840 x 2.160<br>• Picture Engine : Quantum Processor 4K<br>• Operating System : Tizen<br>• Bixby : US English, Korean, UK English, French, German, Italian, Spanish, India English (features vary by language)",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "32",
      //                "id": "32"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "SAO-60034-01387",
      //             "sku": "SAO-60034-01387",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy Note20 Ultra 5G Smartphone [256GB]",
      //             "price": {
      //                "priceDisplay": "Rp14.998.000 - Rp15.999.000",
      //                "discount": 0,
      //                "minPrice": 1.4998E7
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full01_fr1kc7f8.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full02_puv4fnqq.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full03_bz4cg4io.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full04_ou8x67bw.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 3,
      //                "absoluteRating": 4.6
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "SAO-60034-01387-00002",
      //             "itemSku": "SAO-60034-01387-00002",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TUKAR_TAMBAH"
      //             ],
      //             "formattedId": "ps--SAO-60034-01387",
      //             "url": "/p/samsung-galaxy-note20-ultra-5g-smartphone-256gb/ps--SAO-60034-01387?ds=SAO-60034-01387-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01387",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp14.998.000",
      //                      "strikeThroughPriceDisplay": "Rp16.999.000",
      //                      "discount": 11,
      //                      "minPrice": 1.4998E7,
      //                      "offerPriceDisplay": "Rp15.999.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full01_fr1kc7f8.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full02_puv4fnqq.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full03_bz4cg4io.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full04_ou8x67bw.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 3,
      //                      "absoluteRating": 4.6
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01387-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "EXCLUSIVE_CAMPAIGN",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-note20-ultra-5g-smartphone-256gb/ps--SAO-60034-01387?ds=SAO-60034-01387-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01387",
      //                   "promoEndTime": 0,
      //                   "campaignInfo": {
      //                      "name": "Road to 10.10",
      //                      "code": "CAMP-00751"
      //                   },
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp15.999.000",
      //                      "strikeThroughPriceDisplay": "Rp16.999.000",
      //                      "discount": 5,
      //                      "minPrice": 1.5999E7,
      //                      "offerPriceDisplay": "Rp15.999.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full01_ltyq1dam.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full02_luss5rg6.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full03_n09ewxxp.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-21965655/samsung_samsung_galaxy_note20_ultra_5g_smartphone_-256gb-_full04_xgufqvb.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 3,
      //                      "absoluteRating": 4.6
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01387-00003",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-note20-ultra-5g-smartphone-256gb/ps--SAO-60034-01387?ds=SAO-60034-01387-00003&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01387",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Jakarta Timur",
      //             "numLocations": 1,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-21965655",
      //             "uniqueSellingPoint": "• Display : 6,9 inch Dynamic AMOLED QHD+ (3088x1440)<br>• Kamera : Rear 12MP (f2.2) + 108MP (f1.8) + 12MP (f3.0) + Laser AF, Front 10MP (f2.2)",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "27",
      //                "id": "27"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "BIS-56524-00096",
      //             "sku": "BIS-56524-00096",
      //             "merchantCode": "BIS-56524",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy A12 [6 / 128]",
      //             "price": {
      //                "priceDisplay": "Rp2.459.000 - Rp2.490.000",
      //                "discount": 0,
      //                "minPrice": 2459000.0
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full07_djgb6em5.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full09_tto71i6w.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full08_eg86vqzb.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 17,
      //                "absoluteRating": 4.8
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "BIS-56524-00096-00002",
      //             "itemSku": "BIS-56524-00096-00002",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--BIS-56524-00096",
      //             "url": "/p/samsung-galaxy-a12-6-128/ps--BIS-56524-00096?ds=BIS-56524-00096-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3019363&pid=BIS-56524-00096",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp2.459.000",
      //                      "strikeThroughPriceDisplay": "Rp2.700.000",
      //                      "discount": 8,
      //                      "minPrice": 2459000.0,
      //                      "offerPriceDisplay": "Rp2.459.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full07_djgb6em5.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full09_tto71i6w.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full08_eg86vqzb.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 17,
      //                      "absoluteRating": 4.8
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "BIS-56524-00096-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a12-6-128/ps--BIS-56524-00096?ds=BIS-56524-00096-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3019363&pid=BIS-56524-00096",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp2.490.000",
      //                      "strikeThroughPriceDisplay": "Rp2.700.000",
      //                      "discount": 7,
      //                      "minPrice": 2490000.0,
      //                      "offerPriceDisplay": "Rp2.490.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full04_g0y9f1ey.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full06_hyriz4tb.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-20044155/samsung_samsung_galaxy_a12_-6_-_128-_full05_g1alm3vc.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 17,
      //                      "absoluteRating": 4.8
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "BIS-56524-00096-00001",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a12-6-128/ps--BIS-56524-00096?ds=BIS-56524-00096-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3019363&pid=BIS-56524-00096",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Jakarta Barat",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "BIS-56524-00096",
      //             "uniqueSellingPoint": "• Smartphone\n<br>• OS: Android 10\n<br>• Display: 6.5 inches\n<br>• Prosesor :Mediatek Helio P35\n<br>• Battery: 5000 mAh\"",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "320",
      //                "id": "320"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "BLA-60054-01853",
      //             "sku": "BLA-60054-01853",
      //             "merchantCode": "BLA-60054",
      //             "status": "AVAILABLE",
      //             "name": "Surabaya - Samsung RT19M300BGS/SE Kulkas 2 Pintu [203 L]",
      //             "price": {
      //                "priceDisplay": "Rp3.086.000",
      //                "strikeThroughPriceDisplay": "Rp4.099.000",
      //                "discount": 24,
      //                "minPrice": 3086000.0,
      //                "offerPriceDisplay": "Rp3.086.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//104/MTA-12078778/samsung_-internal-_-_samsung_rt19m300bgs-se_kulkas_2_pintu_-203_l-surabaya-_full01_epij2h7.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54650",
      //                "name": "Peralatan Elektronik"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 1,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "BLA-60054-01853-00001",
      //             "itemSku": "BLA-60054-01853-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "BIG_PRODUCT",
      //                "BLIBLI_SHIPPING"
      //             ],
      //             "formattedId": "ps--BLA-60054-01853",
      //             "url": "/p/surabaya-samsung-rt19m300bgs-se-kulkas-2-pintu-203-l/ps--BLA-60054-01853?ds=BLA-60054-01853-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3100620&pid=BLA-60054-01853",
      //             "attributes": [
      //                {
      //                   "count": 0
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "KU-1000008",
      //                "54650",
      //                "KU-1000002",
      //                "KU-1000013"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kab. Sidoarjo",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "BLA-60054-01853",
      //             "uniqueSellingPoint": "• Kulkas<br>• Didesain elegan sehingga dapat mempercantik ruang dapur Anda<br>• Jumlah pintu : 2 pintu<br>• Kapasitas : Total 203 L (kulkasnya 150 L dan freezer 53 L<br>• Fitur : No frost, multi flow, dan tempered glass shelf",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "8",
      //                "id": "8"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "PAH-51500-00554",
      //             "sku": "PAH-51500-00554",
      //             "merchantCode": "PAH-51500",
      //             "status": "AVAILABLE",
      //             "name": "SSD Samsung 870 EVO 1TB / SSD Samsung 1 TB / SSD 1 TB 2.5\"",
      //             "price": {
      //                "priceDisplay": "Rp1.730.000",
      //                "discount": 0,
      //                "minPrice": 1730000.0,
      //                "offerPriceDisplay": "Rp1.730.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//108/MTA-19657746/samsung_ssd_samsung_870_evo_1tb_-_ssd_samsung_1_tb_-_ssd_1_tb_2-5-_full01_q3dxozec.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//108/MTA-19657746/samsung_ssd_samsung_870_evo_1tb_-_ssd_samsung_1_tb_-_ssd_1_tb_2-5-_full02_s5gv0nc4.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "53270",
      //                "name": "Komputer & Laptop"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 3,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "PAH-51500-00554-00001",
      //             "itemSku": "PAH-51500-00554-00001",
      //             "tags": [
      //                "PRISTINE",
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--PAH-51500-00554",
      //             "url": "/p/ssd-samsung-870-evo-1tb-ssd-samsung-1-tb-ssd-1-tb-2-5/ps--PAH-51500-00554?ds=PAH-51500-00554-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3016596&pid=PAH-51500-00554",
      //             "attributes": [
      //                {
      //                   "count": 0
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "ME-1000002",
      //                "SS-1000001",
      //                "53270"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Jakarta Barat",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Gold",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //             },
      //             "level0Id": "PRI-1159469-03",
      //             "uniqueSellingPoint": "• The 870 EVO achieves the maximum SATA interface limit of 560/530 MB/s sequential speeds\n<br>• Providing up to 2,400 TBW under a 5- year limited warranty\n<br>• The 870 EVO passed compatibility tests with major host systems and applications, including chipsets, motherboards, NAS, and video recording devices\n<br>• Upgrading to the 870 EVO is made easy for anyone with a desktop PC or laptop",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "10",
      //                "id": "10"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "PTI-60049-00083",
      //             "sku": "PTI-60049-00083",
      //             "merchantCode": "PTI-60049",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy A12 Smartphone [4 GB/ 128 GB/ SEIN]",
      //             "price": {
      //                "priceDisplay": "Rp2.175.000",
      //                "strikeThroughPriceDisplay": "Rp2.499.000",
      //                "discount": 12,
      //                "minPrice": 2175000.0,
      //                "offerPriceDisplay": "Rp2.175.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-10371427/samsung_samsung_full01.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 38,
      //                "absoluteRating": 4.9
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "PTI-60049-00083-00004",
      //             "itemSku": "PTI-60049-00083-00004",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING"
      //             ],
      //             "formattedId": "ps--PTI-60049-00083",
      //             "url": "/p/samsung-galaxy-a12-smartphone-4-gb-128-gb-sein/ps--PTI-60049-00083?ds=PTI-60049-00083-00004&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036886&pid=PTI-60049-00083",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp2.175.000",
      //                      "strikeThroughPriceDisplay": "Rp2.499.000",
      //                      "discount": 12,
      //                      "minPrice": 2175000.0,
      //                      "offerPriceDisplay": "Rp2.175.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-10371427/samsung_samsung_full01.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 38,
      //                      "absoluteRating": 4.9
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "PTI-60049-00083-00004",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a12-smartphone-4-gb-128-gb-sein/ps--PTI-60049-00083?ds=PTI-60049-00083-00004&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036886&pid=PTI-60049-00083",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Gold",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp2.175.000",
      //                      "strikeThroughPriceDisplay": "Rp2.499.000",
      //                      "discount": 12,
      //                      "minPrice": 2175000.0,
      //                      "offerPriceDisplay": "Rp2.175.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-10371427/samsung_samsung_full02.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 4,
      //                      "count": 38,
      //                      "absoluteRating": 4.9
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "PTI-60049-00083-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a12-smartphone-4-gb-128-gb-sein/ps--PTI-60049-00083?ds=PTI-60049-00083-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036886&pid=PTI-60049-00083",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Gold",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Medan",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Gold",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      //             },
      //             "level0Id": "PTI-60049-00083",
      //             "uniqueSellingPoint": "• Smartphone \n<br>• OS: Android 10 \n<br>• Display: 6.5 inches \n<br>• Prosesor :Mediatek Helio P35 \n<br>• Battery: 5000 mAh",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "513",
      //                "id": "513"
      //             },
      //             "official": false,
      //             "preorder": false
      //          },
      //          {
      //             "id": "CHP-70050-00121",
      //             "sku": "CHP-70050-00121",
      //             "merchantCode": "CHP-70050",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy Tab A7 Lite T225 Tablet [3/32 GB] Garansi Resmi SEIN",
      //             "price": {
      //                "priceDisplay": "Rp2.699.000",
      //                "strikeThroughPriceDisplay": "Rp3.499.000",
      //                "discount": 22,
      //                "minPrice": 2699000.0,
      //                "offerPriceDisplay": "Rp2.699.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//100/MTA-19193409/samsung_samsung_galaxy_tab_a7_lite_smartphone_tablet_t225_-3_gb-32_gb-_garansi_resmi_sein_full01_pskf9qq7.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 4,
      //                "absoluteRating": 4.7
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "CHP-70050-00121-00001",
      //             "itemSku": "CHP-70050-00121-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--CHP-70050-00121",
      //             "url": "/p/samsung-galaxy-tab-a7-lite-t225-tablet-3-32-gb-garansi-resmi-sein/ps--CHP-70050-00121?ds=CHP-70050-00121-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3203513&pid=CHP-70050-00121",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 1
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "TA-1000004",
      //                "TA-1000003"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Jakarta Selatan",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "CHP-70050-00121",
      //             "uniqueSellingPoint": "• OS: Android 11, One UI 3.1<br>• Prosesor: MediaTek MT8768T (Quad 2.3GHz + Quad 1.8GHz)<br>• Kamera:Rear 8 MP AF rear camera | Front 2MP front camera<br>• Layar: 8.7 Inch<br>• Baterai: Non-removable Li-Po 5,100 mAh",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "11",
      //                "id": "11"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "INM-60022-02791",
      //             "sku": "INM-60022-02791",
      //             "merchantCode": "INM-60022",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy A32 Smartphone [8GB/128GB]",
      //             "price": {
      //                "priceDisplay": "Rp3.799.000",
      //                "discount": 0,
      //                "minPrice": 3799000.0,
      //                "offerPriceDisplay": "Rp3.799.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//85/MTA-12135720/samsung_samsung_galaxy_a32_smartphone_-8gb-128gb-_full01_b1fx64mu.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 4,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 6,
      //             "defaultSku": "INM-60022-02791-00001",
      //             "itemSku": "INM-60022-02791-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "CNC_AVAILABLE",
      //                "REGULAR"
      //             ],
      //             "formattedId": "ps--INM-60022-02791",
      //             "url": "/p/samsung-galaxy-a32-smartphone-8gb-128gb/ps--INM-60022-02791?ds=INM-60022-02791-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3022918&pid=INM-60022-02791",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 3
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoEndTime": 0,
      //             "debugData": {

      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp3.799.000",
      //                      "discount": 0,
      //                      "minPrice": 3799000.0,
      //                      "offerPriceDisplay": "Rp3.799.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//85/MTA-12135720/samsung_samsung_galaxy_a32_smartphone_-8gb-128gb-_full01_b1fx64mu.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 5,
      //                      "count": 4,
      //                      "absoluteRating": 5.0
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "INM-60022-02791-00001",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "CNC_AVAILABLE"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a32-smartphone-8gb-128gb/ps--INM-60022-02791?ds=INM-60022-02791-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3022918&pid=INM-60022-02791",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp3.799.000",
      //                      "discount": 0,
      //                      "minPrice": 3799000.0,
      //                      "offerPriceDisplay": "Rp3.799.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//85/MTA-12135720/samsung_samsung_galaxy_a32_smartphone_-8gb-128gb-_full02_sdcptpzk.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 5,
      //                      "count": 4,
      //                      "absoluteRating": 5.0
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "INM-60022-02791-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "CNC_AVAILABLE"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a32-smartphone-8gb-128gb/ps--INM-60022-02791?ds=INM-60022-02791-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3022918&pid=INM-60022-02791",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp3.799.000",
      //                      "discount": 0,
      //                      "minPrice": 3799000.0,
      //                      "offerPriceDisplay": "Rp3.799.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//85/MTA-12135720/samsung_samsung_galaxy_a32_smartphone_-8gb-128gb-_full04_cm9j058z.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 5,
      //                      "count": 4,
      //                      "absoluteRating": 5.0
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "INM-60022-02791-00004",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "CNC_AVAILABLE"
      //                   ],
      //                   "url": "/p/samsung-galaxy-a32-smartphone-8gb-128gb/ps--INM-60022-02791?ds=INM-60022-02791-00004&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3022918&pid=INM-60022-02791",
      //                   "promoEndTime": 0,
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Medan",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "INM-60022-02791",
      //             "uniqueSellingPoint": "• Dimensions 158.9 x 73.6 x 8.4 mm (6.26 x 2.90 x 0.33 in)<br>• Dual SIM (Nano-SIM, dual stand-by)<br>• Resolution 1080 x 2400 pixels, 20:9 ratio (~411 ppi density)<br>• OS Android 11, One UI 3.1<br>• Mediatek Helio G80 (12 nm)<br>• 128GB 8GB RAM",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "101",
      //                "id": "101"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "SAO-60034-01223",
      //             "sku": "SAO-60034-01223",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy S21 5G Smartphone [256GB/ 8GB] Free SP Telkomsel BundlingMax",
      //             "price": {
      //                "priceDisplay": "Rp11.498.000",
      //                "strikeThroughPriceDisplay": "Rp13.999.000",
      //                "discount": 17,
      //                "minPrice": 1.1498E7,
      //                "offerPriceDisplay": "Rp11.499.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_telkomsel_starter_pack_full04_l82pdrg0.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full02_c38oo40u.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full23_l5cn24oz.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full24_pwvqgdw2.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full25_cpxgon5d.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full26_psaqaoeg.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full27_jpfy21n3.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 5,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 2,
      //             "defaultSku": "SAO-60034-01223-00001",
      //             "itemSku": "SAO-60034-01223-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TUKAR_TAMBAH"
      //             ],
      //             "formattedId": "ps--SAO-60034-01223",
      //             "url": "/p/samsung-galaxy-s21-5g-smartphone-256gb-8gb-free-sp-telkomsel-bundlingmax/ps--SAO-60034-01223?ds=SAO-60034-01223-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01223",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 2
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp11.498.000",
      //                      "strikeThroughPriceDisplay": "Rp13.999.000",
      //                      "discount": 17,
      //                      "minPrice": 1.1498E7,
      //                      "offerPriceDisplay": "Rp11.499.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_telkomsel_starter_pack_full04_l82pdrg0.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full02_c38oo40u.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full23_l5cn24oz.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full24_pwvqgdw2.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full25_cpxgon5d.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full26_psaqaoeg.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full27_jpfy21n3.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 5,
      //                      "count": 5,
      //                      "absoluteRating": 5.0
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01223-00001",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "EXCLUSIVE_CAMPAIGN",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-s21-5g-smartphone-256gb-8gb-free-sp-telkomsel-bundlingmax/ps--SAO-60034-01223?ds=SAO-60034-01223-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01223",
      //                   "promoEndTime": 0,
      //                   "campaignInfo": {
      //                      "name": "Road to 10.10",
      //                      "code": "CAMP-00751"
      //                   },
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                },
      //                {
      //                   "status": "AVAILABLE",
      //                   "price": {
      //                      "priceDisplay": "Rp11.498.000",
      //                      "strikeThroughPriceDisplay": "Rp13.999.000",
      //                      "discount": 17,
      //                      "minPrice": 1.1498E7,
      //                      "offerPriceDisplay": "Rp11.499.000"
      //                   },
      //                   "images": [
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_telkomsel_starter_pack_full03_nrt70gt.jpeg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full16_kkzkiasm.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full17_nkk8zkl1.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full18_fpjjaz1t.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full19_pv9xe3an.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full20_b7ke9bd6.jpg",
      //                      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//109/MTA-18928774/samsung_samsung_galaxy_s21_5g_smartphone_-256gb-_8gb-_-_free_gimmick_via_sgi_full21_g3uzs832.jpg"
      //                   ],
      //                   "review": {
      //                      "rating": 5,
      //                      "count": 5,
      //                      "absoluteRating": 5.0
      //                   },
      //                   "itemCount": 0,
      //                   "defaultSku": "SAO-60034-01223-00002",
      //                   "tags": [
      //                      "ZERO_PERCENT_INSTALLMENT",
      //                      "BLIBLI_SHIPPING",
      //                      "EXCLUSIVE_CAMPAIGN",
      //                      "TUKAR_TAMBAH"
      //                   ],
      //                   "url": "/p/samsung-galaxy-s21-5g-smartphone-256gb-8gb-free-sp-telkomsel-bundlingmax/ps--SAO-60034-01223?ds=SAO-60034-01223-00002&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01223",
      //                   "promoEndTime": 0,
      //                   "campaignInfo": {
      //                      "name": "Road to 10.10",
      //                      "code": "CAMP-00751"
      //                   },
      //                   "merchantVoucherCount": 0,
      //                   "numLocations": 0,
      //                   "badge": {
      //                      "merchantBadge": "Diamond",
      //                      "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //                   },
      //                   "official": false,
      //                   "preorder": false
      //                }
      //             ],
      //             "location": "Kota Bekasi",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "SAO-60034-01223",
      //             "uniqueSellingPoint": "• OS :Android 11, One UI 3.1\n<br>• Chipset :Exynos 2100 (5 nm)\n<br>• GPU :Mali-G78 MP14 \n<br>• Display :Dynamic AMOLED 2X, 120Hz, HDR10+\n<br>• Size :6.2-inch Flat FHD+\n<br>• Front Camera :10MP Dual Pixel AF, FOV 80°, F2.2, 1.22µm\n<br>• Rear Camera :Triple Camera 64MP + 12MP + 12 MP \n<br>• Battery :4000mAh",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "24",
      //                "id": "24"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "SAO-60034-01170",
      //             "sku": "SAO-60034-01170",
      //             "merchantCode": "SAO-60034",
      //             "status": "AVAILABLE",
      //             "name": "Samsung Galaxy S20 FE Smartphone [128GB/ 8GB] Snapdragon",
      //             "price": {
      //                "priceDisplay": "Rp6.498.000",
      //                "strikeThroughPriceDisplay": "Rp8.999.000",
      //                "discount": 27,
      //                "minPrice": 6498000.0,
      //                "offerPriceDisplay": "Rp6.699.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-14310531/samsung_samsung_galaxy_s20_fe_smartphone_-128gb-_8gb-_snapdragon_full61_qwyn851a.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-14310531/samsung_samsung_galaxy_s20_fe_smartphone_-128gb-_8gb-_snapdragon_full46_rd75guu.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-14310531/samsung_samsung_galaxy_s20_fe_smartphone_-128gb-_8gb-_snapdragon_full47_gl96t4ba.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-14310531/samsung_samsung_galaxy_s20_fe_smartphone_-128gb-_8gb-_snapdragon_full48_qrgm1oh6.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-14310531/samsung_samsung_galaxy_s20_fe_smartphone_-128gb-_8gb-_snapdragon_full49_uvm2whlz.jpeg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-14310531/samsung_samsung_galaxy_s20_fe_smartphone_-128gb-_8gb-_snapdragon_full50_r6udpww4.jpeg"
      //             ],
      //             "rootCategory": {
      //                "id": "54593",
      //                "name": "Handphone & Tablet"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 4,
      //                "count": 43,
      //                "absoluteRating": 4.7
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "SAO-60034-01170-00006",
      //             "itemSku": "SAO-60034-01170-00006",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TUKAR_TAMBAH"
      //             ],
      //             "formattedId": "ps--SAO-60034-01170",
      //             "url": "/p/samsung-galaxy-s20-fe-smartphone-128gb-8gb-snapdragon/ps--SAO-60034-01170?ds=SAO-60034-01170-00006&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01170",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 1
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "54593",
      //                "AN-1000001",
      //                "HA-1000002"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Tangerang",
      //             "numLocations": 2,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-14310531",
      //             "uniqueSellingPoint": "• Smartphone<br>• Display :6.5\"\" FHD+<br>• Weight :193gr<br>• Kamera :Front 32MP (F2.2) FF<br>• Rear 12 MP + 8 MP + 12 MP (Wide/2PD/F1.8 + Tele 3x/F2.4 + Ultra Wide/F2.2)<br>• Battery :4,500 mAh<br>• Prosesor : Snapdragon 865",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "201",
      //                "id": "201"
      //             },
      //             "official": true,
      //             "preorder": false
      //          },
      //          {
      //             "id": "BLK-15020-08140",
      //             "sku": "BLK-15020-08140",
      //             "merchantCode": "BLK-15020",
      //             "status": "AVAILABLE",
      //             "name": "Samsung LS24A310NHEXXD Incredibly Defined FHD Monitor with Wider View & Clear All Round [24 Inch]",
      //             "price": {
      //                "priceDisplay": "Rp1.999.000",
      //                "strikeThroughPriceDisplay": "Rp2.199.000",
      //                "discount": 9,
      //                "minPrice": 1999000.0,
      //                "offerPriceDisplay": "Rp2.099.000"
      //             },
      //             "images": [
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-19892223/samsung_samsung_ls24a310nhexxd_incredibly_defined_fhd_monitor_with_wider_view_-_clear_all_round_-24_inch-_full01_rsfgic03.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-19892223/samsung_samsung_ls24a310nhexxd_incredibly_defined_fhd_monitor_with_wider_view_-_clear_all_round_-24_inch-_full02_lyxn5v7.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-19892223/samsung_samsung_ls24a310nhexxd_incredibly_defined_fhd_monitor_with_wider_view_-_clear_all_round_-24_inch-_full03_mwnyts92.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-19892223/samsung_samsung_ls24a310nhexxd_incredibly_defined_fhd_monitor_with_wider_view_-_clear_all_round_-24_inch-_full04_j4cc8z72.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-19892223/samsung_samsung_ls24a310nhexxd_incredibly_defined_fhd_monitor_with_wider_view_-_clear_all_round_-24_inch-_full05_b0ume2om.jpg",
      //                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-19892223/samsung_samsung_ls24a310nhexxd_incredibly_defined_fhd_monitor_with_wider_view_-_clear_all_round_-24_inch-_full06_p8k8jlwl.jpg"
      //             ],
      //             "rootCategory": {
      //                "id": "53270",
      //                "name": "Komputer & Laptop"
      //             },
      //             "brand": "Samsung",
      //             "review": {
      //                "rating": 5,
      //                "count": 4,
      //                "absoluteRating": 5.0
      //             },
      //             "itemCount": 1,
      //             "defaultSku": "BLK-15020-08140-00001",
      //             "itemSku": "BLK-15020-08140-00001",
      //             "tags": [
      //                "ZERO_PERCENT_INSTALLMENT",
      //                "REGULAR",
      //                "BLIBLI_SHIPPING",
      //                "EXCLUSIVE_CAMPAIGN"
      //             ],
      //             "formattedId": "ps--BLK-15020-08140",
      //             "url": "/p/samsung-ls24a310nhexxd-incredibly-defined-fhd-monitor-with-wider-view-clear-all-round-24-inch/ps--BLK-15020-08140?ds=BLK-15020-08140-00001&source=SEARCH&sid=bd55c88c65b81e48&cnc=false&pickupPointCode=BLK-15020-001&pid=BLK-15020-08140",
      //             "attributes": [
      //                {
      //                   "optionListingType": "COLOR_PALETE",
      //                   "values": [
      //                      "MULTICOLOR"
      //                   ],
      //                   "count": 1
      //                }
      //             ],
      //             "productFeatures": "",
      //             "storeClosingInfo": {
      //                "storeClosed": false,
      //                "endDate": 0,
      //                "delayShipping": false
      //             },
      //             "promoBadgeUrl": "https://www.static-src.com/siva/asset//10_2021/product_card_badge_desktop_1.png",
      //             "promoEndTime": 1633798740000,
      //             "debugData": {

      //             },
      //             "campaignInfo": {
      //                "name": "Road to 10.10",
      //                "code": "CAMP-00751"
      //             },
      //             "allCategories": [
      //                "KO-1000005",
      //                "MO-1000003",
      //                "53270"
      //             ],
      //             "merchantVoucherCount": 0,
      //             "expandedProducts": [

      //             ],
      //             "location": "Kota Jakarta Timur",
      //             "numLocations": 0,
      //             "badge": {
      //                "merchantBadge": "Diamond",
      //                "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      //             },
      //             "level0Id": "MTA-19892223",
      //             "uniqueSellingPoint": "• Incredibly defined scenes with innovative VA panel<br>• Wider viewing angle for vivid and clear from 178° all around<br>• All-day visual care with eye comfort technology",
      //             "isCheap": true,
      //             "soldRangeCount": {
      //                "en": "31",
      //                "id": "31"
      //             },
      //             "official": true,
      //             "preorder": false
      //          }
      //       ],
      //       "sorting": {
      //          "parameter": "sort",
      //          "options": [
      //             {
      //                "label": "Relevansi",
      //                "name": "relevance",
      //                "value": 0,
      //                "selected": true
      //             },
      //             {
      //                "label": "Produk terbaru",
      //                "name": "newest",
      //                "value": 1,
      //                "selected": false
      //             },
      //             {
      //                "label": "Produk terlaris",
      //                "name": "terlaris",
      //                "value": 16,
      //                "selected": false
      //             },
      //             {
      //                "label": "Produk terpopuler",
      //                "name": "popular",
      //                "value": 7,
      //                "selected": false
      //             },
      //             {
      //                "label": "Harga termurah",
      //                "name": "cheapest",
      //                "value": 3,
      //                "selected": false
      //             },
      //             {
      //                "label": "Harga termahal",
      //                "name": "expensive",
      //                "value": 4,
      //                "selected": false
      //             }
      //          ]
      //       },
      //       "filters": [
      //          {
      //             "name": "Promo",
      //             "label": "Promo",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "promo",
      //             "theme": "theme4",
      //             "data": [
      //                {
      //                   "label": "Flash Sale",
      //                   "value": "campaign_CAMP-00753",
      //                   "selected": false,
      //                   "promoBatchUrl": "https://www.static-src.com/siva/asset//07_2021/fs-logo-2021.png"
      //                },
      //                {
      //                   "label": "Combo",
      //                   "value": "COMBO",
      //                   "selected": false,
      //                   "promoBatchUrl": ""
      //                },
      //                {
      //                   "label": "Grosir",
      //                   "value": "WHOLESALE",
      //                   "selected": false,
      //                   "promoBatchUrl": ""
      //                },
      //                {
      //                   "label": "Voucher seller",
      //                   "value": "merchantVoucher",
      //                   "selected": false,
      //                   "promoBatchUrl": "https://www.static-src.com/siva/asset//05_2020/icon-merchant-voucher.png"
      //                },
      //                {
      //                   "label": "Tukar Tambah",
      //                   "value": "exchange",
      //                   "selected": false,
      //                   "promoBatchUrl": "https://www.static-src.com/siva/asset//05_2020/icon-tukar-tambah-logo.png"
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Lokasi toko",
      //             "type": "MULTIPLE_SELECT_WITH_SUBLIST",
      //             "searchable": true,
      //             "parameter": "location",
      //             "theme": "theme1",
      //             "data": [
      //                {
      //                   "label": " Foshan ",
      //                   "value": " Foshan ",
      //                   "indexName": " Foshan ",
      //                   "selected": false
      //                },
      //                {
      //                   "label": " Guangdong ",
      //                   "value": " Guangdong ",
      //                   "indexName": " Guangdong ",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Aceh Jaya",
      //                   "value": "Kab. Aceh Jaya",
      //                   "indexName": "Aceh Jaya",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Aceh Tengah",
      //                   "value": "Kab. Aceh Tengah",
      //                   "indexName": "Aceh Tengah",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Agam",
      //                   "value": "Kab. Agam",
      //                   "indexName": "Agam",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Ambon",
      //                   "value": "Kota Ambon",
      //                   "indexName": "Ambon",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Badung",
      //                   "value": "Kab. Badung",
      //                   "indexName": "Badung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Bali",
      //                   "value": "Bali",
      //                   "indexName": "Bali",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Balikpapan",
      //                   "value": "Kota Balikpapan",
      //                   "indexName": "Balikpapan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Banda Aceh",
      //                   "value": "Kota Banda Aceh",
      //                   "indexName": "Banda Aceh",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Bandar Lampung",
      //                   "value": "Kota Bandar Lampung",
      //                   "indexName": "Bandar Lampung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bandung",
      //                   "value": "Kab. Bandung",
      //                   "indexName": "Bandung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Bandung",
      //                   "value": "Kota Bandung",
      //                   "indexName": "Bandung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bandung Barat",
      //                   "value": "Kab. Bandung Barat",
      //                   "indexName": "Bandung Barat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bangkalan",
      //                   "value": "Kab. Bangkalan",
      //                   "indexName": "Bangkalan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Banjar",
      //                   "value": "Kota Banjar",
      //                   "indexName": "Banjar",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Banjarbaru",
      //                   "value": "Kota Banjarbaru",
      //                   "indexName": "Banjarbaru",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Banjarmasin",
      //                   "value": "Kota Banjarmasin",
      //                   "indexName": "Banjarmasin",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Banjarnegara",
      //                   "value": "Kab. Banjarnegara",
      //                   "indexName": "Banjarnegara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Banten",
      //                   "value": "Banten",
      //                   "indexName": "Banten",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bantul",
      //                   "value": "Kab. Bantul",
      //                   "indexName": "Bantul",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Banyuasin",
      //                   "value": "Kab. Banyuasin",
      //                   "indexName": "Banyuasin",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Banyumas",
      //                   "value": "Kab. Banyumas",
      //                   "indexName": "Banyumas",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Banyuwangi",
      //                   "value": "Kab. Banyuwangi",
      //                   "indexName": "Banyuwangi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Barito Selatan",
      //                   "value": "Kab. Barito Selatan",
      //                   "indexName": "Barito Selatan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Batam",
      //                   "value": "Kota Batam",
      //                   "indexName": "Batam",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Batang",
      //                   "value": "Kab. Batang",
      //                   "indexName": "Batang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Batu",
      //                   "value": "Kota Batu",
      //                   "indexName": "Batu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bekasi",
      //                   "value": "Kab. Bekasi",
      //                   "indexName": "Bekasi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Bekasi",
      //                   "value": "Kota Bekasi",
      //                   "indexName": "Bekasi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bengkalis",
      //                   "value": "Kab. Bengkalis",
      //                   "indexName": "Bengkalis",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Bengkulu",
      //                   "value": "Bengkulu",
      //                   "indexName": "Bengkulu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Bengkulu",
      //                   "value": "Kota Bengkulu",
      //                   "indexName": "Bengkulu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Bima",
      //                   "value": "Kota Bima",
      //                   "indexName": "Bima",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Binjai",
      //                   "value": "Kota Binjai",
      //                   "indexName": "Binjai",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bireuen",
      //                   "value": "Kab. Bireuen",
      //                   "indexName": "Bireuen",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Blitar",
      //                   "value": "Kab. Blitar",
      //                   "indexName": "Blitar",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Blitar",
      //                   "value": "Kota Blitar",
      //                   "indexName": "Blitar",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Blora",
      //                   "value": "Kab. Blora",
      //                   "indexName": "Blora",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bogor",
      //                   "value": "Kab. Bogor",
      //                   "indexName": "Bogor",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Bogor",
      //                   "value": "Kota Bogor",
      //                   "indexName": "Bogor",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bojonegoro",
      //                   "value": "Kab. Bojonegoro",
      //                   "indexName": "Bojonegoro",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Bondowoso",
      //                   "value": "Kab. Bondowoso",
      //                   "indexName": "Bondowoso",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Boyolali",
      //                   "value": "Kab. Boyolali",
      //                   "indexName": "Boyolali",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Brebes",
      //                   "value": "Kab. Brebes",
      //                   "indexName": "Brebes",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Bukittinggi",
      //                   "value": "Kota Bukittinggi",
      //                   "indexName": "Bukittinggi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Buleleng",
      //                   "value": "Kab. Buleleng",
      //                   "indexName": "Buleleng",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Ciamis",
      //                   "value": "Kab. Ciamis",
      //                   "indexName": "Ciamis",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Cianjur",
      //                   "value": "Kab. Cianjur",
      //                   "indexName": "Cianjur",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Cilacap",
      //                   "value": "Kab. Cilacap",
      //                   "indexName": "Cilacap",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Cilegon",
      //                   "value": "Kota Cilegon",
      //                   "indexName": "Cilegon",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Cimahi",
      //                   "value": "Kota Cimahi",
      //                   "indexName": "Cimahi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Cirebon",
      //                   "value": "Kab. Cirebon",
      //                   "indexName": "Cirebon",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Cirebon",
      //                   "value": "Kota Cirebon",
      //                   "indexName": "Cirebon",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Deli Serdang",
      //                   "value": "Kab. Deli Serdang",
      //                   "indexName": "Deli Serdang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Demak",
      //                   "value": "Kab. Demak",
      //                   "indexName": "Demak",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Denpasar",
      //                   "value": "Kota Denpasar",
      //                   "indexName": "Denpasar",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Depok",
      //                   "value": "Kota Depok",
      //                   "indexName": "Depok",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "DI Yogyakarta",
      //                   "value": "DI Yogyakarta",
      //                   "indexName": "DI Yogyakarta",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "DKI Jakarta",
      //                   "value": "DKI Jakarta",
      //                   "indexName": "DKI Jakarta",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Dumai",
      //                   "value": "Kota Dumai",
      //                   "indexName": "Dumai",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Foshan",
      //                   "value": "Foshan",
      //                   "indexName": "Foshan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Garut",
      //                   "value": "Kab. Garut",
      //                   "indexName": "Garut",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Gorontalo",
      //                   "value": "Gorontalo",
      //                   "indexName": "Gorontalo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Gorontalo",
      //                   "value": "Kota Gorontalo",
      //                   "indexName": "Gorontalo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Gowa",
      //                   "value": "Kab. Gowa",
      //                   "indexName": "Gowa",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Gresik",
      //                   "value": "Kab. Gresik",
      //                   "indexName": "Gresik",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Grobogan",
      //                   "value": "Kab. Grobogan",
      //                   "indexName": "Grobogan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Guangdong",
      //                   "value": "Guangdong",
      //                   "indexName": "Guangdong",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Gunung Kidul",
      //                   "value": "Kab. Gunung Kidul",
      //                   "indexName": "Gunung Kidul",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Hong Kong",
      //                   "value": "Hong Kong",
      //                   "indexName": "Hong Kong",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Hulu Sungai Utara",
      //                   "value": "Kab. Hulu Sungai Utara",
      //                   "indexName": "Hulu Sungai Utara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Indramayu",
      //                   "value": "Kab. Indramayu",
      //                   "indexName": "Indramayu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Jabodetabek",
      //                   "value": "Jabodetabek",
      //                   "indexName": "Jabodetabek",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Jakarta",
      //                   "value": "Jakarta",
      //                   "indexName": "Jakarta",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "JAKARTA",
      //                   "value": "JAKARTA",
      //                   "indexName": "JAKARTA",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Jakarta Barat",
      //                   "value": "Kota Jakarta Barat",
      //                   "indexName": "Jakarta Barat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Jakarta Pusat",
      //                   "value": "Kota Jakarta Pusat",
      //                   "indexName": "Jakarta Pusat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Jakarta Selatan",
      //                   "value": "Kota Jakarta Selatan",
      //                   "indexName": "Jakarta Selatan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Jakarta Timur",
      //                   "value": "Kota Jakarta Timur",
      //                   "indexName": "Jakarta Timur",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Jakarta Utara",
      //                   "value": "Kota Jakarta Utara",
      //                   "indexName": "Jakarta Utara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Jambi",
      //                   "value": "Jambi",
      //                   "indexName": "Jambi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Jambi",
      //                   "value": "Kota Jambi",
      //                   "indexName": "Jambi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Jawa Barat",
      //                   "value": "Jawa Barat",
      //                   "indexName": "Jawa Barat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Jawa Tengah",
      //                   "value": "Jawa Tengah",
      //                   "indexName": "Jawa Tengah",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "jawa tengah",
      //                   "value": "jawa tengah",
      //                   "indexName": "jawa tengah",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Jawa Timur",
      //                   "value": "Jawa Timur",
      //                   "indexName": "Jawa Timur",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Jayapura",
      //                   "value": "Kab. Jayapura",
      //                   "indexName": "Jayapura",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Jayapura",
      //                   "value": "Kota Jayapura",
      //                   "indexName": "Jayapura",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Jember",
      //                   "value": "Kab. Jember",
      //                   "indexName": "Jember",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Jepara",
      //                   "value": "Kab. Jepara",
      //                   "indexName": "Jepara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Jombang",
      //                   "value": "Kab. Jombang",
      //                   "indexName": "Jombang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kalimantan Barat",
      //                   "value": "Kalimantan Barat",
      //                   "indexName": "Kalimantan Barat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kalimantan Selatan",
      //                   "value": "Kalimantan Selatan",
      //                   "indexName": "Kalimantan Selatan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kalimantan Tengah",
      //                   "value": "Kalimantan Tengah",
      //                   "indexName": "Kalimantan Tengah",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kalimantan Timur",
      //                   "value": "Kalimantan Timur",
      //                   "indexName": "Kalimantan Timur",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Karanganyar",
      //                   "value": "Kab. Karanganyar",
      //                   "indexName": "Karanganyar",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Karawang",
      //                   "value": "Kab. Karawang",
      //                   "indexName": "Karawang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Kebumen",
      //                   "value": "Kab. Kebumen",
      //                   "indexName": "Kebumen",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Kediri",
      //                   "value": "Kab. Kediri",
      //                   "indexName": "Kediri",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Kediri",
      //                   "value": "Kota Kediri",
      //                   "indexName": "Kediri",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Kendari",
      //                   "value": "Kota Kendari",
      //                   "indexName": "Kendari",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kepulauan Riau",
      //                   "value": "Kepulauan Riau",
      //                   "indexName": "Kepulauan Riau",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Klaten",
      //                   "value": "Kab. Klaten",
      //                   "indexName": "Klaten",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Kotawaringin Timur",
      //                   "value": "Kab. Kotawaringin Timur",
      //                   "indexName": "Kotawaringin Timur",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Kudus",
      //                   "value": "Kab. Kudus",
      //                   "indexName": "Kudus",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Kulon Progo",
      //                   "value": "Kab. Kulon Progo",
      //                   "indexName": "Kulon Progo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Kuningan",
      //                   "value": "Kab. Kuningan",
      //                   "indexName": "Kuningan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Kupang",
      //                   "value": "Kota Kupang",
      //                   "indexName": "Kupang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Kutai Kartanegara",
      //                   "value": "Kab. Kutai Kartanegara",
      //                   "indexName": "Kutai Kartanegara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Labuhan Batu",
      //                   "value": "Kab. Labuhan Batu",
      //                   "indexName": "Labuhan Batu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Labuhan Batu Selatan",
      //                   "value": "Kab. Labuhan Batu Selatan",
      //                   "indexName": "Labuhan Batu Selatan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Lamongan",
      //                   "value": "Kab. Lamongan",
      //                   "indexName": "Lamongan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Lampung",
      //                   "value": "Lampung",
      //                   "indexName": "Lampung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Lampung Tengah",
      //                   "value": "Kab. Lampung Tengah",
      //                   "indexName": "Lampung Tengah",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Lampung Utara",
      //                   "value": "Kab. Lampung Utara",
      //                   "indexName": "Lampung Utara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Langkat",
      //                   "value": "Kab. Langkat",
      //                   "indexName": "Langkat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Langsa",
      //                   "value": "Kota Langsa",
      //                   "indexName": "Langsa",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Lebak",
      //                   "value": "Kab. Lebak",
      //                   "indexName": "Lebak",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Lhokseumawe",
      //                   "value": "Kota Lhokseumawe",
      //                   "indexName": "Lhokseumawe",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Lombok Timur",
      //                   "value": "Kab. Lombok Timur",
      //                   "indexName": "Lombok Timur",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Lubuk Linggau",
      //                   "value": "Kota Lubuk Linggau",
      //                   "indexName": "Lubuk Linggau",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Madiun",
      //                   "value": "Kab. Madiun",
      //                   "indexName": "Madiun",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Madiun",
      //                   "value": "Kota Madiun",
      //                   "indexName": "Madiun",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Magelang",
      //                   "value": "Kab. Magelang",
      //                   "indexName": "Magelang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Magelang",
      //                   "value": "Kota Magelang",
      //                   "indexName": "Magelang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Magetan",
      //                   "value": "Kab. Magetan",
      //                   "indexName": "Magetan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Majalengka",
      //                   "value": "Kab. Majalengka",
      //                   "indexName": "Majalengka",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Makassar",
      //                   "value": "Kota Makassar",
      //                   "indexName": "Makassar",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Malang",
      //                   "value": "Kab. Malang",
      //                   "indexName": "Malang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Malang",
      //                   "value": "Kota Malang",
      //                   "indexName": "Malang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Maluku",
      //                   "value": "Maluku",
      //                   "indexName": "Maluku",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Maluku Utara",
      //                   "value": "Maluku Utara",
      //                   "indexName": "Maluku Utara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Manado",
      //                   "value": "Kota Manado",
      //                   "indexName": "Manado",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Mataram",
      //                   "value": "Kota Mataram",
      //                   "indexName": "Mataram",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Medan",
      //                   "value": "Kota Medan",
      //                   "indexName": "Medan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Merangin",
      //                   "value": "Kab. Merangin",
      //                   "indexName": "Merangin",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Metro",
      //                   "value": "Kota Metro",
      //                   "indexName": "Metro",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Mojokerto",
      //                   "value": "Kab. Mojokerto",
      //                   "indexName": "Mojokerto",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Mojokerto",
      //                   "value": "Kota Mojokerto",
      //                   "indexName": "Mojokerto",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Muara Enim",
      //                   "value": "Kab. Muara Enim",
      //                   "indexName": "Muara Enim",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Nanggroe Aceh Darussalam (NAD)",
      //                   "value": "Nanggroe Aceh Darussalam (NAD)",
      //                   "indexName": "Nanggroe Aceh Darussalam (NAD)",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Nganjuk",
      //                   "value": "Kab. Nganjuk",
      //                   "indexName": "Nganjuk",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Ngawi",
      //                   "value": "Kab. Ngawi",
      //                   "indexName": "Ngawi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Ningbo",
      //                   "value": "Ningbo",
      //                   "indexName": "Ningbo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Nusa Tenggara Barat (NTB)",
      //                   "value": "Nusa Tenggara Barat (NTB)",
      //                   "indexName": "Nusa Tenggara Barat (NTB)",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Nusa Tenggara Timur (NTT)",
      //                   "value": "Nusa Tenggara Timur (NTT)",
      //                   "indexName": "Nusa Tenggara Timur (NTT)",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Ogan Ilir",
      //                   "value": "Kab. Ogan Ilir",
      //                   "indexName": "Ogan Ilir",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pacitan",
      //                   "value": "Kab. Pacitan",
      //                   "indexName": "Pacitan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Padang",
      //                   "value": "Kota Padang",
      //                   "indexName": "Padang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Padang Pariaman",
      //                   "value": "Kab. Padang Pariaman",
      //                   "indexName": "Padang Pariaman",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Palembang",
      //                   "value": "Kota Palembang",
      //                   "indexName": "Palembang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Palopo",
      //                   "value": "Kota Palopo",
      //                   "indexName": "Palopo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Palu",
      //                   "value": "Kota Palu",
      //                   "indexName": "Palu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pamekasan",
      //                   "value": "Kab. Pamekasan",
      //                   "indexName": "Pamekasan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pandeglang",
      //                   "value": "Kab. Pandeglang",
      //                   "indexName": "Pandeglang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pangandaran",
      //                   "value": "Kab. Pangandaran",
      //                   "indexName": "Pangandaran",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Papua",
      //                   "value": "Papua",
      //                   "indexName": "Papua",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Papua Barat",
      //                   "value": "Papua Barat",
      //                   "indexName": "Papua Barat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pasuruan",
      //                   "value": "Kab. Pasuruan",
      //                   "indexName": "Pasuruan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pati",
      //                   "value": "Kab. Pati",
      //                   "indexName": "Pati",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pekalongan",
      //                   "value": "Kab. Pekalongan",
      //                   "indexName": "Pekalongan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Pekalongan",
      //                   "value": "Kota Pekalongan",
      //                   "indexName": "Pekalongan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Pekanbaru",
      //                   "value": "Kota Pekanbaru",
      //                   "indexName": "Pekanbaru",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pemalang",
      //                   "value": "Kab. Pemalang",
      //                   "indexName": "Pemalang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Pematang Siantar",
      //                   "value": "Kota Pematang Siantar",
      //                   "indexName": "Pematang Siantar",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Peninsular Malaysia",
      //                   "value": "Peninsular Malaysia",
      //                   "indexName": "Peninsular Malaysia",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pidie",
      //                   "value": "Kab. Pidie",
      //                   "indexName": "Pidie",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Ponorogo",
      //                   "value": "Kab. Ponorogo",
      //                   "indexName": "Ponorogo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pontianak",
      //                   "value": "Kab. Pontianak",
      //                   "indexName": "Pontianak",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Pontianak",
      //                   "value": "Kota Pontianak",
      //                   "indexName": "Pontianak",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Pringsewu",
      //                   "value": "Kab. Pringsewu",
      //                   "indexName": "Pringsewu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Probolinggo",
      //                   "value": "Kab. Probolinggo",
      //                   "indexName": "Probolinggo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Probolinggo",
      //                   "value": "Kota Probolinggo",
      //                   "indexName": "Probolinggo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Purbalingga",
      //                   "value": "Kab. Purbalingga",
      //                   "indexName": "Purbalingga",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Purwakarta",
      //                   "value": "Kab. Purwakarta",
      //                   "indexName": "Purwakarta",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Purworejo",
      //                   "value": "Kab. Purworejo",
      //                   "indexName": "Purworejo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Rembang",
      //                   "value": "Kab. Rembang",
      //                   "indexName": "Rembang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Riau",
      //                   "value": "Riau",
      //                   "indexName": "Riau",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Sabang",
      //                   "value": "Kota Sabang",
      //                   "indexName": "Sabang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Salatiga",
      //                   "value": "Kota Salatiga",
      //                   "indexName": "Salatiga",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Samarinda",
      //                   "value": "Kota Samarinda",
      //                   "indexName": "Samarinda",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sanggau",
      //                   "value": "Kab. Sanggau",
      //                   "indexName": "Sanggau",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Semarang",
      //                   "value": "Kab. Semarang",
      //                   "indexName": "Semarang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Semarang",
      //                   "value": "Kota Semarang",
      //                   "indexName": "Semarang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Semarang",
      //                   "value": "Semarang",
      //                   "indexName": "Semarang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Serang",
      //                   "value": "Kab. Serang",
      //                   "indexName": "Serang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Serang",
      //                   "value": "Kota Serang",
      //                   "indexName": "Serang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Serdang Bedagai",
      //                   "value": "Kab. Serdang Bedagai",
      //                   "indexName": "Serdang Bedagai",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Shenzhen",
      //                   "value": "Shenzhen",
      //                   "indexName": "Shenzhen",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Siak",
      //                   "value": "Kab. Siak",
      //                   "indexName": "Siak",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sidoarjo",
      //                   "value": "Kab. Sidoarjo",
      //                   "indexName": "Sidoarjo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Simalungun",
      //                   "value": "Kab. Simalungun",
      //                   "indexName": "Simalungun",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Singkawang",
      //                   "value": "Kota Singkawang",
      //                   "indexName": "Singkawang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Situbondo",
      //                   "value": "Kab. Situbondo",
      //                   "indexName": "Situbondo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sleman",
      //                   "value": "Kab. Sleman",
      //                   "indexName": "Sleman",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Solok",
      //                   "value": "Kota Solok",
      //                   "indexName": "Solok",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Sorong",
      //                   "value": "Kota Sorong",
      //                   "indexName": "Sorong",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sragen",
      //                   "value": "Kab. Sragen",
      //                   "indexName": "Sragen",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Subang",
      //                   "value": "Kab. Subang",
      //                   "indexName": "Subang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sukabumi",
      //                   "value": "Kab. Sukabumi",
      //                   "indexName": "Sukabumi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Sukabumi",
      //                   "value": "Kota Sukabumi",
      //                   "indexName": "Sukabumi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sukoharjo",
      //                   "value": "Kab. Sukoharjo",
      //                   "indexName": "Sukoharjo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Sulawesi Selatan",
      //                   "value": "Sulawesi Selatan",
      //                   "indexName": "Sulawesi Selatan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Sulawesi Tengah",
      //                   "value": "Sulawesi Tengah",
      //                   "indexName": "Sulawesi Tengah",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Sulawesi Tenggara",
      //                   "value": "Sulawesi Tenggara",
      //                   "indexName": "Sulawesi Tenggara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Sulawesi Utara",
      //                   "value": "Sulawesi Utara",
      //                   "indexName": "Sulawesi Utara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Sumatera Barat",
      //                   "value": "Sumatera Barat",
      //                   "indexName": "Sumatera Barat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Sumatera Selatan",
      //                   "value": "Sumatera Selatan",
      //                   "indexName": "Sumatera Selatan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Sumatera Utara",
      //                   "value": "Sumatera Utara",
      //                   "indexName": "Sumatera Utara",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sumbawa",
      //                   "value": "Kab. Sumbawa",
      //                   "indexName": "Sumbawa",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sumedang",
      //                   "value": "Kab. Sumedang",
      //                   "indexName": "Sumedang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Sumenep",
      //                   "value": "Kab. Sumenep",
      //                   "indexName": "Sumenep",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Surabaya",
      //                   "value": "Kota Surabaya",
      //                   "indexName": "Surabaya",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Surakarta (Solo)",
      //                   "value": "Kota Surakarta (Solo)",
      //                   "indexName": "Surakarta (Solo)",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tabanan",
      //                   "value": "Kab. Tabanan",
      //                   "indexName": "Tabanan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Taichung City",
      //                   "value": "Taichung City",
      //                   "indexName": "Taichung City",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Taipei",
      //                   "value": "Taipei",
      //                   "indexName": "Taipei",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tanah Bumbu",
      //                   "value": "Kab. Tanah Bumbu",
      //                   "indexName": "Tanah Bumbu",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tangerang",
      //                   "value": "Kab. Tangerang",
      //                   "indexName": "Tangerang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Tangerang",
      //                   "value": "Kota Tangerang",
      //                   "indexName": "Tangerang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Tangerang Selatan",
      //                   "value": "Kota Tangerang Selatan",
      //                   "indexName": "Tangerang Selatan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tanggamus",
      //                   "value": "Kab. Tanggamus",
      //                   "indexName": "Tanggamus",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Tanjung Pinang",
      //                   "value": "Kota Tanjung Pinang",
      //                   "indexName": "Tanjung Pinang",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tasikmalaya",
      //                   "value": "Kab. Tasikmalaya",
      //                   "indexName": "Tasikmalaya",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Tasikmalaya",
      //                   "value": "Kota Tasikmalaya",
      //                   "indexName": "Tasikmalaya",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Tebing Tinggi",
      //                   "value": "Kota Tebing Tinggi",
      //                   "indexName": "Tebing Tinggi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tegal",
      //                   "value": "Kab. Tegal",
      //                   "indexName": "Tegal",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Tegal",
      //                   "value": "Kota Tegal",
      //                   "indexName": "Tegal",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Temanggung",
      //                   "value": "Kab. Temanggung",
      //                   "indexName": "Temanggung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Ternate",
      //                   "value": "Kota Ternate",
      //                   "indexName": "Ternate",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Trenggalek",
      //                   "value": "Kab. Trenggalek",
      //                   "indexName": "Trenggalek",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tuban",
      //                   "value": "Kab. Tuban",
      //                   "indexName": "Tuban",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Tulungagung",
      //                   "value": "Kab. Tulungagung",
      //                   "indexName": "Tulungagung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "United States",
      //                   "value": "United States",
      //                   "indexName": "United States",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Wajo",
      //                   "value": "Kab. Wajo",
      //                   "indexName": "Wajo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Wonogiri",
      //                   "value": "Kab. Wonogiri",
      //                   "indexName": "Wonogiri",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kab. Wonosobo",
      //                   "value": "Kab. Wonosobo",
      //                   "indexName": "Wonosobo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Kota Yogyakarta",
      //                   "value": "Kota Yogyakarta",
      //                   "indexName": "Yogyakarta",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Zhejiang",
      //                   "value": "Zhejiang",
      //                   "indexName": "Zhejiang",
      //                   "selected": false
      //                }
      //             ],
      //             "sublist": [
      //                {
      //                   "title": "Kota Terpopuler",
      //                   "parameter": "popularLocation",
      //                   "data": [
      //                      {
      //                         "label": "Kota Bandung",
      //                         "value": "Kota Bandung",
      //                         "indexName": "Bandung",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "DKI Jakarta",
      //                         "value": "DKI Jakarta",
      //                         "indexName": "DKI Jakarta",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "Jabodetabek",
      //                         "value": "Jabodetabek",
      //                         "indexName": "Jabodetabek",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "Kota Surabaya",
      //                         "value": "Kota Surabaya",
      //                         "indexName": "Surabaya",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "Kota Tangerang",
      //                         "value": "Kota Tangerang",
      //                         "indexName": "Tangerang",
      //                         "selected": false
      //                      }
      //                   ]
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "International Seller",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "shipment",
      //             "theme": "theme1",
      //             "data": [
      //                {
      //                   "label": "Dikirimkan dari luar negeri",
      //                   "value": "international",
      //                   "selected": false
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Kategori",
      //             "label": "Kategori terkait",
      //             "type": "TREE",
      //             "searchable": false,
      //             "parameter": "category",
      //             "theme": "theme2",
      //             "data": [
      //                {
      //                   "label": "Handphone & Tablet",
      //                   "value": "54593",
      //                   "selected": false,
      //                   "id": "handphone-tablet",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Peralatan Elektronik",
      //                   "value": "54650",
      //                   "selected": false,
      //                   "id": "peralatan-elektronik",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Komputer & Laptop",
      //                   "value": "53270",
      //                   "selected": false,
      //                   "id": "komputer-laptop",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Otomotif",
      //                   "value": "53704",
      //                   "selected": false,
      //                   "id": "otomotif",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Home & Living",
      //                   "value": "HO-1000001",
      //                   "selected": false,
      //                   "id": "home-living",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Kamera",
      //                   "value": "53184",
      //                   "selected": false,
      //                   "id": "kamera",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Mainan & Video Games",
      //                   "value": "MA-1000001",
      //                   "selected": false,
      //                   "id": "mainan-video-games",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Fashion Wanita",
      //                   "value": "54912",
      //                   "selected": false,
      //                   "id": "fashion-wanita",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Olahraga & Aktivitas Luar Ruang",
      //                   "value": "OL-1000001",
      //                   "selected": false,
      //                   "id": "olahraga-aktivitas-luar-ruang",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Jam Tangan",
      //                   "value": "JA-1000225",
      //                   "selected": false,
      //                   "id": "jam-tangan",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Bliblimart",
      //                   "value": "53400",
      //                   "selected": false,
      //                   "id": "bliblimart",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Fashion Pria",
      //                   "value": "54817",
      //                   "selected": false,
      //                   "id": "fashion-pria",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Fashion Muslim",
      //                   "value": "FA-1000081",
      //                   "selected": false,
      //                   "id": "fashion-muslim",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Galeri Indonesia",
      //                   "value": "GA-1000036",
      //                   "selected": false,
      //                   "id": "galeri-indonesia",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Kesehatan & Kecantikan",
      //                   "value": "53203",
      //                   "selected": false,
      //                   "id": "kesehatan-kecantikan",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Fashion Remaja",
      //                   "value": "FA-1000083",
      //                   "selected": false,
      //                   "id": "fashion-remaja",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Ibu & Anak",
      //                   "value": "55076",
      //                   "selected": false,
      //                   "id": "ibu-anak",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Tiket & Voucher",
      //                   "value": "TI-1000001",
      //                   "selected": false,
      //                   "id": "tiket-voucher",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Tour & Travel",
      //                   "value": "TO-1000064",
      //                   "selected": false,
      //                   "id": "tour-travel",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                },
      //                {
      //                   "label": "Blibli Hasanah",
      //                   "value": "BL-1000106",
      //                   "selected": false,
      //                   "id": "blibli-hasanah",
      //                   "level": 1,
      //                   "subCategory": [

      //                   ],
      //                   "subCategorySelected": false,
      //                   "restrictedCategory": false
      //                }
      //             ],
      //             "parentFacets": [

      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Brand",
      //             "type": "MULTIPLE_SELECT_WITH_SUBLIST",
      //             "searchable": true,
      //             "parameter": "brand",
      //             "theme": "theme2",
      //             "data": [
      //                {
      //                   "label": "3M",
      //                   "value": "3M",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "9Skin",
      //                   "value": "9Skin",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Acc Hp",
      //                   "value": "Acc Hp",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "AKG",
      //                   "value": "AKG",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "ALL IN",
      //                   "value": "ALL IN",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Anker",
      //                   "value": "Anker",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "AUKEY",
      //                   "value": "AUKEY",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Baseus",
      //                   "value": "Baseus",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Cannon Case",
      //                   "value": "Cannon Case",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "CARSTENEZIO",
      //                   "value": "CARSTENEZIO",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Casenology",
      //                   "value": "Casenology",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Castlecase",
      //                   "value": "Castlecase",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Cococase",
      //                   "value": "Cococase",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Delkin",
      //                   "value": "Delkin",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Exacoat",
      //                   "value": "Exacoat",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Flazzstore",
      //                   "value": "Flazzstore",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "GEA",
      //                   "value": "GEA",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Goospery",
      //                   "value": "Goospery",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "HEAVENCASE",
      //                   "value": "HEAVENCASE",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "HIKARU",
      //                   "value": "HIKARU",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Hikaru Shop",
      //                   "value": "Hikaru Shop",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "HIPPO",
      //                   "value": "HIPPO",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Idea Case",
      //                   "value": "Idea Case",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Indocustomcase",
      //                   "value": "Indocustomcase",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Indoscreen",
      //                   "value": "Indoscreen",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Infinity",
      //                   "value": "Infinity",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "KEDAIONLINE12",
      //                   "value": "KEDAIONLINE12",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Leomax Case",
      //                   "value": "Leomax Case",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Mcdodo",
      //                   "value": "Mcdodo",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "MyUser",
      //                   "value": "MyUser",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Nano",
      //                   "value": "Nano",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Nillkin",
      //                   "value": "Nillkin",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "no brand",
      //                   "value": "no brand",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "OEM",
      //                   "value": "OEM",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "PCHome",
      //                   "value": "PCHome",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Premium Case",
      //                   "value": "Premium Case",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Premiumcaseid",
      //                   "value": "Premiumcaseid",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Remax",
      //                   "value": "Remax",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Ringke",
      //                   "value": "Ringke",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "ROBOT",
      //                   "value": "ROBOT",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Samsung",
      //                   "value": "Samsung",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "SMILE",
      //                   "value": "SMILE",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Spigen",
      //                   "value": "Spigen",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Ugreen",
      //                   "value": "Ugreen",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Ultra",
      //                   "value": "Ultra",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Ume",
      //                   "value": "Ume",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Uneed",
      //                   "value": "Uneed",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Vikento",
      //                   "value": "Vikento",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "VIVAN",
      //                   "value": "VIVAN",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "ZAGBOX",
      //                   "value": "ZAGBOX",
      //                   "selected": false
      //                }
      //             ],
      //             "sublist": [
      //                {
      //                   "title": "Brand Terpopuler",
      //                   "parameter": "brand",
      //                   "data": [
      //                      {
      //                         "label": "Samsung",
      //                         "value": "Samsung",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "OEM",
      //                         "value": "OEM",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "Cococase",
      //                         "value": "Cococase",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "Flazzstore",
      //                         "value": "Flazzstore",
      //                         "selected": false
      //                      },
      //                      {
      //                         "label": "Indocustomcase",
      //                         "value": "Indocustomcase",
      //                         "selected": false
      //                      }
      //                   ]
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Warna",
      //             "label": "Warna",
      //             "type": "COLOR_PALETTE",
      //             "searchable": false,
      //             "parameter": "color",
      //             "theme": "theme2",
      //             "data": [
      //                {
      //                   "label": "MULTICOLOR",
      //                   "value": "MULTICOLOR",
      //                   "selected": false,
      //                   "code": ""
      //                },
      //                {
      //                   "label": "HITAM",
      //                   "value": "HITAM",
      //                   "selected": false,
      //                   "code": "#000000"
      //                },
      //                {
      //                   "label": "PUTIH",
      //                   "value": "PUTIH",
      //                   "selected": false,
      //                   "code": "#FFFFFF"
      //                },
      //                {
      //                   "label": "BIRU",
      //                   "value": "BIRU",
      //                   "selected": false,
      //                   "code": "#0000FF"
      //                },
      //                {
      //                   "label": "MERAH",
      //                   "value": "MERAH",
      //                   "selected": false,
      //                   "code": "#FF0000"
      //                },
      //                {
      //                   "label": "ABU-ABU",
      //                   "value": "ABU-ABU",
      //                   "selected": false,
      //                   "code": "#808080"
      //                },
      //                {
      //                   "label": "PINK",
      //                   "value": "PINK",
      //                   "selected": false,
      //                   "code": "#FFC0CB"
      //                },
      //                {
      //                   "label": "HIJAU",
      //                   "value": "HIJAU",
      //                   "selected": false,
      //                   "code": "#008000"
      //                },
      //                {
      //                   "label": "COKLAT",
      //                   "value": "COKLAT",
      //                   "selected": false,
      //                   "code": "#D2691E"
      //                },
      //                {
      //                   "label": "UNGU",
      //                   "value": "UNGU",
      //                   "selected": false,
      //                   "code": "#EE82EE"
      //                },
      //                {
      //                   "label": "GOLD",
      //                   "value": "GOLD",
      //                   "selected": false,
      //                   "code": "#FFD700"
      //                },
      //                {
      //                   "label": "KUNING",
      //                   "value": "KUNING",
      //                   "selected": false,
      //                   "code": "#FFFF00"
      //                },
      //                {
      //                   "label": "SILVER",
      //                   "value": "SILVER",
      //                   "selected": false,
      //                   "code": "#C0C0C0"
      //                },
      //                {
      //                   "label": "ORANGE",
      //                   "value": "ORANGE",
      //                   "selected": false,
      //                   "code": "#FFA500"
      //                },
      //                {
      //                   "label": "CLEAR",
      //                   "value": "CLEAR",
      //                   "selected": false,
      //                   "code": ""
      //                },
      //                {
      //                   "label": "BLUE",
      //                   "value": "BLUE",
      //                   "selected": false,
      //                   "code": "#0000FF"
      //                },
      //                {
      //                   "label": "MULTICOLOUR",
      //                   "value": "MULTICOLOUR",
      //                   "selected": false,
      //                   "code": ""
      //                },
      //                {
      //                   "label": "MERAH MUDA",
      //                   "value": "MERAH MUDA",
      //                   "selected": false,
      //                   "code": ""
      //                },
      //                {
      //                   "label": "PURPLE",
      //                   "value": "PURPLE",
      //                   "selected": false,
      //                   "code": "#EE82EE"
      //                },
      //                {
      //                   "label": "BLACK",
      //                   "value": "BLACK",
      //                   "selected": false,
      //                   "code": "#000000"
      //                },
      //                {
      //                   "label": "COKELAT",
      //                   "value": "COKELAT",
      //                   "selected": false,
      //                   "code": ""
      //                },
      //                {
      //                   "label": "MULTICOOR",
      //                   "value": "MULTICOOR",
      //                   "selected": false,
      //                   "code": ""
      //                },
      //                {
      //                   "label": "WHITE",
      //                   "value": "WHITE",
      //                   "selected": false,
      //                   "code": "#FFFFFF"
      //                },
      //                {
      //                   "label": "WHITE BLACK",
      //                   "value": "WHITE BLACK",
      //                   "selected": false,
      //                   "code": ""
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Pengiriman",
      //             "label": "Pengiriman",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "logisticOption",
      //             "theme": "theme3",
      //             "data": [
      //                {
      //                   "label": "2 jam sampai",
      //                   "value": "HOUR_DEL",
      //                   "selected": false,
      //                   "disabled": true,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-hour-del",
      //                   "tooltipText": "Produk akan sampai dalam 0-2 jam sejak pembayaran selesai."
      //                },
      //                {
      //                   "label": "Instant",
      //                   "value": "INSTANT",
      //                   "selected": false,
      //                   "disabled": true,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-instant",
      //                   "tooltipText": "Produk akan sampai dalam 4-6 jam sejak diterima oleh kurir GoSend/Grab."
      //                },
      //                {
      //                   "label": "SameDay",
      //                   "value": "SAME_DAY",
      //                   "selected": false,
      //                   "disabled": true,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-same-day",
      //                   "tooltipText": "Produk akan sampai dalam 6-8 jam sejak diterima oleh kurir Blibli Express/GoSend/Grab."
      //                },
      //                {
      //                   "label": "Click & Collect",
      //                   "value": "cnc",
      //                   "selected": false,
      //                   "disabled": false,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-cnc",
      //                   "tooltipText": "Beli online, lalu ambil produknya di toko pilihanmu."
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Diskon",
      //             "type": "SINGLE_SELECT",
      //             "searchable": false,
      //             "parameter": "discount",
      //             "theme": "theme4",
      //             "data": [
      //                {
      //                   "label": "10% or more",
      //                   "value": "10",
      //                   "selected": false,
      //                   "query": "10"
      //                },
      //                {
      //                   "label": "25% or more",
      //                   "value": "25",
      //                   "selected": false,
      //                   "query": "25"
      //                },
      //                {
      //                   "label": "50% or more",
      //                   "value": "50",
      //                   "selected": false,
      //                   "query": "50"
      //                },
      //                {
      //                   "label": "75% or more",
      //                   "value": "75",
      //                   "selected": false,
      //                   "query": "75"
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Rating",
      //             "type": "RATING",
      //             "searchable": false,
      //             "parameter": "rating",
      //             "theme": "DEFAULT_THEME",
      //             "data": [
      //                {
      //                   "label": "5",
      //                   "value": "5",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "3 ke atas",
      //                   "value": "3",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "2 ke atas",
      //                   "value": "2",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "1 ke atas",
      //                   "value": "1",
      //                   "selected": false
      //                }
      //             ],
      //             "horizontal": true
      //          },
      //          {
      //             "name": "Jenis Garansi",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "warrantyType",
      //             "theme": "theme2",
      //             "data": [
      //                {
      //                   "label": "Garansi Toko",
      //                   "value": "Garansi Toko",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Garansi Resmi",
      //                   "value": "Garansi Resmi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Garansi Distributor",
      //                   "value": "Garansi Distributor",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "NO WARANTY",
      //                   "value": "NO WARANTY",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Garansi International",
      //                   "value": "Garansi International",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "NO GARANSI",
      //                   "value": "NO GARANSI",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "N",
      //                   "value": "N",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "SESUAI DESKRIPSI",
      //                   "value": "SESUAI DESKRIPSI",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "NO",
      //                   "value": "NO",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Garansi Penggantian Barang Penuh",
      //                   "value": "Garansi Penggantian Barang Penuh",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Tidak ada garansi",
      //                   "value": "Tidak ada garansi",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Ringlight LED Peyond 18 inch Ring Light Bi-color Lisensi Latour",
      //                   "value": "Ringlight LED Peyond 18 inch Ring Light Bi-color Lisensi Latour",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Trifoto Ring Light RL-18 50cm Ringlight Make Up RL 18 Ringlite Rias",
      //                   "value": "Trifoto Ring Light RL-18 50cm Ringlight Make Up RL 18 Ringlite Rias",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "SESUAI DESKRISPSI",
      //                   "value": "SESUAI DESKRISPSI",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "NO WARANTYT",
      //                   "value": "NO WARANTYT",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "SESUAI DESKRIPAI",
      //                   "value": "SESUAI DESKRIPAI",
      //                   "selected": false
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Lama Garansi",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "wp",
      //             "theme": "pristine",
      //             "data": [
      //                {
      //                   "label": "<6 bulan",
      //                   "value": "<6 bulan",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "6 bulan - 1 tahun",
      //                   "value": "6 bulan - 1 tahun",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "1 tahun - 2 tahun",
      //                   "value": "1 tahun - 2 tahun",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "2 tahun - 3 tahun",
      //                   "value": "2 tahun - 3 tahun",
      //                   "selected": false
      //                },
      //                {
      //                   "label": ">3 tahun",
      //                   "value": ">3 tahun",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Seumur Hidup",
      //                   "value": "Seumur Hidup",
      //                   "selected": false
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Product Stock",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "oos",
      //             "theme": "pristine",
      //             "data": [
      //                {
      //                   "label": "Pre Order",
      //                   "value": "Preorder",
      //                   "selected": false
      //                },
      //                {
      //                   "label": "Ready Stock",
      //                   "value": "ReadyStock",
      //                   "selected": false
      //                }
      //             ],
      //             "horizontal": false
      //          }
      //       ],
      //       "quickFilters": [
      //          {
      //             "name": "Promo",
      //             "label": "Road to 10.10",
      //             "type": "SINGLE_SELECT",
      //             "searchable": false,
      //             "parameter": "promo",
      //             "theme": "quickFilter",
      //             "data": [
      //                {
      //                   "label": "Road to 10.10",
      //                   "value": "campaign_CAMP-00751",
      //                   "selected": false,
      //                   "promoBatchUrl": "https://www.static-src.com/siva/asset//09_2021/1010-taglabel-300x72.png"
      //                }
      //             ],
      //             "horizontal": true
      //          },
      //          {
      //             "name": "Dekat alamatmu",
      //             "label": "Dekat alamatmu",
      //             "type": "SINGLE_SELECT",
      //             "searchable": false,
      //             "parameter": "nearAddress",
      //             "theme": "theme2",
      //             "data": [
      //                {
      //                   "label": "Dalam 4 km",
      //                   "value": "4",
      //                   "selected": false,
      //                   "query": "4"
      //                },
      //                {
      //                   "label": "Dalam 8 km",
      //                   "value": "8",
      //                   "selected": false,
      //                   "query": "8"
      //                },
      //                {
      //                   "label": "Kota yang sama",
      //                   "value": "withinCity",
      //                   "selected": false,
      //                   "query": "withinCity"
      //                }
      //             ],
      //             "horizontal": true
      //          },
      //          {
      //             "name": "Layanan",
      //             "label": "Disediakan Blibli",
      //             "type": "SINGLE_SELECT",
      //             "searchable": false,
      //             "parameter": "shipment",
      //             "theme": "quickFilter",
      //             "data": [
      //                {
      //                   "label": "Disediakan Blibli",
      //                   "value": "blibli",
      //                   "selected": false
      //                }
      //             ],
      //             "horizontal": true
      //          },
      //          {
      //             "name": "Tipe seller",
      //             "label": "Tipe seller",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "seller",
      //             "theme": "DEFAULT_THEME",
      //             "data": [
      //                {
      //                   "label": "Official Store",
      //                   "value": "Official Store",
      //                   "selected": false,
      //                   "toolTipUrl": "https://www.blibli.com/pages/official-store-info-id"
      //                },
      //                {
      //                   "label": "Top rated seller",
      //                   "value": "Top rated seller",
      //                   "selected": false,
      //                   "toolTipUrl": "https://www.blibli.com/pages/merchant-badge-info-id"
      //                }
      //             ],
      //             "horizontal": true
      //          },
      //          {
      //             "name": "Rating",
      //             "label": "4 ke atas",
      //             "type": "SINGLE_SELECT",
      //             "searchable": false,
      //             "parameter": "rating",
      //             "theme": "quickFilter",
      //             "data": [
      //                {
      //                   "label": "4 ke atas",
      //                   "value": "4",
      //                   "selected": false
      //                }
      //             ],
      //             "horizontal": true
      //          },
      //          {
      //             "name": "Promo",
      //             "label": "Promo",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "promo",
      //             "theme": "theme4",
      //             "data": [
      //                {
      //                   "label": "Flash Sale",
      //                   "value": "campaign_CAMP-00753",
      //                   "selected": false,
      //                   "promoBatchUrl": "https://www.static-src.com/siva/asset//07_2021/fs-logo-2021.png"
      //                },
      //                {
      //                   "label": "Combo",
      //                   "value": "COMBO",
      //                   "selected": false,
      //                   "promoBatchUrl": ""
      //                },
      //                {
      //                   "label": "Grosir",
      //                   "value": "WHOLESALE",
      //                   "selected": false,
      //                   "promoBatchUrl": ""
      //                },
      //                {
      //                   "label": "Voucher seller",
      //                   "value": "merchantVoucher",
      //                   "selected": false,
      //                   "promoBatchUrl": "https://www.static-src.com/siva/asset//05_2020/icon-merchant-voucher.png"
      //                },
      //                {
      //                   "label": "Tukar Tambah",
      //                   "value": "exchange",
      //                   "selected": false,
      //                   "promoBatchUrl": "https://www.static-src.com/siva/asset//05_2020/icon-tukar-tambah-logo.png"
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Pengiriman",
      //             "label": "Pengiriman",
      //             "type": "MULTIPLE_SELECT",
      //             "searchable": false,
      //             "parameter": "logisticOption",
      //             "theme": "theme3",
      //             "data": [
      //                {
      //                   "label": "2 jam sampai",
      //                   "value": "HOUR_DEL",
      //                   "selected": false,
      //                   "disabled": true,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-hour-del",
      //                   "tooltipText": "Produk akan sampai dalam 0-2 jam sejak pembayaran selesai."
      //                },
      //                {
      //                   "label": "Instant",
      //                   "value": "INSTANT",
      //                   "selected": false,
      //                   "disabled": true,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-instant",
      //                   "tooltipText": "Produk akan sampai dalam 4-6 jam sejak diterima oleh kurir GoSend/Grab."
      //                },
      //                {
      //                   "label": "SameDay",
      //                   "value": "SAME_DAY",
      //                   "selected": false,
      //                   "disabled": true,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-same-day",
      //                   "tooltipText": "Produk akan sampai dalam 6-8 jam sejak diterima oleh kurir Blibli Express/GoSend/Grab."
      //                },
      //                {
      //                   "label": "Click & Collect",
      //                   "value": "cnc",
      //                   "selected": false,
      //                   "disabled": false,
      //                   "tooltip": "tooltip-content-for-logistic-option-",
      //                   "tooltipUrl": "https://www.blibli.com/pages/tooltip-content-for-logistic-option-cnc",
      //                   "tooltipText": "Beli online, lalu ambil produknya di toko pilihanmu."
      //                }
      //             ],
      //             "horizontal": false
      //          },
      //          {
      //             "name": "Harga",
      //             "label": "Harga",
      //             "type": "PRICE_RANGE",
      //             "searchable": false,
      //             "parameter": "price",
      //             "theme": "quickFilter",
      //             "data": [
      //                {
      //                   "label": "minPrice",
      //                   "value": "",
      //                   "selected": false,
      //                   "parameter": "minPrice"
      //                },
      //                {
      //                   "label": "maxPrice",
      //                   "value": "",
      //                   "selected": false,
      //                   "parameter": "maxPrice"
      //                },
      //                {
      //                   "label": "selectedMinPrice",
      //                   "value": "",
      //                   "selected": false,
      //                   "parameter": "minPrice"
      //                },
      //                {
      //                   "label": "selectedMaxPrice",
      //                   "value": "",
      //                   "selected": false,
      //                   "parameter": "maxPrice"
      //                }
      //             ],
      //             "horizontal": true
      //          }
      //       ],
      //       "paging": {
      //          "page": 1,
      //          "total_page": 20,
      //          "item_per_page": 24,
      //          "total_item": 518668
      //       },
      //       "maxOffers": 50,
      //       "serverCurrentTime": 1633513067715,
      //       "productInfo": {
      //          "SAO-60034-01061": {
      //             "tags": [
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ]
      //          },
      //          "BLK-15020-08140": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN"
      //             ]
      //          },
      //          "SAO-60034-01387": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN"
      //             ]
      //          },
      //          "SAO-60034-01398": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ]
      //          },
      //          "SAO-60034-01221": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN"
      //             ]
      //          },
      //          "BLA-60054-01949": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN"
      //             ]
      //          },
      //          "SAO-60034-01223": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN"
      //             ]
      //          },
      //          "SAO-60034-01217": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN"
      //             ]
      //          },
      //          "SAO-60034-01170": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN"
      //             ]
      //          },
      //          "SAO-60034-00889": {
      //             "campaign_name": [
      //                "Road to 10.10"
      //             ],
      //             "campaign_code": [
      //                "CAMP-00751"
      //             ],
      //             "tags": [
      //                "EXCLUSIVE_CAMPAIGN",
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ]
      //          },
      //          "JKO-70001-00019": {
      //             "tags": [
      //                "TRENDING_PRODUCTS_WITH_BACKFILL_L3"
      //             ]
      //          }
      //       },
      //       "code": "OK",
      //       "selectedCategoryIds": [

      //       ],
      //       "visibleCategoryIds": [

      //       ],
      //       "exclusiveCampProducts": [

      //       ],
      //       "exclusiveCampResponse": {
      //          "exclusiveCampRow": 0,
      //          "promoBgImage": "https://www.static-src.com/siva/asset//09_2021/special_campaign_background_desktop.png",
      //          "promoTitleImage": "https://www.static-src.com/siva/asset//10_2021/special_campaign_section_title_desktop_1.png",
      //          "campaignCode": "CAMP-00751"
      //       },
      //       "responseFlags": [

      //       ],
      //       "showRestrictedMsg": false,
      //       "redirectionUrl": "",
      //       "trackerFields": {
      //          "group_type": "L3",
      //          "sales_velocity_components": "{weight=0.8, ctrWeight=0.01, cvrWeight=0.45, atocrWeight=0.006, ctrPriceTanhConstant=12, cvrPriceTanhConstant=12, atocrPriceTanhConstant=12, recencyWeight=0.0, recencyTanhConstant=12, multiMerchantWeight=0.0, merchantBadgeWeight=0.144, skuMiningWeight=0.0, officialStoreWeight=0.0, productScoreWeight=0.0, productRatingWeight=0.088, productRatingMin=3.9, productScoreMin=75, analogousWeight=13, productBoostingScore=1254.6, boostType=SEARCH_ADDITIVE}"
      //       },
      //       "productsPerRow": 5,
      //       "needMoreSearchResponse": false,
      //       "intentAttributes": {

      //       },
      //       "personalizedAttributes": {

      //       },
      //       "nerAttributes": {

      //       },
      //       "intentApplied": false,
      //       "nerApplied": false,
      //       "showAllCategories": false,
      //       "searchPageUrl": "",
      //       "catIntentFailed": false,
      //       "sellerAdsPosition": [
      //          16,
      //          17,
      //          18,
      //          19,
      //          20
      //       ],
      //       "sellerAdsPositionWebListView": [
      //          16,
      //          17,
      //          18
      //       ],
      //       "sponsorProducts": [
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=WIW-70004&sku_id=WIW-70004-00046&sclid=261N3PxGH6tr2G2vQNrxYdd6t3N2pGdu&svt=1|so|0.03955|sdu|1633513067280|AUTO_CPC|244885|54908|35256|33256&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--WIW-70004-00046-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-14925172/samsung_samsung_a21s_smartphone_-6-128gb-_garansi_resmi_full01_qjaown07.jpg",
      //             "mrp": 2900000.0,
      //             "name": "Samsung A21S Smartphone [6/128GB] Garansi Resmi",
      //             "rank": 1,
      //             "salePrice": 2829000.0,
      //             "sclid": "261N3PxGH6tr2G2vQNrxYdd6t3N2pGdu",
      //             "score": 793571,
      //             "sellerId": "WIW-70004",
      //             "skuId": "WIW-70004-00046",
      //             "uclid": "2|261N3PxGH6tr2G2vQNrxYdd6t3N2pGdu|0.03955|1633513067280|WIW-70004-00046|REVX_TAG|DUMMY_UBID|AUTO_CPC|WIW-70004|244885|54908|35256|33256"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=MIS-70093&sku_id=MIS-70093-00019&sclid=ztvks7lEmOrN2njPdOTyu2V51SHDuouo&svt=1|so|0.03955|sdu|1633513067280|AUTO_CPC|238731|49177|29807|27806&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--MIS-70093-00019-00002",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-10533681/samsung_smartphone_samsung_a12_-6gb-128-_full01_bqqo3wa4.jpg",
      //             "mrp": 3999000.0,
      //             "name": "SMARTPHONE SAMSUNG A12 [6GB/128]",
      //             "rank": 2,
      //             "salePrice": 3999000.0,
      //             "sclid": "ztvks7lEmOrN2njPdOTyu2V51SHDuouo",
      //             "score": 791867,
      //             "sellerId": "MIS-70093",
      //             "skuId": "MIS-70093-00019",
      //             "uclid": "2|ztvks7lEmOrN2njPdOTyu2V51SHDuouo|0.03955|1633513067280|MIS-70093-00019|REVX_TAG|DUMMY_UBID|AUTO_CPC|MIS-70093|238731|49177|29807|27806"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=GIY-70004&sku_id=GIY-70004-00038&sclid=UAaGV8uSG03nSs6ir7zMAJKlj960c9cS&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|243322|53345|37647|35646&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--GIY-70004-00038-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-10538794/samsung_samsung_a12_4_64gb_full00.jpg",
      //             "mrp": 2350000.0,
      //             "name": "samsung a12 4/64gb",
      //             "rank": 3,
      //             "salePrice": 2326500.0,
      //             "sclid": "UAaGV8uSG03nSs6ir7zMAJKlj960c9cS",
      //             "score": 788342,
      //             "sellerId": "GIY-70004",
      //             "skuId": "GIY-70004-00038",
      //             "uclid": "2|UAaGV8uSG03nSs6ir7zMAJKlj960c9cS|0.039471845809999996|1633513067280|GIY-70004-00038|REVX_TAG|DUMMY_UBID|CPC|GIY-70004|243322|53345|37647|35646"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=ALC-70067&sku_id=ALC-70067-00018&sclid=6KiUomrjass6TqVh4MquXBnbpMrYzPP4&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|259171|67100|45230|43229&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--ALC-70067-00018-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//86/MTA-11031277/samsung_samsung_a12_ram_6gb_resmi_black_blue_white__full00.jpg",
      //             "mrp": 2699000.0,
      //             "name": "SAMSUNG A12 RAM 6GB RESMI (Black,Blue,White)",
      //             "rank": 4,
      //             "salePrice": 2645020.0,
      //             "sclid": "6KiUomrjass6TqVh4MquXBnbpMrYzPP4",
      //             "score": 788063,
      //             "sellerId": "ALC-70067",
      //             "skuId": "ALC-70067-00018",
      //             "uclid": "2|6KiUomrjass6TqVh4MquXBnbpMrYzPP4|0.039471845809999996|1633513067280|ALC-70067-00018|REVX_TAG|DUMMY_UBID|CPC|ALC-70067|259171|67100|45230|43229"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=DAM-70074&sku_id=DAM-70074-00001&sclid=vZC9Z2aqFr1IgVIdSOPJ3BZJAN5C3Ilf&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|260027|67592|54384|52383&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--DAM-70074-00001-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-12163587/samsung_samsung_a12_full01_b6e92b64.jpg",
      //             "mrp": 2650000.0,
      //             "name": "samsung A12",
      //             "rank": 5,
      //             "salePrice": 2517500.0,
      //             "sclid": "vZC9Z2aqFr1IgVIdSOPJ3BZJAN5C3Ilf",
      //             "score": 783408,
      //             "sellerId": "DAM-70074",
      //             "skuId": "DAM-70074-00001",
      //             "uclid": "2|vZC9Z2aqFr1IgVIdSOPJ3BZJAN5C3Ilf|0.039471845809999996|1633513067280|DAM-70074-00001|REVX_TAG|DUMMY_UBID|CPC|DAM-70074|260027|67592|54384|52383"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=ALC-70067&sku_id=ALC-70067-00037&sclid=NC3tHgsqnrb8sNSrMNJX5Wbvkvy0If7F&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|259171|67100|45230|43229&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--ALC-70067-00037-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-19899121/samsung_samsung_full01_dc378c3d.jpg",
      //             "mrp": 3299000.0,
      //             "name": "samsung",
      //             "rank": 6,
      //             "salePrice": 3266010.0,
      //             "sclid": "NC3tHgsqnrb8sNSrMNJX5Wbvkvy0If7F",
      //             "score": 131813,
      //             "sellerId": "ALC-70067",
      //             "skuId": "ALC-70067-00037",
      //             "uclid": "2|NC3tHgsqnrb8sNSrMNJX5Wbvkvy0If7F|0.039471845809999996|1633513067280|ALC-70067-00037|REVX_TAG|DUMMY_UBID|CPC|ALC-70067|259171|67100|45230|43229"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=MYD-70007&sku_id=MYD-70007-00003&sclid=zteMNA0fhzkHi0MfCdCVC8yt1ughJGWt&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|249710|58855|39455|37454&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--MYD-70007-00003-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-7930061/samsung_samsung_a01core_full00.jpg",
      //             "mrp": 1050000.0,
      //             "name": "Samsung A01core",
      //             "rank": 7,
      //             "salePrice": 1050000.0,
      //             "sclid": "zteMNA0fhzkHi0MfCdCVC8yt1ughJGWt",
      //             "score": 125600,
      //             "sellerId": "MYD-70007",
      //             "skuId": "MYD-70007-00003",
      //             "uclid": "2|zteMNA0fhzkHi0MfCdCVC8yt1ughJGWt|0.039471845809999996|1633513067280|MYD-70007-00003|REVX_TAG|DUMMY_UBID|CPC|MYD-70007|249710|58855|39455|37454"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=LOE-70012&sku_id=LOE-70012-00027&sclid=g3ECBZUvJjGM595TKNDg7i9olGKAN9x0&svt=1|so|0.03955|sdu|1633513067280|AUTO_CPC|208906|34810|67671|65670&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--LOE-70012-00027-00002",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//107/MTA-18976606/samsung_samsung_galaxy_a02_full01_4ccd38dd.jpg",
      //             "mrp": 1599000.0,
      //             "name": "Samsung Galaxy A02",
      //             "rank": 8,
      //             "salePrice": 1519050.0,
      //             "sclid": "g3ECBZUvJjGM595TKNDg7i9olGKAN9x0",
      //             "score": 125600,
      //             "sellerId": "LOE-70012",
      //             "skuId": "LOE-70012-00027",
      //             "uclid": "2|g3ECBZUvJjGM595TKNDg7i9olGKAN9x0|0.03955|1633513067280|LOE-70012-00027|REVX_TAG|DUMMY_UBID|AUTO_CPC|LOE-70012|208906|34810|67671|65670"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=ATO-70009&sku_id=ATO-70009-00066&sclid=uYumOlcJEHw2HM6WIZagce9AvjepUTP4&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|294800|99983|88160|86159&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--ATO-70009-00066-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//92/MTA-23026753/br-m036969-02885_samsung-galaxy-a12_full01.jpg",
      //             "mrp": 2752980.0,
      //             "name": "Samsung Galaxy A12",
      //             "rank": 9,
      //             "salePrice": 2752980.0,
      //             "sclid": "uYumOlcJEHw2HM6WIZagce9AvjepUTP4",
      //             "score": 125600,
      //             "sellerId": "ATO-70009",
      //             "skuId": "ATO-70009-00066",
      //             "uclid": "2|uYumOlcJEHw2HM6WIZagce9AvjepUTP4|0.039471845809999996|1633513067280|ATO-70009-00066|REVX_TAG|DUMMY_UBID|CPC|ATO-70009|294800|99983|88160|86159"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=ATO-70009&sku_id=ATO-70009-00063&sclid=8g6vdzcyZECRQDBUTF8QEcqwvstwPrQC&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|294800|99983|88160|86159&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--ATO-70009-00063-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-23026714/br-m036969-02885_samsung-galaxy-a12_full01.jpg",
      //             "mrp": 2325600.0,
      //             "name": "Samsung Galaxy A12",
      //             "rank": 10,
      //             "salePrice": 2325600.0,
      //             "sclid": "8g6vdzcyZECRQDBUTF8QEcqwvstwPrQC",
      //             "score": 125600,
      //             "sellerId": "ATO-70009",
      //             "skuId": "ATO-70009-00063",
      //             "uclid": "2|8g6vdzcyZECRQDBUTF8QEcqwvstwPrQC|0.039471845809999996|1633513067280|ATO-70009-00063|REVX_TAG|DUMMY_UBID|CPC|ATO-70009|294800|99983|88160|86159"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=GAE-70044&sku_id=GAE-70044-00005&sclid=RRFPFrdrfrJ4Cd4WEoTmZOTHFTcJzUtD&svt=1|so|0.03955|sdu|1633513067280|AUTO_CPC|243276|53299|34062|32061&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--GAE-70044-00005-00002",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-9241976/samsung_samsung_galaxy_m51_full03_pbv0cnty.jpg",
      //             "mrp": 5499000.0,
      //             "name": "Samsung Galaxy M51",
      //             "rank": 11,
      //             "salePrice": 5349000.0,
      //             "sclid": "RRFPFrdrfrJ4Cd4WEoTmZOTHFTcJzUtD",
      //             "score": 125600,
      //             "sellerId": "GAE-70044",
      //             "skuId": "GAE-70044-00005",
      //             "uclid": "2|RRFPFrdrfrJ4Cd4WEoTmZOTHFTcJzUtD|0.03955|1633513067280|GAE-70044-00005|REVX_TAG|DUMMY_UBID|AUTO_CPC|GAE-70044|243276|53299|34062|32061"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=GAE-70044&sku_id=GAE-70044-00011&sclid=bdtw5tfXh4qJh9vKxdq2EWRFO0ZNBg78&svt=1|so|0.03955|sdu|1633513067280|AUTO_CPC|243276|53299|34062|32061&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--GAE-70044-00011-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//97/MTA-7475335/samsung_samsung_a21s_-_radja_cellular_bangkalan_full01_f3upc3nn.jpg",
      //             "mrp": 2862000.0,
      //             "name": "Samsung A21S Smartphone",
      //             "rank": 12,
      //             "salePrice": 2512000.0,
      //             "sclid": "bdtw5tfXh4qJh9vKxdq2EWRFO0ZNBg78",
      //             "score": 125600,
      //             "sellerId": "GAE-70044",
      //             "skuId": "GAE-70044-00011",
      //             "uclid": "2|bdtw5tfXh4qJh9vKxdq2EWRFO0ZNBg78|0.03955|1633513067280|GAE-70044-00011|REVX_TAG|DUMMY_UBID|AUTO_CPC|GAE-70044|243276|53299|34062|32061"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=LOC-70015&sku_id=LOC-70015-00004&sclid=J6mRv4dFwCPdmxSliukv7zTGCJFiZjzd&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|260687|68251|55732|53731&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--LOC-70015-00004-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//85/MTA-11171370/samsung_samsung_galaxy_m11_full01_nrkuu90e.jpg",
      //             "mrp": 1950000.0,
      //             "name": "Samsung Galaxy M11",
      //             "rank": 13,
      //             "salePrice": 1620000.0,
      //             "sclid": "J6mRv4dFwCPdmxSliukv7zTGCJFiZjzd",
      //             "score": 125600,
      //             "sellerId": "LOC-70015",
      //             "skuId": "LOC-70015-00004",
      //             "uclid": "2|J6mRv4dFwCPdmxSliukv7zTGCJFiZjzd|0.039471845809999996|1633513067280|LOC-70015-00004|REVX_TAG|DUMMY_UBID|CPC|LOC-70015|260687|68251|55732|53731"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=GIY-70004&sku_id=GIY-70004-00056&sclid=Vsn9DlCHEjyZolZevQtMCkxu1s7lMzC4&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|243322|53345|37647|35646&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--GIY-70004-00056-00002",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-13384615/samsung_samsung_galaxy_a02_full01_gejoafog.jpg",
      //             "mrp": 1445000.0,
      //             "name": "Samsung Galaxy A02",
      //             "rank": 14,
      //             "salePrice": 1445000.0,
      //             "sclid": "Vsn9DlCHEjyZolZevQtMCkxu1s7lMzC4",
      //             "score": 125600,
      //             "sellerId": "GIY-70004",
      //             "skuId": "GIY-70004-00056",
      //             "uclid": "2|Vsn9DlCHEjyZolZevQtMCkxu1s7lMzC4|0.039471845809999996|1633513067280|GIY-70004-00056|REVX_TAG|DUMMY_UBID|CPC|GIY-70004|243322|53345|37647|35646"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=RNP-70003&sku_id=RNP-70003-00002&sclid=VEI9qq6Wyxf7Uh0AJBkwjnmQkMmUhs8W&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|264658|72131|49806|47805&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--RNP-70003-00002-00002",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-8651012/samsung_samsung_galaxy_a71_8gb_full02_hgs4o3t9.jpg",
      //             "mrp": 5499000.0,
      //             "name": "SAMSUNG GALAXY A71 8GB",
      //             "rank": 15,
      //             "salePrice": 5499000.0,
      //             "sclid": "VEI9qq6Wyxf7Uh0AJBkwjnmQkMmUhs8W",
      //             "score": 120760,
      //             "sellerId": "RNP-70003",
      //             "skuId": "RNP-70003-00002",
      //             "uclid": "2|VEI9qq6Wyxf7Uh0AJBkwjnmQkMmUhs8W|0.039471845809999996|1633513067280|RNP-70003-00002|REVX_TAG|DUMMY_UBID|CPC|RNP-70003|264658|72131|49806|47805"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=RNP-70003&sku_id=RNP-70003-00001&sclid=gdmmmumkgZUj4Ty9It6UPenIrzzDSOyH&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|264658|72131|49806|47805&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--RNP-70003-00001-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//100/MTA-7655392/samsung_samsung_galaxy_a51_smartphone_full03_pxwmx346.jpg",
      //             "mrp": 4099000.0,
      //             "name": "Samsung Galaxy A51 Smartphone",
      //             "rank": 16,
      //             "salePrice": 4099000.0,
      //             "sclid": "gdmmmumkgZUj4Ty9It6UPenIrzzDSOyH",
      //             "score": 120760,
      //             "sellerId": "RNP-70003",
      //             "skuId": "RNP-70003-00001",
      //             "uclid": "2|gdmmmumkgZUj4Ty9It6UPenIrzzDSOyH|0.039471845809999996|1633513067280|RNP-70003-00001|REVX_TAG|DUMMY_UBID|CPC|RNP-70003|264658|72131|49806|47805"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=ALC-70067&sku_id=ALC-70067-00033&sclid=oFDhjglGlI6cm9wfA3gB0WNNv7v925pI&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|259171|67100|45230|43229&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--ALC-70067-00033-00002",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-13528460/samsung_samsung_a52_8gb_128gb_full01_a81ae9ac.jpg",
      //             "mrp": 4999000.0,
      //             "name": "SAMSUNG A52 8GB 128GB",
      //             "rank": 17,
      //             "salePrice": 4849030.0,
      //             "sclid": "oFDhjglGlI6cm9wfA3gB0WNNv7v925pI",
      //             "score": 120760,
      //             "sellerId": "ALC-70067",
      //             "skuId": "ALC-70067-00033",
      //             "uclid": "2|oFDhjglGlI6cm9wfA3gB0WNNv7v925pI|0.039471845809999996|1633513067280|ALC-70067-00033|REVX_TAG|DUMMY_UBID|CPC|ALC-70067|259171|67100|45230|43229"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=ALC-70067&sku_id=ALC-70067-00014&sclid=pEdLXrMdA7hPd3uP2ybN5AxxlqyGjqeB&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|259171|67100|45230|43229&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--ALC-70067-00014-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//90/MTA-10983131/samsung_samsung_a51_8gb_resmi_full01_rkaoy0af.jpg",
      //             "mrp": 4799000.0,
      //             "name": "SAMSUNG A51 8GB RESMI",
      //             "rank": 18,
      //             "salePrice": 4367090.0,
      //             "sclid": "pEdLXrMdA7hPd3uP2ybN5AxxlqyGjqeB",
      //             "score": 120760,
      //             "sellerId": "ALC-70067",
      //             "skuId": "ALC-70067-00014",
      //             "uclid": "2|pEdLXrMdA7hPd3uP2ybN5AxxlqyGjqeB|0.039471845809999996|1633513067280|ALC-70067-00014|REVX_TAG|DUMMY_UBID|CPC|ALC-70067|259171|67100|45230|43229"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=GAE-70044&sku_id=GAE-70044-00013&sclid=i6DCJPj4ffJaxVP2n6mwVxEyenieFlw4&svt=1|so|0.03955|sdu|1633513067280|AUTO_CPC|243276|53299|34062|32061&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--GAE-70044-00013-00001",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-7618549/samsung_samsung_galaxy_a31_smartphone_full04_tvv3ekda.jpg",
      //             "mrp": 4365000.0,
      //             "name": "Samsung Galaxy A31 Smartphone",
      //             "rank": 19,
      //             "salePrice": 4001500.0,
      //             "sclid": "i6DCJPj4ffJaxVP2n6mwVxEyenieFlw4",
      //             "score": 120760,
      //             "sellerId": "GAE-70044",
      //             "skuId": "GAE-70044-00013",
      //             "uclid": "2|i6DCJPj4ffJaxVP2n6mwVxEyenieFlw4|0.03955|1633513067280|GAE-70044-00013|REVX_TAG|DUMMY_UBID|AUTO_CPC|GAE-70044|243276|53299|34062|32061"
      //          },
      //          {
      //             "destinationUrl": "https://t.o-s.io/click/?client_id=115069&seller_id=GIY-70004&sku_id=GIY-70004-00140&sclid=SjeiG5wSODMuk1zJ2fOu397s57apn3Ha&svt=1|so|0.039471845809999996|sdu|1633513067280|CPC|243322|53345|37647|35646&tag=REVX_TAG&redirect_url=https%3A%2F%2Fwww.blibli.com%2Fp%2Fproduct-name%2Fis--GIY-70004-00140-00002",
      //             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//83/MTA-23262131/samsung_samsung_a03s_4-64_full07_mond7f8u.jpg",
      //             "mrp": 1849000.0,
      //             "name": "Samsung A03s 4/64",
      //             "rank": 20,
      //             "salePrice": 1812020.0,
      //             "sclid": "SjeiG5wSODMuk1zJ2fOu397s57apn3Ha",
      //             "score": 120760,
      //             "sellerId": "GIY-70004",
      //             "skuId": "GIY-70004-00140",
      //             "uclid": "2|SjeiG5wSODMuk1zJ2fOu397s57apn3Ha|0.039471845809999996|1633513067280|GIY-70004-00140|REVX_TAG|DUMMY_UBID|CPC|GIY-70004|243322|53345|37647|35646"
      //          }
      //       ],
      //       "relatedSearchTermsPosition": 43,
      //       "nearbyLocationFailed": false,
      //       "correctedNearbyLocation": "",
      //       "interspersedCardFilters": [

      //       ],
      //       "materiallResponse": false
      //    }
      // }

      this.pageItem = this.resp.data.paging
      this.length = this.pageItem.total_item
   }

   ngOnDestroy(): void {
      this.subsArr.forEach(sub => {
         sub.unsubscribe()
      });
   }

}
