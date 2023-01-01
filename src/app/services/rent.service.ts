import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { Rent } from '../models/entities/rent';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl = 'https://localhost:44332/api/';
  constructor(private httpClient: HttpClient) {}

  getRentDetails(): Observable<ListResponseModel<Rent>> {
    let newPath = this.apiUrl + "rents/getrentdetails"
    return this.httpClient.get<ListResponseModel<Rent>>(newPath);
  }

  addRent(rent:Rent):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rents/add", rent)
  }

  checkRulesForAdding(rent:Rent):Observable<ResponseModel> {
    let newPath = this.apiUrl + "rents/rulesforadding"
    return this.httpClient.post<ResponseModel>(newPath,rent);
  }
}
