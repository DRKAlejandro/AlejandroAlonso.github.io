import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/card/card.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule,
            RouterModule
  ],
  exports: [CardComponent] 
})
export class SharedModule {}
