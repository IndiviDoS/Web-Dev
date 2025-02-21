import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  link: string;
  likes: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Shop';
  categories: Category[] = []=[
    {
      id: 1,
      name: 'Electronics',
      products: [
        {
          id: 1,
          name: 'iPhone 12',
          description: 'Apple iPhone 12, 64GB, Black - Fully Unlocked (Renewed)',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg',
          link: 'https://www.amazon.com/Apple-iPhone-12-64GB-Black/dp/B08L5T31M6',
          likes: 0
        },
        {
          id: 2,
          name: 'Samsung Galaxy S21',
          description: 'Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Gray (SM-G991UZAAXAA)',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h44/64145784373278.jpg?format=gallery-large',
          link: 'https://www.amazon.com/Samsung-Unlocked-Smartphone-Pro-Grade-SM-G991UZAAXAA/dp/B08N2YQJ6R',
          likes: 0
        },
        {
          id: 3,
          name: 'Apple Watch Series 6',
          description: 'Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band',
          rating: 4.5,
          image: 'https://shop.kz/upload/iblock/556/150798_1.jpg',
          link: 'https://www.amazon.com/Apple-Watch-GPS-40mm-Aluminum/dp/B08J6QF7Y7',
          likes: 0
        },
        {
          id: 13,
          name: 'Apple AirPods Pro',
          description: 'Apple AirPods Pro',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg',
          link: 'https://www.amazon.com/Apple-AirPods-Pro/dp/B07ZPC9QD4',
          likes: 0
        },
        {
          id: 14,
          name: 'Apple iPad Pro',
          description: 'Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg',
          link: 'https://www.amazon.com/Apple-iPad-12-9-inch-Wi-Fi-128GB/dp/B0863BQJXL',
          likes: 0
        }
      ]
    },
    {
      id: 2,
      name: 'Clothing',
      products: [
        {
          id: 4,
          name: 'Levi\'s Men\'s 505 Regular Fit Jeans',
          description: 'Levi\'s Men\'s 505 Regular Fit Jeans',
          rating: 4.5,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpbS5xgRzwgIpNQc0bm2tg93Cu-MqWlszxg&s',
          link: 'https://www.amazon.com/Levis-Mens-Regular-Jeans-Black/dp/B0018ON4ZM',
          likes: 0
        },
        {
          id: 5,
          name: 'Champion Men\'s Classic Jersey Script T-Shirt',
          description: 'Champion Men\'s Classic Jersey Script T-Shirt',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/41rF9pVhK0L._AC_SY780_.jpg',
          link: 'https://www.amazon.com/Champion-Classic-Jersey-T-Shirt-Black/dp/B07KQVQZ2Z',
          likes: 0
        },
        {
          id: 6,
          name: 'Hanes Men\'s EcoSmart Fleece Sweatshirt',
          description: 'Hanes Men\'s EcoSmart Fleece Sweatshirt',
          rating: 4.5,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsYwVUQIicAHxv8C35X2ECGHyFfuBm8AvOA&s',
          link: 'https://www.amazon.com/Hanes-EcoSmart-Fleece-Sweatshirt-Black/dp/B01L8J7K0M',
          likes: 0
        },
        {
          id:15,
          name: 'Champion Men\'s Powerblend Fleece Pullover Hoodie',
          description: 'Champion Men\'s Powerblend Fleece Pullover Hoodie',
          rating: 4.5,
          image: 'https://i5.walmartimages.com/seo/Champion-Men-s-and-Big-Men-s-Powerblend-Fleece-C-Logo-Pullover-Hoodie-up-to-Size-4XL_986ed30b-4b25-4bc3-976d-1fe7e05262de_1.e5f8d7fc142221cbab528896ed87efd2.jpeg',
          link: 'https://www.amazon.com/Champion-Powerblend-Fleece-Pullover-Hoodie/dp/B07KQVQZ2Z',
          likes: 0
        },
        {
          id: 16,
          name: 'Champion Men\'s Graphic Powerblend Fleece Hoodie',
          description: 'Champion Men\'s Graphic Powerblend Fleece Hoodie',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/81naTg9Yn3L._AC_UY580_.jpg',
          link: 'https://www.amazon.com/Champion-Graphic-Powerblend-Fleece-Hoodie/dp/B07KQVQZ2Z',
          likes: 0
        }
      ]
    },
    {
      id: 3,
      name: 'Home',
      products: [
        {
          id: 7,
          name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
          description: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, Sterilizer, and Warmer, 6 Quart, 14 One-Touch Programs',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/710KoJMG2lL.jpg',
          link: 'https://www.amazon.com/Instant-Pot-Programmable-Pressure-Steamer/dp/B00FLYWNYQ',
          likes: 0
        },
        {
          id: 8,
          name: 'Bissell Cleanview Upright Bagless Vacuum Cleaner',
          description: 'Bissell Cleanview Upright Bagless Vacuum Cleaner, Orange, 1831',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/711e2WY52kL.jpg',
          link: 'https://www.amazon.com/Bissell-Cleanview-Upright-Bagless-1831/dp/B06XKLHSWJ',
          likes: 0
        },
        {
          id: 9,
          name: 'Keurig K-Classic Coffee Maker',
          description: 'Keurig K-Classic Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 10 Oz. Brew Sizes, Black',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/61wQb8IB8UL.jpg',
          link: 'https://www.amazon.com/Keurig-K-Classic-Coffee-Serve-Brewer/dp/B018UQ5VEK',
          likes: 0
        },
        {
          id: 17,
          name: 'Etekcity Food Kitchen Scale',
          description: 'Etekcity Food Kitchen Scale, Digital Grams and Ounces for Weight Loss, Baking, Cooking, Keto and Meal Prep, Small, Stainless Steel',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/91YrLTBnMcL.jpg',
          link: 'https://www.amazon.com/Etekcity-Digital-Multifunction-Stainless-Batteries/dp/B0113UZJE2',
          likes: 0
        },
        {
          id: 18,
          name: 'Hamilton Beach Electric Indoor Searing Grill',
          description: 'Hamilton Beach Electric Indoor Searing Grill with Viewing Window and Removable Easy-to-Clean Nonstick Plate, 6-Serving, Extra-Large Drip Tray, Stainless Steel (25361)',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/71tRQFahuML.jpg',
          link: 'https://www.amazon.com/Hamilton-Beach-25361-Nonstick-Stainless/dp/B00KLVY3TW',
          likes: 0
        }
      ]
    },
    {
      id: 4,
      name: 'Toys',
      products: [
        {
          id: 10,
          name: 'LEGO Classic Large Creative Brick Box',
          description: 'LEGO Classic Large Creative Brick Box 10698 Build Your Own Creative Toys, Kids Building Kit (790 Pieces)',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/71zPcTwK9bL._AC_SL1000_.jpg',
          link: 'https://www.amazon.com/LEGO-Classic-Creative-Creative-Building/dp/B00NHQFA1I',
          likes: 0
        },
        {
          id: 11,
          name: 'Crayola Inspiration Art Case Coloring Set',
          description: 'Crayola Inspiration Art Case Coloring Set, Gift for Kids, 140 Art Supplies',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/61EyjnzyunL._AC_UF894,1000_QL80_.jpg',
          link: 'https://www.amazon.com/Crayola-Inspiration-Art-Case-Supplies/dp/B00CI6J5JQ',
          likes: 0
        },
        {
          id: 12,
          name: 'Play-Doh Modeling Compound 10-Pack Case of Colors',
          description: 'Play-Doh Modeling Compound 10-Pack Case of Colors, Non-Toxic, Assorted Colors, 2-Ounce Cans, Ages 2 and up, (Amazon Exclusive)',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/71gHRy76hwL._AC_UF1000,1000_QL80_.jpg',
          link: 'https://www.amazon.com/Play-Doh-Modeling-Compound-10-Pack-Exclusive/dp/B00JM5GZGW',
          likes: 0
        },
        {
          id: 19,
          name: 'Melissa & Doug Wooden Building Blocks Set',
          description: 'Melissa & Doug Wooden Building Blocks Set - 100 Blocks in 4 Colors and 9 Shapes',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/71jVEjU17nL._AC_UF894,1000_QL80_.jpg',
          link: 'https://www.amazon.com/Melissa-Doug-Wooden-Building-Blocks/dp/B000068CKY',
          likes: 0
        },
        {
          id: 20,
          name: 'LEGO Star Wars: The Mandalorian The Child',
          description: 'LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)',
          rating: 4.5,
          image: 'https://s.f.kz/prod/2029/2028331_1000.jpg',
          link: 'https://www.amazon.com/LEGO-Star-Wars-Mandalorian-Collectible/dp/B08B8J8H8H',
          likes : 0
        }
      ]
    }
  ];
  selectedCategory: Category | null = null;
  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
  ngOnInit(): void {
    this.loadLikes();
  }
  likeProduct(product: Product): void {
    product.likes++;
    this.saveLikes();
  }
  saveLikes(): void {
    const likesMap: { [key: number]: number } = {};
    this.categories.forEach(category => {
      category.products.forEach(product => {
        likesMap[product.id] = product.likes;
      });
    });
    localStorage.setItem('likes', JSON.stringify(likesMap));
  }
  loadLikes(): void {
    const savedLikes = localStorage.getItem('likes');
    if (savedLikes) {
      const likesMap: { [key: number]: number } = JSON.parse(savedLikes);
      this.categories.forEach(category => {
        category.products.forEach(product => {
          if (likesMap[product.id] !== undefined) {
            product.likes = likesMap[product.id];
          }
        });
      });
    }
  }
}
