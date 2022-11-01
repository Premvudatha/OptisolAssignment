import { NgModule } from '@angular/core';
import{MatButtonModule} from'@angular/material/button';
import{MatTabsModule} from'@angular/material/tabs';
import{MatFormFieldModule} from'@angular/material/form-field';
import{MatSelectModule} from'@angular/material/select';
import{MatInputModule} from'@angular/material/input';
import{MatCardModule} from'@angular/material/card';
import{MatIconModule} from'@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatTableModule} from '@angular/material/table'
import {MatNativeDateModule} from '@angular/material/core'


@NgModule({
    exports: [
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule
    ]})
export class AngularMaterial{}