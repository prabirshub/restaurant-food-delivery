import Link from 'next/link'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false

  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link className='' href='/'>
          Massimo
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex md:gap-4 justify-end items-center flex-1'>
        <div className='flex items-center gap-2 cursor-pointer px-1 bg-orange-300 rounded-md md:absolute top-3 right-2 lg:static'>
          <Image src='/phone.png' alt='phone' width={20} height={20} />
          <span>123 456 778</span>
        </div>
        {!user ? (
          <Link href='/Login'>Login</Link>
        ) : (
          <Link href='/orders'>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  )
}
export default Navbar
