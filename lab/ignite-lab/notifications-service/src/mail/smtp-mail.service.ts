import { MailService } from './mail.service';

class SMTPMailService implements MailService {
  sendEmail(): string {
    return 'SMTP Mail';
  }
}

export { SMTPMailService };
