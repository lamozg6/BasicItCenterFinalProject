import * as UUID from 'uuid';

export class CryptoUtils {
  public static generateUUID(): string {
    return UUID.v4();
  }
}
