// // Declare Variables
// const buttons = document.querySelectorAll('btn')
// const storeItem = document.querySelectorAll('store-item')

// // Add Event Listener

// buttons.forEach(function(buttons) {
//     buttons.addEventListener('click', function(e) {
//         e.preventDefault()

//         const filter = e.target.dataset.filter;
//         if (filter === all) {

//             storeItem.forEach(function(item) {
//                 item.style.display = 'block'
//             })
//         } else if (filter === sofa) {
//             storeItem.forEach(function(item) {
//                 if (item.classList.contains('sofa')) {
//                     item.style.display = 'block'
//                 } else {
//                     item.style.display = 'none'
//                 }
//             })
//         } else if (filter === bed) {
//             storeItem.forEach(function(item) {
//                 if (item.classList.contains('bed')) {
//                     item.style.display = 'block'
//                 } else {
//                     item.style.display = 'none'
//                 }
//             })
//         } else if (filter === dinning) {
//             storeItem.forEach(function(item) {
//                 if (item.classList.contains('dinning')) {
//                     item.style.display = 'block'
//                 } else {
//                     item.style.display = 'none'
//                 }
//             })
//         } else if (filter === kitchen) {
//             storeItem.forEach(function(item) {
//                 if (item.classList.contains('kitchen')) {
//                     item.style.display = 'block'
//                 } else {
//                     item.style.display = 'none'
//                 }
//             })
//         }



//     })
// })

// refactor to get rid of DRY code
const buttons = document.querySelectorAll('.btn')
const storeItems = document.querySelectorAll('.store-item')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter

        storeItems.forEach((item) => {
            if (filter === 'all') {
                item.style.display = 'block'
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    })
});

//wire up filter search box
(function() {

    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')

    searchBox.addEventListener('keyup', (e) => {

        const searchFilter = e.target.value.toLowerCase().trim()
            //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();

// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         //prevent the default link jump to top of page
//         e.preventDefault()
//         //grab the filter button that was clicked
//         const filter = e.target.dataset.filter
//         if (filter === 'all'){
//             //show all items
//             storeItems.forEach(function(item){
//                 item.style.display = 'block'
//             })
//         } else if (filter === 'cakes'){
//             storeItems.forEach(function(item){
//                 if (item.classList.contains('cakes')){
//                     item.style.display = 'block'
//                 } else {
//                     item.style.display = 'none'
//                 }
//             })