
export class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export const SpecialItem = {
  AGED_BRIE : 'Aged Brie',
  BACKSTAGE_PASS : 'Backstage passes to a TAFKAL80ETC concert',
  CONJURED : 'Conjured Item',
  SULFURAS : 'Sulfuras, Hand of Ragnaros',
};
export class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != SpecialItem.AGED_BRIE && this.items[i].name != SpecialItem.BACKSTAGE_PASS) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name == SpecialItem.CONJURED) {
            this.items[i].quality = this.items[i].quality - 2;
            if(this.items[i].quality < 0){
              this.items[i].quality = 0;
            }
          }else if(this.items[i].name != SpecialItem.SULFURAS){
            this.items[i].quality = this.items[i].quality - 1;
          } 
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == SpecialItem.BACKSTAGE_PASS) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != SpecialItem.SULFURAS) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name !=  SpecialItem.AGED_BRIE) {
          if (this.items[i].name != SpecialItem.BACKSTAGE_PASS) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name == SpecialItem.CONJURED) {
                this.items[i].quality = this.items[i].quality - 2;
                if(this.items[i].quality < 0){
                  this.items[i].quality = 0;
                }
              }else if(this.items[i].name != SpecialItem.SULFURAS){
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
