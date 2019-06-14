import React from "react";
import { createStyledComponent } from "mineral-ui/styles";
import Checkbox from "mineral-ui/Checkbox";
import Flex, { FlexItem } from "mineral-ui/Flex";
import { FormField } from "mineral-ui/Form";
import Select from "mineral-ui/Select";

const Root = createStyledComponent(Flex, ({ theme }) => ({
  backgroundColor: theme.color_gray_20,
  borderBottom: `1px solid ${theme.borderColor}`,
  boxShadow: theme.shadow_2,
  left: 0,
  padding: theme.space_inset_md,
  position: "fixed",
  right: 0,
  top: 0,
  zIndex: theme.zIndex_1600
}));

const Control = props => <FlexItem {...props} />;

export default function Controls({
  handleChange,
  isDisabled,
  variant,
  variants,
  ...restProps
}) {
  return (
    <Root>
      <Control>
        <FormField label="State">
          <Checkbox
            checked={isDisabled}
            label="Disabled"
            onChange={() => {
              handleChange({ isDisabled: !isDisabled });
            }}
          />
        </FormField>
      </Control>
      <Control>
        <FormField
          input={Select}
          label="Variant"
          data={variants}
          onChange={item => {
            handleChange({ variant: variants.indexOf(item) });
          }}
          selectedItem={variants[variant]}
          size="small"
        />
      </Control>
    </Root>
  );
}
