import {Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CommonModule, NgLocalization, NgLocaleLocalization} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgLocalization, useClass: NgLocaleLocalization }]
})

export class AppComponent {
    data:String[]=["Onion","Mushroom"];
    data1:String="Oninon,Mushroom,Extra cheese,Pepperoni";
    f:String[]=this.data1.split(',')
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    constructor(private fb: FormBuilder) { }
    profileForm = this.fb.group({
        dateValue:['', Validators.required],
        toppings :['', Validators.required]
    })
   
    ngOnInit(){
         this.profileForm.patchValue({toppings:this.f});
        //console.log(this.data)
    }
    onSubmit() {
        const x=this.profileForm.value as FormArray
        //console.warn(this.profileForm.value);
        //console.log(this.profileForm.get('toppings') as FormArray);
        //console.log(this.f);
        console.log(x);
      }
}

