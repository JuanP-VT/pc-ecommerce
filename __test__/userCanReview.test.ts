import { ProductWithId, Review } from "@/app/types/product";
import { User } from "@/app/types/user";
import userCanReview from "@/app/utils/userCanReview";
import { Session } from "next-auth";

it("should return true if the user has the item and it has not review yet", () => {
  const product = {
    _id: "648ba2dcab0afbc3426cfb51",
    name: "GOWENIC GTX 1060 Graphics Card, 6GB/5GB/3GB GDDR5 Gaming Graphics Card 192bit 4K HDR 8008MHz Memory Frequency, HDMI DVI DP Interface, Dual Fans(5GB)",
    category: "GPU",
    img: [
      "https://m.media-amazon.com/images/I/61Y7+5QUGEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71C7ufrB4tL._AC_SL1500_.jpg",
    ],
    description: [
      "【GDDR5 192bit】: The computer graphics card is a GDDR5 (192bit) video memory graphics card, with powerful image processing capabilities, 1759MHz boost clock, 8008MHz video memory main frequency",
      "【Wide Compatible】: The GPU graphics card is compatible with for 1060 GAMING, for 06G P4 6161 KR, for 6GB GDDR5, for ACX 2.0",
      "【4K HDR Technology】: The 192bit graphics card supports a clearer and brighter large picture, supports HDR technology, and presents the details of the dark and bright parts that could not be displayed before",
      "【Good Stability】: The gaming graphics card adopts PCB board and high temperature resistant capacitors, which ensure more stable gaming and entertainment",
      "【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance",
    ],
    stock: 237,
    price: 243.99,
    discountPercentage: 10,
    specs: [],
  };
  const session: Session = {
    expires: "",
    user: {
      name: "PB-VT",
      email: null,
      image: "https://avatars.githubusercontent.com/u/98140708?v=4",
      _id: "123",
      id: "",
      rol: "user",
      cash: 9560.82,
      items: [
        {
          _id: "648ba2dcab0afbc3426cfb51",
          name: "GOWENIC GTX 1060 Graphics Card, 6GB/5GB/3GB GDDR5 Gaming Graphics Card 192bit 4K HDR 8008MHz Memory Frequency, HDMI DVI DP Interface, Dual Fans(5GB)",
          category: "GPU",
          img: [
            "https://m.media-amazon.com/images/I/61Y7+5QUGEL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71C7ufrB4tL._AC_SL1500_.jpg",
          ],
          description: [
            "【GDDR5 192bit】: The computer graphics card is a GDDR5 (192bit) video memory graphics card, with powerful image processing capabilities, 1759MHz boost clock, 8008MHz video memory main frequency",
            "【Wide Compatible】: The GPU graphics card is compatible with for 1060 GAMING, for 06G P4 6161 KR, for 6GB GDDR5, for ACX 2.0",
            "【4K HDR Technology】: The 192bit graphics card supports a clearer and brighter large picture, supports HDR technology, and presents the details of the dark and bright parts that could not be displayed before",
            "【Good Stability】: The gaming graphics card adopts PCB board and high temperature resistant capacitors, which ensure more stable gaming and entertainment",
            "【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance",
          ],
          stock: 240,
          price: 243.99,
          discountPercentage: 10,
          specs: [],
        },
      ],
    },
  };
  const userCanRequest = userCanReview(product, session);
  expect(userCanRequest).toBe(true);
});

it("should return false if user does not have the item purchased", () => {
  const product = {
    _id: "648ba2dcab0afbc3426cfb51",
    name: "GOWENIC GTX 1060 Graphics Card, 6GB/5GB/3GB GDDR5 Gaming Graphics Card 192bit 4K HDR 8008MHz Memory Frequency, HDMI DVI DP Interface, Dual Fans(5GB)",
    category: "GPU",
    img: [
      "https://m.media-amazon.com/images/I/61Y7+5QUGEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71C7ufrB4tL._AC_SL1500_.jpg",
    ],
    description: [
      "【GDDR5 192bit】: The computer graphics card is a GDDR5 (192bit) video memory graphics card, with powerful image processing capabilities, 1759MHz boost clock, 8008MHz video memory main frequency",
      "【Wide Compatible】: The GPU graphics card is compatible with for 1060 GAMING, for 06G P4 6161 KR, for 6GB GDDR5, for ACX 2.0",
      "【4K HDR Technology】: The 192bit graphics card supports a clearer and brighter large picture, supports HDR technology, and presents the details of the dark and bright parts that could not be displayed before",
      "【Good Stability】: The gaming graphics card adopts PCB board and high temperature resistant capacitors, which ensure more stable gaming and entertainment",
      "【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance",
    ],
    stock: 237,
    price: 243.99,
    discountPercentage: 10,
    specs: [],
  };
  const session: Session = {
    expires: "",
    user: {
      name: "PB-VT",
      email: null,
      image: "https://avatars.githubusercontent.com/u/98140708?v=4",
      _id: "123",
      id: "",
      rol: "user",
      cash: 9560.82,
      items: [],
    },
  };
  const userCanRequest = userCanReview(product, session);
  expect(userCanRequest).toBe(false);
});

it("should return false if user has already review", () => {
  const user: User = {
    name: "PB-VT",
    email: "null",
    image: "https://avatars.githubusercontent.com/u/98140708?v=4",
    _id: "123",
    rol: "user",
    cash: 9560.82,
    items: [
      {
        _id: "648ba2dcab0afbc3426cfb51",
        name: "GOWENIC GTX 1060 Graphics Card, 6GB/5GB/3GB GDDR5 Gaming Graphics Card 192bit 4K HDR 8008MHz Memory Frequency, HDMI DVI DP Interface, Dual Fans(5GB)",
        category: "GPU",
        img: [
          "https://m.media-amazon.com/images/I/61Y7+5QUGEL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71C7ufrB4tL._AC_SL1500_.jpg",
        ],
        description: [
          "【GDDR5 192bit】: The computer graphics card is a GDDR5 (192bit) video memory graphics card, with powerful image processing capabilities, 1759MHz boost clock, 8008MHz video memory main frequency",
          "【Wide Compatible】: The GPU graphics card is compatible with for 1060 GAMING, for 06G P4 6161 KR, for 6GB GDDR5, for ACX 2.0",
          "【4K HDR Technology】: The 192bit graphics card supports a clearer and brighter large picture, supports HDR technology, and presents the details of the dark and bright parts that could not be displayed before",
          "【Good Stability】: The gaming graphics card adopts PCB board and high temperature resistant capacitors, which ensure more stable gaming and entertainment",
          "【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance",
        ],
        stock: 240,
        price: 243.99,
        discountPercentage: 10,
        specs: [],
      },
    ],
  };
  const reviews: Review = { comment: "", stars: 5, title: "nice", user };
  const product: ProductWithId = {
    _id: "648ba2dcab0afbc3426cfb51",
    name: "GOWENIC GTX 1060 Graphics Card, 6GB/5GB/3GB GDDR5 Gaming Graphics Card 192bit 4K HDR 8008MHz Memory Frequency, HDMI DVI DP Interface, Dual Fans(5GB)",
    category: "GPU",
    img: [
      "https://m.media-amazon.com/images/I/61Y7+5QUGEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71C7ufrB4tL._AC_SL1500_.jpg",
    ],
    description: [
      "【GDDR5 192bit】: The computer graphics card is a GDDR5 (192bit) video memory graphics card, with powerful image processing capabilities, 1759MHz boost clock, 8008MHz video memory main frequency",
      "【Wide Compatible】: The GPU graphics card is compatible with for 1060 GAMING, for 06G P4 6161 KR, for 6GB GDDR5, for ACX 2.0",
      "【4K HDR Technology】: The 192bit graphics card supports a clearer and brighter large picture, supports HDR technology, and presents the details of the dark and bright parts that could not be displayed before",
      "【Good Stability】: The gaming graphics card adopts PCB board and high temperature resistant capacitors, which ensure more stable gaming and entertainment",
      "【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance",
    ],
    stock: 237,
    price: 243.99,
    discountPercentage: 10,
    specs: [],
    reviews: [reviews],
  };
  const session: Session = {
    expires: "",
    user: {
      name: "PB-VT",
      email: null,
      image: "https://avatars.githubusercontent.com/u/98140708?v=4",
      _id: "123",
      id: "",
      rol: "user",
      cash: 9560.82,
      items: [
        {
          _id: "648ba2dcab0afbc3426cfb51",
          name: "GOWENIC GTX 1060 Graphics Card, 6GB/5GB/3GB GDDR5 Gaming Graphics Card 192bit 4K HDR 8008MHz Memory Frequency, HDMI DVI DP Interface, Dual Fans(5GB)",
          category: "GPU",
          img: [
            "https://m.media-amazon.com/images/I/61Y7+5QUGEL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71C7ufrB4tL._AC_SL1500_.jpg",
          ],
          description: [
            "【GDDR5 192bit】: The computer graphics card is a GDDR5 (192bit) video memory graphics card, with powerful image processing capabilities, 1759MHz boost clock, 8008MHz video memory main frequency",
            "【Wide Compatible】: The GPU graphics card is compatible with for 1060 GAMING, for 06G P4 6161 KR, for 6GB GDDR5, for ACX 2.0",
            "【4K HDR Technology】: The 192bit graphics card supports a clearer and brighter large picture, supports HDR technology, and presents the details of the dark and bright parts that could not be displayed before",
            "【Good Stability】: The gaming graphics card adopts PCB board and high temperature resistant capacitors, which ensure more stable gaming and entertainment",
            "【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance",
          ],
          stock: 240,
          price: 243.99,
          discountPercentage: 10,
          specs: [],
        },
      ],
    },
  };
  const userCanRequest = userCanReview(product, session);
  expect(userCanRequest).toBe(false);
});
