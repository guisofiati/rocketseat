import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { env } from 'process';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: [`${env.KAFKA_BROKERS}`],
        sasl: {
          mechanism: 'scram-sha-256',
          username: `${env.KAFKA_USERNAME}`,
          password: `${env.KAFKA_PASSWORD}`,
        },
        ssl: true,
      },
    });
  }

  // quando o nest for derrubado, ele fecha a conexão com o kafka
  async onModuleDestroy() {
    await this.close();
  }
}
