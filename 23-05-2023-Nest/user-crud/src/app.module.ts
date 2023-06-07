import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/nest'), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
