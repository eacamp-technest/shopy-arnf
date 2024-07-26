export class Manipulators {
  public static cardNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/);
    console.log(match);
    return !match ? value : match.slice(1).filter(Boolean).join(' ');
  };
}
