import styled from 'styled-components/native';
import {
  LogoIcon as BaseLogoIcon,
  Text,
  StoryList as BaseStoryList,
  HorizontalMusicCard as BaseHorizontalMusicCard,
} from 'components';
import BaseActivityCard from './ActivityCard';
import { ContainerProps } from './types';

export const Container = styled.ScrollView.attrs<ContainerProps>(
  ({ safeTop }) => ({
    contentContainerStyle: {
      paddingTop: 20 + safeTop,
      paddingBottom: 20,
    },
  }),
)<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  padding: 0 20px;
`;

export const LogoIcon = styled(BaseLogoIcon)`
  align-self: center;
`;

export const Morning = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 28px;
  line-height: 30px;
  color: #3f414e;
  margin-top: 40px;
`;

export const Wish = styled(Text).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 20px;
  line-height: 22px;
  color: #a1a4b2;
  margin-top: 10px;
`;

export const TopCards = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ActivityCard = styled(BaseActivityCard)`
  width: ${({ theme }) => (theme.device.width - 60) / 2}px;
`;

export const HorizontalMusicCard = styled(BaseHorizontalMusicCard)`
  margin-top: 20px;
`;

export const StoryList = styled(BaseStoryList)`
  margin-top: 40px;
`;
