export interface AppUser {
  username:        string;
  email:           string;
  numeroTelephone: string;
  password:        string;
  verifyPassword : string;
}

export interface AppRole {
  roleId:   number;
  roleName: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
  username: string;
  roles: string[];
}
