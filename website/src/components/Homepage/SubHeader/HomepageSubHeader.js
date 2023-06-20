import React from 'react';
import styles from './HomepageSubHeader.module.scss';

const HomepageSubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.subText}>
                src="https://platform.twitter.com/widgets/follow_button.html?screen_name=detoxe2e&show_screen_name=false&show_count=true&size=l"
                title="Follow Detox on Twitter"
                width="200"
                height="37"></iframe>
              <iframe
                className={styles.githubStar}
                src="https://ghbtns.com/github-btn.html?user=wix&repo=detox&type=star&count=true&size=large"
                frameBorder="0"
                scrolling="0"
                width="200"
                height="37"
                title="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSubHeader;
