import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              404 – Station Not Identified
            </Translate>
          </Heading>

<img
  src="/assets/404NotFound.png"
  alt="404 Not Found Image"
  style={{ display: 'block', margin: '0 auto', maxWidth: '1000px', width: '100%' }}
/>
        </div>
      </div>
    </main>
  );
}
