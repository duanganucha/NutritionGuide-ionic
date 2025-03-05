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
    } else {
      return '';
    }
  }
  categories_all: Ingredient[] = [
    {
      id: 1,
      category: 'ผัก',
      name: 'แตงกวา',
      weight: 100,
      sodium: 5,
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
      image:
        'https://cdn.pixabay.com/photo/2017/01/30/13/50/sprouts-2024433_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 4,
      category: 'ผัก',
      name: 'ถั่วฝักยาว',
      weight: 100,
      sodium: 19,
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
      image:
        'https://cdn.pixabay.com/photo/2016/09/22/12/12/pumpkin-1685756_960_720.jpg',
      iconType: 'vegetable',
    },
    {
      id: 11,
      category: 'อาหารแปรรูป',
      name: 'แหนม',
      weight: 100,
      sodium: 990,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/fermented-pork-1238249_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 12,
      category: 'อาหารแปรรูป',
      name: 'เนื้อแดดเดียว',
      weight: 100,
      sodium: 1514,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-beef-1238248_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 13,
      category: 'อาหารแปรรูป',
      name: 'ปลาสลิดแดดเดียว',
      weight: 100,
      sodium: 1694,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sun-dried-catfish-1238247_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 14,
      category: 'อาหารแปรรูป',
      name: 'หมูแผ่น',
      weight: 100,
      sodium: 1592,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-sheet-1238246_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 15,
      category: 'อาหารแปรรูป',
      name: 'กุนเชียง',
      weight: 100,
      sodium: 1303,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/chinese-sausage-1238245_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 16,
      category: 'อาหารแปรรูป',
      name: 'ไส้กรอก',
      weight: 100,
      sodium: 680,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/sausage-1238244_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 17,
      category: 'อาหารแปรรูป',
      name: 'ผักกาดดอง',
      weight: 100,
      sodium: 1498,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mustard-1238243_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 18,
      category: 'อาหารแปรรูป',
      name: 'มะม่วงแช่อิ่ม',
      weight: 100,
      sodium: 504,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pickled-mango-1238242_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 19,
      category: 'อาหารแปรรูป',
      name: 'ปลากระป๋อง',
      weight: 100,
      sodium: 400,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/canned-fish-1238241_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 20,
      category: 'อาหารแปรรูป',
      name: 'มาม่า',
      weight: 100,
      sodium: 1200,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/instant-noodles-1238240_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 21,
      category: 'อาหารแปรรูป',
      name: 'หมูยอ',
      weight: 100,
      sodium: 800,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 22,
      category: 'เครื่องปรุง',
      name: 'เกลือ 1 ช้อนชา',
      weight: 100,
      sodium: 2200,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 23,
      category: 'เครื่องปรุง',
      name: 'ผงปรุงรส 1 ช้อนชา',
      weight: 100,
      sodium: 500,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 24,
      category: 'เครื่องปรุง',
      name: 'ปลาร้า 1 ช้อนชา',
      weight: 100,
      sodium: 550,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 25,
      category: 'เครื่องปรุง',
      name: 'กะปิ 1 ช้อนชา',
      weight: 100,
      sodium: 500,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 26,
      category: 'เครื่องปรุง',
      name: 'ผงชูรส 1 ช้อนชา',
      weight: 100,
      sodium: 490,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 27,
      category: 'เครื่องปรุง',
      name: 'น้ำปลา 1 ช้อนชา',
      weight: 100,
      sodium: 500,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 28,
      category: 'เครื่องปรุง',
      name: 'ซีอิ๊วขาว 1 ช้อนชา',
      weight: 100,
      sodium: 453,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 29,
      category: 'เครื่องปรุง',
      name: 'ซอสหอยนางรม 1 ช้อนชา',
      weight: 100,
      sodium: 165,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
    },
    {
      id: 30,
      category: 'เครื่องปรุง',
      name: 'ซุปก้อน (ก้อน)',
      weight: 100,
      sodium: 2000,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/pork-roll-1238239_960_720.jpg',
      iconType: 'processed',
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
