'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { link } from 'fs'
import CartIcon from './CartIcon'

const links = [
  { id: 1, title: 'Homepage', url: '/' },
  { id: 1, title: 'Menu', url: '/menu' },
  { id: 1, title: 'Working Hours', url: '/' },
  { id: 1, title: 'Contact', url: '/' },
]

const Menu = () => {
  const [open, setOpen] = useState(false)
  // Temporary
  const user = false
  return (
    <div>
      {!open ? (
        <Image
          alt='open icon'
          src='/open.png'
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className='cursor-pointer'
        />
      ) : (
        <Image
          alt='close icon'
          src='/close.png'
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          className='cursor-pointer'
        />
      )}
      {open && (
        <div className='bg-red-500 text-white text-3xl absolute left-0 top-24 h-[calc(100vh-6rem)] flex justify-center items-center flex-col w-full gap-8 z-10'>
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href='/login' onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href='/orders' onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href='/cart' onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  )
}
export default Menu
