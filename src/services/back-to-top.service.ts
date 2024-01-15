import {DomUtils} from '@utils/dom.utils.ts';

export class BackToTopService {
    private readonly VISIBILITY_THRESHOLD = 100;

    private button = DomUtils.select('#back-to-top');

    public init(): void {
        this.addButtonClickListener();
        this.addDocumentScrollListener();

        this.updateButtonPosition();
    }

    private addButtonClickListener(): void {
        this.button.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }

    private addDocumentScrollListener(): void {
        document.addEventListener('scroll', () => {
            this.updateButtonPosition();
        });
    }

    private updateButtonPosition(): void {
        if (window.scrollY > this.VISIBILITY_THRESHOLD) {
            this.button.classList.remove('hidden');
        } else {
            this.button.classList.add('hidden');
        }
    }
}
