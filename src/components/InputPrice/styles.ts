import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.COLORS.shape};
  border-radius: 12px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Size = styled.View`
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.shape};
  margin-right: 18px;
`;

export const Label = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.text};
    color: ${theme.COLORS.secondary_900};
  `};
`;

export const Input = styled(TextInput)`
    flex: 1;
    margin-left: 7px;
`;
