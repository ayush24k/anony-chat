import Link from 'next/link';
import './nav.css';

export default function Navbar() {
    return (
        <nav>
            <div className='navigation container'>
                <div className='navHero'>
                    {/* <img src='/openNet.png' alt='logo'/> */}
                    <p className='NavHeading'>Open Net</p>
                </div>

                <Link href="/whyUseOurWebsite" className='navLink'>Why Use Our Website??</Link>
            </div>
        </nav>
    )
}
