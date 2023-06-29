import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const LINKS = [
  {
    label: 'For Developers',
    links: [
      'Go Pro!',
      'Explore development work',
      'Development blog',
      'Code podcast',
      'Open-source projects',
      'Refer a Friend',
      'Code of conduct',
    ],
  },
  {
    label: 'Hire developers',
    links: ['Post a job opening', 'Post a freelance project', 'Search for developers'],
  },
  {
    label: 'Brands',
    links: ['Advertise with us'],
  },
  {
    label: 'Company',
    links: [
      'About',
      'Careers',
      'Support',
      'Media kit',
      'Testimonials',
      'API',
      'Terms of service',
      'Privacy policy',
      'Cookie policy',
    ],
  },
  {
    label: 'Directories',
    links: [
      'Development jobs',
      'Developers for hire',
      'Freelance developers for hire',
      'Tags',
      'Places',
    ],
  },
  {
    label: 'Development assets',
    links: ['Code Marketplace', 'GitHub Marketplace', 'NPM Registry', 'Packagephobia'],
  },
  {
    label: 'Development Resources',
    links: [
      'Freelancing',
      'Development Hiring',
      'Development Portfolio',
      'Development Education',
      'Creative Process',
      'Development Industry Trends',
    ],
  },
];

type FooterColumnProps = {
  title: string;
  links: string[];
};

const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <Link key={link} href="/">
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start">
          <Image src="/images/logo-purple.svg" width={115} height={38} alt="Flexible Logo" />

          <p className="mt-5 max-w-xs text-start text-sm font-normal">
            Flexible is the world&apos;s leading community for creatives to share, grow and get
            hired.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <FooterColumn title={LINKS[0].label} links={LINKS[0].links} />

          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn title={LINKS[1].label} links={LINKS[1].links} />
            <FooterColumn title={LINKS[2].label} links={LINKS[2].links} />
          </div>

          <FooterColumn title={LINKS[3].label} links={LINKS[3].links} />

          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn title={LINKS[4].label} links={LINKS[4].links} />
            <FooterColumn title={LINKS[5].label} links={LINKS[5].links} />
          </div>

          <FooterColumn title={LINKS[6].label} links={LINKS[6].links} />
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>&copy; 2023 Flexibble Clone. All rights reserved</p>

        <p className="text-gray">
          <span className="font-semibold text-black">10,214</span> projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
