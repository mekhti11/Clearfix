import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketListPage } from './ticket-list';

@NgModule({
  declarations: [
    TicketListPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketListPage),
  ],
})
export class TicketListPageModule {}
