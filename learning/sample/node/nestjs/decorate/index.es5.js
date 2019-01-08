var _desc, _value, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function decorateArmour(target, key, descriptor) {
  console.log('target', JSON.stringify(target));
  console.log('key', key);
  console.log('key', descriptor);
  const method = descriptor.value;
  let moreDef = 100;
  let ret;
  descriptor.value = (...args) => {
    console.log('args', [...args]);
    args[1] += moreDef;
    ret = method.apply(target, args);
    return ret;
  };
  return descriptor;
}

let Man = (_class = class Man {
  constructor(def = 2, atk = 3, hp = 3) {
    this.init(def, atk, hp);
  }

  init(def, atk, hp) {
    this.def = def; // 防御值
    this.atk = atk; // 攻击力
    this.hp = hp; // 血量
  }
  toString() {
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'init', [decorateArmour], Object.getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype)), _class);


var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
