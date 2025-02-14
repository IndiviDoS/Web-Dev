import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'SAMSUNG A35',
      description: 'Samsung Galaxy A35 5G 8/128GB',
      rating: 4.5,
      image: './assets/A35.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-temno-sinii-117420425/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'SAMSUNG A05',
      description: 'Samsung A05 4/64GB.',
      rating: 4.7,
      image: './assets/A05.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a05-4-gb-64-gb-zelenyi-114692886/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'Realme Note 50',
      description: 'Readme Note 50 4/128GB.',
      rating: 4.2,
      image: './assets/realmenote50.jpg',
      link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'OPPO A78',
      description: 'OPPO A78 8/128GB.',
      rating: 4.8,
      image: './assets/OPPOA78.jpg',
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-128-gb-chernyi-112706815/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'Redmi 13C',
      description: 'Redmi 13C 8/256GB.',
      rating: 4.5,
      image: './assets/redmi13c.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-belyi-114985314/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'SAMSUNG A25',
      description: 'Samsung A25 5G 8/256GB.',
      rating: 4.7,
      image: './assets/A25.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-8-gb-256-gb-temno-sinii-115860623/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'SAMSUNG A55',
      description: 'Samsung A55 5G 8/256GB',
      rating: 4.2,
      image: './assets/A55.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'SAMSUNG A06',
      description: 'Samsung A06 6/128GB.',
      rating: 4.8,
      image: './assets/A06.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'Xiaomi Redmi Note 13',
      description: 'Xiaomi Redmi Note 13 4G 8/256GB.',
      rating: 4.5,
      image: './assets/rnote13.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-4g-8-gb-256-gb-chernyi-116797774/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
    {
      name: 'Xiaomi Redmi Note 12 Pro+',
      description: 'Xiaomi Redmi Note 12 Pro+ 5G NFC 8/256GB',
      rating: 4.7,
      image: './assets/rnote25.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiAzba9BhBhEiwA7glbat2piQNpQeFYSmoeYH-v-2_J8PsWMqMTY3REpVw8iB82VZaee2w68BoCqYUQAvD_BwE',
    },
  ];

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
