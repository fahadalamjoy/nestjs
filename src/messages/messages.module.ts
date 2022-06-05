import { Module } from '@nestjs/common';
import { MessagesRepository } from 'src/messages.repository';
import { MessagesService } from 'src/messages.service';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers:[MessagesService,MessagesRepository]
})
export class MessagesModule {}
