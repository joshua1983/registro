import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAmigoPage } from './new-amigo';

@NgModule({
  declarations: [
    NewAmigoPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAmigoPage),
  ],
})
export class NewAmigoPageModule {}
