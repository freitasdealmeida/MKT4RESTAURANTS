import Link from 'next/link';

export default function NavMainMenu() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">MKT4RESTAURANTS</Link>
      </div>
      <nav className="nav-menu">
        <ul className="nav-links">
          <li><Link href="/services">Services</Link></li>
        </ul>
      </nav>
    </div>
  );
}