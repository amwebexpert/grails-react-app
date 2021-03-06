/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import Footer from 'components/Footer';
import FeaturePage from 'containers/FeaturePage/Loadable';
import GithubRepos from 'containers/GithubRepos/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import AsideSidebar from '../../components/AsideSidebar/index';
import Home from '../../components/Home/index';
import Sidebar from '../../components/Sidebar';
import TopNavbar from '../../components/TopNavbar/index';
import About from '../About/Loadable';

export default function App() {
  return (
    <div className="wrapper">

      <Helmet titleTemplate="%s - Cloud Files Manager" defaultTitle="Cloud Files Manager">
        <meta name="description" content="Cloud Files Manager application" />
      </Helmet>

      <TopNavbar />

      <Sidebar />

      <div className="content-wrapper">

        <div className="content-header">
          <div className="container-fluid">
            { /** Here we can add h1 on left side and bread crumb on right side */}
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/repos" component={GithubRepos} />
              <Route path="/features" component={FeaturePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </div>
        </section>
      </div>

      <Footer />

      <AsideSidebar />

    </div>
  );
}
