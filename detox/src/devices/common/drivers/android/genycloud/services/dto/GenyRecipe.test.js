describe('Genymotion-Cloud Recipe DTO', () => {
  const rawRecipe = {
    uuid: 'mock-uuid',
    name: 'mock-name',
  };

  let Recipe;
  beforeEach(() => {
    Recipe = require('./GenyRecipe');
  });

  it('should have a uuid', () => {
    const recipe = new Recipe(rawRecipe);

    expect(recipe.uuid).toEqual('mock-uuid');
    expect(recipe.name).toEqual('mock-name');
  });

  it('should allow for anonymous (name-less) recipes', () => {
    const recipe = new Recipe({
