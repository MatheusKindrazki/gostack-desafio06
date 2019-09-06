import React from 'react';
import { Dimensions } from 'react-native';
import ContentLoader from 'react-native-content-loader';
import { Circle, Rect } from 'react-native-svg';

export default function Loading() {
  const { width } = Dimensions.get('window');

  const WIDTH = width - 60;

  return (
    <>
      <ContentLoader height={110} width={WIDTH} speed={2}>
        <Rect x="66" y="66" rx="4" ry="4" width={WIDTH - 100} height="6" />
        <Rect x="66" y="85" rx="3" ry="3" width={WIDTH - 170} height="6" />
        <Circle cx="30" cy="82" r="24" />
      </ContentLoader>
      <ContentLoader height={110} width={WIDTH} speed={2}>
        <Rect x="66" y="66" rx="4" ry="4" width={WIDTH - 100} height="6" />
        <Rect x="66" y="85" rx="3" ry="3" width={WIDTH - 170} height="6" />
        <Circle cx="30" cy="82" r="24" />
      </ContentLoader>
      <ContentLoader height={110} width={WIDTH} speed={2}>
        <Rect x="66" y="66" rx="4" ry="4" width={WIDTH - 100} height="6" />
        <Rect x="66" y="85" rx="3" ry="3" width={WIDTH - 170} height="6" />
        <Circle cx="30" cy="82" r="24" />
      </ContentLoader>
      <ContentLoader height={110} width={WIDTH} speed={2}>
        <Rect x="66" y="66" rx="4" ry="4" width={WIDTH - 100} height="6" />
        <Rect x="66" y="85" rx="3" ry="3" width={WIDTH - 170} height="6" />
        <Circle cx="30" cy="82" r="24" />
      </ContentLoader>
      <ContentLoader height={110} width={WIDTH} speed={2}>
        <Rect x="66" y="66" rx="4" ry="4" width={WIDTH - 100} height="6" />
        <Rect x="66" y="85" rx="3" ry="3" width={WIDTH - 170} height="6" />
        <Circle cx="30" cy="82" r="24" />
      </ContentLoader>
    </>
  );
}
