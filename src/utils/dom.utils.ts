export class DomUtils {
  public static select(selectors: string): HTMLElement {
    const result = document.querySelector(selectors);

    if (!result) {
      throw Error(`Cannot select '${selectors}'.`);
    }

    return result as HTMLElement;
  }
}
