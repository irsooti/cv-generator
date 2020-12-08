import { Experience } from './Experience';
import { Education } from './Education';
import { Language } from './Language';
import { Profile } from './Profile';
import { Skill } from './Skill';

export interface Employee {
  experiences: Experience[];
  educations: Education[];
  languages: Language[];
  skills: Skill[];
  profile: Profile;
}
