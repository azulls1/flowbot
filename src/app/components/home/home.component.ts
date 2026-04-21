import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';
import { QrService } from '../../services/qr.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  brand = environment.brandName;
  waUrl = '';
  qrSrc = '';
  loadingQr = true;
  currentYear = new Date().getFullYear();

  constructor(
    private wa: WhatsAppService,
    private qr: QrService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.waUrl = this.wa.build(
      environment.whatsAppPhoneE164,
      environment.defaultMessage,
    );

    if (environment.useExternalQr) {
      this.qrSrc = environment.externalQrSrc;
      this.loadingQr = false;
    } else {
      try {
        this.qrSrc = await this.qr.toDataUrl(this.waUrl);
      } finally {
        this.loadingQr = false;
      }
    }
  }
}
