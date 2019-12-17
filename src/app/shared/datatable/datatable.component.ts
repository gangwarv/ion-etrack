import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"]
})
export class DataTableComponent implements OnInit {
  rows =[
    {
      "name": "Ethel Price",
      "gender": "female",
      "age": 22,
      "address": "488/6, Sagar Market, Block A, Dilshad Garden, New Delhi, Delhi 110095, India"
    },
    {
      "name": "Claudine Neal",
      "gender": "female",
      "age": 55,
      "address": "489/6, Sagar Market, Block A, Dilshad Garden, New Delhi, Delhi 110095, India"
    },
    {
      "name": "Beryl Rice",
      "gender": "female",
      "age": 67,
      "address": "12/2, Sagar Market, Block A, Dilshad Garden, New Delhi, Delhi 110095, India"
    },
    {
      "name": "Simon Grimm",
      "gender": "male",
      "age": 28,
      "address": "H/6, Sagar Market, Block A, Dilshad Garden, New Delhi, Delhi 110095, India"
    }
  ];
  ColumnMode = ColumnMode;

  constructor() {}

  ngOnInit() {}
}
