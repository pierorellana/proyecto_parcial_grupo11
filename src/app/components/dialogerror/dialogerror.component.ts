import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogerror',
  templateUrl: './dialogerror.component.html',
  styleUrls: ['./dialogerror.component.css']
})
export class DialogerrorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

  ngOnInit(): void {
  }

}


