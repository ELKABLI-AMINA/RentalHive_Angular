import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AgencyService} from "../../service/agency.service";

@Component({
  selector: 'app-agency-add-edit',
  templateUrl: './agency-add-edit.component.html',
  styleUrls: ['./agency-add-edit.component.css']
})
export class AgencyAddEditComponent implements OnInit{
  public agencyForm!:FormGroup;

  constructor(private fb: FormBuilder) {

  }


  ngOnInit() {
    this.agencyForm=this.fb.group({name : this.fb.control('')})
  }

}
