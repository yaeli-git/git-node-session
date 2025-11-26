//דף המציג את תוכן עגלת הקניות
import React from 'react';
import Header from '../components/Header'; // חשוב לוודא נתיב נכון לקומפוננטת Header

function ShoppingCartPage() {
    return (
        <div>
            <Header /> {/* נכלול את ההאדר כאן או ב-App.js */}
            <h1>ברוכים הבאים לחנות האוכל!</h1>
            <p>זהו דף הבית.</p>
        </div>
    );
}

export default ShoppingCartPage;