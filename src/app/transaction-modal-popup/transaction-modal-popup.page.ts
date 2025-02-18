import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-transaction-modal-popup',
  templateUrl: './transaction-modal-popup.page.html',
  styleUrls: ['./transaction-modal-popup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TransactionModalPopupPage implements OnInit {

  name: string = '';
  sum: number = 0;
  date: string = (new Date()).toISOString();
  transactionType: string = 'out';

  constructor(private modalController: ModalController) {

  }

  ngOnInit() {

  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
  confirm() {
    this.modalController.dismiss({
      name: this.name,
      sum: this.sum,
      date: this.date,
      transactionType: this.transactionType
    }, 'confirm');
  }

}
