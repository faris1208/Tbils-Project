
import React from 'react';
import styles from '../banner/styles.module.scss';

interface TravelDealBannerProps {
  dealText: string;
  country?: string;
  className?: string;
}

const TravelDealBanner: React.FC<TravelDealBannerProps> = ({ 
  dealText, 
  country = "Canada", 
  className = "" 
}) => {
  return (
    <div className={`${styles.bannerContainer} ${className}`}>
      <div className={styles.countryTag}>{country}</div>
      <p className={styles.dealText}>{dealText}</p>
    </div>
  );
};

export default TravelDealBanner;