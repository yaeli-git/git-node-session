// //קומפוננטת כותרת עליונה עם לוגו, ניווט וקישורים לעגלת קניות/התחברות
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import NewLogoLight from '../photo/NewLogoLight.png';

export default function Header() {
    const startContent = (
        <img src={NewLogoLight} alt="My Store Logo" style={{ height: '55px' }} />
    );

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-home text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-user text-2xl"></i>
            </button>
             <button className="p-link inline-flex justify-content-center align-items-center text-white h-6rem w-6rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                 <i className="pi pi-shopping-cart text-4xl"></i> 
             </button>
        </div>
    );

    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold text-bluegray-50">Amy Elsner</span>
            </div>
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} center={centerContent} end={endContent} className="bg-gray-900 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }} />
        </div>
    );
}
