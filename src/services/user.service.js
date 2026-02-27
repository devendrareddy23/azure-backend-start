export const createUserService = async ({ name }) => {
  return {
    id: Date.now(),
    name
  };
};
