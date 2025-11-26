//דף לניהול מוצרים ומשתמשים
import Header from '../components/Header'; // חשוב לוודא נתיב נכון לקומפוננטת Header

function HomePage() {
    return (
        <div>
            <Header /> {/* נכלול את ההאדר כאן או ב-App.js */}
            <h1>ברוכים הבאים לחנות האוכל!</h1>
            <p>זהו דף הבית.</p>
        </div>
    );
}

export default HomePage;