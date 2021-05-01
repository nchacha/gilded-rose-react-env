import React from 'react';
import ShopItemTable, { Item } from "./components/ShopItemTable";
import {items} from "./data/shopItems";
import {Shop} from "./api/gilded_rose";
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import WelcomeMessage from "./components/WelcomeMessage";

export enum Section{
    SALE ="Sale",
    DISCOUNT ="Discount"
}
interface Props {}

interface State {
    items: Item[],
    onSaleItems: number,
    discountItems: number
}

const shop = new Shop(items);

class GildedRose extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            items: shop.items,
            onSaleItems: shop.items.length,
            discountItems: 0
        };
        console.log('Initial Shop state: ', this.state.items)
    }

    updateShowQuality() {
        shop.updateQuality();
        console.log('Shop State after update:', shop)
        let onSaleCount = shop.items.filter(item => item.quality > 0 && item.sellIn > 0).length;
        this.setState({
            items: shop.items,
            onSaleItems: onSaleCount,
            discountItems: shop.items.length - onSaleCount
        })
    }

    render() {
        let onSaleTab = "On Sale " + "("+ this.state.onSaleItems + ")";
        let discountTab ="Discount " + "("+ this.state.discountItems + ")";

        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Navbar bg="light">
                                <Navbar.Brand href="#home">The Gilded Rose </Navbar.Brand>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <WelcomeMessage />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="sale" id="uncontrolled-tab-example">
                                <Tab eventKey="sale" title={onSaleTab}>
                                    <Card>
                                        <ShopItemTable items={this.state.items} section={Section.SALE}/>
                                    </Card>
                                </Tab>
                                <Tab eventKey="discount" title={discountTab}>
                                    <Card>
                                        <ShopItemTable items={this.state.items} section={Section.DISCOUNT}/>
                                    </Card>
                                </Tab>
                            </Tabs>
                            <Button onClick={this.updateShowQuality.bind(this)}>Update Quality</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GildedRose;
