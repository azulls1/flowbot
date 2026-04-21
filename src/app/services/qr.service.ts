import { Injectable } from '@angular/core';
import QRCode from 'qrcode';

@Injectable({ providedIn: 'root' })
export class QrService {
  async toDataUrl(text: string): Promise<string> {
    return QRCode.toDataURL(text, {
      margin: 1,
      scale: 8,
      errorCorrectionLevel: 'M',
    });
  }
}
