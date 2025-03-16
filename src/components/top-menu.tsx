import React from 'react'
type LanguageProp = {
  id:number,
  title:string,
}
const languages:LanguageProp[] = [
  {id:1, title:'English'},
  {id:2, title:'Bangla'},
  {id:3, title:'Japanese'},
  {id:4, title:'Chinese'},
];

type CurrencyProp = {
   id:number,
   title:string,
}
const currencies:CurrencyProp[] = [
  {id:1, title:'USD'},
  {id:2, title:'BDT'},
  {id:3, title:'JPY'},
  {id:4, title:'CNY'},
];
type MenuProp = {
  name:string,
  slug:string,
  isActive:boolean,
};
const menuList:MenuProp[]= [
  {name:"About Us",slug:'about-us',isActive:true},
  {name:"Order Tracking",slug:'order-tracking',isActive:true},
  {name:"Contact Us",slug:'contact-us',isActive:true},
  {name:"FAQs",slug:'faqs',isActive:true},
]; 
const TopMenu:React.FC = () => {
  return (
    <>
        <div className="container mx-auto">
              <div className="flex items-center">
                <div className="w-full flex-wrap px-4 md:w-2/3 lg:w-1/2 -mx-4">
                  <ul className='flex items-center'>
                    {menuList.map((menu)=>(
                        <li  key={menu.slug}><a href={menu.slug} className={`${menu.isActive?"inline-block":"hidden"} px-3 py-4 text-sm font-medium text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary`}>{menu.name}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                  <div className="items-center justify-end flex">
                    <div>
                      <div className='relative'>
                        <select className="cursor-pointer w-full py-3 pl-3 pr-5 text-sm font-medium transition bg-transparent rounded-lg outline-none appearance-none text-body-color dark:text-dark-6">
                            {languages.map((lang)=>(
                              <option key={lang.id} value={lang.id} className='dark:bg-dark-2'>{lang.title}</option>
                            ))}
                        </select>
                        <span className="absolute right-0 -translate-y-1/2 top-1/2 text-body-color dark:text-dark-6">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <path
                              d="M7.00001 9.97501C6.86876 9.97501 6.75938 9.93126 6.65001 9.84376L1.61876 4.90001C1.42188 4.70314 1.42188 4.39689 1.61876 4.20001C1.81563 4.00314 2.12188 4.00314 2.31876 4.20001L7.00001 8.77189L11.6813 4.15626C11.8781 3.95939 12.1844 3.95939 12.3813 4.15626C12.5781 4.35314 12.5781 4.65939 12.3813 4.85626L7.35001 9.80001C7.24063 9.90939 7.13126 9.97501 7.00001 9.97501Z"
                            />
                          </svg>
                        </span>
                      </div>
                      </div>
                      <div>
                        <div className="relative">
                          <select className="cursor-pointer w-full py-3 pl-3 pr-5 text-sm font-medium transition bg-transparent rounded-lg outline-none appearance-none text-body-color dark:text-dark-6" aria-label="Select Currency">
                            {currencies.map((currency)=>(
                              <option key={currency.id} value={currency.id} className="dark:bg-dark-2">{currency.title}</option>
                            ))}
                          </select>
                          <span className="absolute right-0 -translate-y-1/2 top-1/2 text-body-color dark:text-dark-6">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path
                                d="M7.00001 9.97501C6.86876 9.97501 6.75938 9.93126 6.65001 9.84376L1.61876 4.90001C1.42188 4.70314 1.42188 4.39689 1.61876 4.20001C1.81563 4.00314 2.12188 4.00314 2.31876 4.20001L7.00001 8.77189L11.6813 4.15626C11.8781 3.95939 12.1844 3.95939 12.3813 4.15626C12.5781 4.35314 12.5781 4.65939 12.3813 4.85626L7.35001 9.80001C7.24063 9.90939 7.13126 9.97501 7.00001 9.97501Z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    
                  </div>
                </div>
              </div>
          </div>
    </>
  )
}
export default TopMenu;
