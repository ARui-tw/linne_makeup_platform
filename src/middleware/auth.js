export default function auth({ next }) {
  if (!$cookies.get("token")) {
    return next("/login");
  } else {
    return next();
  }
}
