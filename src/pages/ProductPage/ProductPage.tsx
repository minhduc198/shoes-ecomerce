import Sidebar from 'src/component/Sidebar'

export default function ProductPage() {
  return (
    <div className='container mt-[50px]'>
      <div className='px-[40px] md:px-[60px] lg:px-[80px] lg:pr-[135px] lg:pl-[104px] flex gap-[30px]'>
        <Sidebar />
      </div>
    </div>
  )
}
