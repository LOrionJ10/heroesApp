import { CommonModule     } from '@angular/common';
import { MatIconModule    } from '@angular/material/icon';
import { MatButtonModule  } from '@angular/material/button';
import { MatListModule    } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule         } from '@angular/core';



@NgModule({
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  imports: [ 
    CommonModule
  ]
})
export class MaterialModule { }
