import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Card from './Card';
import cardList from '@site/showcase.json';
import styles from './Showcase.module.scss';
import _ from 'lodash';
import { TailSpin } from 'react-loader-spinner';

const Showcase = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shouldShuffle = new URLSearchParams(window.location.search).get('shuffle') !== 'disabled';
    const resultingCardList = shouldShuffle ? _makeShuffledCardList(cardList) : cardList;
    setCards(resultingCardList.map(_makeCard));
  }, []);

  return cards.length > 0 ? _makeCardsContainer(cards) : _makeLoadingSpinner();
};

