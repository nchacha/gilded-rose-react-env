import React from 'react';
import Table from "react-bootstrap/Table";
import { Section } from '../GildedRose';

export interface Item {
    name: string;
    sellIn: number;
    quality: number;
}

interface ShopItemTableProps {
    items: Item[];
    section: string;
}

function getItemRows(items: Item[], section: string) {
    let filteredItems = [];
    if(section === Section.SALE){
        filteredItems = items.filter(item => item.quality > 0 && item.sellIn > 0);
    }else{
        filteredItems = items.filter(item => item.quality <= 0 || item.sellIn <= 0)
    }
    return filteredItems.map((item: Item) => {
        return (
            <tr className="item-row">
                <td>{item.name}</td>
                <td>{item.quality}</td>
                <td>{item.sellIn}</td>
            </tr>
        )
    });
}

function ShopItemTable(props: ShopItemTableProps) {
    const { items } = props;
    
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Quality</th>
                <th>Sell In Days</th>
            </tr>
            </thead>
            <tbody>
            {getItemRows(items, props.section)}
            </tbody>
        </Table>
    );
}

export default ShopItemTable;
