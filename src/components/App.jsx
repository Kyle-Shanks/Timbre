import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Card from 'src/components/display/Card';
import Menu from 'src/components/display/Menu';
import Modal, { ModalHeader, ModalContent, ModalFooter } from 'src/components/display/Modal';
import Button from 'src/components/input/Button';
import Checkbox from 'src/components/input/Checkbox';
import RadioButton from 'src/components/input/RadioButton';
import RadioGroup from 'src/components/input/RadioGroup';
import Switch from 'src/components/input/Switch';
import NativeSelect from 'src/components/input/NativeSelect';
import Select from 'src/components/input/Select';
import Textarea from 'src/components/input/Textarea';
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
    const [textareaValue, setTextareaValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [switchValue, setSwitchValue] = useState(false);
    const [checkValue, setCheckValue] = useState(true);
    const [radioValue, setRadioValue] = useState(true);
    const [radioGroupValue, setRadioGroupValue] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <Container margin={`0 0 ${SPACING.s}`} hGap={SPACING.s}>
                    <Icon size="xl" icon="Bolt" />
                    <Icon size="l" icon="Bolt" />
                    <Icon size="m" icon="Bolt" />
                    <Icon size="s" icon="Bolt" />
                </Container>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.s}>
                    <Icon icon="ArrowLeft" />
                    <Icon icon="ArrowRight" />
                    <Icon icon="Bolt" />
                    <Icon icon="ChevronDown" />
                    <Icon icon="ChevronLeft" />
                    <Icon icon="ChevronRight" />
                    <Icon icon="ChevronUp" />
                    <Icon icon="CircleAlert" />
                    <Icon icon="CircleCheck" />
                    <Icon icon="CircleHelp" />
                    <Icon icon="CircleInfo" />
                    <Icon icon="CircleMinus" />
                    <Icon icon="CirclePlus" />
                    <Icon icon="CircleX" />
                    <Icon icon="Dots" />
                    <Icon icon="Download" />
                    <Icon icon="Edit" />
                    <Icon icon="ExternalLink" />
                    <Icon icon="FileDownload" />
                    <Icon icon="Search" />
                    <Icon icon="Settings" />
                    <Icon icon="Upload" />
                    <Icon icon="X" />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Switch</Text>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.s}>
                    <Switch
                        variation="outline"
                        value={switchValue}
                        onChange={(val) => setSwitchValue(val)}
                    />
                    <Switch
                        variation="filled"
                        value={switchValue}
                        onChange={(val) => setSwitchValue(val)}
                    />
                    <Switch
                        disabled
                        variation="outline"
                        value={switchValue}
                        onChange={(val) => setSwitchValue(val)}
                    />
                    <Switch
                        disabled
                        variation="filled"
                        value={switchValue}
                        onChange={(val) => setSwitchValue(val)}
                    />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Card</Text>
                <Card margin={`0 0 ${SPACING.l}`}>
                    <Header tag="h3" margin={`0 0 ${SPACING.m}`}>Card Header</Header>
                    <Text>Card Content</Text>
                    <Text>Card Content</Text>
                    <Text>Card Content</Text>
                </Card>

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

                <Text fontSize={FONT_SIZE.l}>Modal</Text>
                <Container margin={`0 0 ${SPACING.l}`}>
                    <Button
                        variation="secondary"
                        onClick={() => { setIsModalOpen(true); }}
                    >
                        Modal
                    </Button>
                    <Modal
                        open={isModalOpen}
                        onClose={() => { setIsModalOpen(false); }}
                    >
                        <ModalHeader>
                            <Flex justify="center">
                                <Header tag="h3">Modal</Header>
                            </Flex>
                        </ModalHeader>
                        <ModalContent>
                            <Header tag="h3" margin={`0 0 ${SPACING.m}`}>Modal Header</Header>
                            <Text>Modal Content</Text>
                            <Text>Modal Content</Text>
                            <Text>Modal Content</Text>
                        </ModalContent>
                        <ModalFooter>
                            <Flex hGap={SPACING.m} justify="flex-end">
                                <Button variation="secondary">Other Action</Button>
                                <Button onClick={toggleTheme}>Toggle</Button>
                            </Flex>
                        </ModalFooter>
                    </Modal>
                </Container>

                <Text fontSize={FONT_SIZE.l}>Menu</Text>
                <Container margin={`0 0 ${SPACING.l}`}>
                    <Button
                        variation="secondary"
                        onClick={() => { setIsMenuOpen(!isMenuOpen); }}
                        iconRight={<Icon size="s" icon="ChevronDown" />}
                    >
                        Menu
                    </Button>
                    <Menu
                        open={isMenuOpen}
                        onClose={() => { setIsMenuOpen(false) }}
                        options={[
                            { label: 'Option A', onClick: () => { console.log('Optoin A clicked'); } },
                            { label: 'Option B', onClick: () => { console.log('Optoin B clicked'); } },
                            { label: 'Option C', onClick: () => { console.log('Optoin C clicked'); } },
                            { label: 'Option D', onClick: () => { console.log('Optoin D clicked'); } },
                            { disabled: true, label: 'Option E', onClick: () => { console.log('Optoin E clicked'); } },
                            { label: 'Option F', onClick: () => { console.log('Optoin F clicked'); } },
                            { label: 'Option G', onClick: () => { console.log('Optoin G clicked'); } },
                        ]}
                    />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Textareas</Text>
                <Container margin={`0 0 ${SPACING.l}`} vGap={SPACING.s}>
                    <Textarea
                        value={textareaValue}
                        onChange={(val) => setTextareaValue(val)}
                        placeholder="Textarea placeholder..."
                    />
                    <Textarea
                        disabled
                        value={textareaValue}
                        onChange={(val) => setTextareaValue(val)}
                        placeholder="Textarea placeholder..."
                    />
                    <Textarea
                        error
                        value={textareaValue}
                        onChange={(val) => setTextareaValue(val)}
                        placeholder="Textarea placeholder..."
                    />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Text Inputs</Text>
                <Container margin={`0 0 ${SPACING.s}`} hGap={SPACING.m}>
                    <TextInput
                        value={text}
                        placeholder="Enter the beans here..."
                        onChange={handleTextChange}
                    />
                    <TextInput
                        disabled
                        value={text}
                        placeholder="Enter the beans here..."
                        onChange={handleTextChange}
                    />
                    <TextInput
                        error
                        value={text}
                        placeholder="Enter the beans here..."
                        onChange={handleTextChange}
                    />
                </Container>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.m}>
                    <TextInput
                        variation="filled"
                        value={text}
                        placeholder="Enter the beans here..."
                        onChange={handleTextChange}
                    />
                    <TextInput
                        variation="filled"
                        disabled
                        value={text}
                        placeholder="Enter the beans here..."
                        onChange={handleTextChange}
                    />
                    <TextInput
                        variation="filled"
                        error
                        value={text}
                        placeholder="Enter the beans here..."
                        onChange={handleTextChange}
                    />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Select</Text>
                <Container margin={`0 0 ${SPACING.l}`} hGap={SPACING.m}>
                    <Select
                        value={selectValue}
                        onChange={(val) => { setSelectValue(val); }}
                        options={[
                            { label: 'Option A', value: 'a' },
                            { label: 'Option B', value: 'b' },
                            { label: 'Option C', value: 'c' },
                            { label: 'Option D', value: 'd' },
                        ]}
                    />
                    <Select
                        disabled
                        value={selectValue}
                        onChange={(val) => { setSelectValue(val); }}
                        options={[
                            { label: 'Option A', value: 'a' },
                            { label: 'Option B', value: 'b' },
                            { label: 'Option C', value: 'c' },
                            { label: 'Option D', value: 'd' },
                        ]}
                    />
                    <Select
                        error
                        value={selectValue}
                        onChange={(val) => { setSelectValue(val); }}
                        options={[
                            { label: 'Option A', value: 'a' },
                            { label: 'Option B', value: 'b' },
                            { label: 'Option C', value: 'c' },
                            { label: 'Option D', value: 'd' },
                        ]}
                    />
                </Container>

                <Text fontSize={FONT_SIZE.l}>Native Selects</Text>
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
