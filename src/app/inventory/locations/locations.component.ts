import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationListDto } from 'src/app/models/complex-types/location-list.dto';
import { LocationService } from 'src/app/services/location.service';

import { Location } from './../../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'name', 'locationCode', 'details'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  locationsDto: Array<LocationListDto>;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.locationService.getAll());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.paginator);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navigateToLocation(id: number) {
    this.router.navigate(['/','inventory', 'locations', id]);
  }


  navigateToEditLocation(id: number) {
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

}
