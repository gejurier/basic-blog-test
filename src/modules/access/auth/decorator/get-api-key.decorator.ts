import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export const GetApiKey = createParamDecorator(async (id: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const apiKeyHeader = request.headers['api-key'];
  const prisma = new PrismaClient();
  const apiKey = await prisma.apiKey.findFirst({
    where: {
      code: apiKeyHeader,
    },
  });
  return apiKey[id];
});
