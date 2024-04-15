import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
	params: { id: string };
}

// GET SINGLE PRODUCT
export const GET = async (req: NextRequest, { params }: Props) => {
	const { id } = params;
	try {
		// const body = await req.json();

		const product = await prisma.product.findUnique({
			where: {
				id: id,
			},
		});
		return new NextResponse(JSON.stringify(product), { status: 200 });
	} catch (error) {
		console.log('get api order id error =>', error);
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong!' }),
			{ status: 500 }
		);
	}
};
