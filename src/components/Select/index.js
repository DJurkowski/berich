import React, { useState, useRef } from 'react';
import useOutsideClick from '../../utils/Hooks/useOutsideClick';
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem, SelectLabel } from './SelectElements';

const Select = ({selectedOption, setSelectedOption, options, dark, label}) => {

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
        <DropDownContainer ref={ref}>
            <SelectLabel>{label}</SelectLabel>
            <DropDownHeader onClick={handleToggle} dark={dark}>
                {selectedOption || ''}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList dark={dark}>
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
