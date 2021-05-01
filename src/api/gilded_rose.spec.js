import {Item, Shop, SpecialItem} from "./gilded_rose";

describe("Gilded Rose", () => {
    describe("Non-Special Items", () => {
        it("should decrease the quality and sellIn values by one when updateQuality is called", () => {
            const gildedRose = new Shop([ new Item("blah", 1, 3) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(2);
            expect(items[0].sellIn).toEqual(0);
        });
        it("should decrease the quality twice as fast when updateQuality is called and sellIn date has passed", () => {
            const gildedRose = new Shop([ new Item("blah", 0, 3) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(1);
            expect(items[0].sellIn).toEqual(-1);
        });
        it("should not allow quality to be negative when updateQuality is called and sellIn date has passed", ()=>{
            const gildedRose = new Shop([ new Item("blah", 0, 0) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1);
        });
    });
    describe("Aged Brie", ()=>{
        it("should increase quality when updateQuality is called", () => {
            const gildedRose = new Shop([ new Item(SpecialItem.AGED_BRIE, 3, 49) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(2);
        });
        it("should not allow quality to go above 50 when updateQuality is called", () => {
            const gildedRose = new Shop([ new Item(SpecialItem.AGED_BRIE, 3, 50) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(50);
            expect(items[0].sellIn).toEqual(2);
        });
    });
    describe("Sulfuras", () => {
        it("should not change quality and sellIn values when updateQuality is called", () => {
            const gildedRose = new Shop([ new Item(SpecialItem.SULFURAS, 500, 60) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(60);
            expect(items[0].sellIn).toEqual(500);
        });
    });
    describe("Backstage Pass", () => {
        it("should increase quality by one when updateQuality is called and sellIn value is greater than 10", () => {
            const gildedRose = new Shop([ new Item(SpecialItem.BACKSTAGE_PASS, 11 , 15) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(16);
            expect(items[0].sellIn).toEqual(10);
        });
        it("should increase quality by two when updateQuality is called and sellIn value is less than or equal to 10", () => {
            const gildedRose = new Shop([ new Item(SpecialItem.BACKSTAGE_PASS, 10 , 15) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(17);
            expect(items[0].sellIn).toEqual(9);
        });
        it("should increase quality by three when updateQuality is called and sellIn value is less than or equal to 5", () => {
            const gildedRose = new Shop([ new Item(SpecialItem.BACKSTAGE_PASS, 5 , 15) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(18);
            expect(items[0].sellIn).toEqual(4);
        });
        it("should drop quality to zero when updateQuality is called and sellIn value is less than or equal to 0", () => {
            const gildedRose = new Shop([ new Item(SpecialItem.BACKSTAGE_PASS, 0 , 15) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1);
        });
    });
    describe("Conjured", () => {
        it("should decrease quality by two when updateQuality is called and sellIn value is greater than 0", ()=>{
            const gildedRose = new Shop([ new Item(SpecialItem.CONJURED, 1, 6) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(4);
            expect(items[0].sellIn).toEqual(0);
        });
        it("should decrease quality by four when updateQuality is called and sellIn value is less than or equal to 0", () =>{
            const gildedRose = new Shop([ new Item(SpecialItem.CONJURED, 0, 14) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(10);
            expect(items[0].sellIn).toEqual(-1);
        });
        it("should not allow quality to be negative when updateQuality is called", ()=>{
            const gildedRose = new Shop([ new Item(SpecialItem.CONJURED, 0, 3) ]);
            let items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
            expect(items[0].sellIn).toEqual(-1);
        });

    });
    
});
