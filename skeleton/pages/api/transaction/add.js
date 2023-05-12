import { PrismaClient } from '@prisma/client'
import {add_edit} from '../../../helpers/crud'

export default async function Adding (req, res) {
  const prisma = new PrismaClient();
  let inputValue = req.body.data.inputValue;
  const sourceName = req.body.data.sourceName;

  const sourceID = await add_edit(sourceName); //inputValue with sourceId
  inputValue['sourceId'] = sourceID;
  await prisma.transaction.create({data: inputValue});

  res.status(200).send('Transaction Added');
}

/* (passed in from the front-end)
req.body.data = {
  sourceName: 'dango',
  inputValue: {
  type: 'Income',
  title: 'da',
  categoryId: 1,
  amountDecimal: 1200,
  accountId: 1,
  date: '2023-05-11T20:07:37.627Z'
  }
}
*/