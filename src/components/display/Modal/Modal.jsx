import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'src/components/typography/Icon';
import {
    ModalOverlay,
    ModalContainer,
    CloseButton,
    ModalHeader,
    ModalContent,
    ModalFooter,
} from './Modal.styled';

const SIZE = ['l', 'm', 's'];

const Modal = ({ className, children, footer, header, onClose, open, size, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Modal';

    return (
        <ModalOverlay className={`${BASE_CLASS_NAME}__overlay`} open={open} onClick={onClose}>
            <ModalContainer
                className={`${BASE_CLASS_NAME} ${className}`.trim()}
                open={open}
                size={size}
                onClick={(e) => e.stopPropagation()}
                {...styleProps}
            >
                {header && (
                    <ModalHeader justify="center" align="center">
                        {header}
                        <CloseButton onClick={onClose} variation="tertiary" size="icon">
                            <Icon icon="X" />
                        </CloseButton>
                    </ModalHeader>
                )}
                <ModalContent>
                    {children}
                </ModalContent>
                {footer && (
                    <ModalFooter justify="flex-end" align="center" margin={'0'}>{footer}</ModalFooter>
                )}
            </ModalContainer>
        </ModalOverlay>
    );
};

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
    size: PropTypes.oneOf(SIZE),
};

Modal.defaultProps = {
    className: '',
    children: null,
    open: false,
    size: SIZE[1],
};

export default Modal;
