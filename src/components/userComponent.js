import UserService from "../services/userService"

console.log("User component Yüklendi");


export let userService = new UserService

userService.add();
userService.getById();
userService.list();
