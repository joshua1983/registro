import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewReunionPage } from './new-reunion';

@NgModule({
  declarations: [
    NewReunionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewReunionPage),
  ],
})
export class NewReunionPageModule {}
