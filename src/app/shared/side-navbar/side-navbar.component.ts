import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { IMenu } from '../interface/IMenu';
import { HttpclientService } from '../services/HttpClientServices';
 
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  menuList: Observable<IMenu[]>;
  constructor(private httpService: HttpclientService) { }

  ngOnInit() {
    this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
  }
}
