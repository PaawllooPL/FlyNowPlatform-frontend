import { Roles } from "../roles.enum"
import { Permission } from "./permissions.enum"
export const RolePermissions = {
    [Roles.admin] : [
        Permission.CreateCompany,
        Permission.ViewOffer,
        Permission.BuyOffer,
    ], 
    [Roles.organizer] : [
        Permission.CreateOffer,
        Permission.ViewOffer,
        Permission.BuyOffer,
        Permission.ViewAccountSettings,
    ],
    [Roles.user] : [
        Permission.CreateCompany,
        Permission.ViewOffer,
        Permission.BuyOffer,
        Permission.ViewAccountSettings,
    ],
    [Roles.guest] : [
        Permission.ViewOffer,
    ],
}