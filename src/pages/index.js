import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {

  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero background-main', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            to="/docs/welcome">
              <button className="button-data">
                Documentation
              </button>
          </Link>
          <Link
            to="/blog">
              <button className="button-data">
                Changelog
              </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={"Orangy | The all in one, and free Discord bot!"}
      description="Welcome to Orangy's Docs!">
      <HomepageHeader />
      <main />
    </Layout>
  );
}
