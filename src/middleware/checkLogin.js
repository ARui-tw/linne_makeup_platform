export default async function auth({ next }) {
  try {
    await $api.user.getCurrentUser();
    return next("/account");
  } catch (error) {
      return next();
  }
}
