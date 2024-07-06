import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
    {path: '*', component: Error}
]

export const publicRoutes = [
    {path: '/about', component: About},
    {path: '*', component: login}
]