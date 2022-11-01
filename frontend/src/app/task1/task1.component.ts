import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Task1Service } from './task1.service';







@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  items:any;
  item: any;
  indexselectedtoEdit: any;
  cd: any;
  isedit=false;
  i: any;
  countries:any;
  states:any;
  selectedCountry:any={
    id:0,name:''
  };
  cities:any=[];


  constructor(private fb:FormBuilder,private task1service:Task1Service) {
    this.items=[];

   }

  ngOnInit(): void {
    this.loadData();
    this.showAll();
    // this.onSelect(this.selectedCountry.id)

  }
  showAll(){
    this.task1service.getAll().subscribe(
      (data:any)=>{
        this.states=data;
        this.countries=data;
        this.cities=data;


      }
    )
  }

  registrationForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z]+')]],
    lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z]+')]],
    email:['',[Validators.required,Validators.email]],
    phoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    address1:['',[Validators.required,Validators.minLength(3)]],
    address2:['',[Validators.required,Validators.minLength(3)]],
    qualification:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('[a-zA-Z]+')]],
    country:['',[Validators.required]],
    state:['',[Validators.required]],
    city:['',[Validators.required]],
    zipCode:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8),Validators.pattern("^[0-9]*$")]],
    comments:['',[]],
 })
register=this.registrationForm.controls;

onSubmit(){
  this.items.push(this.registrationForm.value); 

  this.task1service.addData(this.registrationForm.value)
  .subscribe(
    response=>console.log("Sucess",response),
    error=>console.log("error",error)
  );
  this.registrationForm.reset()

}

delete(data: any,index: any){
this.task1service.deleteData(data._id).subscribe(res=>{
  alert('Your Data  Deleted Successfully')
})
  this.items.splice(index,1)


}

onedit(index:any){
  this.task1service.getData()
  this.isedit=true;
  this.registrationForm.patchValue(this.items[index]);
  this.indexselectedtoEdit=index
}
onSave(){
  
this.items.splice(this.indexselectedtoEdit,1);
this.items.push(this.registrationForm.value); 
this.registrationForm.reset()
this.isedit=false;


}
loadData(){
  this.task1service.getData().subscribe(res=>{
    Object.values(res).forEach(datafromdb=>{
      this.items.push(datafromdb)
    })
  })

}
onSelect(country_id:any){
  this.task1service.getAll().subscribe((res:any)=>{
    this.states=res['states'].filter(
      (res:any)=>res.country_id==country_id!.value
    )

  })

}
}
