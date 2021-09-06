import styled, { css } from 'styled-components/native';
import { Text } from 'components';
import { ContainerProps } from './types';

export const Container = styled.View<ContainerProps>`
  padding: ${({ safeTop }) => 20 + safeTop}px 20px 0;
  align-items: center;
  z-index: 2;
`;

const titleStyles = css`
  font-size: 30px;
  line-height: 41px;
  color: #ffeccc;
  text-align: center;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  ${titleStyles}
  margin-top: 75px;
`;

export const To = styled(Text).attrs({
  family: 'HelveticaNeue-Thin',
})`
  ${titleStyles}
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 16px;
  line-height: 27px;
  color: #ffeccc;
  text-align: center;
  margin-top: 15px;
`;
