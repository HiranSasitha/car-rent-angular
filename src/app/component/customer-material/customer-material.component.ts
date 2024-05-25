
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';



/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-customer-material',
  templateUrl: './customer-material.component.html',

  styleUrls: ['./customer-material.component.scss']
})
export class CustomerMaterialComponent implements OnInit {

  customers:Customer[]=[];
  displayedColumns: string[] = ['id', 'name', 'address'];
  dataSource = new MatTableDataSource(this.customers);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _liveAnnouncer: LiveAnnouncer,private customerService:CustomerService) {}
  ngOnInit(): void {
    
    this.getAllCustomer();
  
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   
  }

  getAllCustomer():void{
    this.customerService.getAllCustomer().subscribe(
      (response:any)=>{
       
        this.customers=response;
       this.dataSource.data=this.customers;
      }
    );
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
