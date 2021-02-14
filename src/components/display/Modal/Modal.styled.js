import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import Flex from 'src/components/layout/Flex';
import Button from 'src/components/input/Button';
import { absCenter, vertCenter, fixedFill, relaBlock } from 'src/styles/util';
import { SPACING, borderWidth, borderRadiusM } from 'src/styles/constants';

const modalSizeMap = {
    l: '75vw',
    m: '60vw',
    s: '45vw',
};

export const ModalOverlay = styled(Box)`
    z-index: 20;
    ${fixedFill}
    background-color: ${({ open }) => open ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)'};
    pointer-events: ${({ open }) => open ? 'all' : 'none'};
`;

export const ModalContainer = styled(Box)`
    z-index: 20;
    ${absCenter}
    min-width: 30rem;
    width: ${({ size }) => modalSizeMap[size]};
    background-color: ${({ theme }) => theme.displayBackground};
    border-radius: ${borderRadiusM};
    box-shadow: 0 4px 12px -1px rgba(0,0,0,0.1), 0 10px 32px -1px rgba(0,0,0,0.1);

    // Toggle Styles
    ${({ open }) => open
        ? `opacity: 1; pointer-events: all; top: 44%;`
        : `opacity: 0; pointer-events: none; top: 50%;`
    }
`;

export const ModalHeader = styled(Flex)`
    height: 6rem;
    padding: 0 ${SPACING.xl};
    border-bottom: ${borderWidth} solid ${({ theme }) => theme.border};
`;

export const CloseButton = styled(Button)`
    ${vertCenter}
    right: ${SPACING.l};
`;

export const ModalContent = styled(Box)`
    ${relaBlock}
    min-height: 40vh;
    max-height: 60vh;
    padding: ${SPACING.m} ${SPACING.xl};
    overflow: auto;
`;

export const ModalFooter = styled(Flex)`
    height: 5rem;
    padding: 0 ${SPACING.xl};
    border-top: ${borderWidth} solid ${({ theme }) => theme.border};
`;
