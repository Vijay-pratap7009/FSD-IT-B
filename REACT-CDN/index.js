function Book(props){
    const image=React.createElement('img',{
        src:props.src,
        width:"150",
        height:"200",
        alt:"book image"
});
    const h4=React.createElement('h4',null,`Price :${props.price}`);
    return React.createElement('div',{className:"card"},image,h4);
}
const books=[{
    src:"https://m.media-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    price:350
},{
    src:"https://m.media-amazon.com/images/I/41+e3refnZL._SX331_BO1,204,203,200_.jpg",
    price:250   
},{
    src:"https://m.media-amazon.com/images/I/41as+WafrFL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    price:150   
}];
const parent=document.getElementById('root');
const root =ReactDOM.createRoot(parent);
root.render(
    React.createElement(
        React.Fragment,
        null,
        books.map((book, idx) =>
            React.createElement(Book, { src: book.src, price: book.price, key: idx })
        )
    )
);

// const image=React.createElement('img',{
//     src:"https://m.media-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
//     alt:"book image",
//     height:"200",
//     width:"150"
// },null);
// const h4=React.createElement('h4',null,"Price :350");
// const div=React.createElement('div',{className:"card"},image,h4);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(div);