import React from "react";
import colors from "mineral-ui/themes/generated/palette";
import { createStyledComponent } from "mineral-ui/styles";
import { createThemedComponent } from "mineral-ui/themes";
import Text from "mineral-ui/Text";

const Root = createStyledComponent("div", ({ theme }) => ({
  padding: `${theme.space_stack_xl} ${theme.space_inline_xxl}`,

  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.borderColor}`
  }
}));

const ThemedText = createThemedComponent(Text, {
  color_h4: colors.dusk_40
});

const Title = props => <ThemedText element="h2" appearance="h4" {...props} />;

export default function Section({ children, title, ...restProps }) {
  return (
    <Root {...restProps}>
      {title && <Title>{title}</Title>}
      {children}
    </Root>
  );
}
