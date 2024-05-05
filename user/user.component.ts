import { Component,OnInit} from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:String="";
  email:String="";                       //creating variables for html
  password:String="";
  _id:String="";
  btn_value:String="save"

  data:any=[]
  constructor(private bs:BlogService) {}

  handleSave(value:any){
    if (this._id) {
      this.bs.putUser(value).subscribe((data:any)=>{
        console.log(data);
        this.getData()
      })
    }else{
    this.bs.postUser({name:this.name,email:this.email,password:this.password}).subscribe((data:any)=>{
      console.log(data);
      this.getData()
      
    })
  }
  this.cls()
    
  }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.bs.getUser().subscribe((value:any)=>{
      console.log(value);
      this.data= value.data
    })
  }

  // delete data
  deleteData(_id:any){
    this.bs.deleteUser(_id).subscribe((data:any)=>{
      console.log(data);
      this.getData()
    })
  }

  // edit data
  editData(el:any){
console.log(el);
this._id= el._id;
this.name= el.name;
this.email= el.email;
this.password= el.password;
this.btn_value="Update";
  }

  cls(){
    this._id="";
    this.name="";
    this.email="";
    this.password="";
    this.btn_value="save";
  }
}
