import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { excelFileValidationSchema } from 'validationSchema/excel-files';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getExcelFiles();
    case 'POST':
      return createExcelFile();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getExcelFiles() {
    const data = await prisma.excel_file
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'excel_file'));
    return res.status(200).json(data);
  }

  async function createExcelFile() {
    await excelFileValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.assignment?.length > 0) {
      const create_assignment = body.assignment;
      body.assignment = {
        create: create_assignment,
      };
    } else {
      delete body.assignment;
    }
    const data = await prisma.excel_file.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
