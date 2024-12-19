import { Component } from '@angular/core';
import { MascotaViewmodelService } from '../../viewmodels/mascota-viewmodel.service';
import { MascotaResponse } from '../../models/mascota-response.model';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mascotas : MascotaResponse[] = []

  constructor(private mascotaViewModel: MascotaViewmodelService){

  }

  ngOnInit(): void {
    this.mascotaViewModel.listarMascotas().subscribe({
      next: (response) => {
        console.log(response)
        this.mascotas = response
      },
      error: (err) => {
        console.log(err)
      }
    })
    
  }

}
