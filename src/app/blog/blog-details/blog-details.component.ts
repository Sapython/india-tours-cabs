import { Component, OnInit } from '@angular/core';
import { DataProvidersService } from 'src/app/services/dataProviders/data-providers.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {

  constructor(public dataprovider: DataProvidersService) { }

  ngOnInit() {}

}
