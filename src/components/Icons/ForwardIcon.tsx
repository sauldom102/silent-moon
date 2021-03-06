import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from './types';

const ForwardIcon: FC<Props> = ({ size = 42, color = '#A0A3B1', style }) => (
  <Svg width={size} height={(size * 43) / 42} viewBox="0 0 42 43" style={style}>
    <Path
      d="M25.88 2.003l4.326 7.494-7.493 4.326m12.752 5.243a14.422 14.422 0 11-6.754-10.055"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.59 19.011c.288 0 .568-.024.84-.072a2.54 2.54 0 00.732-.24c.224-.112.412-.256.564-.432.16-.176.264-.392.312-.648h1.116v8.4h-1.5v-5.928H13.59v-1.08zm7.508-1.392h4.344v1.224h-3.324l-.432 2.136.024.024c.184-.208.416-.364.696-.468a2.34 2.34 0 01.852-.168c.416 0 .788.072 1.116.216.328.136.604.332.828.588.224.248.392.544.504.888.12.344.18.716.18 1.116 0 .336-.056.684-.168 1.044a2.785 2.785 0 01-1.416 1.692c-.368.184-.808.276-1.32.276a3.74 3.74 0 01-1.14-.168 2.621 2.621 0 01-.912-.48 2.462 2.462 0 01-.636-.792 2.828 2.828 0 01-.252-1.116h1.368c.04.456.196.808.468 1.056.272.24.632.36 1.08.36.288 0 .532-.048.732-.144.2-.096.36-.228.48-.396.128-.168.216-.364.264-.588.056-.224.084-.464.084-.72 0-.232-.032-.452-.096-.66a1.636 1.636 0 00-.288-.564 1.364 1.364 0 00-.504-.384 1.62 1.62 0 00-.708-.144c-.288 0-.56.056-.816.168-.248.104-.428.304-.54.6h-1.368l.9-4.596z"
      fill={color}
    />
  </Svg>
);

export default memo(ForwardIcon);
