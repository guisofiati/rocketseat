import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        category: notification.category,
        content: notification.content.value,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
