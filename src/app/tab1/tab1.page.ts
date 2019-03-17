import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  public offerList: any[] = [];
  private allList;

  constructor(
    public modalCtrl: ModalController,
    private db: AngularFireDatabase) { }

  ngOnInit() {

    this.db.list('producers').valueChanges()
      .subscribe(offers => { this.offerList = offers; this.allList = JSON.parse(JSON.stringify(offers)) });

  }


  async presentProfileModal(item) {
    let profileModal = await this.modalCtrl.create({
      component: ModalBuy,
      componentProps: {
        'produto': item.offers[0].productType,
        'produtor': item.name
      }
    });
    profileModal.present();
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


@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalBuy {

  // "value" passed in componentProps
  @Input() produto: string;

  // "produtor" passed in componentProps
  @Input() produtor: string;

  constructor(
    public modalCtrl: ModalController, params: NavParams) {
    console.log('UserId', params.get('userId'));
  }

  close() {
    this.modalCtrl.dismiss();
  }

}