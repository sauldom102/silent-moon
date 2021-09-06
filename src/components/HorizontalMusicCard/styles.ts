import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { HorizontalStains } from 'components/Icons';
import Text from 'components/Text';

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.5,
})`
  border-radius: 10px;
  overflow: hidden;
`;

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 27px 30px;
  background-color: #333242;
  height: 95px;
  z-index: -1;
`;

export const Stains = styled(HorizontalStains).attrs(({ theme }) => ({
  size: theme.device.width,
}))`
  position: absolute;
`;

export const Left = styled.View`
  flex: 1;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 11px;
  letter-spacing: 0.55px;
  color: #ebeaec;
  text-transform: uppercase;
  margin-top: 10px;
`;
