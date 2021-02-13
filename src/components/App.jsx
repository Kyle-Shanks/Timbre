import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Button from 'src/components/input/Button';
import Checkbox from 'src/components/input/Checkbox';
import RadioButton from 'src/components/input/RadioButton';
import RadioGroup from 'src/components/input/RadioGroup';
import NativeSelect from 'src/components/input/NativeSelect';
import TextInput from 'src/components/input/TextInput';
import Box from 'src/components/layout/Box';
import Container from 'src/components/layout/Container';
import Flex from 'src/components/layout/Flex';
import Header from 'src/components/typography/Header';
import Icon from 'src/components/typography/Icon';
import Text from 'src/components/typography/Text';
import { GlobalStyles } from 'src/styles/globalStyles';
import { THEMES, LIGHT, DARK } from 'src/styles/themes';
import { SPACING, FONT_SIZE, containerPadM } from 'src/styles/constants';

const App = ({ className }) => {
    const BASE_CLASS_NAME = 'App';
    const [theme, setTheme] = useState(LIGHT);
    const [text, setText] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [checkValue, setCheckValue] = useState(true);
    const [radioValue, setRadioValue] = useState(true);
    const [radioGroupValue, setRadioGroupValue] = useState('');

    const toggleTheme = () => (theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT));
    const handleTextChange = (val) => setText(val);
    const handleSelectChange = (val) => setSelectValue(val);

    return (
        <ThemeProvider theme={THEMES[theme]}>
            <GlobalStyles />
            <Container
                className={`${BASE_CLASS_NAME} ${className}`.trim()}
                padding={containerPadM}
            >
                <Container margin={`0 0 ${SPACING.l}`}>
                    <Header tag="h1">Hello, world!</Header>
                    <Header tag="h2">Hello, world!</Header>
                    <Header tag="h3">Hello, world!</Header>
                    <Header tag="h4">Hello, world!</Header>
                    <Header tag="h5">Hello, world!</Header>
                    <Header tag="h6">Hello, world!</Header>
                </Container>

                <Text margin={`0 0 ${SPACING.m}`}>This is Timbre.</Text>
                <Text margin={`0 0 ${SPACING.m}`} align="justify" variation="secondary">
                    Fakebit chip music atari sequencer magfest famitracker dmg circuit bending wav channel blip blop analog software. 2a03 aesthetic slamdunk lifestyle anamanaguchi glitch lofi 16-bit blip blop nes magfest moe moe kyunstep amiga software arpeggio. Sequencer ymck lsdj amiga blip fest 16-bit hexadecimal dmg arpeggio trash80 nintendocore circuit bending. Analog video game pulse wave chipsters blip blop chip music triangle wave bweeew circuit bending 2a03 atari aesthetic tracker slamdunk lifestyle 16-bit.
                </Text>
                <Text fontSize={FONT_SIZE.xs}>Extra Small Text</Text>
                <Text fontSize={FONT_SIZE.s}>Small Text</Text>
                <Text fontSize={FONT_SIZE.m}>Mid Text</Text>
                <Text fontSize={FONT_SIZE.l}>Big Text</Text>
                <Text fontSize={FONT_SIZE.xl}>Bigger Text</Text>
                <Text fontSize={FONT_SIZE.xxl} margin={`0 0 ${SPACING.l}`}>Biggest Text</Text>

                <Text fontSize={FONT_SIZE.l}>Icons</Text>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.s}>
                    <Icon size="xl" icon="Bolt" />
                    <Icon size="l" icon="Bolt" />
                    <Icon size="m" icon="Bolt" />
                    <Icon size="s" icon="Bolt" />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Checkboxes</Text>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.m}>
                    <Checkbox
                        checked={checkValue}
                        onChange={(val) => setCheckValue(val)}
                    >
                        Checkbox
                    </Checkbox>
                    <Checkbox
                        disabled
                        checked={checkValue}
                        onChange={(val) => setCheckValue(val)}
                    >
                        Disabled Checkbox
                    </Checkbox>
                </Container>

                <Text fontSize={FONT_SIZE.l}>Radio Buttons</Text>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.m}>
                    <RadioButton
                        checked={radioValue}
                        onClick={() => setRadioValue(!radioValue)}
                        value="1"
                    >
                        Radio
                    </RadioButton>
                    <RadioButton
                        disabled
                        checked={!radioValue}
                        onClick={(val) => {}}
                        value="2"
                    >
                        Disabled Radio
                    </RadioButton>
                </Container>

                <Container margin={`0 0 ${SPACING.l}`}>
                    <Text fontSize={FONT_SIZE.l}>Radio Group</Text>
                    <RadioGroup
                        defaultValue={radioGroupValue}
                        onChange={(val) => setRadioGroupValue(val)}
                        options={[
                            { label: 'Option A', value: 'a' },
                            { label: 'Option B', value: 'b' },
                            { label: 'Option C', value: 'c', disabled: true },
                            { label: 'Option D', value: 'd' },
                        ]}
                    />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Buttons</Text>
                <Container margin={`0 0 ${SPACING.s}`} hGap={SPACING.s}>
                    <Button size="l" onClick={toggleTheme}>Toggle Theme</Button>
                    <Button size="m" onClick={toggleTheme}>Toggle Theme</Button>
                    <Button size="s" onClick={toggleTheme}>Toggle Theme</Button>
                    <Button size="icon" onClick={toggleTheme}>
                        <Icon icon="Bolt" />
                    </Button>
                </Container>
                <Container margin={`0 0 ${SPACING.s}`} hGap={SPACING.s}>
                    <Button
                        variation="secondary"
                        iconLeft={<Icon icon="Bolt" />}
                        onClick={toggleTheme}
                    >
                        Toggle Theme
                    </Button>
                    <Button
                        variation="secondary"
                        size="icon"
                        onClick={toggleTheme}
                    >
                        <Icon icon="Bolt" />
                    </Button>
                </Container>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.s}>
                    <Button
                        variation="tertiary"
                        iconLeft={<Icon icon="Bolt" />}
                        onClick={toggleTheme}
                    >
                        Toggle Theme
                    </Button>
                    <Button
                        variation="tertiary"
                        size="icon"
                        onClick={toggleTheme}
                    >
                        <Icon icon="Bolt" />
                    </Button>
                </Container>

                <Text fontSize={FONT_SIZE.l}>Text Inputs</Text>
                <Flex>
                    <Box>
                        <TextInput
                            margin={`0 0 ${SPACING.s}`}
                            value={text}
                            placeholder="Enter the beans here..."
                            onChange={handleTextChange}
                        />
                        <TextInput
                            disabled
                            margin={`0 0 ${SPACING.s}`}
                            value={text}
                            placeholder="Enter the beans here..."
                            onChange={handleTextChange}
                        />
                        <TextInput
                            error
                            margin={`0 0 ${SPACING.s}`}
                            value={text}
                            placeholder="Enter the beans here..."
                            onChange={handleTextChange}
                        />
                    </Box>
                    <Box padding="0 1rem" />
                    <Box>
                        <TextInput
                            variation="filled"
                            margin={`0 0 ${SPACING.s}`}
                            value={text}
                            placeholder="Enter the beans here..."
                            onChange={handleTextChange}
                        />
                        <TextInput
                            variation="filled"
                            disabled
                            margin={`0 0 ${SPACING.s}`}
                            value={text}
                            placeholder="Enter the beans here..."
                            onChange={handleTextChange}
                        />
                        <TextInput
                            variation="filled"
                            error
                            margin={`0 0 ${SPACING.s}`}
                            value={text}
                            placeholder="Enter the beans here..."
                            onChange={handleTextChange}
                        />
                    </Box>
                </Flex>

                <TextInput
                    margin={`0 0 ${SPACING.s}`}
                    value={text}
                    placeholder="Enter the beans here..."
                    onChange={handleTextChange}
                    w="34rem"
                />
                <TextInput
                    variation="filled"
                    margin={`0 0 ${SPACING.l}`}
                    value={text}
                    placeholder="Enter the beans here..."
                    onChange={handleTextChange}
                    w="34rem"
                />

                <NativeSelect
                    margin={`0 0 ${SPACING.s}`}
                    w="34rem"
                    onChange={handleSelectChange}
                    placeholder="Select an option..."
                    options={
                        [
                            { label: 'A', value: 'a' },
                            { label: 'B', value: 'b' },
                            { label: 'C', value: 'c' },
                            { label: 'D', value: 'd' },
                        ]
                    }
                    value={selectValue}
                />
                <NativeSelect
                    disabled
                    margin={`0 0 ${SPACING.s}`}
                    w="34rem"
                    onChange={handleSelectChange}
                    placeholder="Select an option..."
                    options={
                        [
                            { label: 'A', value: 'a' },
                            { label: 'B', value: 'b' },
                            { label: 'C', value: 'c' },
                            { label: 'D', value: 'd' },
                        ]
                    }
                    value={selectValue}
                />
                <NativeSelect
                    error
                    margin={`0 0 ${SPACING.xxl}`}
                    w="34rem"
                    onChange={handleSelectChange}
                    placeholder="Select an option..."
                    options={
                        [
                            { label: 'A', value: 'a' },
                            { label: 'B', value: 'b' },
                            { label: 'C', value: 'c' },
                            { label: 'D', value: 'd' },
                        ]
                    }
                    value={selectValue}
                />
            </Container>
        </ThemeProvider>
    );
};

App.propTypes = {
    className: PropTypes.string,
};

App.defaultProps = {
    className: '',
};

export default App;
