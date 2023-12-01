import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() component: any = null;
  @Input() modalContent: any = null;
  get transition() {
    return this.modalService.transition;
  }

  constructor(private modalService: ModalService) {
    window.addEventListener('click', (e: any) => {
      if (!e) return;
      if (document.getElementById('clickbox') && !document.getElementById('clickbox')?.contains(e.target) && this.modalContent?.backdropClick) {
        this.close()
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.modalService.setTransition(true);
      console.log(this.component);

    }, 1);
  }

  close() {
    if (this.transition) {
      this.modalService.close(false);
    }
  }

}
