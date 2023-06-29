import { FC } from 'react';

import Navbar from './Navbar';

type Props = {};

const Header: FC<Props> = ({}) => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
