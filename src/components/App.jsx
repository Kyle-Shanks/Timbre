import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Button from 'src/components/input/Button';
import Container from 'src/components/layout/Container';
import Header from 'src/components/typography/Header';
import Text from 'src/components/typography/Text';
import { GlobalStyles } from 'src/styles/globalStyles';
import { LIGHT, DARK, lightTheme, darkTheme } from 'src/styles/themes';
import { SPACING, containerPadM } from 'src/styles/constants';

const App = ({ className }) => {
    const BASE_CLASS_NAME = 'App';
    const [theme, setTheme] = useState(LIGHT);
    const toggleTheme = () => (theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT));

    return (
        <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Container padding={containerPadM} className={`${BASE_CLASS_NAME} ${className}`.trim()}>
                <Header tag="h1">Hello, world!</Header>
                <Header tag="h2">Hello, world!</Header>
                <Header tag="h3">Hello, world!</Header>
                <Header tag="h4">Hello, world!</Header>
                <Header tag="h5">Hello, world!</Header>
                <Header tag="h6">Hello, world!</Header>
                <Text margin={`0 0 ${SPACING.m}`}>This is Timbre.</Text>
                <Text margin={`0 0 ${SPACING.m}`} variation="secondary">
                    Fakebit chip music atari sequencer magfest famitracker dmg circuit bending wav channel blip blop analog software. 2a03 aesthetic slamdunk lifestyle anamanaguchi glitch lofi 16-bit blip blop nes magfest moe moe kyunstep amiga software arpeggio. Sequencer ymck lsdj amiga blip fest 16-bit hexadecimal dmg arpeggio trash80 nintendocore circuit bending. Analog video game pulse wave chipsters blip blop chip music triangle wave bweeew circuit bending 2a03 atari aesthetic tracker slamdunk lifestyle 16-bit.
                </Text>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
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
