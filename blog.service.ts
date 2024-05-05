import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  // get data from backend
  getUser(){
    return this.http.get('http://localhost:5000/api/user')
  }

  // post data from backend
  postUser(user:any){
    return this.http.post('http://localhost:5000/api/user',JSON.stringify(user),
    {headers:{"Content-Type":"application/json"}})
  }

  // put data from backend
  putUser(user:any){
    return this.http.put(`http://localhost:5000/api/user/${user._id}`,JSON.stringify(user),
    {headers:{"Content-Type":"application/json"}})
  }

   // delete data from backend
  deleteUser(_id:any){
    return this.http.delete(`http://localhost:5000/api/user/${_id}`,{headers:{"Content-Type":"application/json"}})
  }
}
