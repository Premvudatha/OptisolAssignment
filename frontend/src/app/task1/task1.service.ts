import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class Task1Service {

  _url = 'http://54.202.218.249:9501/api/users';
  _countryurl='assets/store.json';

  constructor(private _http:HttpClient) { }
  getAll():any{
    return this._http.get<any>(this._countryurl)

  }
  

  addData(userData:any){
    const data={
      firstName:userData.firstName,
      lastName:userData.lastName,
      email:userData.email,
      phoneNumber:userData.phoneNumber,
      address1:userData.address1,
      address2:userData.address2,
      comments:userData.comments,
      zipCode:userData.zipCode,
      qualification:userData.qualification,
      country:userData.country,
      state:userData.state,
      city:userData.city
    }
    return this._http.post<any>(this._url,data)

  }

  getData(){
    return this._http.get<any>(this._url)
  }


  deleteData(id:any){
    return this._http.delete<any>(`${this._url}/${id}`)
  }
  
 
}
