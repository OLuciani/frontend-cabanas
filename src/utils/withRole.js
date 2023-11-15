import React from 'react';

const withRole = (roleRequired) => (Component) => {
  const WrappedComponent = (props) => {
    const userRole = localStorage.getItem('role');

    // Verificar si el usuario tiene el rol requerido para mostrar el componente
    if (userRole === roleRequired) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };

  return WrappedComponent;
};

export default withRole;