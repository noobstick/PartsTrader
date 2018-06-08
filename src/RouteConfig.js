import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import MarketPage from './MarketPage';
import TradePanel from './TradePanel';
import NavBar from './NavBar';


const NoNavRoutes = () => (
    <Route path="/login" component={LoginPage} />
)

const NavRoutes = () => (
    <div>
    <NavBar />
    <Route exact path="/" component={TradePanel} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/market" component={MarketPage} />
    </div>
)

export default class RouteConfig extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={NoNavRoutes}/>
                        <Route component={NavRoutes}/>

                    </Switch>

                    {/* <div className="trade-title">Trades</div>
  <TradePanel posts='16' /> */}
                </div>
            </Router>
        );
    }
}
