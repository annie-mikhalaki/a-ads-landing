import React from 'react'
import Logo from './components/Logo'
import Typography from './components/Typography'
import HeaderImage from './components/HeaderImage'
import StatisticItems from './components/StatisticItems'
import Button from './components/Button'
import ArrowIcon from './components/icons/ArrowIcon'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header-description">
        <div className="content">
          <div className="text-container">
            <Logo width="140" heigth="33" />
            <Typography Element="h4" color="secondary" textTransform="uppercase" fontFamily="Poppins">Earn crypto with A-ADS</Typography>
            <Typography Element="h1" color="primary" fontFamily="Poppins">The first crypto advertising network in the market</Typography>
            <Typography Element="h4" color="text" fontFamily="Inter">Do you have your own website, blog, or online media?</Typography>
            <Typography Element="h4" color="text" fontFamily="Inter">Become our partner and start earning on advertising right now!</Typography>
            <StatisticItems />
            <Button>Start now</Button>
          </div>
          <HeaderImage width="516" height="318"></HeaderImage>
        </div>
      </div>

      <div className="main-description">
        <div className="content">
          <div className="caption">
            <Typography Element="span" color="primary" fontFamily="Poppins">A-ADS provides alternative technologies for </Typography>
            <Typography Element="span" color="secondary" fontFamily="Poppins">monetizing your traffic</Typography>
          </div>
          <div className="description-items">
            <Typography Element="p" color="text" fontFamily="Inter">
              In addition to the ability to sell ads on your website directly, you can also earn from the pool of our active advertisers.
            </Typography>
            <Typography Element="p" color="text" fontFamily="Inter">
              Our advertising model doesn't limit your earnings by clicks and impressions, but expands it with advertisers' budgets they eager to spend on your website.
            </Typography>
          </div>
        </div>
      </div>

      <div className="advantages">
        <div className="content">
          <div className="advantages-description">
            <div className="caption">
              <Typography Element="span" color="primary" fontFamily="Poppins">A-ADS is global advertising </Typography>
              <Typography Element="span" color="secondary" fontFamily="Poppins">for everyone</Typography>
            </div>
            <div className="advantages-list">
              <ul>
                <li><Typography Element="p" fontFamily="Inter">Simple HTML code embeddable in any website</Typography></li>
                <li><Typography Element="p" fontFamily="Inter">We don't collect your users' personal data</Typography></li>
                <li><Typography Element="p" fontFamily="Inter">Fixed and adaptive ad units sizes</Typography></li>
                <li><Typography Element="p" fontFamily="Inter">The ability to filter ads content by category</Typography></li>
                <li><Typography Element="p" fontFamily="Inter">Transparent payouts and live statistics</Typography></li>
                <li><Typography Element="p" fontFamily="Inter">Worldwide audience coverage</Typography></li>
              </ul>
            </div>
          </div>
          <div className="advertising-view">
            <Typography Element="h5" color="text" fontFamily="Inter" align="center">
              Your visitors can view stats and buy ads directly on your site. If they become advertisers, <span>you will get 50% of our fees</span> collected from them
            </Typography>
            <div className="advertising-container">
              <div className="rectangle"></div>
              <div className="arrow">
                <ArrowIcon width="13" height="39" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
