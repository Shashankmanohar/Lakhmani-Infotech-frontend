const productsData = {
  'computer-laptops': [
    {
      id: 1,
      name: 'HP Pavilion Laptop',
      brand: 'HP',
      specs: 'Intel i5, 8GB RAM, 512GB SSD',
      image: '/src/assets/hp1.png',
    },
    {
      id: 2,
      name: 'Dell Inspiron 15',
      brand: 'Dell',
      specs: 'AMD Ryzen 5, 8GB RAM, 256GB SSD',
      image: '/src/assets/dell_laptop.png',
    }
    // ... add all products from ComputerLaptops.jsx with image
  ],
  'printer-scanner': [
    {
      id: 1,
      name: 'HP LaserJet Pro M404n',
      type: 'Printer',
      specs: 'Laser Printer, 40 PPM, Network Ready',
      image: '/src/assets/printer1.jpg',
    },
    {
      id: 2,
      name: 'Canon PIXMA TS207',
      type: 'Printer',
      specs: 'Inkjet Printer, All-in-One, WiFi',
      image: '/src/assets/printer.jpeg',
    }
    // ... add all products from PrinterScanner.jsx with image
  ],
  'television': [
    {
      id: 1,
      name: 'Samsung 55" 4K Smart TV',
      brand: 'Samsung',
      specs: '55" 4K UHD, Smart TV, HDR',
      image: '/src/assets/tv.jpg',
    }
    // ... add all products from Television.jsx with image
  ],
  'logistic': [
    {
      id: 1,
      name: 'Express Delivery',
      specs: 'Same day delivery for urgent orders within city limits',
      image: '',
    },
    {
      id: 2,
      name: 'Standard Shipping',
      specs: 'Reliable delivery within 2-3 business days',
      image: '',
    }
    // ... add all services from Logistic.jsx as products, add image if available
  ],
  'accessories': [
    {
      id: 1,
      name: 'SanDisk 32GB USB 3.0 Pendrive',
      category: 'Pendrives',
      specs: '32GB, USB 3.0, High Speed',
      image: '/src/assets/scandisk.png',
    },
    {
      id: 2,
      name: 'Seagate 1TB External HDD',
      category: 'Hard Disk',
      specs: '1TB, USB 3.0, Portable',
      image: '/src/assets/shopping.png',
    },
    {
      id: 3,
      name: 'Digital Camera',
      category: 'Pendrives',
      specs: '20MP, 4K Video, WiFi',
      image: '/src/assets/camera.jpg',
    },
    {
      id: 4,
      name: 'Web Camera HD',
      category: 'Pendrives',
      specs: '1080p HD, Auto Focus, USB',
      image: '/src/assets/webcamera.jpg',
    },
    {
      id: 5,
      name: 'Premium Speaker System',
      category: 'Hard Disk',
      specs: '2.1 Channel, Bass Boost, Bluetooth',
      image: '/src/assets/speaker1.jpeg',
    },
    {
      id: 6,
      name: 'UPS Backup System',
      category: 'Anti Virus',
      specs: '1100VA, 30 Min Backup, LCD Display',
      image: '/src/assets/ups.jpg',
    },
    {
      id: 7,
      name: 'Power Supply Unit',
      category: 'Hard Disk',
      specs: '650W, 80+ Bronze, Modular',
      image: '/src/assets/power_supply.jpg',
    },
    {
      id: 8,
      name: 'Compact Speaker',
      category: 'Pendrives',
      specs: 'Portable, USB Powered, 3.5mm Jack',
      image: '/src/assets/speker.jpg',
    },
    {
      id: 9,
      name: 'Professional Camera Kit',
      category: 'Hard Disk',
      specs: 'DSLR Camera, 18-55mm Lens, Tripod',
      image: '/src/assets/camera1.jpg',
    },
    {
      id: 10,
      name: 'Vlogging Equipment Set',
      category: 'Anti Virus',
      specs: 'Ring Light, Microphone, Stand, Camera',
      image: '/src/assets/vlogging-gear-best-of-2019.jpg',
    },
    {
      id: 11,
      name: 'Web Development Kit',
      category: 'Pendrives',
      specs: 'USB Hub, HDMI Cable, Ethernet Cable',
      image: '/src/assets/web2.jpg',
    },
    {
      id: 12,
      name: 'Professional Audio Interface',
      category: 'Hard Disk',
      specs: 'USB Audio Interface, XLR Inputs, Phantom Power',
      image: '/src/assets/ImgW.jpg',
    },
    {
      id: 13,
      name: 'SanDisk 64GB USB 3.1 Pendrive',
      category: 'Pendrives',
      specs: '64GB Storage, USB 3.1, Ultra Fast',
      image: '/src/assets/images.jpg',
    },
  ],
};

export default productsData; 