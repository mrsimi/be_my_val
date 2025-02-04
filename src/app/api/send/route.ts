// /* eslint-disable import/no-anonymous-default-export */

// import { Resend } from 'resend';
// import type { NextApiRequest, NextApiResponse } from 'next';

// const resend = new Resend('re_h2547e9j_LciMgdC93Qty2GmAFacythFW');

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { updatedAnswers } = req.body;
//     const { data, error } = await resend.emails.send({
//         from: 'Personal <hello@turntablecharts.com>',
//         to: ['adegokesimi@gmail.com'],
//         subject: 'Would you be my val',
//         text: JSON.stringify(updatedAnswers)
//       });

//     if (error) {
//         return res.status(400).json(error);
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// }


import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      text: 'hello'
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
