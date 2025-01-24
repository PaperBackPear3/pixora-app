import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),

    route("login", "./routes/auth/login.tsx"),
    route("register", "./routes/auth/register.tsx"),
  ]),
  ...prefix("/homepage", [
    layout("./routes/homepage/layout.tsx", [
      route("home", "./routes/homepage/home.tsx"),
      route("chat", "./routes/homepage/chat.tsx"),
      route("chat/:chatId", "./routes/homepage/singlechat.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
