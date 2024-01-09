import React from 'react'
import Down from './Down';
const Transaction = () => {
  const data = [
    { id: "#123456", date: "05 Jan 2023", amount: "₹1,278.23", fees: "₹30.50"},
    { id: "3456789", date: "07 June 2023", amount: "₹1,478.23", fees: "₹80.25" },
    { id: "#908755", date: "03 November 2023", amount: "₹1,258.23", fees: "₹40.50" },
    { id: "#776878", date: "06 March 2023", amount: "₹1,298.63", fees: "₹10.50" },
    { id: "#123456", date: "05 Jan 2023", amount: "₹1,278.23", fees: "₹30.50"},
    { id: "3456789", date: "07 June 2023", amount: "₹1,478.23", fees: "₹80.25" },
    { id: "#908755", date: "03 November 2023", amount: "₹1,258.23", fees: "₹40.50" },
    { id: "#776878", date: "06 March 2023", amount: "₹1,298.63", fees: "₹10.50" },

    { id: "#123456", date: "05 Jan 2023", amount: "₹1,278.23", fees: "₹30.50"},
    { id: "#3456789", date: "07 June 2023", amount: "₹1,478.23", fees: "₹80.25" },
    { id: "#908755", date: "03 November 2023", amount: "₹1,258.23", fees: "₹40.50" },
    { id: "#776878", date: "06 March 2023", amount: "₹1,298.63", fees: "₹10.50" },

    { id: "#123456", date: "05 Jan 2023", amount: "₹1,278.23", fees: "₹30.50"},
    { id: "#3456789", date: "07 June 2023", amount: "₹1,478.23", fees: "₹80.25" },
    { id: "#908755", date: "03 November 2023", amount: "₹1,258.23", fees: "₹40.50" },
    { id: "#776878", date: "06 March 2023", amount: "₹1,298.63", fees: "₹10.50" },

    { id: "#123456", date: "05 Jan 2023", amount: "₹1,278.23", fees: "₹30.50"},
    { id: "#3456789", date: "07 June 2023", amount: "₹1,478.23", fees: "₹80.25" },
    { id: "#908755", date: "03 November 2023", amount: "₹1,258.23", fees: "₹40.50" },
    { id: "#776878", date: "06 March 2023", amount: "₹1,298.63", fees: "₹10.50" },


  ]

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between  '>
        <div className='p-2 flex items-center bg-white border-[1.5px] m-2 rounded-md w-[300px]'>
          <div class="px-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080"></path></svg></div>

          <input className='text-sm ml-2 bg-white  w-[280px]' placeholder='Search by OrderID...' />

        </div>


        <div class="flex  items-center justify-between mx-2.5">
          <div class=" flex items-center justify-between border-[1.5px] rounded-md px-2 py-1 bg-white  ">
            <p class="text-sm mr-1 ">Sort</p>

            <svg width="13" height="13" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z" fill="#4D4D4D"></path></svg>

          </div>

          <div class="h-[32px] ml-2 w-[32px] flex items-center justify-between border-[1.5px] rounded-md px-2 py-1 bg-white ">

            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D"></path></svg></div></div>

      </div>


      <table className='my-3 mx-2'>
        <tr className='border-b-2 bg-gray-100' >
          <th className='w-[272px] text-xs p-3'>Order id</th>
          <th className='w-[272px] text-xs p-3' >Order date</th>
          <th className='w-[272px] text-xs p-3'>Order amount</th>
          <th className='w-[272px] text-xs p-3' >Transaction fees</th>

        </tr>
        {data.map((val, key) => {
          return (
            <tr className='border-b-2  bg-white' key={key}>
              <th className='w-[272px] text-xs py-3 font-normal'>
                 
                <a href="/" class="text-blue-600">{val.id}</a>
                
                </th>
              <th className='w-[272px] text-xs py-3 font-normal'>{val.date}</th>
              <th className='w-[272px] text-xs py-3 font-normal'>{val.amount}</th>
              <th className='w-[272px] text-xs py-3 font-normal'>{val.fees}</th>
            </tr>
          )
        })}
      </table>


<div>
  <Down />
</div>





    </div>
  )
}

export default Transaction
