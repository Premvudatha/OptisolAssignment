import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task2RoutingModule } from './task2-routing.module';
import { Task2Component } from './task2.component';
import { AngularMaterial } from 'src/material-module';
import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [
    Task2Component
  ],
  imports: [
    CommonModule,
    Task2RoutingModule,
    AngularMaterial,
    FlexLayoutModule
  ]
})
export class Task2Module { }
