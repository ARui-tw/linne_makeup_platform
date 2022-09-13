export default async function auth({ next }) {
  try {
    await $api.user.getCurrentUser();
    return next();
  } catch (error) {
      return next("/login");
  }
}
