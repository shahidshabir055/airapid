import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  getNextPage(): any{
    if (this.authService.isLogged === true){
      return this.router.navigate(['/employeeList'], { relativeTo: this.route });
    }
    else{
      return this.router.navigate(['/login'], { relativeTo: this.route });
    }
  }
}
