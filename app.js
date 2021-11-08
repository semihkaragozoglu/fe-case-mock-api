const express = require("express");
var cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const mockProduct = [
  {
    id: 1,
    name: "Apple Iphone 11",
    brandId: 1,
    brandName: "Apple",
    colorId: 1,
    colorName: "Sarı",
    price: 9800,
    createdDate: "2020-11-07T15:51:26.392Z",
    discountPercentage: 11,
  },
  {
    id: 2,
    name: "Apple Iphone 11",
    brandId: 1,
    brandName: "Apple",
    colorId: 2,
    colorName: "Beyaz",
    price: 9800,
    createdDate: "2020-11-07T15:51:26.392Z",
    discountPercentage: 11,
  },
  {
    id: 3,
    name: "Apple Iphone 11",
    brandId: 1,
    brandName: "Apple",
    colorId: 3,
    colorName: "Siyah",
    price: 9810,
    createdDate: "2020-10-07T15:51:26.392Z",
    discountPercentage: 11,
  },
  {
    id: 4,
    name: "Apple Iphone 12",
    brandId: 1,
    brandName: "Apple",
    colorId: 1,
    colorName: "Sarı",
    price: 11999.99,
    createdDate: "2021-09-07T15:51:26.392Z",
    discountPercentage: 15,
  },
  {
    id: 5,
    name: "Apple Iphone 12",
    brandId: 1,
    brandName: "Apple",
    colorId: 2,
    colorName: "Beyaz",
    price: 12005.0,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 16,
  },
  {
    id: 6,
    name: "Apple Iphone 11",
    brandId: 1,
    brandName: "Apple",
    colorId: 2,
    colorName: "Siyah",
    price: 13900.5,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 14,
  },
  {
    id: 7,
    name: "Samsung Galaxy S5",
    brandId: 2,
    brandName: "Samsung",
    colorId: 2,
    colorName: "Beyaz",
    price: 3000,
    createdDate: "2014-11-07T15:51:26.392Z",
    discountPercentage: 21,
  },
  {
    id: 8,
    name: "Samsung Galaxy S6",
    brandId: 2,
    brandName: "Samsung",
    colorId: 3,
    colorName: "Siyah",
    price: 3500,
    createdDate: "2015-11-07T15:51:26.392Z",
    discountPercentage: 20,
  },
  {
    id: 9,
    name: "Samsung Galaxy S7",
    brandId: 2,
    brandName: "Samsung",
    colorId: 3,
    colorName: "Siyah",
    price: 4000,
    createdDate: "2016-11-07T15:51:26.392Z",
    discountPercentage: 19,
  },
  {
    id: 10,
    name: "Samsung Galaxy S8",
    brandId: 2,
    brandName: "Samsung",
    colorId: 1,
    colorName: "Sarı",
    price: 5000,
    createdDate: "2017-11-07T15:51:26.392Z",
    discountPercentage: 18,
  },
  {
    id: 11,
    name: "Samsung Galaxy S9",
    brandId: 2,
    brandName: "Samsung",
    colorId: 2,
    colorName: "Beyaz",
    price: 7000,
    createdDate: "2018-11-07T15:51:26.392Z",
    discountPercentage: 17,
  },
  {
    id: 12,
    name: "Nokia 3310",
    brandId: 3,
    brandName: "Nokia",
    colorId: 4,
    colorName: "Gri",
    price: 1000,
    createdDate: "2005-11-07T15:51:26.392Z",
    discountPercentage: 50,
  },
  {
    id: 13,
    name: "Nokia 5800",
    brandId: 3,
    brandName: "Nokia",
    colorId: 5,
    colorName: "Kırmızı",
    price: 2000,
    createdDate: "2009-11-07T15:51:26.392Z",
    discountPercentage: 20,
  },
  {
    id: 14,
    name: "LG Nanocell 65 inch",
    brandId: 4,
    brandName: "LG",
    colorId: 3,
    colorName: "Siyah",
    price: 16000,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 5,
  },
  {
    id: 15,
    name: "LG Nanocell 55 inch",
    brandId: 4,
    brandName: "LG",
    colorId: 2,
    colorName: "Beyaz",
    price: 12000,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 6,
  },
  {
    id: 16,
    name: "Huawei Mate 20",
    brandId: 5,
    brandName: "Huawei",
    colorId: 2,
    colorName: "Beyaz",
    price: 6000,
    createdDate: "2019-11-07T15:51:26.392Z",
    discountPercentage: 11,
  },
  {
    id: 17,
    name: "Huawei Mate 20 pro",
    brandId: 5,
    brandName: "Huawei",
    colorId: 3,
    colorName: "Siyah",
    price: 9000,
    createdDate: "2019-11-07T15:51:26.392Z",
    discountPercentage: 15,
  },
  {
    id: 18,
    name: "Xiaomi Redmi note 9",
    brandId: 6,
    brandName: "Xiaomi",
    colorId: 2,
    colorName: "Beyaz",
    price: 3000,
    createdDate: "2019-11-07T15:51:26.392Z",
    discountPercentage: 0,
  },
  {
    id: 19,
    name: "Xiaomi Redmi note 10",
    brandId: 6,
    brandName: "Xiaomi",
    colorId: 2,
    colorName: "Beyaz",
    price: 4000,
    createdDate: "2020-11-07T15:51:26.392Z",
    discountPercentage: 0,
  },
  {
    id: 20,
    name: "General Mobile su geçirmez akıllı telefon",
    brandId: 7,
    brandName: "Xiaomi",
    colorId: 3,
    colorName: "Siyah",
    price: 5000,
    createdDate: "2021-09-07T15:51:26.392Z",
    discountPercentage: 0,
  },
  {
    id: 21,
    name: "Xiaomi Redmi note 11",
    brandId: 6,
    brandName: "Xiaomi",
    colorId: 3,
    colorName: "Siyah",
    price: 4500,
    createdDate: "2020-12-07T15:51:26.392Z",
    discountPercentage: 0,
  },
  {
    id: 22,
    name: "Xiaomi Redmi note 11 plus",
    brandId: 6,
    brandName: "Xiaomi",
    colorId: 1,
    colorName: "Sarı",
    price: 4900,
    createdDate: "2020-11-07T15:51:26.392Z",
    discountPercentage: 20,
  },
  {
    id: 23,
    name: "Xiaomi Redmi note 12",
    brandId: 6,
    brandName: "Xiaomi",
    colorId: 2,
    colorName: "Beyaz",
    price: 6000,
    createdDate: "2020-11-07T15:51:26.392Z",
    discountPercentage: 30,
  },
  {
    id: 24,
    name: "Apple Iphone 11 Beyaz Kılıf",
    brandId: 1,
    brandName: "Apple",
    colorId: 2,
    colorName: "Beyaz",
    price: 60,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 30,
  },
  {
    id: 25,
    name: "Apple Iphone 11 Beyaz Kılıf",
    brandId: 1,
    brandName: "Apple",
    colorId: 3,
    colorName: "Siyah",
    price: 60,
    createdDate: "2020-11-07T15:51:26.392Z",
    discountPercentage: 32,
  },
  {
    id: 26,
    name: "Apple Iphone 12 Siyah Kılıf",
    brandId: 1,
    brandName: "Apple",
    colorId: 3,
    colorName: "Siyah",
    price: 60,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 29,
  },
  {
    id: 27,
    name: "Apple Watch Siyah",
    brandId: 1,
    brandName: "Apple",
    colorId: 3,
    colorName: "Siyah",
    price: 3600,
    createdDate: "2019-11-07T15:51:26.392Z",
    discountPercentage: 0,
  },
  {
    id: 28,
    name: "Apple Watch Siyah",
    brandId: 1,
    brandName: "Apple",
    colorId: 2,
    colorName: "Beyaz",
    price: 3690,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 29,
  },
  {
    id: 29,
    name: "Apple Air Pods",
    brandId: 1,
    brandName: "Apple",
    colorId: 2,
    colorName: "Beyaz",
    price: 1900,
    createdDate: "2021-11-07T15:51:26.392Z",
    discountPercentage: 0,
  },
  {
    id: 30,
    name: "Apple Iphone SE 2nd generation 64gb",
    brandId: 1,
    brandName: "Apple",
    colorId: 2,
    colorName: "Beyaz",
    price: 6000,
    createdDate: "2019-11-07T15:51:26.392Z",
    discountPercentage: 3,
  },
  {
    id: 31,
    name: "Apple Iphone SE 2nd generation 64gb siyah",
    brandId: 1,
    brandName: "Apple",
    colorId: 3,
    colorName: "Siyah",
    price: 5999,
    createdDate: "2019-11-07T15:51:26.392Z",
    discountPercentage: 3,
  },
  {
    id: 32,
    name: "Samsung Siyah Çamaşır Makinesi 8 kg",
    brandId: 2,
    brandName: "Samsung",
    colorId: 3,
    colorName: "Siyah",
    price: 4000,
    createdDate: "2017-11-07T15:51:26.392Z",
    discountPercentage: 15,
  },
  {
    id: 33,
    name: "Samsung Beyaz Çamaşır Makinesi 8 kg",
    brandId: 2,
    brandName: "Samsung",
    colorId: 2,
    colorName: "Beyaz",
    price: 4000,
    createdDate: "2017-11-07T15:51:26.392Z",
    discountPercentage: 15,
  },
  {
    id: 34,
    name: "Samsung Saç Kurutma Makinesi",
    brandId: 2,
    brandName: "Samsung",
    colorId: 2,
    colorName: "Beyaz",
    price: 400,
    createdDate: "2018-11-07T15:51:26.392Z",
    discountPercentage: 10,
  },
  {
    id: 35,
    name: "Samsung Hava Temizleyici",
    brandId: 2,
    brandName: "Samsung",
    colorId: 2,
    colorName: "Beyaz",
    price: 395,
    createdDate: "2019-11-07T15:51:26.392Z",
    discountPercentage: 10,
  },
  {
    id: 36,
    name: "Samsung Ütü",
    brandId: 2,
    brandName: "Samsung",
    colorId: 2,
    colorName: "Beyaz",
    price: 900,
    createdDate: "2016-11-07T15:51:26.392Z",
    discountPercentage: 10,
  },
];

app.get("/getAll", (req, res) => {
  res.send(JSON.stringify(mockProduct));
});

app.get("/filter", (req, res) => {
  let currentPage = 1;
  if (req.query.currentPage) {
    currentPage = req.query.currentPage;
  }

  let sortType = "1";

  let result = [...mockProduct];
  if (req.query.color) {
    result = result.filter((res) => {
      return res.colorId == req.query.color;
    });
  }

  if (req.query.brand) {
    result = result.filter((res) => {
      return res.brandId == req.query.brand;
    });
  }

  if (req.query.keyword) {
    result = result.filter((res) => {
      return res.name.toLowerCase().includes(req.query.keyword.toLowerCase());
    });
  }

  if (req.query.sortBy) {
    if (req.query.sortType && req.query.sortType == "desc") {
      sortType = -1;
    }
    //TODO pricea göre sıralama indirim uygulanmış price'a göre olmalı
    result = result.sort((a, b) => a.id < b.id);
  }

  let totalPage = Math.ceil(result.length / 12);
  let paginated = result.slice((currentPage - 1) * 12, currentPage * 12);

  res.send(
    JSON.stringify({
      currentPage: currentPage,
      totalPage: totalPage,
      paginated: paginated,
      result: result,
    })
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
