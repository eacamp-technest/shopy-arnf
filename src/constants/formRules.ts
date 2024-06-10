import {RegisterOptions} from 'react-hook-form';
import {Regexs} from './regexs';

export class FormRules {
  public static fullName = {
    required: {
      message: 'Full name is required',
      value: true,
    },
    pattern: {
      value: Regexs.fullName,
      message: 'Full name is not valid',
    },
  } as RegisterOptions;

  public static email = {
    required: {
      message: 'Email is required',
      value: true,
    },
    pattern: {
      value: Regexs.email,
      message: 'Email is not valid',
    },
  } as RegisterOptions;

  public static password = {
    required: {
      message: 'Password is required',
      value: true,
    },
    pattern: {
      value: Regexs.password,
      message: 'Password is not valid',
    },
  } as RegisterOptions;

  public static backCard = {
    required: {
      message: 'Bank card is required',
      value: true,
    },
    pattern: {
      value: Regexs.bankCard,
      message: 'Bank card is not valid',
    },
  } as RegisterOptions;

  public static cvv = {
    required: {
      message: 'CVV is required',
      value: true,
    },
    pattern: {
      value: Regexs.cvv,
      message: 'CVV is not valid',
    },
  } as RegisterOptions;
}