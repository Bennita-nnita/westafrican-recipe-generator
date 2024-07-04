function displayRecipe(response) {
    console.log(response.data);
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateRecipe(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "a4t22d03404203ac1b80ofbb2b04aaf5";
    let context = `
        You are an expert in West African cuisine. Your mission is to generate a simple, easy-to-follow recipe 
        from any part of West Africa based on the ingredient provided in the user-instructions. 
        The recipe should be written in basic HTML and formatted with each line separated by a <br/> tag. 
        Start the recipe by listing the ingredients needed for the dish. 
        Follow this with the heading 'Process', and then list each step of the process, 
        with each step on a new line. The process should not exceed 10 lines and should be very easy to follow. 
        Do not include a title for the recipe. 
        End the recipe with the signature 'Nnita's AI recipes' inside a <strong> element.
    `;
    let prompt = `User instructions: Generate a West African recipe highlighting ${instructionsInput.value} ingredient`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳ Generating a West African recipe highlighting ${instructionsInput.value}</div>`;

    axios.get(apiUrl)
        .then(displayRecipe)
        .catch(error => {
            console.error("Error in API call:", error);
            recipeElement.innerHTML = `<div class="error">⚠️ Error generating the recipe. Please try again later.</div>`;
        });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
