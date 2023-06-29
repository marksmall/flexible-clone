import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AuthProviders from '../AuthProviders';

type Props = {};

const LINKS = [
  {
    href: '/',
    label: 'Inspiration',
  },
  {
    href: '/',
    label: 'Find Projects',
  },
  {
    href: '/',
    label: 'Learn Development',
  },
  {
    href: '/',
    label: 'Career Advancement',
  },
  {
    href: '/',
    label: 'Hire Developers',
  },
];

const Navbar: FC<Props> = ({}) => {
  // const session = {};
  const session = null;

  return (
    <nav className="flexBetween navbar">
      <div className="flexStart flex-1 gap-10">
        <Link href="/">
          <Image src="/images/logo.svg" width={115} height={43} alt="Flexible Logo" />
        </Link>

        <ul className="text-small hidden gap-7 xl:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            <span>User Photo</span>

            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
