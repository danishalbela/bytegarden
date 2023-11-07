import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileNumber: string = '123-456-7890';

  sendEmail() {
    window.location.href = 'mailto:your@email.com'; // Replace with your email address
  }

  copyMobile() {
    const textArea = document.createElement('textarea');
    textArea.value = this.mobileNumber;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}
