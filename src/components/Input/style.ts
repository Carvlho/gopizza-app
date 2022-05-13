import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type TypeProps = "primary" | "secondary";

type Props = {
  type: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor:
    type === "primary" ? theme.COLORS.secondary_900 : theme.COLORS.primary_50,
}))<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.text};
    border: 1px solid ${theme.COLORS.shape};
    color: ${type === "primary"
      ? theme.COLORS.secondary_900
      : theme.COLORS.title};
  `}
`;