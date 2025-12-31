// Rasoi Diaries - Indian Food Recipes Data
// All recipes and categories for dynamic rendering

const recipesData = {
    recipes: [
        {
            id: 1,
            name: "Butter Chicken",
            slug: "butter-chicken",
            category: "North Indian Cuisine",
            categorySlug: "north-indian",
            tags: ["Chicken", "Non-Vegetarian", "Curry", "Spicy"],
            image: "img/recipe/recipe-1.jpg",
            description: "A rich North Indian curry made with tender chicken cooked in a buttery tomato-based gravy. Mildly spiced and very popular globally.",
            prepTime: "15 min",
            cookTime: "30 min",
            totalTime: "45 min",
            servings: "4",
            difficulty: "Medium",
            ingredients: {
                "For Marination": [
                    "500g chicken pieces (bone-in or boneless)",
                    "1 cup yogurt",
                    "1 tbsp lemon juice",
                    "1 tsp turmeric powder",
                    "1 tsp red chili powder",
                    "2 tsp garam masala",
                    "Salt to taste"
                ],
                "For Gravy": [
                    "4 tbsp butter",
                    "1 large onion, finely chopped",
                    "2 tomatoes, pureed",
                    "1 tbsp ginger-garlic paste",
                    "1 tsp cumin seeds",
                    "1 tsp coriander powder",
                    "1/2 tsp turmeric powder",
                    "1 tsp red chili powder",
                    "1 tsp garam masala",
                    "1/2 cup fresh cream",
                    "1 tbsp kasuri methi (dried fenugreek leaves)",
                    "1 tsp sugar",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ]
            },
            instructions: [
                "Marinate the chicken with yogurt, lemon juice, turmeric, red chili powder, garam masala, and salt. Let it sit for at least 30 minutes.",
                "Heat butter in a pan, add cumin seeds, and let them splutter. Add chopped onions and sauté until golden brown.",
                "Add ginger-garlic paste and cook for a minute. Add tomato puree and cook until oil separates.",
                "Add all the dry spices (coriander, turmeric, red chili powder, garam masala) and mix well.",
                "Add the marinated chicken and cook on medium heat until chicken is tender and cooked through.",
                "Add fresh cream, kasuri methi, sugar, and salt. Simmer for 5 minutes.",
                "Garnish with fresh cilantro and serve hot with naan or basmati rice."
            ],
            notes: [
                "For a richer taste, you can add a tablespoon of cashew paste to the gravy.",
                "The chicken can be grilled or pan-fried before adding to the gravy for a smoky flavor.",
                "Adjust the spice level according to your preference."
            ],
            nutrition: {
                calories: "420",
                protein: "35g",
                carbs: "12g",
                fat: "24g"
            },
            date: "2024-01-15",
            rating: 4.9
        },
        {
            id: 2,
            name: "Masala Dosa",
            slug: "masala-dosa",
            category: "South Indian Cuisine",
            categorySlug: "south-indian",
            tags: ["Vegetarian", "Breakfast", "Fermented", "Rice"],
            image: "img/recipe/recipe-2.jpg",
            description: "A crispy South Indian rice crepe filled with spiced potato masala, served with coconut chutney and sambar.",
            prepTime: "8 hours (soaking)",
            cookTime: "30 min",
            totalTime: "8 hours 30 min",
            servings: "4",
            difficulty: "Medium",
            ingredients: {
                "For Dosa Batter": [
                    "2 cups rice (parboiled or regular)",
                    "1 cup urad dal (split black gram)",
                    "1/2 tsp fenugreek seeds",
                    "Salt to taste",
                    "Water for grinding"
                ],
                "For Potato Masala": [
                    "4-5 medium potatoes, boiled and mashed",
                    "1 large onion, sliced",
                    "2-3 green chilies, chopped",
                    "1 tsp mustard seeds",
                    "1 tsp urad dal",
                    "1/2 tsp turmeric powder",
                    "A few curry leaves",
                    "2 tbsp oil",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ]
            },
            instructions: [
                "Soak rice and urad dal separately for 6-8 hours. Soak fenugreek seeds with urad dal.",
                "Grind urad dal to a smooth paste. Grind rice to a slightly coarse paste. Mix both batters together.",
                "Add salt and let the batter ferment overnight or for 8-10 hours in a warm place.",
                "For potato masala: Heat oil in a pan, add mustard seeds and urad dal. When they splutter, add curry leaves and green chilies.",
                "Add sliced onions and sauté until translucent. Add turmeric and salt.",
                "Add mashed potatoes and mix well. Cook for 2-3 minutes. Garnish with cilantro.",
                "To make dosa: Heat a non-stick pan, pour a ladle of batter and spread in circular motion. Drizzle oil around edges.",
                "When dosa turns golden brown, place potato masala in the center, fold, and serve hot with chutney and sambar."
            ],
            notes: [
                "The batter consistency should be like pancake batter - not too thick or thin.",
                "For crispier dosas, spread the batter thin. For softer dosas, keep it slightly thick.",
                "Fermentation time may vary based on temperature - warmer climates need less time."
            ],
            nutrition: {
                calories: "280",
                protein: "8g",
                carbs: "52g",
                fat: "5g"
            },
            date: "2024-01-20",
            rating: 4.8
        },
        {
            id: 3,
            name: "Paneer Butter Masala",
            slug: "paneer-butter-masala",
            category: "Vegetarian Indian Food",
            categorySlug: "vegetarian",
            tags: ["Vegetarian", "Paneer", "Curry", "Creamy"],
            image: "img/recipe/recipe-3.jpg",
            description: "Soft paneer cubes simmered in a creamy tomato gravy. A staple vegetarian dish in Indian restaurants.",
            prepTime: "15 min",
            cookTime: "25 min",
            totalTime: "40 min",
            servings: "4",
            difficulty: "Easy",
            ingredients: {
                "Main Ingredients": [
                    "250g paneer, cubed",
                    "4 tbsp butter",
                    "2 large tomatoes, pureed",
                    "1 large onion, chopped",
                    "1 tbsp ginger-garlic paste",
                    "1/4 cup cashews, soaked",
                    "1 tsp cumin seeds",
                    "1 tsp coriander powder",
                    "1/2 tsp turmeric powder",
                    "1 tsp red chili powder",
                    "1 tsp garam masala",
                    "1/2 cup fresh cream",
                    "1 tbsp kasuri methi",
                    "1 tsp sugar",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ]
            },
            instructions: [
                "Soak cashews in warm water for 15 minutes. Blend to a smooth paste.",
                "Heat butter in a pan, add cumin seeds. Add chopped onions and sauté until golden.",
                "Add ginger-garlic paste and cook for a minute. Add tomato puree and cook until oil separates.",
                "Add cashew paste and all dry spices. Mix well and cook for 2-3 minutes.",
                "Add cream, kasuri methi, sugar, and salt. Mix well.",
                "Add paneer cubes and gently mix. Simmer for 5 minutes on low heat.",
                "Garnish with fresh cilantro and serve hot with naan or jeera rice."
            ],
            notes: [
                "Do not overcook paneer as it can become rubbery. Add it at the end and just warm it through.",
                "For a richer flavor, you can add a dollop of butter before serving.",
                "If the gravy is too thick, add a little water or cream to adjust consistency."
            ],
            nutrition: {
                calories: "380",
                protein: "18g",
                carbs: "15g",
                fat: "28g"
            },
            date: "2024-01-18",
            rating: 4.9
        },
        {
            id: 4,
            name: "Vegetable Biryani",
            slug: "vegetable-biryani",
            category: "Vegetarian Indian Food",
            categorySlug: "vegetarian",
            tags: ["Vegetarian", "Rice", "Aromatic", "One-Pot"],
            image: "img/recipe/recipe-4.jpg",
            description: "Fragrant basmati rice cooked with mixed vegetables, whole spices, and herbs. Aromatic and filling.",
            prepTime: "30 min",
            cookTime: "40 min",
            totalTime: "70 min",
            servings: "6",
            difficulty: "Medium",
            ingredients: {
                "For Rice": [
                    "2 cups basmati rice",
                    "4 cups water",
                    "2 bay leaves",
                    "1 cinnamon stick",
                    "2-3 cardamom pods",
                    "4-5 cloves",
                    "1 tsp salt"
                ],
                "For Vegetables": [
                    "2 cups mixed vegetables (potatoes, carrots, beans, peas, cauliflower)",
                    "2 large onions, sliced",
                    "2 tomatoes, chopped",
                    "1 tbsp ginger-garlic paste",
                    "1/2 cup yogurt",
                    "1 tsp turmeric powder",
                    "2 tsp biryani masala",
                    "1 tsp red chili powder",
                    "2-3 green chilies",
                    "Fresh mint and cilantro leaves",
                    "Saffron strands (soaked in warm milk)",
                    "3-4 tbsp ghee or oil",
                    "Salt to taste"
                ]
            },
            instructions: [
                "Wash and soak basmati rice for 30 minutes. Boil rice with whole spices until 70% cooked. Drain and set aside.",
                "Heat ghee in a heavy-bottomed pot. Fry sliced onions until golden brown. Remove half for garnish.",
                "Add ginger-garlic paste, green chilies, and chopped tomatoes. Cook until soft.",
                "Add all vegetables and spices. Cook for 5-7 minutes. Add yogurt and mix well.",
                "Layer half the rice, then vegetable mixture, then remaining rice. Top with fried onions, mint, and cilantro.",
                "Drizzle saffron milk and ghee. Cover with tight lid and cook on low heat (dum) for 20-25 minutes.",
                "Let it rest for 10 minutes. Gently fluff with a fork and serve hot with raita."
            ],
            notes: [
                "The 'dum' method (slow cooking with sealed lid) is crucial for authentic biryani flavor.",
                "You can add fried potatoes and boiled eggs for added texture.",
                "Serving with raita, pickle, and salad completes the biryani experience."
            ],
            nutrition: {
                calories: "420",
                protein: "12g",
                carbs: "68g",
                fat: "12g"
            },
            date: "2024-01-22",
            rating: 4.7
        },
        {
            id: 5,
            name: "Rajma Chawal",
            slug: "rajma-chawal",
            category: "North Indian Cuisine",
            categorySlug: "north-indian",
            tags: ["Vegetarian", "Comfort Food", "Protein-Rich", "Legumes"],
            image: "img/recipe/recipe-5.jpg",
            description: "Red kidney beans slow-cooked in onion-tomato gravy, served with steamed rice. A classic North Indian comfort meal.",
            prepTime: "8 hours (soaking)",
            cookTime: "45 min",
            totalTime: "8 hours 45 min",
            servings: "4",
            difficulty: "Easy",
            ingredients: {
                "For Rajma": [
                    "1.5 cups red kidney beans (rajma)",
                    "2 large onions, finely chopped",
                    "2 tomatoes, pureed",
                    "1 tbsp ginger-garlic paste",
                    "2 tsp cumin seeds",
                    "1 tsp turmeric powder",
                    "2 tsp coriander powder",
                    "1 tsp red chili powder",
                    "1 tsp garam masala",
                    "2 tbsp oil",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ],
                "For Rice": [
                    "2 cups basmati rice",
                    "4 cups water",
                    "1 tsp salt",
                    "1 tbsp ghee (optional)"
                ]
            },
            instructions: [
                "Soak kidney beans overnight or for 8 hours. Pressure cook until soft and tender.",
                "Heat oil in a pan, add cumin seeds. Add chopped onions and sauté until golden brown.",
                "Add ginger-garlic paste and cook for a minute. Add tomato puree and cook until oil separates.",
                "Add all dry spices and mix well. Add cooked kidney beans with their water.",
                "Simmer for 15-20 minutes until gravy thickens. Mash a few beans to thicken the gravy.",
                "Add salt and garam masala. Garnish with fresh cilantro.",
                "For rice: Wash and soak rice for 20 minutes. Boil with salt and ghee until done. Serve hot with rajma."
            ],
            notes: [
                "The secret to good rajma is cooking it until the beans are very soft and the gravy is thick.",
                "Mashing a few beans helps create a creamy consistency.",
                "This dish tastes even better the next day as flavors develop."
            ],
            nutrition: {
                calories: "380",
                protein: "22g",
                carbs: "58g",
                fat: "8g"
            },
            date: "2024-01-16",
            rating: 4.8
        },
        {
            id: 6,
            name: "Samosa",
            slug: "samosa",
            category: "Indian Street Food",
            categorySlug: "street-food",
            tags: ["Vegetarian", "Snacks", "Fried", "Tea-Time"],
            image: "img/recipe/recipe-6.jpg",
            description: "Deep-fried triangular pastry filled with spiced potatoes and peas. One of India's most famous snacks.",
            prepTime: "45 min",
            cookTime: "30 min",
            totalTime: "75 min",
            servings: "12-15 pieces",
            difficulty: "Medium",
            ingredients: {
                "For Dough": [
                    "2 cups all-purpose flour",
                    "4 tbsp oil or ghee",
                    "1/2 tsp salt",
                    "Water as needed"
                ],
                "For Filling": [
                    "3-4 medium potatoes, boiled and mashed",
                    "1 cup green peas (fresh or frozen)",
                    "1 large onion, finely chopped",
                    "2 green chilies, chopped",
                    "1 tsp cumin seeds",
                    "1 tsp coriander seeds, crushed",
                    "1/2 tsp turmeric powder",
                    "1 tsp red chili powder",
                    "1 tsp garam masala",
                    "1 tsp amchur (dry mango powder)",
                    "2 tbsp oil",
                    "Salt to taste",
                    "Fresh cilantro, chopped",
                    "Oil for deep frying"
                ]
            },
            instructions: [
                "For dough: Mix flour, salt, and oil. Add water gradually to make a stiff dough. Rest for 30 minutes.",
                "For filling: Heat oil, add cumin seeds. Add onions and green chilies, sauté until soft.",
                "Add peas and cook for 2 minutes. Add mashed potatoes and all spices. Mix well and cook for 5 minutes.",
                "Add amchur and cilantro. Let the filling cool completely.",
                "Divide dough into equal balls. Roll each into an oval shape, cut in half.",
                "Form each half into a cone, fill with potato mixture, seal the edges with water.",
                "Heat oil in a deep pan. Fry samosas on medium heat until golden brown and crispy.",
                "Serve hot with mint chutney and tamarind chutney."
            ],
            notes: [
                "The dough should be stiff, not soft, for crispy samosas.",
                "Make sure the filling is completely cool before filling, or the samosas may break.",
                "Fry on medium heat to ensure the outer layer is crispy and the inside is cooked."
            ],
            nutrition: {
                calories: "180",
                protein: "4g",
                carbs: "28g",
                fat: "6g"
            },
            date: "2024-01-19",
            rating: 4.9
        },
        {
            id: 7,
            name: "Idli Sambar",
            slug: "idli-sambar",
            category: "South Indian Cuisine",
            categorySlug: "south-indian",
            tags: ["Vegetarian", "Breakfast", "Healthy", "Fermented"],
            image: "img/recipe/recipe-7.jpg",
            description: "Steamed rice cakes paired with lentil-based vegetable stew. Light, healthy, and widely eaten in South India.",
            prepTime: "8 hours (fermentation)",
            cookTime: "45 min",
            totalTime: "8 hours 45 min",
            servings: "4",
            difficulty: "Medium",
            ingredients: {
                "For Idli": [
                    "2 cups rice (idli rice or parboiled rice)",
                    "1 cup urad dal (split black gram)",
                    "1/2 tsp fenugreek seeds",
                    "Salt to taste"
                ],
                "For Sambar": [
                    "1/2 cup toor dal (split pigeon peas)",
                    "1 cup mixed vegetables (drumstick, pumpkin, okra, carrot)",
                    "1 small onion, chopped",
                    "1 tomato, chopped",
                    "1 tsp tamarind pulp",
                    "2 tsp sambar powder",
                    "1/2 tsp turmeric powder",
                    "1 tsp mustard seeds",
                    "1 tsp cumin seeds",
                    "A few curry leaves",
                    "2 dry red chilies",
                    "2 tbsp oil",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ]
            },
            instructions: [
                "For idli: Soak rice and urad dal separately for 6 hours. Soak fenugreek with urad dal.",
                "Grind urad dal to smooth paste. Grind rice to slightly coarse paste. Mix both with salt.",
                "Let the batter ferment for 8-10 hours. The batter should be slightly thick.",
                "Grease idli plates, pour batter, and steam for 10-12 minutes.",
                "For sambar: Pressure cook toor dal until soft. Mash and set aside.",
                "Cook vegetables in water with turmeric and salt until tender.",
                "Add cooked dal, tamarind, and sambar powder. Boil for 5 minutes.",
                "For tempering: Heat oil, add mustard seeds, cumin, red chilies, and curry leaves. Pour over sambar.",
                "Serve hot idlis with sambar, coconut chutney, and podi (gunpowder)."
            ],
            notes: [
                "Proper fermentation is key to soft idlis. Keep batter in a warm place.",
                "Sambar tastes best when vegetables are cooked just right - not too mushy.",
                "Traditional idlis are served with multiple chutneys for variety."
            ],
            nutrition: {
                calories: "240",
                protein: "10g",
                carbs: "45g",
                fat: "3g"
            },
            date: "2024-01-21",
            rating: 4.8
        },
        {
            id: 8,
            name: "Pav Bhaji",
            slug: "pav-bhaji",
            category: "Indian Street Food",
            categorySlug: "street-food",
            tags: ["Vegetarian", "Street Food", "Spicy", "Mumbai"],
            image: "img/recipe/recipe-8.jpg",
            description: "A spicy mashed vegetable curry served with buttered bread rolls. A famous Mumbai street food.",
            prepTime: "20 min",
            cookTime: "30 min",
            totalTime: "50 min",
            servings: "4",
            difficulty: "Easy",
            ingredients: {
                "For Bhaji": [
                    "2 cups mixed vegetables (potatoes, cauliflower, peas, bell peppers, carrots)",
                    "2 large onions, finely chopped",
                    "3 tomatoes, finely chopped",
                    "1 capsicum, finely chopped",
                    "2 tbsp butter",
                    "1 tbsp ginger-garlic paste",
                    "2-3 green chilies, chopped",
                    "2 tsp pav bhaji masala",
                    "1 tsp red chili powder",
                    "1/2 tsp turmeric powder",
                    "1 tsp garam masala",
                    "1/2 cup tomato puree",
                    "Fresh cilantro, chopped",
                    "Lemon juice",
                    "Salt to taste"
                ],
                "For Serving": [
                    "8 pav (soft bread rolls)",
                    "Butter for toasting",
                    "Chopped onions",
                    "Lemon wedges",
                    "Fresh cilantro"
                ]
            },
            instructions: [
                "Pressure cook mixed vegetables until soft. Mash them well and set aside.",
                "Heat butter in a large pan, add chopped onions and cook until translucent.",
                "Add ginger-garlic paste, green chilies, and capsicum. Cook for 2 minutes.",
                "Add tomatoes and cook until soft. Add all spices and mix well.",
                "Add mashed vegetables and tomato puree. Mix well and cook for 10-15 minutes.",
                "Add more butter, cilantro, and lemon juice. Adjust consistency (should be thick but spreadable).",
                "Heat butter in a pan, slit pav horizontally, and toast until golden.",
                "Serve hot bhaji with buttered pav, chopped onions, lemon wedges, and cilantro."
            ],
            notes: [
                "The key is to mash the vegetables well - use a masher or the back of a spoon.",
                "Pav bhaji masala is essential for authentic taste - adjust quantity for spice level.",
                "Adding butter at the end enhances the flavor significantly."
            ],
            nutrition: {
                calories: "320",
                protein: "8g",
                carbs: "48g",
                fat: "12g"
            },
            date: "2024-01-17",
            rating: 4.9
        },
        {
            id: 9,
            name: "Chole Bhature",
            slug: "chole-bhature",
            category: "North Indian Cuisine",
            categorySlug: "north-indian",
            tags: ["Vegetarian", "Street Food", "Hearty", "Chickpeas"],
            image: "img/recipe/recipe-9.jpg",
            description: "Spicy chickpea curry served with deep-fried fluffy bread. Popular in North India as a hearty meal.",
            prepTime: "8 hours (soaking)",
            cookTime: "45 min",
            totalTime: "8 hours 45 min",
            servings: "4",
            difficulty: "Medium",
            ingredients: {
                "For Chole": [
                    "2 cups chickpeas (kabuli chana), soaked overnight",
                    "2 large onions, chopped",
                    "2 tomatoes, pureed",
                    "1 tbsp ginger-garlic paste",
                    "2 tea bags or 1 tbsp tea leaves (for color)",
                    "2 tsp cumin seeds",
                    "2 tsp coriander powder",
                    "1 tsp turmeric powder",
                    "2 tsp chole masala",
                    "1 tsp red chili powder",
                    "1 tsp amchur (dry mango powder)",
                    "2 tbsp oil",
                    "Salt to taste",
                    "Fresh cilantro and ginger for garnish"
                ],
                "For Bhature": [
                    "2 cups all-purpose flour",
                    "1/2 cup semolina",
                    "1/2 cup yogurt",
                    "1 tsp sugar",
                    "1 tsp salt",
                    "1/2 tsp baking soda",
                    "2 tbsp oil",
                    "Water as needed",
                    "Oil for deep frying"
                ]
            },
            instructions: [
                "Pressure cook chickpeas with tea bags until soft. Remove tea bags. Reserve the cooking water.",
                "Heat oil in a pan, add cumin seeds. Add onions and cook until golden.",
                "Add ginger-garlic paste, then tomato puree. Cook until oil separates.",
                "Add all spices and mix well. Add cooked chickpeas with some cooking water.",
                "Simmer for 15-20 minutes. Mash a few chickpeas for thickness. Add amchur and salt.",
                "For bhature: Mix flour, semolina, yogurt, sugar, salt, and baking soda. Add oil and water to make soft dough.",
                "Knead well and rest for 2-3 hours. Divide into balls, roll into circles.",
                "Deep fry until puffed and golden. Serve hot chole with bhature, onion slices, pickles, and chutney."
            ],
            notes: [
                "Tea bags or tea leaves give chole its characteristic dark color.",
                "Bhature dough should be soft and well-rested for puffy results.",
                "Serve immediately while bhature is hot and crispy."
            ],
            nutrition: {
                calories: "450",
                protein: "18g",
                carbs: "68g",
                fat: "14g"
            },
            date: "2024-01-23",
            rating: 4.8
        }
    ],
    categories: [
        {
            id: 1,
            name: "North Indian Cuisine",
            slug: "north-indian",
            description: "Rich, spice-forward dishes often using wheat, dairy, and gravies.",
            examples: "Butter Chicken, Rajma Chawal, Chole Bhature, Dal Makhani",
            image: "img/cate-filter/cate-filter-1.jpg",
            bigImage: "img/cat-feature/big-1.jpg",
            smallImage: "img/cat-feature/small-1.jpg"
        },
        {
            id: 2,
            name: "South Indian Cuisine",
            slug: "south-indian",
            description: "Light, fermented, and rice-based foods with coconut and lentils.",
            examples: "Idli, Dosa, Sambar, Rasam, Uttapam",
            image: "img/cate-filter/cate-filter-2.jpg",
            bigImage: "img/cat-feature/big-2.jpg",
            smallImage: "img/cat-feature/small-2.jpg"
        },
        {
            id: 3,
            name: "Indian Street Food",
            slug: "street-food",
            description: "Quick, flavorful snacks sold across cities and towns.",
            examples: "Pani Puri, Samosa, Pav Bhaji, Vada Pav, Chaat",
            image: "img/cate-filter/cate-filter-3.jpg",
            bigImage: "img/cat-feature/big-3.jpg",
            smallImage: "img/cat-feature/small-3.jpg"
        },
        {
            id: 4,
            name: "Vegetarian Indian Food",
            slug: "vegetarian",
            description: "Plant-based dishes rooted in Indian traditions and Ayurveda.",
            examples: "Paneer dishes, Sabzi, Dal, Khichdi, Vegetable Biryani",
            image: "img/cate-filter/cate-filter-4.jpg",
            bigImage: "img/cat-feature/big-4.jpg",
            smallImage: "img/cat-feature/small-4.jpg"
        },
        {
            id: 5,
            name: "Indian Sweets & Desserts",
            slug: "sweets-desserts",
            description: "Milk, sugar, jaggery, and flour-based traditional desserts.",
            examples: "Gulab Jamun, Rasgulla, Kheer, Jalebi, Ladoo",
            image: "img/cate-filter/cate-filter-5.jpg",
            smallImage: "img/cat-feature/small-5.jpg"
        }
    ]
};

// Helper function to get recipe by ID
function getRecipeById(id) {
    return recipesData.recipes.find(recipe => recipe.id === id);
}

// Helper function to get recipe by slug
function getRecipeBySlug(slug) {
    return recipesData.recipes.find(recipe => recipe.slug === slug);
}

// Helper function to get recipes by category
function getRecipesByCategory(categorySlug) {
    return recipesData.recipes.filter(recipe => recipe.categorySlug === categorySlug);
}

// Helper function to get all recipes
function getAllRecipes() {
    return recipesData.recipes;
}

// Helper function to get all categories
function getAllCategories() {
    return recipesData.categories;
}

// Helper function to get category by slug
function getCategoryBySlug(slug) {
    return recipesData.categories.find(cat => cat.slug === slug);
}

