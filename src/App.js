import React, { Component } from 'react';
import IconCloud from 'mineral-ui-icons/IconCloud';
import { palette } from 'mineral-ui-tokens';
import { createStyledComponent } from 'mineral-ui/styles';
import { createTheme, ThemeProvider } from 'mineral-ui/themes';
import Avatar from 'mineral-ui/Avatar';
import Box from 'mineral-ui/Box';
import Button from 'mineral-ui/Button';
import ButtonGroup from 'mineral-ui/ButtonGroup';
import Card, {
  CardActions,
  CardBlock,
  CardDivider,
  CardFooter,
  CardImage,
  CardStatus,
  CardTitle,
  CardTitleMenu
} from 'mineral-ui/Card';
import Checkbox, { CheckboxGroup } from 'mineral-ui/Checkbox';
import Dropdown from 'mineral-ui/Dropdown';
import Flex, { FlexItem } from 'mineral-ui/Flex';
import { FormField, FormFieldset, FormFieldDivider } from 'mineral-ui/Form';
import Grid, { GridItem } from 'mineral-ui/Grid';
import Link from 'mineral-ui/Link';
import Menu, { MenuDivider, MenuGroup, MenuItem } from 'mineral-ui/Menu';
import Pagination from 'mineral-ui/Pagination';
import Popover from 'mineral-ui/Popover';
import Radio, { RadioGroup } from 'mineral-ui/Radio';
import Select from 'mineral-ui/Select';
import StartEnd from 'mineral-ui/StartEnd';
import Table from 'mineral-ui/Table';
import Tabs, { Tab } from 'mineral-ui/Tabs';
import Text from 'mineral-ui/Text';
import TextArea from 'mineral-ui/TextArea';
import TextInput from 'mineral-ui/TextInput';
import Tooltip from 'mineral-ui/Tooltip';
import Controls from './Controls';
import Section from './Section';
import { columns, data } from './data';

const menuData = [
  {
    text: 'Menu item with onClick',
    onClick: (event) => {}
  },
  {
    text: 'Menu item',
    secondaryText: 'Secondary text'
  },
  {
    text: 'Icon at start',
    iconStart: <IconCloud />
  },
  {
    text: 'Icon at end',
    iconEnd: <IconCloud />
  },
  {
    divider: true
  },
  {
    text: 'Danger variant',
    variant: 'danger'
  },
  {
    text: 'Disabled menu item',
    onClick: () => {
      console.log('onClick is not triggered for disabled MenuItems');
    },
    disabled: true
  }
];
const selectData = [
  {
    text: 'Menu item',
    secondaryText: 'Secondary text',
    value: 'basic'
  },
  {
    text: 'Icon at start',
    iconStart: <IconCloud />,
    value: 'iconStart'
  },
  {
    text: 'Icon at end',
    iconEnd: <IconCloud />,
    value: 'iconEnd'
  },
  {
    divider: true
  },
  {
    text: 'Danger variant',
    variant: 'danger',
    value: 'variant'
  },
  {
    text: 'Disabled menu item',
    onClick: () => {
      console.log('onClick is not triggered for disabled MenuItems');
    },
    disabled: true,
    value: 'disabled'
  }
];
const variants = [
  {
    text: 'None (regular)',
    value: undefined
  },
  {
    text: 'Danger',
    value: 'danger'
  },
  {
    text: 'Success',
    value: 'success'
  },
  {
    text: 'Warning',
    value: 'warning'
  }
];

const Wrap = createStyledComponent('div', ({ theme }) => ({
  backgroundColor: theme.color_gray_10,
  paddingTop: '5rem' // Height of Controls
}));

const customRamp = {
  [10]: 'white',
  [20]: 'white',
  [30]: '#f5f0fa',
  [40]: '#ead9fa',
  [50]: '#dabcf7',
  [60]: '#c79bf2',
  [70]: '#ae74e8',
  [80]: '#9656d6',
  [90]: '#7d3cbd',
  [100]: '#642b9e',
  inflection: 80
};

const customRamp2 = {
  [10]: '#dabcf7',
  [20]: '#c79bf2',
  [30]: '#ae74e8',
  [40]: '#9656d6',
  [50]: '#7d3cbd',
  [60]: '#642b9e',
  [70]: '#4b2175',
  [80]: '#371c52',
  [90]: 'black',
  [100]: 'black',
  inflection: 40
};

const pageSizes = [2, 3, 4];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      isDisabled: false,
      pageSize: pageSizes[1],
      variant: 0
    };
  }

  render() {
    const { currentPage, isDisabled, pageSize, variant } = this.state;
    const statefulProps = {
      disabled: isDisabled,
      variant: variants[variant].value
    };
    const controlsProps = {
      handleChange: this.updateStatefulProps,
      isDisabled,
      variant,
      variants
    };
    const firstRow = (currentPage - 1) * pageSize;
    const lastRow = (currentPage - 1) * pageSize + pageSize;
    const slicedData = data.slice(firstRow, lastRow);

    return (
      <Wrap>
        <Controls {...controlsProps} />

        <Section title="Playground">
          <Flex>
            <FlexItem>
              <ThemeProvider
                theme={createTheme({ colors: { theme: customRamp } })}>
                <Button primary>Button</Button>
              </ThemeProvider>
            </FlexItem>
            <FlexItem>
              <ThemeProvider
                theme={createTheme({ colors: { theme: customRamp2 } })}>
                <Button primary>Button</Button>
              </ThemeProvider>
            </FlexItem>
          </Flex>
        </Section>

        <Section title="Avatar">
          <Avatar
            background={palette.teal_40}
            color={palette.black}
            shape="square"
            {...statefulProps}>
            Kyle
          </Avatar>
        </Section>

        <Section title="Box">
          <Box
            css={{ backgroundColor: palette.magenta_20 }}
            marginStart="lg"
            padding="md"
            width="50%">
            Content
          </Box>
        </Section>

        <Section title="Button">
          <Flex alignItems="center">
            <FlexItem>
              <Button {...statefulProps}>Button</Button>
            </FlexItem>
            <FlexItem>
              <Button primary {...statefulProps}>
                Button
              </Button>
            </FlexItem>
            <FlexItem>
              <Button minimal {...statefulProps} variant="danger">
                Button
              </Button>
            </FlexItem>
          </Flex>
        </Section>

        <Section title="ButtonGroup">
          <ButtonGroup aria-label="buttons" defaultChecked={0} mode="checkbox">
            <Button>A</Button>
            <Button>B</Button>
            <Button variant="danger">C</Button>
          </ButtonGroup>
        </Section>

        <Section title="Card">
          <Card>
            <CardTitle
              actions={<CardTitleMenu data={menuData} {...statefulProps} />}
              {...statefulProps}>
              Card Title
            </CardTitle>
            <CardImage alt="card image" src="http://fillmurray.com/1280/300" />
            <CardBlock>Card block</CardBlock>
            <CardDivider />
            <CardStatus
              {...statefulProps}
              variant={variant === 0 ? 'warning' : statefulProps.variant}>
              Card status (defaults to "warning")
            </CardStatus>
            <CardActions>
              <Button {...statefulProps}>Card Action</Button>
            </CardActions>
            <CardFooter title="Card Footer" {...statefulProps} />
          </Card>
        </Section>

        <Section title="Checkbox">
          <Grid>
            <GridItem>
              <Checkbox
                name="checkbox-1"
                label="One"
                value="one"
                {...statefulProps}
              />
            </GridItem>
            <GridItem>
              <CheckboxGroup
                name="checkbox-group-1"
                defaultChecked={['one']}
                data={[
                  { label: 'One', value: 'one', ...statefulProps },
                  { label: 'Two', value: 'two', ...statefulProps },
                  { label: 'Three', value: 'three', ...statefulProps }
                ]}
                {...statefulProps}
              />
            </GridItem>
          </Grid>
        </Section>

        <Section title="Dropdown">
          <Dropdown data={menuData}>
            <Button {...statefulProps}>Dropdown</Button>
          </Dropdown>
        </Section>

        <Section title="Flex">
          <Flex alignItems="end" justifyContent="evenly" height="5rem">
            <FlexItem>A</FlexItem>
            <FlexItem alignSelf="start">B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        </Section>

        <Section title="FormField">
          <FormFieldset legend="FormFieldset" {...statefulProps}>
            <FormField
              input={TextInput}
              label="One"
              required
              {...statefulProps}
            />
            <FormFieldDivider />
            <FormField input={TextInput} label="Two" {...statefulProps} />
          </FormFieldset>
        </Section>

        <Section title="Grid">
          <Grid>
            <GridItem span={2}>A</GridItem>
            <GridItem span={4}>B</GridItem>
            <GridItem span={6}>C</GridItem>
          </Grid>
        </Section>

        <Section title="Link">
          <Link href="https://mineral-ui.com" {...statefulProps}>
            Mineral UI
          </Link>
        </Section>

        <Section title="Menu">
          <Grid>
            <GridItem>
              <Box width="20rem">
                <Menu data={menuData} itemKey="text" />
              </Box>
            </GridItem>
            <GridItem>
              <Box width="20rem">
                <MenuGroup title="Menu Group">
                  <MenuItem {...statefulProps}>Menu item</MenuItem>
                  <MenuDivider />
                </MenuGroup>
              </Box>
            </GridItem>
          </Grid>
        </Section>

        <Section title="Pagination">
          <Table
            data={slicedData}
            rowKey="name"
            columns={columns}
            title="Minerals"
            hideTitle
          />
          <Pagination
            showPageJumper
            showPageSizer
            pageSize={pageSize}
            pageSizes={pageSizes}
            onPageSizeChange={this.handlePageSizeChange}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            totalCount={data.length}
          />
        </Section>

        <Section title="Popover">
          <Popover content={<p>Popover content</p>} {...statefulProps}>
            <Button {...statefulProps}>Popover</Button>
          </Popover>
        </Section>

        <Section title="Radio">
          <Grid>
            <GridItem>
              <Radio
                name="radio-1"
                label="One"
                value="one"
                {...statefulProps}
              />
            </GridItem>
            <GridItem>
              <RadioGroup
                name="radio-group-1"
                defaultChecked="one"
                data={[
                  { label: 'One', value: 'one', ...statefulProps },
                  { label: 'Two', value: 'two', ...statefulProps },
                  { label: 'Three', value: 'three', ...statefulProps }
                ]}
                {...statefulProps}
              />
            </GridItem>
          </Grid>
        </Section>

        <Section title="Select">
          <Select data={selectData} name="select-1" {...statefulProps} />
        </Section>

        <Section title="StartEnd">
          <StartEnd>
            <Box>Start</Box>
            <Box>End</Box>
          </StartEnd>
        </Section>

        <Section title="Table">
          <Table
            data={[{ A: '1A', B: '2B' }, { A: '2A', B: '1B' }]}
            selectable
            sortable
            title="As &amp; Bs"
          />
        </Section>

        <Section title="Tabs">
          <Tabs label="Lorem ipsum" defaultSelectedTabIndex={1}>
            <Tab title="Tab 1 that will truncate">
              <Text>Tab 1 Content</Text>
            </Tab>
            <Tab title="Tab 2">
              <Text>Tab 2 Content</Text>
            </Tab>
            <Tab title="Tab 3">
              <Text>Tab 3 Content</Text>
            </Tab>
          </Tabs>
        </Section>

        <Section title="Text">
          <Text element="h3" appearance="h1" noMargins>
            Heading 3
          </Text>
          <Text appearance="mouse">That looks like a Heading 1</Text>
          <Text appearance="prose">
            Tingling of the spine Rig Veda two ghostly white figures in
            coveralls and helmets are soflty dancing, made in the interiors of
            collapsing stars Vangelis. Emerged into consciousness Orion's sword
            are creatures of the cosmos? Flatland cosmos, from which we spring
            bits of moving fluff rich in heavy atoms prime number with pretty
            stories for which there's little good evidence? Emerged into
            consciousness a mote of dust suspended in a sunbeam, consciousness?
            Network of wormholes a billion trillion another world astonishment
            Hypatia. The sky calls to us hearts of the stars emerged into
            consciousness a still more glorious dawn awaits. A mote of dust
            suspended in a sunbeam billions upon billions and billions upon
            billions upon billions upon billions upon billions upon billions
            upon billions.
          </Text>
        </Section>

        <Section title="TextArea">
          <TextArea {...statefulProps} />
        </Section>

        <Section title="Tooltip">
          <Tooltip content="Tooltip content" {...statefulProps}>
            <Button {...statefulProps}>Tooltip</Button>
          </Tooltip>
        </Section>
      </Wrap>
    );
  }

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  handlePageSizeChange = (pageSize) => {
    this.setState({ pageSize });
  };

  updateStatefulProps = (changes) => {
    this.setState({
      ...this.state,
      ...changes
    });
  };
}
