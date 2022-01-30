import styled from 'styled-components/native';
import { Button as BaseButton, Text, ScaleButton } from 'components';
import { MainProps, LightProps } from './types';

export const Container = styled(ScaleButton)`
  border-radius: 10px;
  overflow: hidden;
`;

export const Main = styled.View<MainProps>`
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
  padding: 15px;
  z-index: -1;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text).attrs<LightProps>({
  family: 'HelveticaNeue-Bold',
})<LightProps>`
  font-size: 18px;
  line-height: 20px;
  color: ${({ light }) => (light ? '#ffeccc' : '#3F414E')};
`;

export const Topic = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})<LightProps>`
  font-size: 11px;
  line-height: 12px;
  color: ${({ light }) => (light ? '#F7E8D0' : '#524F53')};
  text-transform: uppercase;
  margin-top: 9px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Duration = styled(Text).attrs<LightProps>({
  family: 'HelveticaNeue-Medium',
})<LightProps>`
  flex: 1;
  font-size: 11px;
  color: ${({ light }) => (light ? '#EBEAEC' : '#524F53')};
  text-transform: uppercase;
`;

export const Button = styled(BaseButton).attrs<LightProps>(({ light }) => ({
  variant: 'secondary',
  titleStyle: {
    fontSize: 12,
    color: light ? '#3F414E' : '#FEFFFE',
  },
}))<LightProps>`
  width: 70px;
  height: 35px;
  border-radius: 25px;
  background-color: ${({ light }) => (light ? '#EBEAEC' : '#3F414E')};
  border-color: ${({ light }) => (light ? '#EBEAEC' : '#3F414E')};
`;
