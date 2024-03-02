import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DemoListComponent,
    DemoFormComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgbPaginationModule,
    TranslateModule 
  ]
})
export class DemoModule { }
