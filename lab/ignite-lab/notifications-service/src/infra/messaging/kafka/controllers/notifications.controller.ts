import { SendNotification } from '@app/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  // sera executada toda vez que uma nova mensagem dentro do topico criado no upstash
  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificationPayload,
  ) {
    // console.log('test');
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
