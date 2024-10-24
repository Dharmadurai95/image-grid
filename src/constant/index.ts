export const foodItems: Array<{
    image_url: string,
    description: string,
    rating: number,
    tags: string[],
    vegetarian: boolean,
    price: number,
    hotel_name: string,
    place: string
}> = [
        {
            "hotel_name": "Hotel Bella Vista",
            "place": "New York",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qhyrbmiouhwzkngbqpie",
            "description": "Delicious Margherita Pizza with fresh tomatoes and basil",
            "rating": 4.5,
            "tags": ["pizza", "Italian", "Margherita"],
            "vegetarian": true,
            "price": 10.99
        },
        {
            "hotel_name": "The Wing Stop",
            "place": "Chicago",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ed4ab9e836ffbea562154d5c086d39d6",
            "description": "Spicy Chicken Wings with BBQ sauce",
            "rating": 4.2,
            "tags": ["wings", "chicken", "spicy"],
            "vegetarian": false,
            "price": 8.49
        },
        {
            "hotel_name": "Green Leaf Cafe",
            "place": "San Francisco",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e416a07fb12739b91164126d1dc247f8",
            "description": "Classic Caesar Salad with fresh romaine lettuce and dressing",
            "rating": 4.7,
            "tags": ["salad", "Caesar", "healthy"],
            "vegetarian": true,
            "price": 6.99
        },
        {
            "hotel_name": "Burger Palace",
            "place": "Los Angeles",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/418e7dc325cf65d7c1d9faab2e646421",
            "description": "Authentic Beef Burger with cheese and pickles",
            "rating": 4.4,
            "tags": ["burger", "beef", "cheese"],
            "vegetarian": false,
            "price": 9.99
        },
        {
            "hotel_name": "Sushi Cove",
            "place": "Seattle",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/csao7mzsg8trda8ede9w",
            "description": "Fresh Sushi Roll with salmon, avocado, and rice",
            "rating": 4.9,
            "tags": ["sushi", "Japanese", "salmon"],
            "vegetarian": false,
            "price": 12.99
        },
        {
            "hotel_name": "Green Leaf Cafe",
            "place": "San Francisco",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/55de0860b7ddbc2d79f8e5c8fa94e899",
            "description": "Vegetable Stir-Fry with tofu and mixed vegetables",
            "rating": 4.3,
            "tags": ["stir-fry", "vegetarian", "tofu"],
            "vegetarian": true,
            "price": 7.99
        },
        {
            "hotel_name": "Pasta Paradise",
            "place": "Miami",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/3aade67d243274c32f49c8b52d127ab2",
            "description": "Creamy Penne Alfredo with parmesan cheese",
            "rating": 4.6,
            "tags": ["pasta", "Alfredo", "creamy"],
            "vegetarian": true,
            "price": 8.99
        },
        {
            "hotel_name": "Steak House",
            "place": "New York",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9de2675e3aa5c9dc295a2db60dcdcba9",
            "description": "Grilled Steak with roasted potatoes and asparagus",
            "rating": 4.8,
            "tags": ["steak", "grilled", "meat"],
            "vegetarian": false,
            "price": 15.99
        },
        {
            "hotel_name": "Green Leaf Cafe",
            "place": "San Francisco",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c2ac2ddde82f7f83fc92064f98ba8b43",
            "description": "Refreshing Watermelon Salad with feta cheese",
            "rating": 4.5,
            "tags": ["salad", "watermelon", "cheese"],
            "vegetarian": true,
            "price": 5.99
        },
        {
            "hotel_name": "Wok n' Roll",
            "place": "Los Angeles",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/csao7mzsg8trda8ede9w",
            "description": "Fried Rice with shrimp and vegetables",
            "rating": 4.2,
            "tags": ["rice", "fried", "shrimp"],
            "vegetarian": false,
            "price": 9.49
        },
        {
            "hotel_name": "Pizza Haven",
            "place": "Chicago",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/423c5dde006571290e983f695ab2c8aa",
            "description": "Cheesy Garlic Breadsticks with marinara sauce",
            "rating": 4.7,
            "tags": ["breadsticks", "garlic", "cheesy"],
            "vegetarian": true,
            "price": 4.99
        },
        {
            "hotel_name": "Taco Time",
            "place": "Seattle",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/49987621bc4a080044b2c9bd22937a51",
            "description": "Spicy Tofu Tacos with avocado and salsa",
            "rating": 4.3,
            "tags": ["tacos", "tofu", "spicy"],
            "vegetarian": true,
            "price": 7.49
        },
        {
            "hotel_name": "Green Leaf Cafe",
            "place": "San Francisco",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9de2675e3aa5c9dc295a2db60dcdcba9",
            "description": "Crunchy Caesar Salad Wrap with grilled chicken",
            "rating": 4.6,
            "tags": ["wrap", "salad", "Caesar"],
            "vegetarian": false,
            "price": 8.49
        },
        {
            "hotel_name": "Cheesy Delights",
            "place": "New York",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/8132a9c9c171c8481213f7ae8a23890d",
            "description": "Homemade Macaroni and Cheese with breadcrumbs",
            "rating": 4.9,
            "tags": ["mac and cheese", "homemade", "cheesy"],
            "vegetarian": true,
            "price": 6.99
        },
        {
            "hotel_name": "Schnitzel House",
            "place": "Miami",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/99a2c405af3d6e00ed535da1dd441e5b",
            "description": "Crispy Chicken Schnitzel with lemon wedges",
            "rating": 4.4,
            "tags": ["schnitzel", "chicken", "crispy"],
            "vegetarian": false,
            "price": 10.49
        },
        {
            "hotel_name": "Eggplant Elegance",
            "place": "Chicago",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y8iwupcgvrfvahxvodxy",
            "description": "Eggplant Parmesan with marinara sauce and mozzarella",
            "rating": 4.7,
            "tags": ["eggplant", "Parmesan", "vegetarian"],
            "vegetarian": true,
            "price": 8.99
        },
        {
            "hotel_name": "Taste of Asia",
            "place": "Seattle",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vpicsheclgx90iqfowit",
            "description": "Sweet and Sour Pork with pineapple and bell peppers",
            "rating": 4.2,
            "tags": ["pork", "sweet and sour", "Chinese"],
            "vegetarian": false,
            "price": 11.99
        },
        {
            "hotel_name": "Pizza Haven",
            "place": "Chicago",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tzkfwrez2cxo0jjunn4k",
            "description": "Caramelized Onion and Mushroom Pizza with balsamic glaze",
            "rating": 4.6,
            "tags": ["pizza", "vegetarian", "onion", "mushroom"],
            "vegetarian": true,
            "price": 11.49
        },
        {
            "hotel_name": "Roasted Delights",
            "place": "Miami",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/pjs0s2n8fc5fbhb4xjvk",
            "description": "Lemon Herb Roasted Chicken with rosemary potatoes",
            "rating": 4.8,
            "tags": ["chicken", "roasted", "herb"],
            "vegetarian": false,
            "price": 13.99
        },
        {
            "hotel_name": "Pasta Paradise",
            "place": "Miami",
            "image_url": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/5eff955001c788f47954b0851372b78f",
            "description": "Creamy Mushroom Risotto with parmesan and parsley",
            "rating": 4.5,
            "tags": ["risotto", "mushroom", "creamy"],
            "vegetarian": true,
            "price": 9.99
        }
    ]
