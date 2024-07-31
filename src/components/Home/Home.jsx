import logo from '../../assets/image/Icon.png'
import Orderlist from '../../assets/image/orderlist.png'
import Orderdetial from '../../assets/image/orderdetial.png'
import Customer from '../../assets/image/customer.png'
import Analytics from '../../assets/image/analytics.png'
import Reviews from '../../assets/image/reviews.png'
import Foods from '../../assets/image/foods.png'
import Fooddetail from '../../assets/image/fooddetail.png'
import Customerdetail from '../../assets/image/customerdetail.png'
import Calendar from '../../assets/image/calendar.png'
import Chat from '../../assets/image/chat.png'
import Wallet from '../../assets/image/wallet.png'
import Illustration from '../../assets/image/illustration.png'
import Icondashboard from '../../assets/image/icon_dashboard.png'
import Avatar from '../../assets/image/avatar.png'
import Filterperiode from '../../assets/image/filterperiode.png'
import Totalorders from '../../assets/image/totalorders.png'
import TotalDelivered from '../../assets/image/TotalDelivered.png'
import TotalCanceled from '../../assets/image/TotalCanceled.png'
import TotalRevenue from '../../assets/image/TotalRevenue.png'
import Arrow from '../../assets/image/arrow.png'
import Arrowdown from '../../assets/image/arrowdown.png'
import Gauge1 from '../../assets/image/gauge01.png'
import Gauge2 from '../../assets/image/gauge02.png'
import Gauge3 from '../../assets/image/gauge03.png'
import Savereport from '../../assets/image/savereport.png'
import Arrowleft from '../../assets/image/arrowleft.png'
import Arrowright from '../../assets/image/arrowright.png'
import Tomy from '../../assets/image/Tomy.png'
import Mytron from '../../assets/image/Mytron.png'
import Jonsena from '../../assets/image/Jonsena.png'
import Sofia from '../../assets/image/Sofia.png'
import Anandre from '../../assets/image/Anandre.png'
import Staryellow from '../../assets/image/Staryellow.png'
import Stargray from '../../assets/image/Stargray.png'
import Bieudo2 from '../../assets/image/Bieudo2.png'
import Arrowred from '../../assets/image/Arrowred.png'
import Bieudo1 from '../../assets/image/Bieudo1.png'
import Bieudo from '../../assets/image/bieudo.png'


const Home = () => {
  return (
    <>
        <div className="flex bg-gray-100">
            <div className="w-[349px] p-6">
                <div>
                    <p className="text-5xl font-bold leading-[72px]">Sedap</p>
                    <p className="text-lg font-medium leading-[21.6px] text-[#B9BBBD]">Modern Admin Dashboard</p>
                </div>
                <div className="mt-16">
                    <ul className="flex flex-col gap-6 text-lg font-medium leading-[21.6px] text-[#464255]">
                        <li className="flex gap-4 items-center bg-[#00B07426] w-[250px] h-[54px] rounded-lg">
                            <img src={logo} className="w-5 h-5" alt="" />
                            <p className='text-[#00B074] font-bold'>Dashboard</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Orderlist} className="w-5 h-5" alt="" />
                            Order List
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Orderdetial} className="w-5 h-5" alt="" />
                            Order Detail
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Customer} className="w-5 h-5" alt="" />
                            Customer
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Analytics} className="w-5 h-5" alt="" />
                            Analytics
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Reviews} className="w-5 h-5" alt="" />
                            Reviews
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Foods} className="w-5 h-5" alt="" />
                            Foods
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Fooddetail} className="w-5 h-5" alt="" />
                            Food Detail
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Customerdetail} className="w-5 h-5" alt="" />
                            Customer Detail
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Calendar} className="w-5 h-5" alt="" />
                            Calendar
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Chat} className="w-5 h-5" alt="" />
                            Chat
                        </li>
                        <li className="flex gap-4 items-center">
                            <img src={Wallet} className="w-5 h-5" alt="" />
                            Wallet
                        </li>
                    </ul>
                </div>
                <div className='w-[260px] h-[149px] bg-[#00B074] rounded-xl flex p-6 shadow-xl mt-14'>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <p className='text-white text-xs leading-5'>
                        Please, organize your menus through button bellow!
                        </p>
                        <button className='bg-white w-[116px] h-[37px] rounded text-[#464255] leading-6 font-medium text-[15px]'>+Add Menus</button>
                    </div>
                    <div>
                        <img src={Illustration} alt="" className='mt-2'/>
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='text-[#969BA0] font-bold text-[13px]'>Sedap Restaurant Admin Dashboard</p>
                    <p className='text-[#969BA0] font-normal text-xs'>© 2020 All Rights Reserved</p>
                    <p className='text-[#969BA0] font-normal text-sm leading-[26px] mt-4'>Made with ♥ by Peterdraw</p>
                </div>
            </div>
            <div>
                <div className="flex mt-10 gap-10">
                    <input type="text" placeholder="   Search here" className="border w-[866px] h-[56px] rounded"/> 
                    <div>
                        <img src={Icondashboard} alt="" />
                    </div>
                    <p className='w-[1px] h-[56px] bg-[#D0D6DE]'></p>
                    <div className='flex w-[189px] h-[56px] items-center gap-2'>
                        <p className='font-base font-semibold'><span className='font-normal'>Hello,</span> Samantha</p>
                        <img src={Avatar} alt=""/>
                    </div>
                </div>
                <div className='flex justify-between my-8'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[32px] font-semibold text-[#464255] leading-[38px]'>Dashboard</p>
                        <p className='font-medium text-lg text-[#A3A3A3] leading-[21px]'>Hi, Samantha. Welcome back  to Sedap Admin!</p>
                    </div>
                    <div className='flex w-[293px] h-[76px] bg-white p-4 gap-4 rounded-lg shadow'>
                        <img src={Filterperiode} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg leading-[21px] font-medium text-[#3E4954]'>Filter Periode</p>
                            <p className='text-xs font-normal leading-[18px] text-[#3E4954]'>17 April 2020 - 21 May 2020</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between '>
                    <div className='flex p-14 gap-6 items-center w-[337px] h-[172px] bg-white rounded-lg'>
                        <div className='bg-[#00B07426] w-[85px] h-[85px] rounded-full flex items-center justify-center'>
                            <img src={Totalorders} alt="" className='w-[58px] h-[43px]'/>
                        </div>
                        {/* <img src={Totalorders} alt="" className='w-[58px] h-[43px] bg-[#00B07426]'/> */}
                        <div className='flex flex-col'>
                            <p className='text-[46px] font-bold text-[#464255]'>75</p>
                            <p className='text-base font-normal leading-[19px] text-[#464255]'>Total Orders</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='bg-[#2ED6A326] w-[16px] h-[16px] rounded-full flex items-center justify-center'>
                                    <img src={Arrow} alt="" className='w-[6px] h-[6px]'/>
                                </div>
                                <p className='text-[#A3A3A3] font-normal text-xs'>4% (30 days)</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-14 gap-6 items-center w-[337px] h-[172px] bg-white rounded-lg'>
                        <div className='bg-[#00B07426] w-[85px] h-[85px] rounded-full flex items-center justify-center'>
                            <img src={TotalDelivered} alt="" className='w-[58px] h-[45px]'/>
                        </div>
                        {/* <img src={Totalorders} alt="" className='w-[58px] h-[43px] bg-[#00B07426]'/> */}
                        <div className='flex flex-col'>
                            <p className='text-[46px] font-bold text-[#464255]'>357</p>
                            <p className='text-base font-normal leading-[19px] text-[#464255]'>Total Delivered</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='bg-[#2ED6A326] w-[16px] h-[16px] rounded-full flex items-center justify-center'>
                                    <img src={Arrow} alt="" className='w-[6px] h-[6px]'/>
                                </div>
                                <p className='text-[#A3A3A3] font-normal text-xs'>4% (30 days)</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-14 gap-6 items-center w-[337px] h-[172px] bg-white rounded-lg'>
                        <div className='bg-[#00B07426] w-[85px] h-[85px] rounded-full flex items-center justify-center'>
                            <img src={TotalCanceled} alt="" className='w-[58px] h-[43px]'/>
                        </div>
                        {/* <img src={Totalorders} alt="" className='w-[58px] h-[43px] bg-[#00B07426]'/> */}
                        <div className='flex flex-col'>
                            <p className='text-[46px] font-bold text-[#464255]'>65</p>
                            <p className='text-base font-normal leading-[19px] text-[#464255]'>Total Canceled</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='bg-[#FF5B5B26] w-[16px] h-[16px] rounded-full flex items-center justify-center'>
                                    <img src={Arrowdown} alt="" className='w-[6px] h-[6px]'/>
                                </div>
                                <p className='text-[#A3A3A3] font-normal text-xs'>25% (30 days)</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-14 gap-6 items-center w-[337px] h-[172px] bg-white rounded-lg'>
                        <div className='bg-[#00B07426] w-[85px] h-[85px] rounded-full flex items-center justify-center'>
                            <img src={TotalRevenue} alt="" className='w-[58px] h-[53px]'/>
                        </div>
                        {/* <img src={Totalorders} alt="" className='w-[58px] h-[43px] bg-[#00B07426]'/> */}
                        <div className='flex flex-col'>
                            <p className='text-[46px] font-bold text-[#464255]'>$128</p>
                            <p className='text-base font-normal leading-[19px] text-[#464255]'>Total Revenue</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='bg-[#FF5B5B26] w-[16px] h-[16px] rounded-full flex items-center justify-center'>
                                    <img src={Arrowdown} alt="" className='w-[6px] h-[6px]'/>
                                </div>
                                <p className='text-[#A3A3A3] font-normal text-xs'>12% (30 days)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[718px] h-[327px] bg-white rounded-lg mt-10 p-8'>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-bold leading-[28px] text-[#464255]'>Pie Chart</p>
                            <div className='flex gap-12'>
                                <div className='flex gap-3 items-center'>
                                    <p className='w-[24px] h-[24px] bg-white border-[3px] border-[#A3A3A3] rounded'></p>
                                    <p className='text-[#464255] font-semibold text-lg leading-[21px]'>Chart</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='border-[3px] border-[#FF5B5B] rounded'>
                                        <p className='w-[18px] h-[18px] bg-[#FF5B5B] rounded-md border-[4px] border-white'></p>
                                    </div>
                                    <p className='text-[#464255] font-semibold text-lg leading-[21px]'>Show Value</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='w-[5px] h-[5px] bg-[#A3A3A3] rounded-full'></p>
                                    <p className='w-[5px] h-[5px] bg-[#A3A3A3] rounded-full'></p>
                                    <p className='w-[5px] h-[5px] bg-[#A3A3A3] rounded-full'></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between p-6 text-lg font-semibold text-[#464255] leading-[21px]'>
                            <div className='flex flex-col items-center gap-4'>
                                <img src={Gauge1} alt="" />
                                <p>Total Order</p>
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <img src={Gauge2} alt="" />
                                <p>Customer Growth</p>
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <img src={Gauge3} alt="" />
                                <p>Total Revenue</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-[714px] h-[327px] bg-white rounded-lg mt-10 p-8'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold text-2xl text-[#464255] leading-[28px]'>Chart Order</p>
                                <p className='text-[#B9BBBD] font-normal leading-[19px]'>Lorem ipsum dolor sit amet, consectetur adip</p>
                            </div>
                            <div className='flex p-2 gap-4 justify-center items-center w-[184px] h-[47px] border-[#2D9CDB] border-[1.5px] rounded-xl'>
                                <img src={Savereport} alt="" className='w-[24p] h-[24px]'/>
                                <p className='text-[#2D9CDB] font-bold'>Save Report</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='m-auto flex flex-col p-3 justify-center w-[132px] h-[61px] shadow rounded-2xl'>
                                <p className='text-[#464255] font-semibold text-base leading-[29px]'><span className='font-bold'>456</span>  Order</p>
                                <p className='text-sm font-normal leading-[21px] text-[#B9BBBD]'>Oct 18th, 2020</p>
                            </div>
                            <div>
                                <img src={Bieudo} alt="" />
                            </div>
                            <div className='flex justify-between text-sm text-[#464255] leading-[26px]'>
                                <p>Sunday</p>
                                <p>Monday</p>
                                <p>Tuesday</p>
                                <p>Wednesday</p>
                                <p>Thursday</p>
                                <p>Friday</p>
                                <p>Saturday</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-10'>
                    <div className='w-[972px] h-[430px] bg-white rounded-lg p-10 flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <p className='text-[#464255] font-bold text-[24px] leading-[28px]'>Total Revenue</p>
                            <div className='flex gap-2 items-center'>
                                <p className='w-[16px] h-[16px] bg-[#2D9CDB] rounded-full'></p>
                                <p>2020</p>
                                <p className='w-[16px] h-[16px] bg-[#FF5B5B] rounded-full'></p>
                                <p>2021</p>
                            </div>
                        </div>
                        <img src={Bieudo1} alt="" />
                    </div>
                    <div className='w-[456px] h-[430px] bg-white rounded-lg p-10 flex flex-col gap-8'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#464255] text-[24px] leading-[28px] font-bold'>Customer Map</p>
                            <div className='flex items-center justify-center gap-2 w-[108px] h-[38px] border-[#B9BBBD] border-2 rounded-2xl '>
                                <p className='text-[#202020] text-[15px] font-medium leading-[24px]'>Weekly</p>
                                <img src={Arrowred} alt="" className='w-[15px] h-[8px]'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='w-[5px] h-[5px] bg-[#B9BBBD] rounded-full'></p>
                                <p className='w-[5px] h-[5px] bg-[#B9BBBD] rounded-full'></p>
                                <p className='w-[5px] h-[5px] bg-[#B9BBBD] rounded-full'></p>
                            </div>
                        </div>
                        <img src={Bieudo2} alt="" />
                    </div>
                </div>

                <div>
                    <div className='flex justify-between mt-10'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-[#464255] text-[32px] font-semibold leading-[38px]'>Customer Review</p>
                            <p className='text-[#A3A3A3] font-medium text-lg leading-[21px]'>Eum fuga consequuntur utadsjn et.</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={Arrowleft} alt=""/>
                            <img src={Arrowright} alt="" />
                        </div>
                    </div>
                    <div className='mt-10 flex gap-20'>
                        <div>
                            <div className='w-[458px] h-[271px] shadow-lg p-10 flex flex-col gap-6 bg-white rounded-xl'>
                                <div className='flex gap-4'>
                                    <div>
                                        <img src={Jonsena} alt="" className='w-[54px] h-[54px]'/>
                                    </div>
                                    <div>
                                        <p className='text-[#464255] text-[21px] leading-[25px] font-medium'>Jons Sena</p>
                                        <p className='text-[#A3A3A3] font-medium text-[15px] leading-[24px]'>2 days ago</p>
                                    </div>
                                </div>
                                <div className='w-[248px] h-[92px]'>
                                    <p className='text-[#464255] font-medium text-[14px] leading-[23px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industrys standard dummy text </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Stargray} alt="" className='w-[16px] h-[16px]'/>
                                    <p className='text-[#464255] text-[18px] font-medium leading-[21px]'>4.5</p>
                                </div>
                            </div>
                            <div>
                                <img src={Tomy} alt="" className='w-[232px] h-[232px] absolute left-[620px] top-[1430px]'/>
                            </div>
                        </div>
                        <div>
                            <div className='w-[458px] h-[271px] shadow-lg p-10 flex flex-col gap-6 bg-white rounded-xl'>
                                <div className='flex gap-4'>
                                    <div>
                                        <img src={Sofia} alt="" className='w-[54px] h-[54px]'/>
                                    </div>
                                    <div>
                                        <p className='text-[#464255] text-[21px] leading-[25px] font-medium'>Sofia</p>
                                        <p className='text-[#A3A3A3] font-medium text-[15px] leading-[24px]'>2 days ago</p>
                                    </div>
                                </div>
                                <div className='w-[248px] h-[92px]'>
                                    <p className='text-[#464255] font-medium text-[14px] leading-[23px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                         Lorem Ipsum has been the industrys standard dummy text  </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Stargray} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Stargray} alt="" className='w-[16px] h-[16px]'/>
                                    <p className='text-[#464255] text-[18px] font-medium leading-[21px]'>40</p>
                                </div>
                            </div>
                            <div>
                                <img src={Mytron} alt="" className='w-[232px] h-[232px] absolute left-[1160px] top-[1430px]'/>
                            </div>
                        </div>
                        <div>
                            <div className='w-[458px] h-[271px] shadow-lg p-10 flex flex-col gap-6 bg-white rounded-xl'>
                                <div className='flex gap-4'>
                                    <div>
                                        <img src={Anandre} alt="" className='w-[54px] h-[54px]'/>
                                    </div>
                                    <div>
                                        <p className='text-[#464255] text-[21px] leading-[25px] font-medium'>Anandreansyah</p>
                                        <p className='text-[#A3A3A3] font-medium text-[15px] leading-[24px]'>2 days ago</p>
                                    </div>
                                </div>
                                <div className='w-[248px] h-[92px]'>
                                    <p className='text-[#464255] font-medium text-[14px] leading-[23px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industrys standard dummy text </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Staryellow} alt="" className='w-[16px] h-[16px]'/>
                                    <img src={Stargray} alt="" className='w-[16px] h-[16px]'/>
                                    <p className='text-[#464255] text-[18px] font-medium leading-[21px]'>4.5</p>
                                </div>
                            </div>
                            <div>
                                <img src={Tomy} alt="" className='w-[232px] h-[232px] absolute left-[1780px] top-[1430px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home