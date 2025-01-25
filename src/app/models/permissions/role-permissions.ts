import { Roles } from "../roles.enum"
import { Permission } from "./permissions.enum"
export const RolePermissions = { 
    [Roles.organizer] : [
        Permission.CreateOffer,
        Permission.ViewOffer,
        Permission.BuyOffer,
        Permission.ViewAccountSettings,
    ],
    [Roles.user] : [
        Permission.ViewOffer,
        Permission.BuyOffer,
        Permission.ViewAccountSettings,
    ],
}