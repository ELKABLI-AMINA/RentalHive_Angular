import {Component, OnInit} from '@angular/core';
import {AgencyService} from "../../service/agency.service";
import {NgForOf, NgIf} from "@angular/common";
import {Agency} from "../../../../core/models/Agency";

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css'],
  standalone: true,  // à voir

  imports: [
    NgIf,
    NgForOf
  ]
})
export class AgencyListComponent implements OnInit {

  agencies: Agency[] = [];

  constructor(private agencyService: AgencyService) {
  }

  ngOnInit(): void {
    this.loadAgencies();

  }

  private loadAgencies(): void {
    this.agencyService.getAll().subscribe(agencies => {
      console.log("agencies  = ", agencies)
      this.agencies = agencies;
    });
  }

  deleteAgency(id: number): void {
    if(confirm("You are sur ?"))
    this.agencyService.delete(id).subscribe(() => {
      console.log(`Agency with ID ${id} deleted successfully.`);
      this.loadAgencies();
    });
  }



}
