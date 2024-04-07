import React from 'react';

const OrdersPage = () => {
	return (
		<div className='p-4 lg:px-10 xl:p-20'>
			<table className='w-full border-separate border-spacing-3'>
				<thead className=''>
					<tr className='text-left'>
						<th className='hidden md:block'>Order ID</th>
						<th>Date</th>
						<th>Price</th>
						<th className='hidden md:block'>Products</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody className=''>
					<tr className='text-sm md:text-base bg-red-50'>
						<td className='hidden md:block py-6 px-1'>4537678</td>
						<td className='py-6 px-1'>22-04-2024</td>
						<td className='py-6 px-1'>39.90</td>
						<td className='hidden md:block py-6 px-1'>
							Big Burger menu (2), Veggie Pizza (2), Coca Cola 1L
							(2)
						</td>
						<td className='py-6 px-1'>
							On the way (approx, 10min)...
						</td>
					</tr>
					<tr className='text-sm md:text-base odd:bg-gray-100'>
						<td className='hidden md:block py-6 px-1'>4537678</td>
						<td className='py-6 px-1'>22-04-2024</td>
						<td className='py-6 px-1'>39.90</td>
						<td className='hidden md:block py-6 px-1'>
							Big Burger menu (2), Veggie Pizza (2), Coca Cola 1L
							(2)
						</td>
						<td className='py-6 px-1'>
							On the way (approx, 10min)...
						</td>
					</tr>
					<tr className='text-sm md:text-base odd:bg-gray-100'>
						<td className='hidden md:block py-6 px-1'>4537678</td>
						<td className='py-6 px-1'>22-04-2024</td>
						<td className='py-6 px-1'>39.90</td>
						<td className='hidden md:block py-6 px-1'>
							Big Burger menu (2), Veggie Pizza (2), Coca Cola 1L
							(2)
						</td>
						<td className='py-6 px-1'>
							On the way (approx, 10min)...
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default OrdersPage;
