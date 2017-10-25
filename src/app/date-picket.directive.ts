import { Directive } from '@angular/core';
import {Component, AfterViewInit, ElementRef,Renderer2} from '@angular/core';
import * as $ from 'jquery';
import '../../node_modules/bootstrap-daterangepicker';
@Directive({
  selector: "[daterangepicker]"
 })
 export class DaterangepickerDirective {
  constructor(private el: ElementRef,private render:Renderer2) {
   
  }
  ngAfterViewInit() {
    $('input[name="birthdate"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true
    },
      function(start,end,label) {
        alert("You are " + start + " years old.");
      }
    )
  }
 }
