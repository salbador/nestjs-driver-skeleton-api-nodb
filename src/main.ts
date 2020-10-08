import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
      const app = await NestFactory.create(AppModule);

    // Swagger integration
    const options = new DocumentBuilder()
        .setTitle('Backend Api for Truck Online Checkin (TOCI) to be implemented by a TAS')
        .setDescription('description')
        .setVersion('1.0')
        .addTag('')
        .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api', app, document)

    await app.listen(3000);
}
bootstrap();
