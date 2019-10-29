import apiActions from "./api.js"
import render from "./dom.js"

const recipeList = document.querySelector("#recipeList")

const eventListener = {
    registerDeleteListener () {
        recipeList.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteRecipe--")) {
                // Extract recipe id from the button's id attribute
                console.log(event)
                console.log(event.target)
                console.log(event.target.id)
                console.log(event.target.id.split("--"))
                console.log(event.target.id.split("--")[1])
                const recipeToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                apiActions.deleteRecipe(recipeToDelete)
                    .then(apiActions.getAllRecipes)
                    .then(render)
            }
        })
    }
}

export default eventListener