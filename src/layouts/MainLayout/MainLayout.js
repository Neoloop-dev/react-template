import PropTypes from 'prop-types';

const MainLayout = ({ children }) => <div>{children}</div>;

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export { MainLayout };
