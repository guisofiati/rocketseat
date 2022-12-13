import { MailService } from './mail.service';

class PostmarkMailService implements MailService {
  sendEmail(): string {
    return 'Postmark Mail';
  }
}

export { PostmarkMailService };
