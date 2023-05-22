import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './Card.module.scss';

      </span>
      <div>
        {linkGoogle && (
          <Link className={styles.storeButton} href={linkGoogle}>
            Google Play
          </Link>
        )}
        {linkApple && (
          <Link className={styles.storeButton} href={linkApple}>
            App Store
          </Link>
        )}
        {linkGitHub && (
          <Link className={styles.storeButton} href={linkGitHub}>
            GitHub
          </Link>
        )}
        {linkWebsite && (
          <Link className={styles.storeButton} href={linkWebsite}>
            Website
          </Link>
        )}
      </div>
    </li>
  );
}

export default Card;
