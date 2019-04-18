import { Component,ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-bank-branches',
  templateUrl: './bank-branches.component.html',
  styleUrls: ['./bank-branches.component.css']
})
export class BankBranchesComponent implements OnInit {
  public baseUrlAPI = 'https://vast-shore-74260.herokuapp.com/banks?city';
  city: any;
  displayedColumns: string[] = ['bank_id', 'bank_name', 'branch', 'address','ifsc','city', 'district', 'state'];
  dataSource = new MatTableDataSource();
  getRes: any;
  bankResponse = false;
  public loading = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private HttpClient: HttpClient) { }
  ngOnInit() {
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  onChange(e) {
    this.loading = true;
    this.city = e.target.value;
    this.HttpClient.get(this.baseUrlAPI + '=' + this.city).subscribe(res => {
      this.loading = false;
      this.bankResponse = true;
      this.getRes = res;
      this.dataSource = new MatTableDataSource(this.getRes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  

}
