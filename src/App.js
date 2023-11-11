import './App.css'
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ScrollTopButton from './components/ScrollTopButton';
import Shop from './pages/Shop';

function App() {

  const products = [
    {
      id: 1,
      new:'New',
      tag: 'Sale',
      name: "Casual Dress",
      price: "60.00",
      image:
        "https://img.freepik.com/free-photo/full-shot-smiling-blonde-woman_23-2148316636.jpg?w=740&t=st=1696524313~exp=1696524913~hmac=32e3d545b6c06efa3b13a01cbd80ff7fe27050c048690dd60e98a6499bd3a8d4",
        additionalImages: [
          "https://img.freepik.com/free-photo/full-shot-smiling-blonde-woman_23-2148316636.jpg?w=740&t=st=1696524313~exp=1696524913~hmac=32e3d545b6c06efa3b13a01cbd80ff7fe27050c048690dd60e98a6499bd3a8d4",
          "https://img.freepik.com/free-photo/full-shot-smiling-blonde-woman_23-2148316636.jpg?w=740&t=st=1696524313~exp=1696524913~hmac=32e3d545b6c06efa3b13a01cbd80ff7fe27050c048690dd60e98a6499bd3a8d4",
          "https://img.freepik.com/free-photo/full-shot-smiling-blonde-woman_23-2148316636.jpg?w=740&t=st=1696524313~exp=1696524913~hmac=32e3d545b6c06efa3b13a01cbd80ff7fe27050c048690dd60e98a6499bd3a8d4",
          "https://img.freepik.com/free-photo/full-shot-smiling-blonde-woman_23-2148316636.jpg?w=740&t=st=1696524313~exp=1696524913~hmac=32e3d545b6c06efa3b13a01cbd80ff7fe27050c048690dd60e98a6499bd3a8d4",
        ],
      category: "Clothing",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4,
    },
    {
      id: 2,
      new:'New',
      name: "Women leather hand bag",
      price: "84.00",
      image:
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
      category: "Bag",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
      ],
    },
    {
      id: 3,
      new:'New',
      tag: 'Out of Stock',
      name: "Fashion Shoes",
      price: "80.00",
      image:
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
      category: "Shoes",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 3,
      additionalImages: [
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
      ],
    },

    {
      id: 4,
      new:'New',
      tag: 'Top',
      name: "Bag Pack",
      price: "19.99",
      image:
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
      category: "Bag",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 3.2,
      additionalImages: [
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
      ],
    },

    {
      id: 5,
      new:'New',
      name: "West Dress",
      price: "80.00",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-cute-brunette-woman-model-casual-autumn-gray-sweater-clothes-with-no-makeup-isolated-white-with-handbag_158538-14392.jpg?w=740&t=st=1696524177~exp=1696524777~hmac=3ef034ff598fa1779c716294fd1f31a9d3f214c59c04f1cd5ff2e8c29f3eb925",
      category: "Clothing",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.3,
      additionalImages: [
        "https://img.freepik.com/free-photo/portrait-beautiful-cute-brunette-woman-model-casual-autumn-gray-sweater-clothes-with-no-makeup-isolated-white-with-handbag_158538-14392.jpg?w=740&t=st=1696524177~exp=1696524777~hmac=3ef034ff598fa1779c716294fd1f31a9d3f214c59c04f1cd5ff2e8c29f3eb925",
        "https://img.freepik.com/free-photo/portrait-beautiful-cute-brunette-woman-model-casual-autumn-gray-sweater-clothes-with-no-makeup-isolated-white-with-handbag_158538-14392.jpg?w=740&t=st=1696524177~exp=1696524777~hmac=3ef034ff598fa1779c716294fd1f31a9d3f214c59c04f1cd5ff2e8c29f3eb925",
        "https://img.freepik.com/free-photo/portrait-beautiful-cute-brunette-woman-model-casual-autumn-gray-sweater-clothes-with-no-makeup-isolated-white-with-handbag_158538-14392.jpg?w=740&t=st=1696524177~exp=1696524777~hmac=3ef034ff598fa1779c716294fd1f31a9d3f214c59c04f1cd5ff2e8c29f3eb925",
        "https://img.freepik.com/free-photo/portrait-beautiful-cute-brunette-woman-model-casual-autumn-gray-sweater-clothes-with-no-makeup-isolated-white-with-handbag_158538-14392.jpg?w=740&t=st=1696524177~exp=1696524777~hmac=3ef034ff598fa1779c716294fd1f31a9d3f214c59c04f1cd5ff2e8c29f3eb925",
      ],
    },
    {
      id: 6,
      new:'New',
      tag: 'Top',
      name: "Cool Heel",
      price: "334.00",
      image:
        "https://img.freepik.com/free-photo/woman-shoes_1203-8746.jpg?w=996&t=st=1696519471~exp=1696520071~hmac=dcd1a954d33dbfe2c3fd1ec1a0027a91b3ab939d4fd20d35abca2b6b1ae19329",
      category: "Shoes",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4,
      additionalImages: [
        "https://img.freepik.com/free-photo/woman-shoes_1203-8746.jpg?w=996&t=st=1696519471~exp=1696520071~hmac=dcd1a954d33dbfe2c3fd1ec1a0027a91b3ab939d4fd20d35abca2b6b1ae19329",
        "https://img.freepik.com/free-photo/woman-shoes_1203-8746.jpg?w=996&t=st=1696519471~exp=1696520071~hmac=dcd1a954d33dbfe2c3fd1ec1a0027a91b3ab939d4fd20d35abca2b6b1ae19329",
        "https://img.freepik.com/free-photo/woman-shoes_1203-8746.jpg?w=996&t=st=1696519471~exp=1696520071~hmac=dcd1a954d33dbfe2c3fd1ec1a0027a91b3ab939d4fd20d35abca2b6b1ae19329",
        "https://img.freepik.com/free-photo/woman-shoes_1203-8746.jpg?w=996&t=st=1696519471~exp=1696520071~hmac=dcd1a954d33dbfe2c3fd1ec1a0027a91b3ab939d4fd20d35abca2b6b1ae19329",
      ],
    },
    {
      id: 7,
      new:'New',
      tag: 'Out of Stock',
      name: "White Suit",
      price: "67.00-$76.00",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-white-summer-stylish-dress_158538-2727.jpg?w=740&t=st=1696519391~exp=1696519991~hmac=37fcf5cc8364e8080b1a196184955535a1db1bccbdb7fe513496b0b81301279f",
      category: "Clothing",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 3,
      additionalImages: [
        "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-white-summer-stylish-dress_158538-2727.jpg?w=740&t=st=1696519391~exp=1696519991~hmac=37fcf5cc8364e8080b1a196184955535a1db1bccbdb7fe513496b0b81301279f",
        "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-white-summer-stylish-dress_158538-2727.jpg?w=740&t=st=1696519391~exp=1696519991~hmac=37fcf5cc8364e8080b1a196184955535a1db1bccbdb7fe513496b0b81301279f",
        "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-white-summer-stylish-dress_158538-2727.jpg?w=740&t=st=1696519391~exp=1696519991~hmac=37fcf5cc8364e8080b1a196184955535a1db1bccbdb7fe513496b0b81301279f",
        "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-white-summer-stylish-dress_158538-2727.jpg?w=740&t=st=1696519391~exp=1696519991~hmac=37fcf5cc8364e8080b1a196184955535a1db1bccbdb7fe513496b0b81301279f",
      ],
    },
    {
      id: 8,
      new:'New',
      name: "Bucket Bag",
      price: "84.00",
      image:
        "https://img.freepik.com/free-photo/beautiful-men-fashion-with-leather-messenger-bag_1203-7607.jpg?w=360&t=st=1696522045~exp=1696522645~hmac=cf509ac978aacb9b0fd4851651e8615c12f54b154d356cd4296a9649aa5b8690",
      category: "Bag",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 2.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/beautiful-men-fashion-with-leather-messenger-bag_1203-7607.jpg?w=360&t=st=1696522045~exp=1696522645~hmac=cf509ac978aacb9b0fd4851651e8615c12f54b154d356cd4296a9649aa5b8690",
        "https://img.freepik.com/free-photo/beautiful-men-fashion-with-leather-messenger-bag_1203-7607.jpg?w=360&t=st=1696522045~exp=1696522645~hmac=cf509ac978aacb9b0fd4851651e8615c12f54b154d356cd4296a9649aa5b8690",
        "https://img.freepik.com/free-photo/beautiful-men-fashion-with-leather-messenger-bag_1203-7607.jpg?w=360&t=st=1696522045~exp=1696522645~hmac=cf509ac978aacb9b0fd4851651e8615c12f54b154d356cd4296a9649aa5b8690",
        "https://img.freepik.com/free-photo/beautiful-men-fashion-with-leather-messenger-bag_1203-7607.jpg?w=360&t=st=1696522045~exp=1696522645~hmac=cf509ac978aacb9b0fd4851651e8615c12f54b154d356cd4296a9649aa5b8690",
      ],
    },
    {
      id: 9,
      new:'New',
      tag: 'Sale',
      name: "Sweat Shirt",
      price: "341.00",
      image:
        "https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1696522118~exp=1696522718~hmac=ef6dab1b04ef8874c8b27d2c4b9491051c2947ad2165689d9d669b31742e5708",
      category: "Clothing",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      additionalImages: [
        "https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1696522118~exp=1696522718~hmac=ef6dab1b04ef8874c8b27d2c4b9491051c2947ad2165689d9d669b31742e5708",
        "https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1696522118~exp=1696522718~hmac=ef6dab1b04ef8874c8b27d2c4b9491051c2947ad2165689d9d669b31742e5708",
        "https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1696522118~exp=1696522718~hmac=ef6dab1b04ef8874c8b27d2c4b9491051c2947ad2165689d9d669b31742e5708",
        "https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1696522118~exp=1696522718~hmac=ef6dab1b04ef8874c8b27d2c4b9491051c2947ad2165689d9d669b31742e5708",
      ],
    },
    {
      id: 10,
      new:'New',
      tag: 'Top',
      name: "Off-White Khusa",
      price: "19.99",
      image:
        "https://img.freepik.com/free-photo/women-s-beige-low-heel-shoes-fashion_53876-101528.jpg?w=900&t=st=1696521863~exp=1696522463~hmac=cea8960033165f8c38b21c9df2a9ca091ea4ef4122bfb7fa4cd212410f8253e4",
      category: "Shoes",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 3.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/women-s-beige-low-heel-shoes-fashion_53876-101528.jpg?w=900&t=st=1696521863~exp=1696522463~hmac=cea8960033165f8c38b21c9df2a9ca091ea4ef4122bfb7fa4cd212410f8253e4",
        "https://img.freepik.com/free-photo/women-s-beige-low-heel-shoes-fashion_53876-101528.jpg?w=900&t=st=1696521863~exp=1696522463~hmac=cea8960033165f8c38b21c9df2a9ca091ea4ef4122bfb7fa4cd212410f8253e4",
        "https://img.freepik.com/free-photo/women-s-beige-low-heel-shoes-fashion_53876-101528.jpg?w=900&t=st=1696521863~exp=1696522463~hmac=cea8960033165f8c38b21c9df2a9ca091ea4ef4122bfb7fa4cd212410f8253e4",
        "https://img.freepik.com/free-photo/women-s-beige-low-heel-shoes-fashion_53876-101528.jpg?w=900&t=st=1696521863~exp=1696522463~hmac=cea8960033165f8c38b21c9df2a9ca091ea4ef4122bfb7fa4cd212410f8253e4",
      ],
    },
    {
      id: 11,
      new:'New',
      name: "Linen-blend Dress",
      price: "24.00",
      image:
        "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8562.jpg?w=740&t=st=1696524073~exp=1696524673~hmac=da21a31067c6864e611347c8c9e26c951eeb00e04470f2bfa0c921d35f5045f1",
      category: "Clothing",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4,
      additionalImages: [
        "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8562.jpg?w=740&t=st=1696524073~exp=1696524673~hmac=da21a31067c6864e611347c8c9e26c951eeb00e04470f2bfa0c921d35f5045f1",
        "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8562.jpg?w=740&t=st=1696524073~exp=1696524673~hmac=da21a31067c6864e611347c8c9e26c951eeb00e04470f2bfa0c921d35f5045f1",
        "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8562.jpg?w=740&t=st=1696524073~exp=1696524673~hmac=da21a31067c6864e611347c8c9e26c951eeb00e04470f2bfa0c921d35f5045f1",
        "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8562.jpg?w=740&t=st=1696524073~exp=1696524673~hmac=da21a31067c6864e611347c8c9e26c951eeb00e04470f2bfa0c921d35f5045f1",
      ],
    },
    {
      id: 12,
      new:'New',
      tag: 'Out of Stock',
      name: "White Over-coat",
      price: "119.00",
      image:
        "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-hipster-young-woman-model-white-coat-jacket-big-black-hat_158538-2842.jpg?w=740&t=st=1696524111~exp=1696524711~hmac=544e572efe732898047116b87e63e8639c34fa839f57349212bf59e801506c73",
      category: "Clothing",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-hipster-young-woman-model-white-coat-jacket-big-black-hat_158538-2842.jpg?w=740&t=st=1696524111~exp=1696524711~hmac=544e572efe732898047116b87e63e8639c34fa839f57349212bf59e801506c73",
        "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-hipster-young-woman-model-white-coat-jacket-big-black-hat_158538-2842.jpg?w=740&t=st=1696524111~exp=1696524711~hmac=544e572efe732898047116b87e63e8639c34fa839f57349212bf59e801506c73",
        "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-hipster-young-woman-model-white-coat-jacket-big-black-hat_158538-2842.jpg?w=740&t=st=1696524111~exp=1696524711~hmac=544e572efe732898047116b87e63e8639c34fa839f57349212bf59e801506c73",
        "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-hipster-young-woman-model-white-coat-jacket-big-black-hat_158538-2842.jpg?w=740&t=st=1696524111~exp=1696524711~hmac=544e572efe732898047116b87e63e8639c34fa839f57349212bf59e801506c73",
      ],
    },
    {
      id: 15,
      new:'New',
      tag: 'Top',
      name: "Silk-blend Suit",
      price: '60.00',
      image:
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-7413.jpg?w=360&t=st=1695490904~exp=1695491504~hmac=6d96249783ba95ecc188d9150c1224e7c5ef0edc1d698d1655fdab728eb794e8",
      category: "Women",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-7413.jpg?w=360&t=st=1695490904~exp=1695491504~hmac=6d96249783ba95ecc188d9150c1224e7c5ef0edc1d698d1655fdab728eb794e8",
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-7413.jpg?w=360&t=st=1695490904~exp=1695491504~hmac=6d96249783ba95ecc188d9150c1224e7c5ef0edc1d698d1655fdab728eb794e8",
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-7413.jpg?w=360&t=st=1695490904~exp=1695491504~hmac=6d96249783ba95ecc188d9150c1224e7c5ef0edc1d698d1655fdab728eb794e8",
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-7413.jpg?w=360&t=st=1695490904~exp=1695491504~hmac=6d96249783ba95ecc188d9150c1224e7c5ef0edc1d698d1655fdab728eb794e8",
      ],
    },
    {
      id: 16,
      new:'New',
      tag: 'Top',
      name: "Women leather hand bag",
      price: '84.00',
      image:
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
      category: "Women",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
      ],
    },
    {
      id: 17,
      new:'New',
      tag: 'Top',
      name: "Fashion Shoes",
      price: '80.00',
      image:
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
      category: "Women",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
      ],
    },

    {
      id: 18,
      new:'New',
      tag: 'Top',
      name: "Bag Pack",
      price: '19.99',
      image:
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
      category: "Men",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
      ],
    },

    {
      id: 19,
      new:'New',
      tag: 'Top',
      name: "West Dress",
      price: '80.00',
      image:
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1695490871~exp=1695491471~hmac=048238f0218013a318848b3b34d27f275fef25a1adf4a59f5a4678b56a09e0bf",
      category: "Women",
      colors: ["Red", "Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      rating: 4.5,
      additionalImages: [
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1695490871~exp=1695491471~hmac=048238f0218013a318848b3b34d27f275fef25a1adf4a59f5a4678b56a09e0bf",
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1695490871~exp=1695491471~hmac=048238f0218013a318848b3b34d27f275fef25a1adf4a59f5a4678b56a09e0bf",
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1695490871~exp=1695491471~hmac=048238f0218013a318848b3b34d27f275fef25a1adf4a59f5a4678b56a09e0bf",
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1695490871~exp=1695491471~hmac=048238f0218013a318848b3b34d27f275fef25a1adf4a59f5a4678b56a09e0bf",
      ],
    },
  ];

 

  const getLocalStorageData = () => {
    let localCartData = localStorage.getItem('myCart');
    if (!localCartData) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  }
  
  
  const [cart, setCart] = useState(getLocalStorageData());
  const [totalQuantity, setTotalQuantity] = useState(0); 
  console.log(cart)

  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, product) => total + (product.quantity || 1), 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  return (
    <>    
      <Router>
      <Navigation cart={cart} totalQuantity={totalQuantity} />
        <Routes>
          <Route path="/" element={<Home cart= {cart} products={products} setCart={setCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} setTotalQuantity={setTotalQuantity}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout cart={cart}/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} products={products}/>}
          />
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart} products={products} />}/>
        </Routes>
      </Router>
      <ScrollTopButton/>
      <Footer/>
    </>
  );
}

export default App;
