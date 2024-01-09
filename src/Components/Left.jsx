import React from 'react'

const Left = () => {

  const doctorMenu = [
    {
      name: "Home",
      icon: "fa-solid fa-house",
    },
    {
      name: "Orders",
      icon: "fa-regular fa-clipboard",
    },

    {
      name: "Products",
      icon: "fa-regular fa-border-all",
    },
    {
      name: "Delivery",
      icon: "fa-solid fa-truck",
    },
    {
      name: "Marketing",
      icon: "fa-solid fa-cart-shopping",
    },

    {
      name: "Analytics",
      icon: "fa-solid fa-chart-simple",
    },
    {
      name: "Payments",
      icon: "fa-solid fa-money-check-dollar",
    },
    {
      name: "Tools",
      icon:"fa-solid fa-screwdriver-wrench",
    },

    {
      name: "Discount",
      icon: "fa-solid fa-tag",
    },
    {
      name: "Audience",
      icon: "fa-solid fa-person",
    },
    {
      name: "Appearance",
      icon: "fa-regular fa-credit-card"
    },

    {
      name: "Flights",
      icon: "fa-solid fa-plane-circle-check",
    },
  ];
  return (
    <div className='borde w-[15%] p-3  bg-blue-950  '>

      <div className='flex items-center p-2'>
        <div class="bg-white rounded-md w-[45px] flex items-center justify-center h-[45px]">
          <img src="data:image/png;base64,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" alt="store" class="w-[90%] " /></div>
        <div class="w-[50%] mx-auto">
          <h4 class="text-md text-white text-sm">Nishyan</h4>
          <a href="#" class="text-xs mt-2 underline text-gray-200">Visit Store</a>
        </div>
        <div class="w-[10%]"><svg width="15" class="" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white"></path></svg>
        </div>
      </div>


      <div className='text-white pt-[30px]'>
        {doctorMenu.map((menu) => {
          return (
            <div className='flex mx-4 my-1 p-1'>
              <i style={{ paddingTop: '2px' }} className={menu.icon} ></i>
              <div className='mx-2'>{menu.name}</div>
            </div>
          )

        })}

      </div>

      <div className='text-white mt-[730px] bg-gray-100 flex items-center px-2 bg-opacity-10 rounded-md'>
        <div class="bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[40px] h-[40px] rounded-md flex items-center justify-center">
          <svg width="25" height="21" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.0002 1.79727C2.42343 1.79727 1.8002 2.35527 1.8002 3.24727V16.7473C1.8002 17.6393 2.42343 18.1973 3.0002 18.1973H21.0002C21.577 18.1973 22.2002 17.6393 22.2002 16.7473V13.8473H17.0003C14.874 13.8473 13.1503 12.1236 13.1503 9.99727C13.1503 7.87097 14.874 6.14727 17.0003 6.14727H22.2002V3.24727C22.2002 2.35527 21.577 1.79727 21.0002 1.79727H3.0002ZM23.8002 6.14727V3.24727C23.8002 1.65398 22.6326 0.197266 21.0002 0.197266H3.0002C1.36782 0.197266 0.200195 1.65398 0.200195 3.24727V16.7473C0.200195 18.3405 1.36782 19.7973 3.0002 19.7973H21.0002C22.6326 19.7973 23.8002 18.3405 23.8002 16.7473V13.8473H23.8503V6.14727H23.8002ZM16.0002 9.94727C16.0002 9.47783 16.3808 9.09727 16.8502 9.09727H18.1502C18.6197 9.09727 19.0002 9.47783 19.0002 9.94727C19.0002 10.4167 18.6197 10.7973 18.1502 10.7973H16.8502C16.3808 10.7973 16.0002 10.4167 16.0002 9.94727ZM14.8503 9.99727C14.8503 8.80986 15.8129 7.84727 17.0003 7.84727H22.1503V12.1473H17.0003C15.8129 12.1473 14.8503 11.1847 14.8503 9.99727Z" fill="white"></path>
          </svg>
          </div>
        <div className='p-[4px]'>
          <p>Available credits</p>
          <p>222.2</p>
        </div>
      </div>


    </div>
  )
}

export default Left
