import { createApp } from '../src/main';  // Importa tu aplicación NestJS
import serverlessExpress from '@vendia/serverless-express';

let cachedServer: any;

export default async function handler(req: any, res: any) {
  if (!cachedServer) {
    const app = await createApp();
    const expressApp = app.getHttpAdapter().getInstance();
    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer(req, res);
}
