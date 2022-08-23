export default function auth({ next }) {
  if (!$cookies.get("login")) {
    return next();
  } else {
    return next("/account");
  }
}
