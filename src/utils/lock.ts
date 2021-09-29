import { ILock, ELock } from '../model';

export const lock = (lock: ILock): void => {
  if (lock.flag === ELock.UNLOCKED) {
    lock.flag = ELock.LOCKED;
  }
};

export const unlock = (lock: ILock): void => {
  if (lock.flag === ELock.LOCKED) {
    lock.flag = ELock.UNLOCKED;
  }
};
