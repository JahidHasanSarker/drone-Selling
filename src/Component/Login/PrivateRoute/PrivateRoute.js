import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';


const PrivetRoute = ({ children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <p>lodding</p>
    }
 
    return (
      <Route
      {...rest}
      render={({ location }) => user.email ? 
      children : <Redirect to={{ 
          pathname: '/login',
          state: { from: location }
       }}>

      </Redirect>}
  >

  </Route>
    );
};

export default PrivetRoute;

// import React from "react";
// import { Redirect, Route } from "react-router-dom";

// function PrivateRouter({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       component={(props) => {
//         const token = window.localStorage.getItem();
//         if (token) {
//           return <Component {...props} />;
//         } else {
//           return <Redirect to={"/login"} />;
//         }
//       }}
//     />
//   );
// }

// export default PrivateRouter;