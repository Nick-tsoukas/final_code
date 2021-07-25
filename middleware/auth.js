export default function({ $strapi, redirect, route }) {
  if (!$strapi.user && route.fullPath !== "/login") {
    return redirect("/login");
  }
  if ($strapi.user && route.fullPath == "/login") {
    return redirect("/dash");
  }
}
