import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-color-select-option-car-filter',
  templateUrl: './color-select-option-car-filter.component.html',
  styleUrls: ['./color-select-option-car-filter.component.css']
})
export class ColorSelectOptionCarFilterComponent implements OnInit{

  colors:Color[];
  currentColorId:number;
  constructor(
    private colorService:ColorService,
    private routerService:RouterService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getAll();

      this.activatedRoute.params.subscribe(params=>{
        this.currentColorId=params['colorId']
      })
  }

  getAll(){
    this.colorService.getAll().subscribe(response=>{
      this.colors=response.data
    })
  }

  routeToCarsPageByColorId(){
    this.routerService.carsPageByColorId(this.currentColorId)
  }
}
