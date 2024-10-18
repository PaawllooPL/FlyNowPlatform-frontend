import { Roles } from "../roles.enum"
import { Permission } from "./permissions.enum"
export const RolePermissions = {
    [Roles.Admin] : [Permission.CreateOfferPermission, Permission.ViewOfferPermission, Permission.BuyOfferPermission], 
    [Roles.Organizer] : [Permission.CreateOfferPermission, Permission.ViewOfferPermission, Permission.BuyOfferPermission],
    [Roles.User] : [Permission.ViewOfferPermission, Permission.BuyOfferPermission],
    [Roles.Guest] : [Permission.ViewOfferPermission],
}