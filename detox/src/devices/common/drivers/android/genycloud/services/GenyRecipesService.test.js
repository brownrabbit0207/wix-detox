describe('Genymotion-Cloud recipes service', () => {
  const givenNoRecipes = () => {
    exec.getRecipe.mockResolvedValue({
      recipes: [],
    });
  };

  const givenRecipes = (...recipes) => {
    exec.getRecipe.mockResolvedValue({
      recipes: [...recipes],
    });
  };

  const aRecipe = () => ({
    uuid: 'mock-recipe-uuid',
    name: 'mock-recipe-name',
  });

  const anotherRecipe = () => ({
    uuid: 'another-mock-recipe-uuid',
    name: 'another-mock-recipe-name',
  });

  let logger;
  let exec;
    });

    it('should return a recipe DTO', async () => {
      const recipe = aRecipe();
      givenRecipes(recipe);

      const result = await uut.getRecipeByName(recipe.name);
      expect(result.constructor.name).toContain('Recipe');
    });

    it('should warn if there are multiple matches', async () => {
      const recipe = aRecipe();
      const recipe2 = anotherRecipe();
      givenRecipes(recipe, recipe2);

      await uut.getRecipeByName(recipe.name);

      expect(logger.warn).toHaveBeenCalledWith(
        { event: 'GENYCLOUD_RECIPE_LOOKUP' },
        [
          `More than one Genymotion-Cloud recipe found for recipe name ${recipe.name}:`,
          `  ${recipe.name} (${recipe.uuid})`,
          `  ${recipe2.name} (${recipe2.uuid})`,
          `Falling back to ${recipe.name}`,
        ].join('\n'),
      );
    });

    it('should not warn if there is only 1 match', async () => {
      const recipe = aRecipe();
      givenRecipes(recipe);

      await uut.getRecipeByName(recipe.name);

      expect(logger.warn).not.toHaveBeenCalled();
    });
  });

  describe('Getting a recipe by UUID', () => {
    it('should immediately return a recipe', async () => {
      const recipe = aRecipe();

      const result = await uut.getRecipeByUUID(recipe.uuid);

      expect(result.uuid).toEqual(recipe.uuid);
      expect(result.constructor.name).toContain('Recipe');
    });
  });
});
