import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: any;

  constructor(
    private thisRoute: ActivatedRoute,
    private db: AngularFireDatabase) { }

  ngOnInit() {

    const key = this.thisRoute.snapshot.paramMap.get('profile-id');


    this.db.object(`producers/${key}`).valueChanges()
      .subscribe(x => this.profile = x)

  }

  doRandom() {
    return (Math.floor(Math.random() * 10) + 2).toString();
  }

}
