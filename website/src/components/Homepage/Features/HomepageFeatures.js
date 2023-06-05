import React from 'react';
import styles from './HomepageFeatures.module.scss';
import FeatureList from './FeatureList';
import Features from './Features';

            <h1 className={styles.benefitsHeader}>Detox benefits</h1>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Features key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
