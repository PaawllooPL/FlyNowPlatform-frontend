import { Roles } from "../roles.enum"
import { Permission } from "./permissions.enum"
export const RolePermissions = {
    [Roles.admin] : [
        Permission.ViewOffer,
        Permission.BuyOffer,
    ], 
    [Roles.organizer] : [
        Permission.CreateOffer,
        Permission.ViewOffer,
        Permission.BuyOffer,
    ],
    [Roles.user] : [
        Permission.ViewOffer,
        Permission.BuyOffer,
    ],
    [Roles.guest] : [
        Permission.ViewOffer,
    ],
}