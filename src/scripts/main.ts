import {HeaderService} from '../services/header.service.ts';

function main(): void {
    const headerService = new HeaderService();
    headerService.init();
}

main();
