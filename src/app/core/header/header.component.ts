import { Component } from '@angular/core';

import { Response } from '@angular/http';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService){}

  onSaveData() {
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
}

  onLogout() {
    this.authService.logout();
  }
}
