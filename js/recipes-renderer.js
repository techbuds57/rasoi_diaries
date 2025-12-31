// Rasoi Diaries - Dynamic Recipe Renderer
// Handles dynamic rendering of recipes and navigation

(function() {
    'use strict';

    // Check if recipesData is available
    if (typeof recipesData === 'undefined') {
        console.error('recipesData is not loaded. Please include recipes-data.js before this file.');
        return;
    }

    // Router for GitHub Pages (hash-based routing)
    const Router = {
        init: function() {
            this.handleRoute();
            window.addEventListener('hashchange', () => this.handleRoute());
        },
        handleRoute: function() {
            const hash = window.location.hash.slice(1) || 'home';
            const parts = hash.split('/');
            
            if (parts[0] === 'recipe' && parts[1]) {
                this.showRecipeDetail(parts[1]);
            } else if (parts[0] === 'category' && parts[1]) {
                this.showCategoryRecipes(parts[1]);
            } else {
                this.showHome();
            }
        },
        showHome: function() {
            if (document.getElementById('recipe-list-container')) {
                renderRecipeList(getAllRecipes());
            }
        },
        showRecipeDetail: function(slug) {
            const recipe = getRecipeBySlug(slug);
            if (recipe && document.getElementById('recipe-detail-container')) {
                renderRecipeDetail(recipe);
            } else if (recipe) {
                // Redirect to recipe detail page
                window.location.href = `recipe-detail.html#recipe/${slug}`;
            }
        },
        showCategoryRecipes: function(categorySlug) {
            const recipes = getRecipesByCategory(categorySlug);
            if (document.getElementById('recipe-list-container')) {
                renderRecipeList(recipes);
            }
        }
    };

    // Render recipe list
    function renderRecipeList(recipes) {
        const container = document.getElementById('recipe-list-container');
        if (!container) return;

        container.innerHTML = recipes.map(recipe => `
            <div class="col-lg-4 col-sm-6">
                <div class="recipe-item">
                    <a href="recipe-detail.html#recipe/${recipe.slug}">
                        <img src="${recipe.image}" alt="${recipe.name}">
                    </a>
                    <div class="ri-text">
                        <div class="cat-name">${recipe.category}</div>
                        <a href="recipe-detail.html#recipe/${recipe.slug}">
                            <h4>${recipe.name}</h4>
                        </a>
                        <p>${recipe.description}</p>
                    </div>
                </div>
            </div>
        `).join('');

        // Update page title if on recipe listing page
        if (document.querySelector('.recipe-section')) {
            document.title = `Indian Recipes - Rasoi Diaries`;
        }
    }

    // Render recipe detail
    function renderRecipeDetail(recipe) {
        const container = document.getElementById('recipe-detail-container');
        if (!container) return;

        // Build ingredients HTML
        let ingredientsHTML = '';
        Object.keys(recipe.ingredients).forEach(section => {
            ingredientsHTML += `
                <div class="${section.toLowerCase().replace(/\s+/g, '-')}-list">
                    ${section !== 'Main Ingredients' ? `<h6>${section}</h6>` : ''}
                    <ul>
                        ${recipe.ingredients[section].map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>
            `;
        });

        // Build instructions HTML
        const instructionsHTML = recipe.instructions.map((step, index) => `
            <li>
                <span>${String(index + 1).padStart(2, '0')}.</span>
                ${step}
            </li>
        `).join('');

        // Build notes HTML
        const notesHTML = recipe.notes.map(note => `
            <div class="notes-item">
                <span>i</span>
                <p>${note}</p>
            </div>
        `).join('');

        // Build tags HTML
        const tagsHTML = recipe.tags.map(tag => `<li>${tag}</li>`).join('');

        // Build rating stars
        const ratingStars = Array(5).fill(0).map((_, i) => 
            `<i class="fa fa-star${i < Math.floor(recipe.rating) ? '' : '-o'}"></i>`
        ).join('');

        container.innerHTML = `
            <div class="recipe-top">
                <div class="container-fluid">
                    <div class="recipe-title">
                        <span>~ ${recipe.ingredients['Main Ingredients'] ? recipe.ingredients['Main Ingredients'].length : recipe.ingredients[Object.keys(recipe.ingredients)[0]].length} ingredients / ${recipe.totalTime} / ${recipe.difficulty.toLowerCase()} / indian recipe</span>
                        <h2>${recipe.name}</h2>
                        <ul class="tags">
                            ${tagsHTML}
                        </ul>
                    </div>
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="ingredients-item">
                            <div class="intro-item">
                                <img src="${recipe.image}" alt="${recipe.name}">
                                <h2>${recipe.name}</h2>
                                <div class="rating">
                                    ${ratingStars}
                                </div>
                                <div class="reviews">${recipe.rating} from 25 reviews</div>
                                <div class="recipe-time">
                                    <ul>
                                        <li>Prep time: <span>${recipe.prepTime}</span></li>
                                        <li>Cook time: <span>${recipe.cookTime}</span></li>
                                        <li>Yield: <span>${recipe.servings}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ingredient-list">
                                <div class="recipe-btn">
                                    <a href="#" onclick="window.print(); return false;">Print Recipe</a>
                                    <a href="#" class="black-btn" onclick="shareRecipe('${recipe.slug}'); return false;">Share Recipe</a>
                                </div>
                                <div class="list-item">
                                    <h5>Ingredients</h5>
                                    ${ingredientsHTML}
                                </div>
                            </div>
                        </div>
                        <div class="nutrition-fact">
                            <div class="nutri-title">
                                <h6>Nutrition Facts</h6>
                                <span>Serves ${recipe.servings}</span>
                            </div>
                            <ul>
                                <li>Calories: ${recipe.nutrition.calories}</li>
                                <li>Protein: ${recipe.nutrition.protein}</li>
                                <li>Carbs: ${recipe.nutrition.carbs}</li>
                                <li>Fat: ${recipe.nutrition.fat}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="recipe-right">
                            <div class="recipe-desc">
                                <h3>Description</h3>
                                <p>${recipe.description}</p>
                            </div>
                            <div class="instruction-list">
                                <h3>Instructions</h3>
                                <ul>
                                    ${instructionsHTML}
                                </ul>
                            </div>
                            ${recipe.notes.length > 0 ? `
                            <div class="notes">
                                <h3>Notes</h3>
                                ${notesHTML}
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Update page title and meta
        document.title = `${recipe.name} - Rasoi Diaries`;
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Render category filter items
    function renderCategoryFilters() {
        const container = document.getElementById('category-filter');
        if (!container) return;

        const categories = getAllCategories();
        container.innerHTML = categories.map((cat, index) => {
            // Get recipes for this category
            const categoryRecipes = getRecipesByCategory(cat.slug);
            const mixClasses = `mix all ${cat.slug.replace(/-/g, '')}`;
            
            return `
                <div class="cf-item ${mixClasses}">
                    <div class="cf-item-pic">
                        <img src="${cat.image}" alt="${cat.name}">
                    </div>
                    <div class="cf-item-text">
                        <h5>${cat.name}</h5>
                    </div>
                </div>
            `;
        }).join('');

        // Initialize mixitup if available
        if (typeof mixitup !== 'undefined' && container.children.length > 0) {
            mixitup(container);
        }
    }

    // Render featured recipes
    function renderFeaturedRecipes() {
        const container = document.getElementById('featured-recipes-container');
        if (!container) return;

        // Get top 4 recipes by rating
        const featured = getAllRecipes()
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4);

        container.innerHTML = featured.map((recipe, index) => {
            if (index === 0) {
                // Large item
                return `
                    <div class="col-lg-6">
                        <div class="top-recipe-item large-item">
                            <div class="top-recipe-img set-bg" data-setbg="${recipe.image}">
                                <i class="fa fa-plus"></i>
                            </div>
                            <div class="top-recipe-text">
                                <div class="cat-name">${recipe.category}</div>
                                <a href="recipe-detail.html#recipe/${recipe.slug}">
                                    <h4>${recipe.name}</h4>
                                </a>
                                <p>${recipe.description}</p>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // Small items
                return `
                    <div class="col-lg-6">
                        <div class="top-recipe-item">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="top-recipe-img set-bg" data-setbg="${recipe.image}">
                                        <i class="fa fa-plus"></i>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="top-recipe-text">
                                        <div class="cat-name">${recipe.category}</div>
                                        <a href="recipe-detail.html#recipe/${recipe.slug}">
                                            <h4>${recipe.name}</h4>
                                        </a>
                                        <p>${recipe.description.substring(0, 100)}...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');

        // Reinitialize set-bg functionality
        if (typeof $ !== 'undefined') {
            $('.set-bg').each(function() {
                var bg = $(this).data('setbg');
                $(this).css('background-image', 'url(' + bg + ')');
            });
        }
    }

    // Render similar recipes
    function renderSimilarRecipes(currentRecipeId, limit = 4) {
        const container = document.getElementById('similar-recipes-container');
        if (!container) return;

        const currentRecipe = getRecipeById(currentRecipeId);
        if (!currentRecipe) return;

        // Get recipes from same category, excluding current recipe
        const similar = getRecipesByCategory(currentRecipe.categorySlug)
            .filter(r => r.id !== currentRecipeId)
            .slice(0, limit);

        // If not enough in same category, add others
        if (similar.length < limit) {
            const others = getAllRecipes()
                .filter(r => r.id !== currentRecipeId && !similar.find(s => s.id === r.id))
                .slice(0, limit - similar.length);
            similar.push(...others);
        }

        container.innerHTML = similar.map(recipe => `
            <div class="col-lg-3 col-md-6">
                <div class="similar-item">
                    <a href="recipe-detail.html#recipe/${recipe.slug}">
                        <img src="${recipe.image}" alt="${recipe.name}">
                    </a>
                    <div class="similar-text">
                        <div class="cat-name">${recipe.category}</div>
                        <h6>${recipe.name}</h6>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Share recipe function
    window.shareRecipe = function(slug) {
        const recipe = getRecipeBySlug(slug);
        if (!recipe) return;

        const url = `${window.location.origin}${window.location.pathname}#recipe/${slug}`;
        const text = `Check out this delicious ${recipe.name} recipe from Rasoi Diaries!`;

        if (navigator.share) {
            navigator.share({
                title: recipe.name,
                text: text,
                url: url
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(url).then(() => {
                alert('Recipe link copied to clipboard!');
            });
        }
    };

    // Initialize on DOM ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize router if on recipe detail page
        if (document.getElementById('recipe-detail-container')) {
            Router.init();
        }

        // Render category filters
        renderCategoryFilters();

        // Render featured recipes if container exists
        if (document.getElementById('featured-recipes-container')) {
            renderFeaturedRecipes();
        }

        // Render recipe list if container exists and no hash
        if (document.getElementById('recipe-list-container') && !window.location.hash) {
            renderRecipeList(getAllRecipes());
        }

        // Render similar recipes if on detail page
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        if (recipeId && document.getElementById('similar-recipes-container')) {
            renderSimilarRecipes(parseInt(recipeId));
        }
    }

    // Export functions for global use
    window.RasoiDiaries = {
        renderRecipeList: renderRecipeList,
        renderRecipeDetail: renderRecipeDetail,
        renderCategoryFilters: renderCategoryFilters,
        renderFeaturedRecipes: renderFeaturedRecipes,
        renderSimilarRecipes: renderSimilarRecipes,
        Router: Router,
        getRecipeBySlug: getRecipeBySlug,
        getRecipesByCategory: getRecipesByCategory,
        getAllRecipes: getAllRecipes
    };

    // Auto-initialize
    init();

})();

