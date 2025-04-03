import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { CartService, Ingredient } from '../services/cart-service.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class IngredientPage {
  type = '';
  categories: Ingredient[] = [];
  ngOnInit() {
    const paramType = this.route.snapshot.paramMap.get('type');
    if (paramType) {
      this.type = paramType;
      console.log(this.type);
      var type_name = this.getType(this.type);
      this.categories = this.categories_all.filter(
        (c) => c.category == type_name
      );
    }
  }

  getIconColor(type: string): string {
    switch (type) {
      case 'vegetable':
        return '#4CAF50';
      case 'processed':
        return '#FF9800';
      default:
        return '#9E9E9E';
    }
  }
  getType(type: string) {
    if (type == 'raw') {
      return 'ผัก';
    } else if (type == 'processed') {
      return 'อาหารแปรรูป';
    } else if (type == 'cooked') {
      return 'เครื่องปรุง';
    } else if (type == 'animal') {
      return 'เนื้อสัตว์';
    } else {
      return 'ไม่พบ';
    }
  }
  categories_all: Ingredient[] = [
    {
      id: 1,
      category: 'ผัก',
      name: 'แตงกวา',
      weight: 100,
      sodium: 5,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/cucumber-1238493_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 2,
      category: 'ผัก',
      name: 'มะเขือเทศ',
      weight: 100,
      sodium: 10,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238255_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 3,
      category: 'ผัก',
      name: 'ถั่วงอก',
      weight: 60,
      sodium: 11,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2017/01/30/13/50/sprouts-2024433_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 4,
      category: 'ผัก',
      name: 'ถั่วฝักยาว',
      weight: 60,
      sodium: 19,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2018/07/15/10/27/long-beans-3532510_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 5,
      category: 'ผัก',
      name: 'กะหล่ำปลี',
      weight: 60,
      sodium: 24,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2014/12/15/13/40/cabbage-569067_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 6,
      category: 'ผัก',
      name: 'ผักกาดขาว',
      weight: 60,
      sodium: 46,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2018/05/29/21/22/chinese-cabbage-3449606_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 7,
      category: 'ผัก',
      name: 'ผักคะน้า',
      weight: 50,
      sodium: 86,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2018/05/29/21/22/kale-3449607_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 8,
      category: 'ผัก',
      name: 'เห็ดฟาง',
      weight: 60,
      sodium: 21,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/mushrooms-1238254_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 9,
      category: 'ผัก',
      name: 'กวางตุ้ง',
      weight: 50,
      sodium: 32,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2018/05/29/21/22/pak-choi-3449608_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 10,
      category: 'ผัก',
      name: 'ฟักทอง',
      weight: 200,
      sodium: 2,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 11,
      category: 'ผัก',
      name: 'แครอท',
      weight: 100,
      sodium: 50,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 12,
      category: 'ผัก',
      name: 'สะเดา',
      weight: 100,
      sodium: 10,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 13,
      category: 'คันจองหรือผักก้านจอง',
      name: 'แครอท',
      weight: 100,
      sodium: 25,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 14,
      category: 'ผัก',
      name: 'ผักพลู',
      weight: 100,
      sodium: 6,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 15,
      category: 'ผัก',
      name: 'ผักหวาน',
      weight: 100,
      sodium: 10,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 16,
      category: 'ผัก',
      name: 'มะละกอ',
      weight: 100,
      sodium: 3,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 17,
      category: 'ผัก',
      name: 'ผักชี',
      weight: 100,
      sodium: 46,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 18,
      category: 'ผัก',
      name: 'ผักสลัด',
      weight: 100,
      sodium: 17,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 19,
      category: 'ผัก',
      name: 'กะเพรา',
      weight: 100,
      sodium: 146,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 20,
      category: 'ผัก',
      name: 'โหระพา',
      weight: 100,
      sodium: 4,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 21,
      category: 'ผัก',
      name: 'ใบแมงลัก',
      weight: 100,
      sodium: 9,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 22,
      category: 'ผัก',
      name: 'ต้นหอม',
      weight: 100,
      sodium: 16,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 23,
      category: 'ผัก',
      name: 'ผักบุ้ง',
      weight: 100,
      sodium: 118,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 24,
      category: 'ผัก',
      name: 'ผักแขยง',
      weight: 100,
      sodium: 7,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 25,
      category: 'ผัก',
      name: 'ปลีกล้วย',
      weight: 100,
      sodium: 326,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 26,
      category: 'ผัก',
      name: 'ใบชะพลู',
      weight: 100,
      sodium: 50,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 27,
      category: 'ผัก',
      name: 'ตำลึง',
      weight: 100,
      sodium: 3,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 28,
      category: 'ผัก',
      name: 'ขิง',
      weight: 100,
      sodium: 13,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 29,
      category: 'ผัก',
      name: 'ใบย่านาง',
      weight: 100,
      sodium: 5,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 30,
      category: 'ผัก',
      name: 'ตะไคร้',
      weight: 100,
      sodium: 5,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 31,
      category: 'ผัก',
      name: 'ชะอม',
      weight: 100,
      sodium: 42,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 32,
      category: 'ผัก',
      name: 'ผักติ้ว',
      weight: 100,
      sodium: 4,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 33,
      category: 'ผัก',
      name: 'ตะไคร้',
      weight: 100,
      sodium: 6,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 34,
      category: 'ผัก',
      name: 'ใบมะกรูด',
      weight: 100,
      sodium: 5,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 35,
      category: 'ผัก',
      name: 'บวบ',
      weight: 100,
      sodium: 4,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 36,
      category: 'ผัก',
      name: 'ฟัก',
      weight: 100,
      sodium: 4,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 37,
      category: 'ผัก',
      name: 'กะหล่ำดอก',
      weight: 100,
      sodium: 20,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 38,
      category: 'ผัก',
      name: 'พริกหยวก',
      weight: 100,
      sodium: 5,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 39,
      category: 'ผัก',
      name: 'หอมหัวใหญ่',
      weight: 100,
      sodium: 6,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 40,
      category: 'ผัก',
      name: 'หอมแดง',
      weight: 100,
      sodium: 7,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 41,
      category: 'ผัก',
      name: 'กระเทียม',
      weight: 100,
      sodium: 17,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 42,
      category: 'ผัก',
      name: 'มะระ',
      weight: 100,
      sodium: 8,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 43,
      category: 'ผัก',
      name: 'หน่อไม้',
      weight: 100,
      sodium: 3,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 44,
      category: 'ผัก',
      name: 'สะระแหน่',
      weight: 100,
      sodium: 2,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 45,
      category: 'ผัก',
      name: 'ข่า',
      weight: 100,
      sodium: 50,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 46,
      category: 'ผัก',
      name: 'กะหล่ำปลี',
      weight: 100,
      sodium: 20,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 47,
      category: 'ผัก',
      name: 'เห็ดนางฟ้า',
      weight: 100,
      sodium: 20,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 48,
      category: 'ผัก',
      name: 'เห็ดหูหนู',
      weight: 100,
      sodium: 13,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 49,
      category: 'ผัก',
      name: 'มะรุม',
      weight: 100,
      sodium: 2,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 50,
      category: 'ผัก',
      name: 'เพกา',
      weight: 100,
      sodium: 5,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 51,
      category: 'ผัก',
      name: 'ดอกแค',
      weight: 100,
      sodium: 3,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 52,
      category: 'ผัก',
      name: 'ดอกขจร',
      weight: 100,
      sodium: 2,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 53,
      category: 'ผัก',
      name: 'หน่อไม้ฝรั่ง',
      weight: 100,
      sodium: 4,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },

    {
      id: 61,
      category: 'อาหารแปรรูป',
      name: 'เนื้อแดดเดียว',
      weight: 100,
      sodium: 1514,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 61,
      category: 'อาหารแปรรูป',
      name: 'แหนม',
      weight: 100,
      sodium: 990,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 62,
      category: 'อาหารแปรรูป',
      name: 'เนื้อแดดเดียว',
      weight: 100,
      sodium: 1514,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 63,
      category: 'อาหารแปรรูป',
      name: 'ปลาสลิดแดดเดียว',
      weight: 100,
      sodium: 1694,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-catfish-1238247_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 64,
      category: 'อาหารแปรรูป',
      name: 'หมูแผ่น',
      weight: 100,
      sodium: 1592,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-sheet-1238246_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 65,
      category: 'อาหารแปรรูป',
      name: 'กุนเชียง',
      weight: 100,
      sodium: 1303,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/chinese-sausage-1238245_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 66,
      category: 'อาหารแปรรูป',
      name: 'ไส้กรอก',
      weight: 100,
      sodium: 680,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sausage-1238244_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 67,
      category: 'อาหารแปรรูป',
      name: 'ผักกาดดอง',
      weight: 100,
      sodium: 1498,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mustard-1238243_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 68,
      category: 'อาหารแปรรูป',
      name: 'มะม่วงแช่อิ่ม',
      weight: 100,
      sodium: 504,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mango-1238242_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 69,
      category: 'อาหารแปรรูป',
      name: 'ปลากระป๋อง',
      weight: 100,
      sodium: 600,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/canned-fish-1238241_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 70,
      category: 'อาหารแปรรูป',
      name: 'มาม่า',
      weight: 100,
      sodium: 1500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/instant-noodles-1238240_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 71,
      category: 'อาหารแปรรูป',
      name: 'หมูยอ',
      weight: 100,
      sodium: 800,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 72,
      category: 'อาหารแปรรูป',
      name: 'หน่อไม้ดอง',
      weight: 100,
      sodium: 1200,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 73,
      category: 'อาหารแปรรูป',
      name: 'เต้าหู้ไข่',
      weight: 100,
      sodium: 10,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 74,
      category: 'อาหารแปรรูป',
      name: 'ปลาหมึกแห้ง',
      weight: 100,
      sodium: 2500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 75,
      category: 'อาหารแปรรูป',
      name: 'แคบหมู',
      weight: 100,
      sodium: 1200,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 76,
      category: 'อาหารแปรรูป',
      name: 'โบโลน่าหมู',
      weight: 100,
      sodium: 15,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 77,
      category: 'อาหารแปรรูป',
      name: 'ปลาแดดเดียว',
      weight: 100,
      sodium: 0,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 78,
      category: 'อาหารแปรรูป',
      name: 'แคบหมู',
      weight: 100,
      sodium: 1200,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 79,
      category: 'อาหารแปรรูป',
      name: 'ไข่แดงเค็ม',
      weight: 1,
      sodium: 600,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 80,
      category: 'อาหารแปรรูป',
      name: 'หมึกแดด',
      weight: 100,
      sodium: 1500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 81,
      category: 'อาหารแปรรูป',
      name: 'หมูสวรรค์เม็ดผักชี',
      weight: 100,
      sodium: 1500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 82,
      category: 'อาหารแปรรูป',
      name: 'หมูฝอย',
      weight: 100,
      sodium: 1500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },

    // ----------------------------------------------------
    {
      id: 89,
      category: 'เครื่องปรุง',
      name: 'เกลือ',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 2000,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 90,
      category: 'เครื่องปรุง',
      name: 'ปลาร้า',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 91,
      category: 'เครื่องปรุง',
      name: 'น้ำปลา',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 92,
      category: 'เครื่องปรุง',
      name: 'ผงปรุงรส',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 93,
      category: 'เครื่องปรุง',
      name: 'กะปิ',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 94,
      category: 'เครื่องปรุง',
      name: 'ซีอิ๊วขาว',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 453,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 95,
      category: 'เครื่องปรุง',
      name: 'ซุปก้อน',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 2000,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 96,
      category: 'เครื่องปรุง',
      name: 'ซอสหอยนางรม',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 165,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 97,
      category: 'เครื่องปรุง',
      name: 'เต้าเจี้ยว',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 410,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 98,
      category: 'เครื่องปรุง',
      name: 'น้ำจิ้มไก่',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 227,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 99,
      category: 'เครื่องปรุง',
      name: 'ซอสพริก',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 220,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 100,
      category: 'เครื่องปรุง',
      name: 'น้ำส้มสายชู',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 0,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 101,
      category: 'เครื่องปรุง',
      name: 'น้ำตาล',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 0,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 102,
      category: 'เครื่องปรุง',
      name: 'พริกไทย',
      detail: '1 ช้อนชา',
      weight: 100,
      sodium: 5,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 103,
      category: 'เครื่องปรุง',
      name: 'ซุปก้อน',
      detail: '(ก้อน)',
      weight: 100,
      sodium: 300,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    // ----------เนื้อสัตว์------
    {
      id: 121,
      category: 'เนื้อสัตว์',
      name: 'เนื้อไก่',
      weight: 1000,
      sodium: 500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'animal',
    },
    {
      id: 122,
      category: 'เนื้อสัตว์',
      name: 'เนื้อวัว',
      weight: 1000,
      sodium: 400,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'animal',
    },
    {
      id: 123,
      category: 'เนื้อสัตว์',
      name: 'เนื้อหมู',

      weight: 1000,
      sodium: 500,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'animal',
    },
    {
      id: 124,
      category: 'เนื้อสัตว์',
      name: 'เนื้อปลา',
      weight: 1000,
      sodium: 300,
      unit: 'mg',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'animal',
    },
  ];

  constructor(
    private toastController: ToastController,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  async addToCart(item: Ingredient) {
    try {
      console.log(item);
      await this.cartService.addItem(item);

      const toast = await this.toastController.create({
        message: `เพิ่ม ${item.name} ลงตะกร้าแล้ว`,
        duration: 2000,
        position: 'bottom',
        color: 'success',
        buttons: [
          {
            text: 'ตกลง',
            role: 'cancel',
          },
        ],
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    }
  }

  goCartPage() {
    this.router.navigate(['cart']);
  }
}
