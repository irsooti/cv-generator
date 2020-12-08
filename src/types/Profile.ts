export enum Sex {
  male = 'M',
  female = 'F',
  other = 'Altro',
}

/**
 * @description Define your Profile
 * @example `name: Frontend developer, profile: Frontend developer with some experience in...`
 */
export interface Profile {
  name: string;
  description: string;
  bornDate: string;
  sex: Sex;
  nationality: string
}
