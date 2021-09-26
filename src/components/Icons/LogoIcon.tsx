import React, { FC, memo } from 'react';
import {
  Svg,
  G,
  Circle,
  Defs,
  RadialGradient,
  ClipPath,
  Stop,
  Path,
} from 'react-native-svg';
import { Props } from './types';

const LogoIcon: FC<Props> = ({ size = 168, style }) => (
  <Svg
    width={size}
    height={(size * 30) / 168}
    viewBox="0 0 168 30"
    style={style}
  >
    <G clipPath="url(#prefix__clip0)">
      <Path
        d="M88.506 30h-.012c-.501 0-16.35-.081-14.9-9.058a7.04 7.04 0 01.108-.551 87.785 87.785 0 01.274-1.14l.103-.41.1-.388c.002-.005.004-.009.004-.014.064-.242.13-.484.198-.725l.026-.098a42.445 42.445 0 011.798-5.194c.783-1.836 1.769-3.487 2.914-5.114 1.665-2.363 3.632-4.948 6.135-6.452.966-.581 2.114-.947 3.246-.837 1.132-.11 2.28.256 3.246.837 2.502 1.504 4.47 4.09 6.134 6.452 1.146 1.627 2.132 3.278 2.914 5.114.888 2.082 1.572 4.25 2.133 6.448a53.156 53.156 0 01.176.7l.095.397c.015.06.03.12.043.18.02.081.038.163.057.244 2.2 9.525-14.28 9.609-14.792 9.609z"
        fill="url(#prefix__paint0_radial)"
      />
      <Circle cx={92.5} cy={8} r={2} fill="#D7D9FF" />
      <Path
        d="M88.506 30h-.013c-.5 0-16.35-.08-14.899-9.058a7.102 7.102 0 01.107-.551 92.43 92.43 0 01.275-1.14 85.15 85.15 0 01.204-.798c0-.005.002-.009.003-.014.064-.242.13-.484.198-.725l.106-.08c1.67-1.265 3.62-2.985 4.137-4.45 1.578-4.474 4.714-1.923 5.989-.62a1.228 1.228 0 001.528.193c.661-.412 1.58-1.205 2.489-2.72.678-1.13 2.085-1.578 3.26-1.004 1.902.928 5.106 3.304 10.364 9.052.243.266.468.527.673.785a52.745 52.745 0 01.271 1.097c.014.06.03.12.043.18l.057.244c2.2 9.525-14.28 9.609-14.792 9.609z"
        fill="#8589EB"
      />
      <Path
        opacity={0.15}
        d="M88.506 30h-.013c-.5 0-16.35-.08-14.899-9.057a7.102 7.102 0 01.107-.552 91.291 91.291 0 01.275-1.14c.761-.158 1.596-.052 2.225.767.063.08.125.16.19.238.33.4.693.755 1.098 1.028.288.195.598.349.933.448.597.177 1.277.181 2.059-.061.978-.302 2.118-.989 3.464-2.204 4.035-3.645 9.706-.995 11.56 1.435 1.161 1.522 3.585 1.196 5.173.732.283-.083.563-.176.836-.285a6.854 6.854 0 00.917-.444c.145-.084.285-.175.423-.273.126-.09.253-.19.325-.328a.847.847 0 00.062-.156c.02.08.038.162.057.243 2.2 9.525-14.28 9.609-14.792 9.609z"
        fill="#fff"
      />
      <Path
        opacity={0.15}
        d="M88.506 30h-.013c-.5 0-16.35-.08-14.899-9.057a7.102 7.102 0 01.107-.552l.165-.696.11-.443a79.599 79.599 0 01.204-.799c0-.005.002-.009.003-.013a39.494 39.494 0 01.224-.824l.08.017c.382.09.761.264 1.127.551.587.46 1.14 1.21 1.606 2.367.079.194.156.4.229.619l.04.114c.416 1.19 1.11 2.439 2.289 2.953.115.05.237.094.362.13 1.531.433 3.27-.413 4.459-1.342.382-.299.736-.636 1.138-.907 2.68-1.811 6.002.923 7.613 2.921.075.093.15.187.223.282.275.356.558.638.846.85 2.54 1.882 5.484-1.504 7.42-4.488A34.258 34.258 0 00102.861 20l.218-.387.023-.043c.033.132.065.265.096.397.014.061.03.12.043.181.02.08.038.163.057.243 2.2 9.526-14.28 9.61-14.792 9.61z"
        fill="#fff"
      />
      <Path
        opacity={0.15}
        d="M88.506 30h-.013c-.5 0-16.35-.08-14.899-9.057.703-.417 1.75-.868 2.797-.687.279.05.558.143.83.295.424.236.833.614 1.2 1.18.21.322.405.706.582 1.158.192.492.45.957.775 1.348.517.62 1.207 1.05 2.083 1.1 1.396.078 2.67-.665 3.778-1.43 2.518-1.735 4.664 1.41 7.22 2.057a6.598 6.598 0 001.56.207c2.849.03 4.94-1.908 6.15-3.448.426-.54.743-1.033.945-1.374.175-.296.265-.477.265-.477s.417-.709 1.082-.872a1.13 1.13 0 01.337-.033c.014.06.03.12.043.181.02.08.038.162.057.243 2.2 9.525-14.28 9.609-14.792 9.609z"
        fill="#fff"
      />
      <Path
        opacity={0.15}
        d="M88.506 30h-.013c-.5 0-16.35-.08-14.899-9.057a7.034 7.034 0 01.107-.552l.165-.696.11-.444a82.28 82.28 0 01.204-.798c0-.005.002-.009.003-.013.467-.134.953-.23 1.431-.256 1.31-.072 2.56.38 3.2 2.015.322.825.907 1.252 1.667 1.472.413.12.877.179 1.38.207 1.396.078 2.528-.94 3.778-1.43 5.796-2.267 7.32 1.396 9.782 2.345 2.3.887 3.967.609 5.148-.07.511-.293.931-.66 1.27-1.04.234-.26.429-.526.592-.778a6.7 6.7 0 00.648-1.292l.02-.058.003.015c.033.132.065.265.096.397.014.06.03.12.043.181.02.08.038.162.057.243 2.2 9.526-14.28 9.61-14.792 9.61z"
        fill="#fff"
      />
    </G>
    <Path
      d="M114.54 21V9.64h2.24l3.584 6.56 3.6-6.56h2.16V21h-2.304v-7.184l-2.64 4.816h-1.696l-2.64-4.816V21h-2.304zM135.956 21.24c-.629 0-1.21-.112-1.744-.336a4.309 4.309 0 01-1.392-.928 4.455 4.455 0 01-.928-1.424 4.83 4.83 0 01-.32-1.776 4.5 4.5 0 01.336-1.76 4.455 4.455 0 01.928-1.424 4.37 4.37 0 011.408-.944 4.62 4.62 0 011.776-.336c.63 0 1.211.112 1.744.336.534.224.998.539 1.392.944.395.395.699.864.912 1.408a4.5 4.5 0 01.336 1.76 4.62 4.62 0 01-.336 1.776 4.304 4.304 0 01-.944 1.424c-.394.405-.864.72-1.408.944a4.5 4.5 0 01-1.76.336zm.032-2.016c.406 0 .768-.107 1.088-.32.32-.213.571-.501.752-.864.192-.373.288-.795.288-1.264 0-.47-.096-.885-.288-1.248a2.17 2.17 0 00-.752-.88 1.915 1.915 0 00-1.088-.32c-.405 0-.768.107-1.088.32-.32.213-.576.507-.768.88a2.759 2.759 0 00-.272 1.248c0 .47.091.89.272 1.264.192.363.448.65.768.864.32.213.683.32 1.088.32zM149.859 21.24c-.63 0-1.211-.112-1.744-.336a4.287 4.287 0 01-1.392-.928 4.438 4.438 0 01-.928-1.424 4.809 4.809 0 01-.32-1.776 4.5 4.5 0 01.336-1.76 4.438 4.438 0 01.928-1.424c.405-.405.874-.72 1.408-.944a4.62 4.62 0 011.776-.336c.629 0 1.21.112 1.744.336.533.224.997.539 1.392.944.394.395.698.864.912 1.408a4.5 4.5 0 01.336 1.76 4.62 4.62 0 01-.336 1.776 4.32 4.32 0 01-.944 1.424c-.395.405-.864.72-1.408.944a4.503 4.503 0 01-1.76.336zm.032-2.016c.405 0 .768-.107 1.088-.32a2.2 2.2 0 00.752-.864c.192-.373.288-.795.288-1.264 0-.47-.096-.885-.288-1.248a2.177 2.177 0 00-.752-.88 1.918 1.918 0 00-1.088-.32c-.406 0-.768.107-1.088.32-.32.213-.576.507-.768.88a2.746 2.746 0 00-.272 1.248c0 .47.09.89.272 1.264.192.363.448.65.768.864.32.213.682.32 1.088.32zM159.619 21v-8.448h2.064l.064 1.088a2.64 2.64 0 011.008-.96 2.987 2.987 0 011.488-.368c.619 0 1.157.15 1.616.448.469.288.832.704 1.088 1.248.256.544.384 1.184.384 1.92V21h-2.24v-4.784c0-.587-.133-1.045-.4-1.376-.267-.341-.635-.512-1.104-.512-.341 0-.64.08-.896.24-.256.15-.459.363-.608.64a1.963 1.963 0 00-.224.944V21h-2.24zM5.044 21.24a4.957 4.957 0 01-1.888-.352A4.287 4.287 0 011.7 19.864a3.686 3.686 0 01-.816-1.6l2.224-.48c.139.437.379.779.72 1.024.352.245.768.368 1.248.368.341 0 .64-.059.896-.176.267-.128.47-.299.608-.512.15-.213.224-.459.224-.736 0-.352-.133-.635-.4-.848-.267-.224-.699-.405-1.296-.544l-.512-.112c-1.173-.256-2.037-.667-2.592-1.232-.555-.576-.832-1.275-.832-2.096 0-.512.101-.981.304-1.408a3.39 3.39 0 01.832-1.104c.363-.32.784-.565 1.264-.736.48-.181.997-.272 1.552-.272.63 0 1.216.117 1.76.352s1.003.57 1.376 1.008c.373.437.624.955.752 1.552l-2.192.48c-.128-.427-.352-.752-.672-.976a1.75 1.75 0 00-1.088-.352c-.288 0-.55.059-.784.176a1.351 1.351 0 00-.544.464c-.128.192-.192.41-.192.656 0 .373.144.661.432.864.288.192.715.352 1.28.48l.512.112c1.163.256 2.021.661 2.576 1.216.565.555.848 1.264.848 2.128 0 .544-.107 1.04-.32 1.488-.203.448-.49.837-.864 1.168-.373.33-.81.587-1.312.768-.501.17-1.05.256-1.648.256zM16.808 10.264c0 .245-.059.464-.176.656a1.211 1.211 0 01-.464.464c-.192.107-.405.16-.64.16s-.453-.053-.656-.16a1.378 1.378 0 01-.464-.464 1.328 1.328 0 01-.16-.656c0-.245.053-.464.16-.656.117-.192.272-.341.464-.448a1.287 1.287 0 011.296 0c.203.107.357.256.464.448.117.192.176.41.176.656zM14.408 21v-8.448h2.24V21h-2.24zM22.28 21V9.064h2.24V21h-2.24zM34.15 21.24c-.629 0-1.21-.107-1.744-.32a4.163 4.163 0 01-1.36-.928 4.362 4.362 0 01-.896-1.424 4.995 4.995 0 01-.32-1.808c0-.63.107-1.216.32-1.76a4.317 4.317 0 01.88-1.408c.384-.405.832-.72 1.344-.944a4.106 4.106 0 011.664-.336 4.25 4.25 0 011.68.32c.512.213.95.517 1.312.912.363.395.64.864.832 1.408.203.544.304 1.152.304 1.824v.56h-6.064c.096.63.326 1.125.688 1.488.363.352.822.528 1.376.528.384 0 .731-.09 1.04-.272.32-.181.582-.443.784-.784l2 .64c-.192.48-.48.89-.864 1.232a4.244 4.244 0 01-1.344.8 4.853 4.853 0 01-1.632.272zm-.112-7.2c-.49 0-.906.16-1.248.48-.33.32-.549.757-.656 1.312h3.728c-.085-.555-.293-.992-.624-1.312-.32-.32-.72-.48-1.2-.48zM43.397 21v-8.448h2.064l.064 1.088a2.644 2.644 0 011.008-.96 2.989 2.989 0 011.488-.368c.618 0 1.157.15 1.616.448.469.288.832.704 1.088 1.248.256.544.384 1.184.384 1.92V21h-2.24v-4.784c0-.587-.134-1.045-.4-1.376-.267-.341-.635-.512-1.104-.512-.342 0-.64.08-.896.24a1.6 1.6 0 00-.608.64c-.15.277-.224.592-.224.944V21h-2.24zM60.166 21.24c-.586 0-1.093-.112-1.52-.336a2.47 2.47 0 01-.976-1.008c-.224-.437-.336-.97-.336-1.6V14.36h-1.44v-1.808h1.44v-2.88h2.24v2.88h2.304v1.808h-2.304v3.664c0 .405.086.72.256.944.171.213.432.32.784.32.182 0 .374-.027.576-.08a3.71 3.71 0 00.608-.208l.4 1.68a3.64 3.64 0 01-.928.4c-.341.107-.71.16-1.104.16z"
      fill="#3F414E"
    />
    <Defs>
      <RadialGradient
        id="prefix__paint0_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(14.9075 0 0 15.0942 88.5 15)"
      >
        <Stop offset={0} stopColor="#8485E0" />
        <Stop offset={1} stopColor="#7680FC" />
      </RadialGradient>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" transform="translate(73.5)" d="M0 0h30v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default memo(LogoIcon);