export default function({ $strapi, redirect, route }) {
  console.log(route.fullPath);
  if (!$strapi.user && route.fullPath !== "/login") {
    return redirect("/login");
  }
  if ($strapi.user && route.fullPath == "/login") {
    return redirect("/dash");
  }
}
