import {DomUtils} from '@utils/dom.utils.ts';

export class HeaderService {
    private headerElement = DomUtils.select('body > header');
    private menuButton = DomUtils.select('body > header .button.menu');
    private closeButton = DomUtils.select('body > header .button.close');
    private navElement = DomUtils.select('body > header nav');
    private navLinks = document.querySelectorAll<HTMLAnchorElement>('body > header nav a');

    public init(): void {
        this.addMenuButtonClickListener();
        this.addNavLinksClickListener();
        this.addWindowResizeObserver();
        this.addDocumentScrollListener();

        this.updateStickiness();
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

    private addNavLinksClickListener(): void {
        this.navLinks.forEach((navLink) => {
            navLink.addEventListener('click', () => {
                this.hideMobileNav();
            });
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

    private addDocumentScrollListener(): void {
        document.addEventListener('scroll', () => {
            this.updateStickiness();
        });
    }

    private updateStickiness(): void {
        if (window.scrollY > 0) {
            this.headerElement.classList.add('stuck');
        } else {
            this.headerElement.classList.remove('stuck');
        }
    }
}
