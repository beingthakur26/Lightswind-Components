import React from 'react';

const CartButton = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
            <div className="relative text-center flex items-center justify-center gap-10 flex-wrap">
                <a
                    href="#"
                    className="flex gap-2 items-center justify-center font-bold bg-primarylw text-white text-center hover:bg-primarylw-2 dark:bg-darklw dark:hover:bg-darklw-2 p-4 px-12 rounded-full cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    Add to Cart
                </a>
                <a
                    href="#"
                    className="flex gap-2 items-center justify-center font-bold bg-primarylw text-white text-center hover:bg-primarylw-2 dark:bg-darklw dark:hover:bg-darklw-2 p-4 px-12 rounded-full cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                    Add to Cart
                </a>
            </div>
        </div>
    );
};

export default CartButton;
