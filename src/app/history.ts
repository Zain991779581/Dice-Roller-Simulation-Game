export class History {
  static entries: { number: number; result: string }[] = [];

  static add(number: number, result: string) {
    this.entries.push({ number, result });
  }

  static clear() {
    this.entries = [];
  }

  static getAll() {
    return this.entries;
  }
}
