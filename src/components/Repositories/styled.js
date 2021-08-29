import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const WrapperTabs =  styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabsList =  styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabsList.tabsRole = 'TabList';

export const WrapperTab =  styled(Tab)`
    border-radius: 10px 0 10px 0;
    border: 1px solid #C0C0C0;
    margin: 16px;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 999;
    background-color: #fff;


    &:hover{
        border: 1px solid #000000;
    }
    &:focus{
        outline: none;
    }
    &.is-selected{
        box-shadow: 3px 2px 10px rgba( 0, 0, 0, 0.5);
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel =  styled(TabPanel)`
    padding: 16px;
    border: 1px solid #ccc;
    display: none;
    margin-top: -5px;

    &.is-selected{
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';