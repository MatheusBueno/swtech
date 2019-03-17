import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public offerList: any[] = [];
  private allList;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

    this.db.list('producers').valueChanges()
      .subscribe(offers => { this.offerList = offers; this.allList = JSON.parse(JSON.stringify(offers)) });

  }

  onChange(event, allList = this.allList) {
    // console.log(event);
    const searched = event.detail.value.toLowerCase();

    if (searched === '') {
      this.offerList = allList;
      return;
    };

    this.offerList = this.offerList.filter(offer => offer.offers[0].productType.toLowerCase().includes(searched));
  }
}
