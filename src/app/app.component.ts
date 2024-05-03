import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}
  title = 'ATS_Project';
  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  // openModal(content: any) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  // }
}
