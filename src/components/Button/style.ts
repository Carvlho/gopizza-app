import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export type TypeProps = "primary" | "secondary";

type ContainerProps = {
  type: TypeProps;
};

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.success_900 : theme.COLORS.primary_900};
`;

export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.title};
    font-family: ${theme.FONTS.text};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.title,
}))``;
