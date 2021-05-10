import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { GKGFeatureRoutingModule } from './GKGFeature-routing.module.';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule, FormsModule,MatInputModule, MatSortModule, MatDatepickerModule, MatNativeDateModule, GKGFeatureRoutingModule, MatFormFieldModule, MatSelectModule
  ],
  declarations: [ListComponent, CreateComponent, EditComponent],
  providers: [DataService]
})
export class GKGFeatureModule { }
