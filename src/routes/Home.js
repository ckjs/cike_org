import { connect } from 'dva';
import React from 'react';
import enquire from 'enquire.js';
import Nav from '../components/Nav';
import Content0 from '../components/Content0';
import Content1 from '../components/Content1';
import Content2 from '../components/Content2';
import Content3 from '../components/Content3';
import Content4 from '../components/Content4';
import Content5 from '../components/Content5';
import Footer from '../components/Footer';
import './home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    return (
      <div className="home-wrapper">
        <Nav isMode={this.state.isMode} />,
        <Content0 isMode={this.state.isMode} />
        <Content1 isMode={this.state.isMode} />
        <Content2 isMode={this.state.isMode} />
        <Content3 isMode={this.state.isMode} />
        <Content4 isMode={this.state.isMode} />
        <Content5 isMode={this.state.isMode} />
        <Footer isMode={this.state.isMode} />
      </div>
    );
  }
}

Home.propTypes = {
};

export default connect()(Home);
