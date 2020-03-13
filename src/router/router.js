import * as React from "react"
import { Switch } from "react-router-dom";
import { hot, setConfig } from 'react-hot-loader'
import Config from "@router/config";
setConfig({
  trackTailUpdates: false,
});

import { renderRoutes } from "react-router-config";

class Routers extends React.Component {
  render() {
    return (
      <React.Suspense fallback={null}>
        <Switch>
          {
            renderRoutes(Config)
          }
        </Switch>
      </React.Suspense>
    );
  }
}

// class Routers extends React.Component {
//   render(){
//     return (
//       <Router history={history}>
//         <Route render={(props) => (
//           <Suspense fallback={null}>
//             <ComponentRender Component={Header} props={{...props}}/>
//             <Switch>
//               {
//                 Config.map(item => (
//                   <Route key={item.path}
//                          path={item.path}
//                          exact={!item.exact}
//                          component={
//                            props => (
//                              <item.component {...props}/>
//                            )
//                          } />
//                 ))
//               }
//               <Redirect to={{ pathname: "/" }} />
//             </Switch>
//           </Suspense>
//         )}/>
//       </Router>
//     )
//   }
// }

export default hot(module)(Routers);
