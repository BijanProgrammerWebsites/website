export class CopyService {
  private buttons = document.querySelectorAll<HTMLElement>(".button.copy");

  public init(): void {
    this.addButtonClickListeners();
  }

  private addButtonClickListeners(): void {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.dataset.content;
        if (!content) {
          return;
        }

        this.copyContent(content).then();
      });
    });
  }

  private async copyContent(content: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error("Cannot copy.", err);
    }
  }
}
