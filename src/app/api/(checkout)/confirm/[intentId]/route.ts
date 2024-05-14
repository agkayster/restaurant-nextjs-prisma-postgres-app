import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

interface Props {
	params: { intentId: string };
}
export const PUT = async ({ params }: Props) => {
	const { intentId } = params;

	try {
		await prisma.order.update({
			where: {
				intent_id: intentId,
			},
			data: { status: 'Being prepared' },
		});
		return new NextResponse(
			JSON.stringify({ message: 'Order has been updated' }),
			{ status: 200 }
		);
	} catch (error) {
		console.log('get intent error =>', error);
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong!' }),
			{ status: 500 }
		);
	}
};