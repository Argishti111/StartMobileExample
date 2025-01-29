import * as React from 'react';
import Svg, {Circle, Ellipse} from 'react-native-svg';

export const DetailsIcon = (props: any) => {
  const {isActive} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={20}
      fill="none"
      {...props}>
      <Circle cx={8} cy={5} r={5} fill={isActive ? '#FFA001' : '#FFF'} />
      <Ellipse
        cx={8}
        cy={15.5}
        fill={isActive ? '#FFA001' : '#FFF'}
        rx={8}
        ry={4.5}
      />
    </Svg>
  );
};
