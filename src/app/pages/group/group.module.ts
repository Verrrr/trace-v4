import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupPage } from './group.page';
import { MemberItemComponent } from './components/member-item/member-item.component';
import { MemberAddPage } from './components/member-add/member-add.page';

const routes: Routes = [
  {
    path: '',
    component: GroupPage
  }
];

@NgModule({
  entryComponents: [MemberAddPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupPage, MemberItemComponent, MemberAddPage]
})
export class GroupPageModule {}
