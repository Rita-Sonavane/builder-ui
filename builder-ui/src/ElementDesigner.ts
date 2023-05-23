export abstract class ElementDesigner {
  managed: HTMLElement;

  public setManagedElement(m: HTMLElement) {
    this.managed = m;
  }

  public abstract newElementInstance(parent: HTMLElement, x: number, y: number, id_outer: number, id_inner: any ): HTMLElement;

  public abstract selection(parent: HTMLElement, x: number, y: number):HTMLElement;
}
