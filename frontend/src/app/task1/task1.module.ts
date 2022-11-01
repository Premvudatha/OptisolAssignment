import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';
import { AngularMaterial } from 'src/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    Task1RoutingModule,
    AngularMaterial,
    ReactiveFormsModule
  ]
})
export class Task1Module { }
