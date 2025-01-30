import Window from "../images/WAC1.png";
import Window2 from "../images/WAC2.png";
import Window3 from "../images/WAC3.png";
import Window4 from "../images/WAC4.png";
import ORH from "../images/ORH1.png";
import ORH2 from "../images/ORH2.png";
import ORH3 from "../images/ORH3.png";
import ORH4 from "../images/ORH4.png";
import Ref from "../images/REF1.png";
import Ref2 from "../images/REF2.jpg";
import SAC from "../images/SAC1.jpg";
import SAC2 from "../images/SAC2.png";
import SAC3 from "../images/SAC3.jpg";
import Geyser from "../images/GEY1.png";
import WM from "../images/WM1.jpg";
import WM2 from "../images/WM2.jpg";

export const products = {
  "window-ac": {
    name: "Window AC",
    image: Window,
    variants: {
      "1.0 TON": {
        image: Window,
        "3": 8756,
        "4": 9570,
        "5": 10287,
        "6": 10910,
        "7": 11053,
        "8": 11330,
        "12": 12330,
      },
      "1.5 TON": {
        image: Window2,
        "3": 8857,
        "4": 9570,
        "5": 10287,
        "6": 11035,
        "7": 11519,
        "8": 11616,
        "12": 12616,
      },
      "2.0 TON": {
        image: Window3,
        "3": 8957,
        "4": 9790,
        "5": 10524,
        "6": 11161,
        "7": 11650,
        "8": 11748,
        "12": 12748,
      },
    },
    description: "Energy-efficient window air conditioners designed to provide optimal cooling while saving on electricity costs. Perfect for homes, offices, and small spaces, these units combine compact design with powerful performance to keep you cool even during the hottest days. Equipped with advanced features such as adjustable cooling modes, eco-friendly refrigerants, and quiet operation, these ACs ensure comfort without compromise. Enjoy a hassle-free rental experience with flexible plans tailored to suit your needs.",
  },
  "split-ac": {
    name: "Split AC",
    image: SAC,
    variants: {
      "1.0 TON": {
        image: SAC,
        "3": 10749,
        "4": 12822,
        "5": 12958,
        "6": 13176,
        "7": 13367,
        "8": 13530,
        "12": 14530,
      },
      "1.5 TON": {
        image: SAC2,
        "3": 11497,
        "4": 13856,
        "5": 14003,
        "6": 14238,
        "7": 14445,
        "8": 14621,
        "12": 15621,
      },
      "2.0 TON": {
        image: SAC3,
        "3": 12355,
        "4": 14890,
        "5": 15048,
        "6": 15301,
        "7": 15523,
        "8": 15712,
        "12": 16712,
      },
    },
    description: "Premium split air conditioners designed for efficient and uniform cooling, ensuring comfort in every corner of your space. These ACs combine sleek, modern designs with advanced technology to deliver superior performance while maintaining energy efficiency. Ideal for homes, offices, and large rooms, they come equipped with features like smart temperature controls, inverter technology for energy savings, and whisper-quiet operation. Experience a luxurious cooling experience with eco-friendly refrigerants, long-lasting durability, and easy maintenance. Flexible rental plans make these high-performance ACs accessible for everyone, giving you the perfect balance of comfort and convenience.",
  },
  "room-heater": {
    name: "Room Heater",
    image: ORH,
    variants: {
      "9Fin": {
        image: ORH,
        "1": 2750,
        "2": 3850,
        "3": 4400,
      },
      "11Fin": {
        image: ORH2,
        "1": 3080,
        "2": 4400,
        "3": 4950,
      },
      "13Fin": {
        image: ORH3,
        "1": 3300,
        "2": 4840,
        "3": 5060,
      },
    },
    description: "Efficient room heaters designed to keep you warm and cozy during the chilly winter months. These heaters offer rapid and even heating, ensuring a comfortable environment in your home or office. With advanced safety features like overheat protection and tip-over switches, they provide peace of mind while in use. Compact and portable, they are perfect for any room size and blend seamlessly with your decor. Enjoy energy-efficient performance, adjustable temperature controls, and whisper-quiet operation for a hassle-free experience. Flexible rental plans make it easy to stay warm without a long-term commitment.",
  },
  "geyser": {
    name: "Geyser",
    image: Geyser,
    variants: {
      "15L - 20L": {
        image: Geyser,
        "2": 2750,
        "3": 2970,
        "4": 3257,
        "5": 3301,
      },
    },
    description: "Instant water heaters designed to provide hot water on demand, ensuring maximum convenience and efficiency. Perfect for homes, apartments, and offices, these compact units heat water in seconds, saving you time and energy. Built with advanced safety features like automatic shut-off, thermal protection, and corrosion-resistant tanks, they guarantee safe and reliable operation. Enjoy energy-efficient performance, sleek designs that fit any space, and hassle-free installation. Whether for quick showers or kitchen use, these water heaters offer unmatched convenience and comfort. Flexible rental plans make it easy to access hot water whenever you need it.",
  },
  "refrigerator": {
    name: "Refrigerator",
    image: Ref,
    variants: {
      "150-220L": {
        image: Ref,
        "4": 4048,
        "5": 4840,
        "6": 5280,
        "7": 6160,
        "8": 7040,
        "9": 7920,
        "10": 8800,
        "11": 9680,
        "12": 10560,
      },
      "220-400L": {
        image: Ref2,
        "4": 4554,
        "5": 5445,
        "6": 5940,
        "7": 6930,
        "8": 7920,
        "9": 8910,
        "10": 9900,
        "11": 10890,
        "12": 11880,
      },
    },
    description: "Modern refrigerators designed to enhance your kitchen with style, efficiency, and functionality. These refrigerators offer spacious storage, innovative cooling technology, and energy-efficient performance to keep your food fresh for longer. With features like adjustable shelves, frost-free operation, and smart temperature controls, they cater to all your refrigeration needs. Sleek and durable, they complement any kitchen decor while ensuring reliable performance. Ideal for homes, offices, or commercial spaces, these refrigerators combine convenience with advanced technology. Flexible rental plans make upgrading to a modern refrigerator both affordable and hassle-free.",
  },
  "washing-machine": {
    name: "Washing Machine",
    image: WM,
    variants: {
      "semi-automatic": {
        image: WM,
        "4": 3542,
        "5": 4235,
        "6": 4620,
        "7": 5390,
        "8": 6160,
        "9": 6930,
        "10": 7700,
        "11": 8470,
        "12": 9240,
      },
      "fully-automatic": {
        image: WM2,
        "4": 3795,
        "5": 4538,
        "6": 4950,
        "7": 5775,
        "8": 6600,
        "9": 7425,
        "10": 8250,
        "11": 9075,
        "12": 9900,
      },
    },
    description: "Efficient washing machines designed to make your laundry experience effortless and convenient. These machines combine advanced cleaning technology with energy-efficient performance to deliver spotless results while saving water and electricity. Featuring multiple wash programs, quick wash options, and user-friendly controls, they cater to all fabric types and laundry needs. Durable and stylish, these washing machines are perfect for homes, apartments, and even commercial spaces. With low noise operation, large capacities, and modern designs, they ensure a seamless blend of functionality and aesthetics. Flexible rental plans make upgrading to an efficient washing machine both easy and affordable.",
  },
};