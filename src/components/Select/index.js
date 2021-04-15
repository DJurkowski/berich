import React, { useState, useRef } from 'react';
import useOutsideClick from '../../utils/Hooks/useOutsideClick';
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem, SelectLabel } from './SelectElements';

const Select = ({selectedOption, setSelectedOption, options, dark, label, smallSize=false, leftSide=false}) => {

    const [ isOpen, setIsOpen ] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (isOpen) setIsOpen(false);
    });

    const handleToggle = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <DropDownContainer ref={ref} leftSide={leftSide}>
            <SelectLabel size={smallSize ? 1 : 0}>{label}</SelectLabel>
            <DropDownHeader onClick={handleToggle} dark={dark} size={smallSize ? 1 : 0}>
                {selectedOption || ''}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList dark={dark} size={smallSize ? 1 : 0}>
                        {options.map((option, index) => (
                            <ListItem onClick={onOptionClicked(option)} key={index}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
};

export default Select;
