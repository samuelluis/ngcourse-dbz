import { min } from "rxjs";
import { Hero, Person, Skill } from "./models";

const skills: Skill[] = [
  {name: 'Dash', desc: 'Move quickly in the poited direction.'},
  {name: 'Punch', desc: 'Hit target with a punch.'},
  {name: 'Kick', desc: 'Hit target with a kick.'},
  {name: 'Fly', desc: 'Allow to fly.'},
  {name: 'Eye Ray', desc: 'Shot lasers from the eyes.'},
  {name: 'Energy Shot', desc: 'Shot energy beans from hands.'},
  {name: 'Spider Shot', desc: 'Shot spider net from hands.'},
  {name: 'Mini Bomb', desc: 'Shot mini bomb to target.'}
];

const [dash, punch, kick, fly, eyeRay, energyShot, spiderShot, miniBomb] = skills;

export class Skills {
  public static readonly DASH:Skill = dash;
  public static readonly PUNCH:Skill = punch;
  public static readonly KICK:Skill = kick;
  public static readonly FLY:Skill = fly;
  public static readonly EYE_RAY:Skill = eyeRay;
  public static readonly ENERGY_SHOT:Skill = energyShot;
  public static readonly SPIDER_SHOT:Skill = spiderShot;
  public static readonly MINI_BOMB:Skill = miniBomb;
}

export let heroes: Hero[] = [
  {
    name: 'Batman',
    desc: 'Inspired in bats and using tech protect the city in the nights',
    person: new Person('Bruce', 'Wayne', 47,
      {
        city: 'Gothic',
        country: 'USA'
      }
    ),
    skills: [Skills.PUNCH, Skills.KICK, Skills.MINI_BOMB]
  },
  {
    name: 'Spiderman',
    desc: 'Neighbor and friend!',
    person: new Person('Peter', 'Parker', 21,
      {
        city: 'Queens',
        state: 'NY',
        country: 'USA'
      }
    ),
    skills: [Skills.KICK, Skills.SPIDER_SHOT]
  },
  {
    name: 'Ironman',
    desc: 'High tech super suit hero',
    person: new Person('Tony', 'Stark', 42,
      {
        city: 'Malibu',
        state: 'California',
        country: 'USA'
      }
    ),
    skills: [Skills.PUNCH, Skills.KICK, Skills.FLY, Skills.ENERGY_SHOT]
  },
  {
    name: 'Superman',
    desc: 'Super powered hero from another planet',
    person: new Person('Clack', 'Kent', 31,
      {
        city: 'Smallville',
        country: 'USA'
      }
    ),
    skills: [Skills.PUNCH, Skills.KICK, Skills.FLY, Skills.EYE_RAY]
  }
];
