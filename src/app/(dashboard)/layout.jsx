import React from 'react';

const DashboardLayout = ({children}) => {
    return (
         <section className='grid grid-cols-12'>
            <div className='col-span-4 bg-blue-200 h-[100%]'>
                <h1>Dashboard Layout sideNav</h1>
            </div>
            <div className='col-span-8'>
              <h1>{children}</h1>
            </div>
        </section>
    );
};

export default DashboardLayout;