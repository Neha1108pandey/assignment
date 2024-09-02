import React from 'react';

const OrderConfirmationButton = ({ orderDetails, isOpen, handleClose }) => {
  // Calculate the total amount
  const totalAmount = orderDetails.reduce((total, order) => total + order.totalPrice, 0);

  return (
    <div className='w-1/4'>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg relative z-10 h-auto max-h-[60vh] overflow-y-auto">

            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575"/>
              <path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575"/>
            </svg>

            {/* <h1 className="text-4xl font-extrabold mt-6">Order Confirmed</h1> */}
            <div className="flex flex-col md:flex-row  md:justify-left items-start">
  <h1 className="text-4xl font-extrabold text-red-950 float-start">
    <span className="block md:inline ">Order</span>
    <span className="block md:inline"> Confirmed</span>
  </h1>
</div>


            <p className="my-4 text-red-950 font-semibold">I hope you enjoyed the food!</p>
            <div className="mb-4">
              {orderDetails.map((order, index) => (
                <div className="flex items-center space-x-4 mb-4" key={order.id || index}>
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-12 h-14 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{order.name}
                    <p className="text-red-700">
                      {order.count}x 
                      <span className='text-gray-600 mr-56'>&nbsp; @ ${order.price}</span> ${order.totalPrice}
                      {/* <span className="text-gray-700 font-bold float-end px-72">
                        ${order.totalPrice}
                      </span> */}
                    </p>
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Display the total amount */}
            <div className="text-semibold font-bold text-gray-900  px-6">
            Order  Total <span className=' float-end px-12'> ${totalAmount.toFixed(2)}</span> 
            </div>

            <div className="flex justify-center space-x-8 mt-4">
              <button
                onClick={handleClose}
                className="px-24 py-2 mx-10 mb-12 text-center bg-red-700 text-white rounded-full hover:bg-red-900 focus:outline-none"
              >
                Start New Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationButton;
