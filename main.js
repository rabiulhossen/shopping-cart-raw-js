// console.log('hello shopping cart');
// const shop = document.getElementById('shop');
// const card = document.getElementById('card');

// let basket = JSON.stringify(localStorage.getItem("cart")) ||   [];
// console.log(basket)
// const shopItemData = [
//    {
//       id: 1,
//       name: 'classic shirt',
//       desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       img: './21.png',
//       price: '$89',
//    },
//    {
//       id: 2,
//       name: 'casual t-shirt',
//       desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       img: './21.png',
//       price: '$30',
//    },
//    {
//       id: 3,
//       name: 'official shirt',
//       desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       img: './21.png',
//       price: '$39',
//    },
//    {
//       id: 4,
//       name: 'stylish shirt',
//       desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       img: './21.png',
//       price: '$45',
//    },
// ];

// const generateShop = () => {
//    return (shop.innerHTML = shopItemData
//       .map((item) => {
//          let {id} = item
//          let search =
//            item.find((m) => m.id === id) || [];
         
//          return `<div class="card" id=${item.id}>
//                <img src=${item.img} alt="" class="card-img" />
//                <h2>${item.name}</h2>
//                <p>
//                ${item.desc}
//                </p>
//                <div class="down">
//                <div>
//                     <h2>${item.price}</h2>
//                </div>
//                <div class="left-side">
//                     <button onClick="decrement(${item.id})" >-</button>
//                     <p id={id}>${search.item === undefined?0 :search.item}</p>
//                     <button onClick="increment(${item.id})">+</button>
//                </div>
//                </div>
//        </div>`;
//       })
//       .join());
// };

// generateShop();

// const increment = (id) => {
//    let selectedItem = id;

//    let search = basket.find((every) => every.id === selectedItem);
//    if (search === undefined) {
//       basket.push({
//          id: selectedItem,
//          item: 1,
//       });
//    } else {
//       search.item += 1;
//    }

//    console.log(basket);
//    update(selectedItem);
//    localStorage.setItem("cart",JSON.stringify(basket))
// };

// const decrement = (id) => {
//    let selectedItem = id;
//    let search = basket.find((every) => every.id === selectedItem);
//    if (search === undefined) return;
//    else if (search.item === 0) return;
//    else {
//       search.item -= 1;
//    }

//    // console.log(basket);
//    update(selectedItem);
//  console.log('selected item is',selectedItem);
// basket= basket.filter((item)=> item.item != 0)
// localStorage.setItem("cart",JSON.stringify(basket))
// };

// let update = (id) => {
  
//    let search = basket.find((x) => x.id === id);
//    console.log('search item is', search.item);
// document.getElementById(id).inner.innerHTML= search.item;
  
// };



