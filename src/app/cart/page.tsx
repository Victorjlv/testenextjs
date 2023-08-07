import React from 'react';
import Image from 'next/image';

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
            <div className='h-1/2 p-4 flex flex-col justify-center overflow lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
                <div className='flex items-center justify-between mb-4'>
                    <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
                    <div className=''>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>Grande</span>
                    </div>
                    <h2 className='font-bold'>R$36.99</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <Image src="/temporary/p2.png" alt='' width={100} height={100}/>
                    <div className=''>
                        <h1 className='uppercase text-xl font-bold'>bacon deluxe</h1>
                        <span>Grande</span>
                    </div>
                    <h2 className='font-bold'>R$17.99</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <Image src="/temporary/p5.png" alt='' width={100} height={100}/>
                    <div className=''>
                        <h1 className='uppercase text-xl font-bold'>jalapeño fiesta</h1>
                        <span>Grande</span>
                    </div>
                    <h2 className='font-bold'>R$29.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>
            <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
                <div className='flex justify-between'>
                    <span className=''>SubTotal (3 itens)</span>
                    <span className=''>R$84.88</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Adicionais</span>
                    <span className=''>R$00.00</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Frete</span>
                    <span className='text-green-500'>GRÁTIS!</span>
                </div>
                <hr className='my-2'/>
                <div className='flex justify-between'>
                    <span className=''>TOTAL</span>
                    <span className='font-bold'>R$84.88</span>
                </div>
                <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>CONFIRMAR</button>
            </div>
        </div>
    )
}

export default CartPage;