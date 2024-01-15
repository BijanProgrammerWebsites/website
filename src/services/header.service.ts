import {DomUtils} from '@utils/dom.utils.ts';

export class HeaderService {
    private menuButton = DomUtils.select('body > header .button.menu');
    private closeButton = DomUtils.select('body > header .button.close');
    private navElement = DomUtils.select('body > header nav');

    public init(): void {
        this.addMenuButtonClickListener();
        this.addHashChangeListener();
        this.addWindowResizeObserver();
    }

    private addMenuButtonClickListener(): void {
        this.menuButton.addEventListener('click', () => {
            this.showMobileNav();
        });

        this.closeButton.addEventListener('click', () => {
            this.hideMobileNav();
        });
    }

    private showMobileNav(): void {
        this.navElement.classList.remove('hidden');
        this.menuButton.classList.add('hidden');
        this.closeButton.classList.remove('hidden');
    }

    private hideMobileNav(): void {
        this.navElement.classList.add('hidden');
        this.menuButton.classList.remove('hidden');
        this.closeButton.classList.add('hidden');
    }

    private addHashChangeListener(): void {
        addEventListener('hashchange', () => {
            this.hideMobileNav();
        });
    }

    private addWindowResizeObserver(): void {
        const observer = new ResizeObserver(() => {
            if (window.innerWidth >= 1000) {
                this.hideMobileNav();
            }
        });

        observer.observe(document.body);
    }
}
