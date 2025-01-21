import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("about", "./routes/about.tsx"),

  layout("./routes/auth/layout.tsx", [
    route("login", "./routes/auth/login.tsx"),
    route("register", "./routes/auth/register.tsx"),
  ]),
  ...prefix("/homepage", [
    layout("./routes/homepage/layout.tsx", [
      index("./routes/homepage/home.tsx"),
      route("chat", "./routes/homepage/chat.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
