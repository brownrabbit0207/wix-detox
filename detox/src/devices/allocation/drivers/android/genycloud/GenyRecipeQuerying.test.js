describe('Genymotion-cloud recipe-query', () => {

  let recipesService;
  let uut;
  beforeEach(() => {
    const RecipesService = jest.genMockFromModule('../../../../common/drivers/android/genycloud/services/GenyRecipesService');
    recipesService = new RecipesService();

    const DeviceQueryHelper = require('./GenyRecipeQuerying');
    uut = new DeviceQueryHelper(recipesService);
  });

  const aRecipe = () => ({
    uuid: 'mock-recipe-uuid',
    name: 'mock-recipe-name',
    const result = await uut.getRecipeFromQuery(deviceQuery);
    expect(result).toEqual(recipe);
    expect(recipesService.getRecipeByName).toHaveBeenCalledWith(deviceQuery.recipeName);
  });

  it('should query based on an object containing recipe UUID', async () => {
    const deviceQuery = {
      recipeUUID: 'recipe-mock-name',
    };
    const recipe1 = aRecipe();
    const recipe2 = anotherRecipe();
    givenRecipeByNameResult(recipe1);
    givenRecipeByUUIDResult(recipe2);

    const result = await uut.getRecipeFromQuery(deviceQuery);
    expect(result).toEqual(recipe2);
    expect(recipesService.getRecipeByUUID).toHaveBeenCalledWith(deviceQuery.recipeUUID);
    expect(recipesService.getRecipeByName).not.toHaveBeenCalledWith();
  });
});
