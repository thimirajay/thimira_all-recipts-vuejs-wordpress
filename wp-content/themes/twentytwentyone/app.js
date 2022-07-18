
const comp1 ={
	template:`

	<div class="bg-white">

	<div class="px-20 pt-10">
			<nav aria-label="Breadcrumb" class="flex justify-center lg:border-b pb-10 lg:border-gray-200">
				<ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
					<li class="text-xl">
						<a aria-current="page" class="font-medium text-gray-500 hover:text-gray-600"> Categories ({{categoriesCount}}) </a>
					</li>
				</ol>
			</nav>
		<div class="lg:px-10 sm:px-2 pt-5">
	
		<h2 class="sr-only">Products</h2>
			
			<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">

				<a href="#" class="relative group shadow-lg pb-16 rounded overflow-hidden" v-for="category in categories" @click='catagoryClick(category.strCategory)'>
					<div class="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
						<img v-bind:src="category.strCategoryThumb" alt="" class="w-64 h-64 object-center object-contain group-hover:opacity-75">
					</div>
					<p class=" mb-2 text-lg text-bold font-medium text-gray-900 flex justify-center">{{category.strCategory}}</p>

					<div class="bg-gray-200  w-full absolute bottom-0">
						<h3 class=" flex justify-center pt-4 pb-3 text-sm text-gray-700">View Meals</h3>
					</div>
				</a>
			
			<!-- More products... -->
			</div>
		</div>
		<br>
	</div>
	</div>
	`,
	data(){
		return{
			categories:[],
			categoriesCount:0
		}
	},
	mounted: function() {
		axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
		.then(response => {
		  this.categories = response.data.categories;
		  this.categoriesCount = Object.keys(response.data.categories).length;
		//   console.log(response.data.categories);
		})
		.catch(error => {
		//   console.log(error);
		});
	},
	methods:{
		catagoryClick(categoryName){
			selected_category = categoryName;
			// this.templateString = comp2
			my_object.cycle(comp2);
			// alert("catagory clicked = "+categoryName);
		}
	}
}


var selected_category = "";
var selected_meal_id = "";

const comp2 ={
	template:`

	<div class="bg-white">
	
		<div class="px-20 pt-10">
			<nav aria-label="Breadcrumb" class="flex justify-center lg:border-b pb-10 lg:border-gray-200">
				<ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
					<li>
						<div class="flex items-center">
							<a href="#" @click='backHome' class="mr-2 text-xl font-medium text-gray-900"> Categories </a>
							<svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
								xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>

					<li class="text-xl">
						<a aria-current="page" class="font-medium text-gray-500 hover:text-gray-600"> Meals ({{mealsCount}}) </a>
					</li>
				</ol>
			</nav>

			<div class="lg:px-2 sm:px-2 pt-5">
		
			<h2 class="sr-only">Products</h2>
				
				<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">

					<a href="#" class="relative group shadow-lg pb-14 rounded overflow-hidden" v-for="meal in meals" @click='mealClick(meal.idMeal)'>
						<div class="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
							<img v-bind:src="meal.strMealThumb" alt="" class="w-64 h-64 object-center object-contain group-hover:opacity-75">
						</div>
						<p class="mt-2 mb-2 text-lg text-bold font-medium text-gray-900 flex justify-center">{{meal.strMeal}}</p>

						<div class="bg-gray-200 w-full absolute bottom-0">
							<h3 class=" flex justify-center pt-4 pb-3 text-sm text-gray-700">View Meals</h3>
						</div>
					</a>

				
				<!-- More products... -->
				</div>
			</div>
			<br>
		</div>
	</div>



	
	`,
	data(){
		return{
			meals:[],
			mealsCount:0
		}
	},
	mounted: function() {
		axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+selected_category)
		.then(response => {
		  this.meals = response.data.meals;
		  this.mealsCount = Object.keys(response.data.meals).length;
		//   console.log(response.data.categories);
		})
		.catch(error => {
		//   console.log(error);
		});
	},
	methods:{
		mealClick(mealId){
			selected_meal_id = mealId;
			my_object.cycle(comp3);
		},
		backHome(){
			my_object.cycle(comp1);
		}
	}
}

const comp3 ={
	template:`

<div class="bg-white">
    <div class="pt-10">
        <nav aria-label="Breadcrumb" class="flex justify-center ">
            <ol role="list" class="max-w-2xl mx-auto px-1 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                <li>
                    <div class="flex items-center">
                        <a href="#" @click='backHome' class="mr-2 text-xl font-medium text-gray-900"> Categories </a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                </li>

                <li>
                    <div class="flex items-center">
                        <a href="#" @click='backMeals' class="mr-2 text-xl font-medium text-gray-900"> Meals </a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                </li>

                <li class="text-xl">
                    <a aria-current="page" class="font-medium text-gray-500 hover:text-gray-600"> {{meals.strMeal}} </a>
                </li>
            </ol>
        </nav>


        <!-- Product info -->
        <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">

            <div class="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8">
                <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                    <img v-bind:src="meals.strMealThumb"
                        alt="Model wearing plain white basic tee." class="w-full h-full object-center object-cover">
                </div>
            </div>

            <!-- Options -->
            <div class="mt-4 lg:mt-0 lg:row-span-12">
                <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{{meals.strMeal}}</h1>


                <div class="mt-10">
                    <h3 class="text-2xl font-medium text-gray-900">Instructions</h3>
                    
                    <div class="mt-4">
                        <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                            <li class="text-gray-400 text-base"  v-for="instruction in instructions">
								<span class="text-gray-600">{{ instruction }}</span>
							</li>
                        </ul>
                    </div>
                </div>

			</div>
		</div>
		<div class="max-w-2xl mx-auto pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<h3 class="pb-5 text-2xl font-medium text-gray-900">Ingredients</h3>
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-1000 uppercase bg-gray-100  dark:text-gray-1000">
						<tr>
							<th scope="col" class="px-6 py-3 text-gray-900">
								Ingredient
							</th>
							<th scope="col" class="px-6 py-3 text-gray-900">
							Measure
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b odd:bg-white" v-for="(ingredient, index) in ingredientArray">
							<th scope="row" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
								{{ingredient}}
							</th>
							<td class="px-6 py-4 text-gray-600">
								{{measureArray[index]}}
							</td>
						</tr>
						
					</tbody>
				</table>
			</div>
			<div class="relative overflow-x-auto">
				<h3 class="pb-5 text-2xl font-medium text-gray-900">Source</h3>
				<a v-bind:href="meals.strYoutube" target="_blank">{{meals.strYoutube}}</a>
			</div>
		</div>
	</div>
</div>

	
	`,
	data(){
		return{
			meals:"",
			mealName:"",
			instructions:[],
			ingredientArray:[],
			measureArray:[]
		}
	},
	mounted: function() {
		axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+selected_meal_id)
		.then(response => {
		  this.meals = response.data.meals[0];
		  this.mealName = response.data.meals[0].strMeal;
		  this.instructions = response.data.meals[0].strInstructions.split("\r\n");
		
		if (this.meals.strIngredient1 != null && this.meals.strIngredient1 != "") {
			this.ingredientArray.push(this.meals.strIngredient1);
			this.measureArray.push(this.meals.strMeasure1);
		}
		if (this.meals.strIngredient2 != null && this.meals.strIngredient2 != "") {
			this.ingredientArray.push(this.meals.strIngredient2);
			this.measureArray.push(this.meals.strMeasure2);
		}
		if (this.meals.strIngredient3 != null && this.meals.strIngredient3 != "") {
			this.ingredientArray.push(this.meals.strIngredient3);
			this.measureArray.push(this.meals.strMeasure3);
		}
		if (this.meals.strIngredient4 != null && this.meals.strIngredient4 != "") {
			this.ingredientArray.push(this.meals.strIngredient4);
			this.measureArray.push(this.meals.strMeasure4);
		}
		if (this.meals.strIngredient5 != null && this.meals.strIngredient5 != "") {
			this.ingredientArray.push(this.meals.strIngredient5);
			this.measureArray.push(this.meals.strMeasure5);
		}
		if (this.meals.strIngredient6 != null && this.meals.strIngredient6 != "") {
			this.ingredientArray.push(this.meals.strIngredient6);
			this.measureArray.push(this.meals.strMeasure6);
		}
		if (this.meals.strIngredient7 != null && this.meals.strIngredient7 != "") {
			this.ingredientArray.push(this.meals.strIngredient7);
			this.measureArray.push(this.meals.strMeasure7);
		}
		if (this.meals.strIngredient8 != null && this.meals.strIngredient8 != "") {
			this.ingredientArray.push(this.meals.strIngredient8);
			this.measureArray.push(this.meals.strMeasure8);
		}
		if (this.meals.strIngredient9 != null && this.meals.strIngredient9 != "") {
			this.ingredientArray.push(this.meals.strIngredient9);
			this.measureArray.push(this.meals.strMeasure9);
		}
		if (this.meals.strIngredient10 != null && this.meals.strIngredient10 != "") {
			this.ingredientArray.push(this.meals.strIngredient10);
			this.measureArray.push(this.meals.strMeasure10);
		}
		if (this.meals.strIngredient11 != null && this.meals.strIngredient11 != "") {
			this.ingredientArray.push(this.meals.strIngredient11);
			this.measureArray.push(this.meals.strMeasure11);
		}

		})
		.catch(error => {
		  console.log(error);
		});
	},
	methods:{
		backHome(){
			my_object.cycle(comp1);
		},
		backMeals(){
			my_object.cycle(comp2);
		}
	}
}


const my_object = new Vue({
	el:"#app",
	components:{
		'component-1' : comp1,
		'component-2' : comp2,
		'component-3' : comp3
	},
	data(){
		return{
			templateString : comp1
		}
	},
	methods:{
		cycle(selectedComponent){
				this.templateString = selectedComponent
		},
	}
});
