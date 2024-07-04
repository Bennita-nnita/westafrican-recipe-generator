function displayRecipe(response){
 
    
    
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }

      function generateRecipe(event)
      { event.preventDefault()

    let instructionsInput = document.querySelector("#user-instructions")     
  let apiKey = "a4t22d03404203ac1b80ofbb2b04aaf5";
  let context =
    "You are a west african recipe expert and love to show recipes from different parts of west africa,your mission is to generate a basic recipe from any part of west africa in basic html and separate each line with a <br/>.make sure to create the recipe based off of whatever ingredient is provided in the user-instructions. it should not more than 10 lines(can be 10 lines or less) and be very easy to follow.Do not include a title to the recipes. Sign the poem with 'Nnita's AI recipes' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `User instructions: Generate a West African recipe highlighting ${instructionsInput.value} ingredient`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe")
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a westafrican recipe highlighting ${instructionsInput.value}</div>`;



  axios.get(apiUrl).then(displayRecipe);}
  



let recipeFormElement = document.querySelector("#recipe-generator-form")
recipeFormElement.addEventListener("submit", generateRecipe)