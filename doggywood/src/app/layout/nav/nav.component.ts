import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  public isEmpLoggedIn:boolean =  false;
   public isCustLoggedIn: boolean = false;
  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isEmpLoggedIn = this.authenticationService.isEmpLoggedIn();
    this.isCustLoggedIn = this.authenticationService.isCustLoggedIn();
  }

}
