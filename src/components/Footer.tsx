import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-2/4 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href='/' className='uppercase font-bold text-xl'>
        massimo
      </Link>
      <p className='uppercase'>@all rights reserved</p>
    </div>
  )
}
export default Footer
