interface AdType {
  id: string
  title: string
  description: string
  image: string
  price: number
  location: string
  date: string
  url: string
}

export const ads: AdType[] = [
  {
    id: '1',
    title: 'Car for Sale',
    description: 'Well-maintained car available for sale. Low mileage and excellent condition.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1735640253/irrigators/waterpik/waterpik-662/waterpikw662_ml0euj.webp',
    price: 100,
    location: 'New York, NY',
    date: '2021-01-01',
    url: ''
  },
  {
    id: '2',
    title: 'Spacious House for Rent',
    description: 'Beautiful house with multiple bedrooms and amenities. Ideal for families.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1736693013/irrigators/waterpik/waterpik-wp-667/beti4onm7rfovtpm7pxt.webp',
    price: 200,
    location: 'Los Angeles, CA',
    date: '2021-01-02',
    url: ''
  },
  {
    id: '3',
    title: 'Kitchen Stove for Sale',
    description: 'Brand new kitchen stove available at a discounted price. Limited stock!',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1735633296/irrigators/waterpik/waterpik-wp660/waterpik-wp660_wfd6m1.webp',
    price: 300,
    location: 'Chicago, IL',
    date: '2021-01-03',
    url: ''
  },
  {
    id: '4',
    title: 'Refurbished Laptop',
    description:
      'Powerful laptop with upgraded specifications. Perfect for work and entertainment.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1735618760/irrigators/waterpik/waterpik-wp-580/waterpikwp580_adqt8u.webp',
    price: 400,
    location: 'Houston, TX',
    date: '2021-01-04',
    url: ''
  },
  {
    id: '5',
    title: 'Electric Stove for Sale',
    description: 'Modern electric stove available for sale. Energy-efficient and easy to use.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1735618204/irrigators/synhope/Synhope_rwczgb.webp',
    price: 500,
    location: 'Phoenix, AZ',
    date: '2021-01-05',
    url: ''
  },
  {
    id: '6',
    title: 'Gaming Laptop',
    description: 'High-performance gaming laptop with advanced graphics capabilities.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1735617805/irrigators/panasonic/EW1511W/Pnasonic_csfqym.webp',
    price: 600,
    location: 'Philadelphia, PA',
    date: '2021-01-06',
    url: ''
  },
  {
    id: '7',
    title: 'Mountain Bike for Sale',
    description: 'Durable mountain bike available for sale. Suitable for off-road adventures.',
    image: '/ads/casa.jpg',
    price: 700,
    location: 'San Antonio, TX',
    date: '2021-01-07',
    url: ''
  },
  {
    id: '8',
    title: 'Beach House for Rent',
    description: 'Luxurious beach house with stunning ocean views. Perfect for vacations.',
    image: '/ads/casa.jpg',
    price: 800,
    location: 'San Diego, CA',
    date: '2021-01-08',
    url: ''
  }
]
