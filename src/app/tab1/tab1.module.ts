import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page, ModalBuy } from './tab1.page';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  entryComponents: [ModalBuy],
  declarations: [Tab1Page, ModalBuy]
})
export class Tab1PageModule { }
