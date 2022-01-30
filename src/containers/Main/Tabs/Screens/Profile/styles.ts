import styled from 'styled-components/native';
import { LogoIcon as BaseLogoIcon, TextButton } from 'components';
import { ContainerProps } from './types';

export const Container = styled.ScrollView.attrs<ContainerProps>(
  ({ safeTop }) => ({
    contentContainerStyle: {
      paddingTop: 20 + safeTop,
      paddingBottom: 20,
      flexGrow: 1,
    },
    alwaysBounceVertical: false,
  }),
)<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const LogoIcon = styled(BaseLogoIcon)`
  align-self: center;
`;

export const LogoutButton = styled(TextButton).attrs({
  color: '#FF7C6B',
})`
  margin-top: auto;
`;
