import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MainContent } from './MainLayout.styles';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <MainContent>{children}</MainContent>;
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export { MainLayout };
