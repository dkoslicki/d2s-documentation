/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Gitter from 'react-sidecar';
const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('d2s-installation')}>
              Installation
            </a>
            <a href={this.docUrl('d2s-services')}>
              Start services
            </a>
            <a href={this.docUrl('d2s-new-dataset')}>
              Add a new dataset
            </a>
          </div>

          <div>
            <h5>Source Code</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            {/* <a
              className="github-button"
              href={this.props.config.repoUrl}
              // data-icon="octicon-star"
              data-count-href={`${this.props.config.repoUrl}/stargazers`}
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Data2Services
            </a> */}
            {/* <a href={this.props.config.repoUrl}
              target="_blank"
              aria-label="Star this project on GitHub">
              <img alt="GitHub d2s-documentation" src="https://img.shields.io/github/stars/MaastrichtU-IDS/d2s-documentation?label=d2s-documentation&style=social"/>
            </a>
            <a href="https://github.com/MaastrichtU-IDS/d2s-cli"
              target="_blank"
              aria-label="Star this project on GitHub">
              <img alt="GitHub d2s-cli" src="https://img.shields.io/github/stars/MaastrichtU-IDS/d2s-cli?label=d2s-cli&style=social"/>
            </a>
            <a href="https://github.com/MaastrichtU-IDS/d2s-transform-template"
              target="_blank"
              aria-label="Star this project on GitHub">
              <img alt="GitHub d2s-transform-template" src="https://img.shields.io/github/stars/MaastrichtU-IDS/d2s-transform-template?label=d2s-transform-template&style=social"/>
            </a> */}
            <a href={this.props.config.repoUrl}
              target="_blank">
                This documentation
            </a>
            <a href="https://github.com/MaastrichtU-IDS/d2s-cli"
              target="_blank">
                The d2s tool
            </a>
            <a href="https://github.com/MaastrichtU-IDS/d2s-transform-template"
              target="_blank">
                The template project folder
            </a>
          </div>
          <div>
            <h5>Community</h5>

            <a href="https://maastrichtu-ids.github.io/dsri-documentation/"
              target="_blank" rel="noreferrer noopener">
              Data Science Research Infrastructure
            </a>

            <a href="https://twitter.com/um_ids"
              target="_blank" rel="noreferrer noopener"
              aria-label="Follow on Twitter">
              Twitter
              {/* <img alt="Follow on Twitter" src="https://img.shields.io/twitter/follow/um_ids?style=social"/> */}
            </a>

            <a href="https://www.facebook.com/IDSatUM/"
              target="_blank" rel="noreferrer noopener">
              Facebook
            </a>

            {/* <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a> 
            <a
              href="https://twitter.com/um_ids"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )} */}
          </div>
        </section>

        {/* <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">
          <div>
            <a rel="license" href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons Attribution 4.0 International license" target="_blank">
              <img src="/img/cc-by.svg" alt="cc by license"/> 
            </a>
          </div>
          {this.props.config.copyright}
        </section>
        <Gitter room="um-dsri/data2services" title="Ask about d2s" />
      </footer>
    );
  }
}

module.exports = Footer;
