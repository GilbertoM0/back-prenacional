import { createApp } from '../src/main';
import serverlessExpress from '@vendia/serverless-express';
import { ExpressAdapter } from '@nestjs/platform-express';

let cachedServer: any;

export default async function handler(req: any, res: any) {
  if (!cachedServer) {
    const nestApp = await createApp();
    const expressAdapter = nestApp.getHttpAdapter() as ExpressAdapter;
    const expressApp = expressAdapter.getInstance();
    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer(req, res);
}