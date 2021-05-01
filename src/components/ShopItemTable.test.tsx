import React from 'react';
import { shallow } from 'enzyme'
import ShopItemTable from "./ShopItemTable";
import { Section } from '../GildedRose';

describe('ShopItemTable', () => {
    const items = [
        {
            name: 'Foo',
            quality: 5,
            sellIn: 10  
        },
        {
            name: 'Boo',
            quality: 0,
            sellIn: 10 
        },
        {
            name: 'Moo',
            quality: 10,
            sellIn: 0 
        }
    ]
    it('renders one row in the Sale table', () => {
        const subject = shallow(<ShopItemTable items={items} section={Section.SALE}/>);
        let header = subject.find('.item-row');
        expect(header.length).toBe(1)
    });
    it('renders two rows in the Discount table', () => {
        const subject = shallow(<ShopItemTable items={items} section={Section.DISCOUNT}/>);
        let header = subject.find('.item-row');
        expect(header.length).toBe(2)
    })
});
