export interface AppUser {
  userId?:          string;
  username:        string;
  password:        string;
  verifyPassword:        string;
  active?:          boolean;
  email:           string;
  numeroTelephone: string;
  appRoles?:        AppRole[];
}

export interface AppRole {
  roleId:   number;
  roleName: string;
}

export enum RoleEnum {
  PRESTATAIRE = 'PRESTATAIRE',
  SIGNATURE = 'SIGNATURE',
  CA = 'CA',
  ADMIN = 'ADMIN',
  SAL = 'SAL',
  SBC = 'SBC'
}
