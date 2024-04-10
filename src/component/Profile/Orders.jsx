import React, { useEffect } from 'react'
import { OrderCard } from './OrderCard'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../State/Order/Action';

const Orders = () => {
  const { auth, order } = useSelector((store) => store);
  const dispatch = useDispatch();
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    dispatch(getUserOrders(token));
  }, [dispatch, token, auth.jwt])

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          order.orders.map((order) => order.orderItems.map((item) => <OrderCard order={order} item={item} />))
        }
      </div>
    </div>
  )
}

export default Orders

