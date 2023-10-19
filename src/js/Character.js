/* eslint-disable no-unused-vars */
export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('не корректное имя');
    }

    if (!types.includes(type)) {
      throw new Error('не корректный тип');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;

    function levelUp() {
      if (this.health <= 0) {
        throw new Error('нельзя повысить левел умершего');
      }

      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }

    function damage(points) {
      if (this.health <= 0) {
        return;
      }

      this.health -= points * (1 - this.defence / 100);

      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
